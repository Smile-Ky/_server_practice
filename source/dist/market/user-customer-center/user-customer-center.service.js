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
exports.UserCustomerCenterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Notice_repository_1 = require("../../repository/main/Notice.repository");
const QueryFaq_repository_1 = require("../../repository/query/QueryFaq.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const ReviewComment_repository_1 = require("../../repository/review/ReviewComment.repository");
const ReviewImage_repository_1 = require("../../repository/review/ReviewImage.repository");
const ReviewLike_repository_1 = require("../../repository/review/ReviewLike.repository");
const ReviewSetting_repository_1 = require("../../repository/review/ReviewSetting.repository");
const ReviewSettingToMemberGroup_repository_1 = require("../../repository/review/ReviewSettingToMemberGroup.repository");
const respones_1 = require("../../common/respones");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const ReviewComment_entity_1 = require("../../entity/review/ReviewComment.entity");
const Member_repository_1 = require("../../repository/member/Member.repository");
const ReviewLike_entity_1 = require("../../entity/review/ReviewLike.entity");
let UserCustomerCenterService = class UserCustomerCenterService {
    constructor(noticeRepository, queryFaqRepository, reviewRepository, reviewCommentRepository, reviewImageRepository, memberRepository, memberPetRepository, reviewLikeRepository, reviewSettingRepository, reviewSettingToMemberGroupRepository) {
        this.noticeRepository = noticeRepository;
        this.queryFaqRepository = queryFaqRepository;
        this.reviewRepository = reviewRepository;
        this.reviewCommentRepository = reviewCommentRepository;
        this.reviewImageRepository = reviewImageRepository;
        this.memberRepository = memberRepository;
        this.memberPetRepository = memberPetRepository;
        this.reviewLikeRepository = reviewLikeRepository;
        this.reviewSettingRepository = reviewSettingRepository;
        this.reviewSettingToMemberGroupRepository = reviewSettingToMemberGroupRepository;
    }
    async getBoardList(data) {
        try {
            let pageSize = 20;
            let totalData;
            let result_data;
            if (data.bType === "notice") {
                const _notice = await this.noticeRepository.createQueryBuilder('notice')
                    .select([
                    `notice_id as bbs_ix`,
                    `title as bbs_q`,
                    `notice_doc as bbs_a`,
                    `create_date as reg_date`,
                ]);
                totalData = await _notice.getCount();
                result_data = await _notice.limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, Number(data.page), pageSize))
                    .execute();
            }
            else if (data.bType === "faq") {
                const _faq = await this.queryFaqRepository.createQueryBuilder('faq')
                    .select([
                    `query_faq_id as bbs_ix`,
                    `faq_q as bbs_q`,
                    `faq_a as bbs_a`,
                    `create_date as reg_date`,
                ]);
                totalData = await _faq.getCount();
                result_data = await _faq.limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, Number(data.page), pageSize))
                    .execute();
            }
            return {
                result: 'success',
                data: {
                    total: totalData,
                    list: result_data
                },
                paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), pageSize, {
                    page: data.page,
                    bType: data.bType
                })
            };
        }
        catch (error) {
            common_1.Logger.error('api/customer : ' + error);
            throw error;
        }
    }
    async getAllReviewList(member_id, data) {
        var _a;
        try {
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .innerJoin('member', 'm', 'm.member_id = review.member_id')
                .leftJoin('member_pet', 'mp', 'mp.member_id = m.member_id')
                .leftJoin('review_image', 'ri', 'ri.review_id = review.review_id AND ri.is_main = 1')
                .leftJoin('product_option', 'po', 'po.product_option_id = review.product_option_id')
                .leftJoin('product', 'p', 'p.product_id = po.product_id')
                .leftJoin('product_image', 'pi', 'pi.product_id = p.product_id and pi.image_mode = 0')
                .leftJoin('order_detail', 'od', 'od.order_detail_id = review.order_detail_id')
                .leftJoin('order_main', 'om', 'om.order_id = od.order_id');
            const totalData = Number((await review.select(`count(review.review_id) as cut`).execute())[0]['cut']);
            console.log(totalData);
            const result = await review
                .select([
                `review.review_id as bbs_ix`,
                `review.review_star_point as valuation_goods`,
                `review.review_title as bbs_subject`,
                `review.review_content as bbs_contents`,
                `po.product_option_id as option_id`,
                `p.product_name as pname`,
                `p.product_id as pid`,
                `om.order_id as oid`,
                `od.order_detail_id as od_ix`,
                `m.name as name`,
                `m.profile_image_url as profile_img`,
                `mp.name as petName`,
                `mp.birth_date as petBirthdate`,
                `mp.weight as petWeight`,
                `pi.image_url as pimg`,
                `(select group_concat( pod.value separator '|' ) as product_name 
             from product_option_detail as pod where pod.option_id = po.product_option_id) as option_name`,
                `(select count(*) as cut from review_like where review_like.review_id = review.review_id ) as cmtTotal`,
                `po.product_sale_price as dcprice`,
                `po.product_price as listprice`,
                `od.order_product_count as pcnt`,
                `ri.is_main `
            ])
                .limit(Number(data.max))
                .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                .execute();
            const resultData = [];
            for (let i in result) {
                const image = await this.reviewImageRepository.createQueryBuilder('rImage')
                    .select([`group_concat(rImage.image_url) as image`])
                    .andWhere('rImage.review_id = :id', { id: result[i].bbs_ix });
                resultData.push(Object.assign(Object.assign({}, result[i]), { bbs_file: (_a = ((await image.execute())[0]['image'])) === null || _a === void 0 ? void 0 : _a.split(','), anotherImgs: [] }));
            }
            return {
                result: 'success',
                data: {
                    total: totalData,
                    list: resultData
                },
                paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                    page: data.page,
                    max: data.max
                })
            };
        }
        catch (error) {
            common_1.Logger.error('api/customer : ' + error);
            throw error;
        }
    }
    async getReviewList(member_id, data) {
        var _a;
        try {
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .innerJoin('member', 'm', 'm.member_id = review.member_id')
                .leftJoin('member_pet', 'mp', 'mp.member_id = m.member_id')
                .leftJoin('review_image', 'ri', 'ri.review_id = review.review_id AND ri.is_main = 1')
                .leftJoin('product_option', 'po', 'po.product_option_id = review.product_option_id')
                .leftJoin('product', 'p', 'p.product_id = po.product_id')
                .leftJoin('product_image', 'pi', 'pi.product_id = p.product_id and pi.image_mode = 0')
                .leftJoin('order_detail', 'od', 'od.order_detail_id = review.order_detail_id')
                .leftJoin('order_main', 'om', 'om.order_id = od.order_id')
                .andWhere('p.product_id = :id', { id: data.pid });
            if (data.photo === "1") {
                review.andWhere('ri.is_main = 1');
            }
            if (data.sort === "desc") {
                review.orderBy('review.create_date', 'DESC');
            }
            else {
                review.orderBy('review.review_star_point', 'ASC');
            }
            const totalData = Number((await review.select(`count(review.review_id) as cut`).execute())[0]['cut']);
            console.log(totalData);
            const result = await review
                .select([
                `review.review_id as bbs_ix`,
                `review.review_star_point as valuation_goods`,
                `review.review_title as bbs_subject`,
                `review.review_content as bbs_contents`,
                `po.product_option_id as option_id`,
                `p.product_name as pname`,
                `p.product_id as pid`,
                `om.order_id as oid`,
                `od.order_detail_id as od_ix`,
                `m.name as name`,
                `m.profile_image_url as profile_img`,
                `mp.name as petName`,
                `mp.birth_date as petBirthdate`,
                `mp.weight as petWeight`,
                `pi.image_url as pimg`,
                `(select group_concat( pod.value separator '|' ) as product_name 
        from product_option_detail as pod where pod.option_id = po.product_option_id) as option_name`,
                `(select count(*) as cut from review_like where review_like.review_id = review.review_id ) as cmtTotal`,
                `po.product_sale_price as dcprice`,
                `po.product_price as listprice`,
                `od.order_product_count as pcnt`,
                `ri.is_main `
            ])
                .limit(Number(data.max))
                .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                .execute();
            const resultData = [];
            for (let i in result) {
                const image = await this.reviewImageRepository.createQueryBuilder('rImage')
                    .select([`group_concat(rImage.image_url) as image`])
                    .andWhere('rImage.review_id = :id', { id: result[i].bbs_ix });
                resultData.push(Object.assign(Object.assign({}, result[i]), { bbs_file: (_a = ((await image.execute())[0]['image'])) === null || _a === void 0 ? void 0 : _a.split(','), anotherImgs: [] }));
            }
            return {
                result: 'success',
                data: {
                    total: totalData,
                    list: resultData
                },
                paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                    page: data.page,
                    max: data.max
                })
            };
        }
        catch (error) {
            common_1.Logger.error('api/customer : ' + error);
            throw error;
        }
    }
    async getReviewInfo(data) {
        var _a;
        try {
            const review = await this.reviewRepository
                .createQueryBuilder('review')
                .innerJoin('member', 'm', 'm.member_id = review.member_id')
                .leftJoin('member_pet', 'mp', 'mp.member_id = m.member_id')
                .leftJoin('review_image', 'ri', 'ri.review_id = review.review_id AND ri.is_main = 1')
                .leftJoin('product_option', 'po', 'po.product_option_id = review.product_option_id')
                .leftJoin('product', 'p', 'p.product_id = po.product_id')
                .leftJoin('product_image', 'pi', 'pi.product_id = p.product_id and pi.image_mode = 0')
                .leftJoin('order_detail', 'od', 'od.order_detail_id = review.order_detail_id')
                .leftJoin('order_main', 'om', 'om.order_id = od.order_id')
                .andWhere('review.review_id = :id', { id: data.bbs_ix })
                .select([
                `review.review_star_point as valuation_goods`,
                `review.review_id as bbs_ix`,
                `review.review_title as bbs_subject`,
                `review.review_content as bbs_contents`,
                `p.product_id as pid`,
                `po.product_option_id as option_id`,
                `p.product_name as pname`,
                `om.order_id as oid`,
                `od.order_detail_id as od_ix`,
                `(select group_concat( pod.value separator '|' ) as product_name 
            from product_option_detail as pod where pod.option_id = po.product_option_id) as option_name`,
                `mp.name as petName`,
                `mp.member_pet_id as petId`,
                `mp.birth_date as petBirthdate`,
                `mp.weight as petWeight`,
                `m.name as name`,
                `m.profile_image_url as profile_img`,
                `review.create_date as reg_date`,
                `if((select EXISTS
              (select * from review_like as rl where rl.member_id = m.member_id AND rl.review_id = ${data.bbs_ix})
             as success), 'true', 'false') as likeCheck`,
                `(select count(*) as cut from review_like) as likeTotal`,
            ]);
            const anotherImgs = (_a = ((await this.reviewImageRepository.createQueryBuilder('rImage')
                .select([`group_concat(rImage.image_url) as image`])
                .andWhere('rImage.review_id = :id', { id: data.bbs_ix }).execute())[0]['image'])) === null || _a === void 0 ? void 0 : _a.split(',');
            const reviewComment = await this.reviewCommentRepository.createQueryBuilder('rComment')
                .innerJoin('member', 'm', 'm.member_id = rComment.member_id')
                .select([
                `rComment.review_comment_id as cmt_ix`,
                `rComment.member_id as bbs_ix`,
                `rComment.comment_content as cmt_contents`,
                `rComment.create_date as regdate`,
                `m.name as name`,
                `m.profile_image_url as profile_img`,
            ])
                .andWhere('rComment.review_id = :id', { id: data.bbs_ix })
                .execute();
            const reviewCommentList = [];
            for (let i in reviewComment) {
                const pet = await this.memberPetRepository.createQueryBuilder('pet')
                    .select([
                    `pet.member_pet_id as petId`,
                    `pet.name as name`,
                    `pet.breed as breed`,
                    `pet.gender as gender`,
                    `pet.birth_date as birthDate`,
                    `pet.is_neutralized as isNeutralized`,
                    `pet.weight as weight`,
                    `pet.pet_character as 'character'`,
                    `pet.member_id as 'ownerId'`,
                    `pet.image_url as 'image'`,
                ])
                    .andWhere('pet.member_id = :id', { id: reviewComment === null || reviewComment === void 0 ? void 0 : reviewComment.member_id })
                    .execute();
                reviewCommentList.push(Object.assign(Object.assign({}, (reviewComment[i])), { pet }));
            }
            return {
                result: 'success',
                info: {
                    review: Object.assign(Object.assign({}, ((await review.execute())[0])), { anotherImgs }),
                    cmt: reviewCommentList,
                    cmtCount: reviewCommentList.length
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/customer : ' + error);
            throw error;
        }
    }
    async insertReviewComment(memberId, data) {
        try {
            const rComment = new ReviewComment_entity_1.ReviewCommentEntity();
            rComment.is_admin = false;
            rComment.comment_content = data.contents;
            rComment.review_id = await this.reviewRepository.findOne({ review_id: data.bbs_ix });
            rComment.member_id = await this.memberRepository.findOne({ member_id: memberId });
            const review_comment = await this.reviewCommentRepository.save(rComment);
            const reviewComment = await this.reviewCommentRepository.createQueryBuilder('rComment')
                .innerJoin('member', 'm', 'm.member_id = rComment.member_id')
                .select([
                `rComment.review_comment_id as cmt_ix`,
                `rComment.member_id as bbs_ix`,
                `rComment.comment_content as cmt_contents`,
                `rComment.create_date as regdate`,
                `m.name as name`,
                `m.profile_image_url as profile_img`,
                `m.member_id as member_id`
            ])
                .andWhere('rComment.review_id = :id', { id: data.bbs_ix })
                .execute();
            const reviewCommentList = [];
            for (let i in reviewComment) {
                const pet = await this.memberPetRepository.createQueryBuilder('pet')
                    .select([
                    `pet.member_pet_id as petId`,
                    `pet.name as name`,
                    `pet.breed as breed`,
                    `pet.gender as gender`,
                    `pet.birth_date as birthDate`,
                    `pet.is_neutralized as isNeutralized`,
                    `pet.weight as weight`,
                    `pet.pet_character as 'character'`,
                    `pet.member_id as 'ownerId'`,
                    `pet.image_url as 'image'`,
                ])
                    .andWhere('pet.member_id = :id', { id: reviewComment === null || reviewComment === void 0 ? void 0 : reviewComment.member_id })
                    .execute();
                reviewCommentList.push(Object.assign(Object.assign({}, reviewComment[i]), { pet }));
            }
            return {
                data: {
                    result: 'success',
                    info: reviewCommentList
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/customer : ' + error);
            throw error;
        }
    }
    async updateReviewLike(memberId, data) {
        try {
            const rLike = (await this.reviewLikeRepository
                .query(`select EXISTS(select * from review_like as rl where rl.member_id = ${memberId} AND rl.review_id = ${data.bbsIx}) as success`))[0]['success'];
            if (rLike === "1") {
                const rLike = await this.reviewLikeRepository
                    .query(`delete from review_like where review_like.member_id = ${memberId} and review_like.review_id = ${data.bbsIx}`);
                return {
                    data: {
                        result: "success",
                        likeCheck: "del"
                    }
                };
            }
            const newLike = new ReviewLike_entity_1.ReviewLikeEntity();
            newLike.member_id = await this.memberRepository.findOne({ member_id: memberId });
            newLike.review_id = await this.reviewRepository.findOne({ review_id: data.bbsIx });
            await this.reviewLikeRepository.save(newLike);
            return {
                data: {
                    result: "success",
                    likeCheck: "add"
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/customer : ' + error);
            throw error;
        }
    }
};
UserCustomerCenterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Notice_repository_1.NoticeRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(QueryFaq_repository_1.QueryFaqRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(Review_repository_1.ReviewRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ReviewComment_repository_1.ReviewCommentRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ReviewImage_repository_1.ReviewImageRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ReviewLike_repository_1.ReviewLikeRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ReviewSetting_repository_1.ReviewSettingRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository)),
    __metadata("design:paramtypes", [Notice_repository_1.NoticeRepository,
        QueryFaq_repository_1.QueryFaqRepository,
        Review_repository_1.ReviewRepository,
        ReviewComment_repository_1.ReviewCommentRepository,
        ReviewImage_repository_1.ReviewImageRepository,
        Member_repository_1.MemberRepository,
        MemberPet_repository_1.MemberPetRepository,
        ReviewLike_repository_1.ReviewLikeRepository,
        ReviewSetting_repository_1.ReviewSettingRepository,
        ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository])
], UserCustomerCenterService);
exports.UserCustomerCenterService = UserCustomerCenterService;
//# sourceMappingURL=user-customer-center.service.js.map