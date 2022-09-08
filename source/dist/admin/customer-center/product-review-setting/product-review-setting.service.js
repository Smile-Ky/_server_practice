"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewSettingService = void 0;
const common_1 = require("@nestjs/common");
const ReviewSetting_entity_1 = require("../../../entity/review/ReviewSetting.entity");
const ReviewSettingToMemberGroup_entity_1 = require("../../../entity/review/ReviewSettingToMemberGroup.entity");
const typeorm_1 = require("@nestjs/typeorm");
const ReviewSetting_repository_1 = require("../../../repository/review/ReviewSetting.repository");
const ReviewSettingToMemberGroup_repository_1 = require("../../../repository/review/ReviewSettingToMemberGroup.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const ReviewCommentAutoSetting_repository_1 = require("../../../repository/review/ReviewCommentAutoSetting.repository");
const ReviewCommentAutoSetting_entity_1 = require("../../../entity/review/ReviewCommentAutoSetting.entity");
let ProductReviewSettingService = class ProductReviewSettingService {
    constructor(memberGroupRepository, reviewSettingRepository, reviewSettingToMemberGroupRepository, reviewCommentAutoSettingRepository) {
        this.memberGroupRepository = memberGroupRepository;
        this.reviewSettingRepository = reviewSettingRepository;
        this.reviewSettingToMemberGroupRepository = reviewSettingToMemberGroupRepository;
        this.reviewCommentAutoSettingRepository = reviewCommentAutoSettingRepository;
    }
    async reviewSettingFind() {
        try {
            const data = (await this.reviewSettingRepository.find())[0];
            const group = await this.reviewSettingToMemberGroupRepository
                .createQueryBuilder('review_group')
                .innerJoin('member_group', 'mg', 'mg.group_id = review_group.member_group_id')
                .select([
                'review_setting_to_member_group_id as id',
                'acc_mileage',
                'review_group.member_group_id as member_group_id',
                'mg.group_name as name'
            ]);
            const member_group = await group.execute();
            return Object.assign(Object.assign({}, data), { member_group });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async reviewSettingUpdate(id, data) {
        try {
            const setting = await this.reviewSettingRepository
                .createQueryBuilder('rs')
                .select("*")
                .getCount();
            console.log(setting);
            if (setting === 0) {
                const setting = new ReviewSetting_entity_1.ReviewSettingEntity();
                setting.is_use_rating = data.is_use_rating;
                setting.is_use_write_review = data.is_use_write_review;
                setting.is_write_authority = data.is_write_authority;
                setting.is_use_review_update = data.is_use_review_update;
                setting.is_use_acc_mileage = data.is_use_acc_mileage;
                setting.is_use_review_delete = data.is_use_review_delete;
                setting.is_acc_mileage_type = data.is_acc_mileage_type;
                setting.bath_mileage = data.bath_mileage;
                setting.class_mileage_normal = data.class_mileage_normal;
                setting.class_mileage_premium = data.class_mileage_premium;
                const saveData = await this.reviewSettingRepository.save(setting);
                if (data.is_acc_mileage_type === 3) {
                    for (let i in data.member_mileage) {
                        const group = new ReviewSettingToMemberGroup_entity_1.ReviewSettingToMemberGroupEntity();
                        group.acc_mileage = data.member_mileage[i].acc_mileage;
                        group.member_group_id = await this.memberGroupRepository
                            .findOne({ group_id: data.member_mileage[i].member_group_id });
                        group.review_setting_id = saveData;
                        await this.reviewSettingToMemberGroupRepository.save(group);
                    }
                }
                return saveData;
            }
            await this.reviewSettingRepository.update({ review_setting_id: id }, {
                is_use_rating: data.is_use_rating,
                is_use_write_review: data.is_use_write_review,
                is_write_authority: data.is_write_authority,
                is_use_review_update: data.is_use_review_update,
                is_use_acc_mileage: data.is_use_acc_mileage,
                is_use_review_delete: data.is_use_review_delete,
                is_acc_mileage_type: data.is_acc_mileage_type,
                bath_mileage: data.bath_mileage,
                class_mileage_normal: data.class_mileage_normal,
                class_mileage_premium: data.class_mileage_premium
            });
            await this.reviewSettingToMemberGroupRepository
                .query(`DELETE FROM review_setting_to_member_group WHERE review_setting_id = ${id}`);
            if (data.is_acc_mileage_type === 3) {
                for (let i in data.member_mileage) {
                    const group = new ReviewSettingToMemberGroup_entity_1.ReviewSettingToMemberGroupEntity();
                    group.acc_mileage = data.member_mileage[i].acc_mileage;
                    group.member_group_id = await this.memberGroupRepository
                        .findOne({ group_id: data.member_mileage[i].member_group_id });
                    group.review_setting_id = await this.reviewSettingRepository.findOne({ review_setting_id: id });
                    await this.reviewSettingToMemberGroupRepository.save(group);
                }
            }
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async autoCommentFind() {
        try {
            return await this.reviewCommentAutoSettingRepository.find();
        }
        catch (error) {
            common_1.Logger.error('/admin/review/setting' + error);
            throw error;
        }
    }
    async autoCommentCreate(data) {
        try {
            const autoComment = new ReviewCommentAutoSetting_entity_1.ReviewCommentAutoSettingEntity();
            autoComment.star_point = Number(data.star_point);
            autoComment.auto_comment = data.auto_comment;
            autoComment.is_use = data.is_use;
            return await this.reviewCommentAutoSettingRepository.save(autoComment);
        }
        catch (error) {
            common_1.Logger.error('/admin/review/setting' + error);
            throw error;
        }
    }
    async autoCommentUpdate(id, data) {
        try {
            return await this.reviewCommentAutoSettingRepository.update({ auto_setting_id: id }, {
                star_point: Number(data.star_point),
                auto_comment: data.auto_comment,
                is_use: data.is_use,
                update_date: () => 'NOW()'
            });
        }
        catch (error) {
            common_1.Logger.error('/admin/review/setting' + error);
            throw error;
        }
    }
    async autoCommentDelete(id) {
        try {
            return await this.reviewCommentAutoSettingRepository.delete({ auto_setting_id: id });
        }
        catch (error) {
            common_1.Logger.error('/admin/review/setting' + error);
            throw error;
        }
    }
    async autoChaneIsUse(is_use) {
        try {
            return await this.reviewCommentAutoSettingRepository.update({ is_use: !is_use }, { is_use });
        }
        catch (error) {
            common_1.Logger.error('/admin/review/setting' + error);
            throw error;
        }
    }
};
ProductReviewSettingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ReviewSetting_repository_1.ReviewSettingRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ReviewCommentAutoSetting_repository_1.ReviewCommentAutoSettingRepository)),
    __metadata("design:paramtypes", [MemberGroup_repository_1.MemberGroupRepository,
        ReviewSetting_repository_1.ReviewSettingRepository,
        ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository,
        ReviewCommentAutoSetting_repository_1.ReviewCommentAutoSettingRepository])
], ProductReviewSettingService);
exports.ProductReviewSettingService = ProductReviewSettingService;
//# sourceMappingURL=product-review-setting.service.js.map