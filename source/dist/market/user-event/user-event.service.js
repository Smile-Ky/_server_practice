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
exports.UserEventService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PlanEvent_repository_1 = require("../../repository/plan/PlanEvent.repository");
const PlanEventComment_repository_1 = require("../../repository/plan/PlanEventComment.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const PlanEventComment_entity_1 = require("../../entity/plan/PlanEventComment.entity");
const respones_1 = require("../../common/respones");
let UserEventService = class UserEventService {
    constructor(planEventRepository, planEventCommentRepository, memberRepository, memberPetRepository) {
        this.planEventRepository = planEventRepository;
        this.planEventCommentRepository = planEventCommentRepository;
        this.memberRepository = memberRepository;
        this.memberPetRepository = memberPetRepository;
    }
    async getCommentList(member_id, data) {
        try {
            const comment = await this.planEventCommentRepository.createQueryBuilder('pc')
                .innerJoin('member', 'm', 'm.member_id = pc.member_id')
                .innerJoin('member_pet', 'mp', 'mp.member_id = m.member_id');
            const totalData = (await comment.select(['count(*) as count']).execute())[0]['count'];
            comment.select([
                `if(pc.member_id = ${member_id}, 'true', 'false') as mine`,
                `pc.plan_event_comment_id as ec_ix`,
                `pc.comment as comment`,
                `pc.create_date as comment_regdate`,
                `m.member_id as member_id`,
                'm.profile_image_url as profile_img',
                'm.name as member_name',
                `mp.member_pet_id as petId`,
                `mp.name as name`,
                `mp.breed as breed`,
                `mp.gender as gender`,
                `mp.birth_date as birthDate`,
                `mp.is_neutralized as isNeutralized`,
                `mp.weight as weight`,
                `mp.pet_character as 'character'`,
                `mp.member_id as ownerId`,
                `mp.image_url as image`
            ])
                .andWhere('pc.plan_event_id = :id', { id: data.event_ix })
                .groupBy('pc.member_id');
            const _comment = await comment.limit(Number(data.max))
                .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                .execute();
            const buffer = [];
            for (let i = 0; i < _comment.length; i++) {
                buffer.push({
                    mine: _comment[i].mine,
                    ec_ix: _comment[i].ec_ix,
                    comment: _comment[i].comment,
                    comment_regdate: _comment[i].comment_regdate,
                    name: _comment[i].member_name,
                    memberInfo: {
                        member_id: _comment[i].member_id,
                        profile_img: _comment[i].profile_img,
                        pets: [
                            {
                                petId: _comment[i].petId,
                                name: _comment[i].name,
                                breed: _comment[i].breed,
                                gender: _comment[i].gender,
                                birthDate: _comment[i].birthDate,
                                isNeutralized: _comment[i].isNeutralized,
                                weight: _comment[i].weight,
                                character: _comment[i].character,
                                ownerId: _comment[i].ownerId,
                                image: _comment[i].image
                            }
                        ]
                    }
                });
            }
            return {
                code: "",
                msg: "",
                data: buffer,
                paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                    page: data.page,
                    event_ix: data.event_ix
                })
            };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async addCommentByUser(userId, data) {
        try {
            const find = await this.planEventCommentRepository.createQueryBuilder('pc')
                .select('count(*) as cut')
                .andWhere('pc.member_id = :userId', { userId });
            if ((await find.execute())[0]['cut'] > 0) {
                throw '이미지 참여한 사용자입니다.';
            }
            const comment = new PlanEventComment_entity_1.PlanEventCommentEntity();
            comment.comment = data.comment;
            comment.member_id = await this.memberRepository.findOne({ member_id: userId });
            comment.plan_event_id = await this.planEventRepository.findOne({ plan_event_id: data.event_ix });
            await this.planEventCommentRepository.save(comment);
            return { data: { result: '성공' } };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async commentModify(userId, data) {
        var _a;
        try {
            const check = await this.planEventCommentRepository.createQueryBuilder('pc')
                .select('*')
                .andWhere('plan_event_comment_id = :id', { id: data.ec_ix });
            const check_data = await check.execute();
            if (((_a = check_data[0]) === null || _a === void 0 ? void 0 : _a.member_id) !== userId) {
                throw "작성자가 아닙니다.";
            }
            await this.planEventCommentRepository.update({ plan_event_comment_id: data.ec_ix }, {
                comment: data.comment,
                update_date: (() => 'NOW()')
            });
            return { data: { result: '성공' } };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async delComment(userId, data) {
        var _a;
        try {
            const check = await this.planEventCommentRepository.createQueryBuilder('pc')
                .select('*')
                .andWhere('plan_event_comment_id = :id', { id: data.ec_ix });
            const check_data = await check.execute();
            if (((_a = check_data[0]) === null || _a === void 0 ? void 0 : _a.member_id) !== userId) {
                throw "작성자가 아닙니다.";
            }
            const deleteComment = await this.planEventCommentRepository
                .delete({ plan_event_comment_id: data.ec_ix });
            return { data: { result: '성공' } };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
};
UserEventService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PlanEvent_repository_1.PlanEventRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(PlanEventComment_repository_1.PlanEventCommentRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __metadata("design:paramtypes", [PlanEvent_repository_1.PlanEventRepository,
        PlanEventComment_repository_1.PlanEventCommentRepository,
        Member_repository_1.MemberRepository,
        MemberPet_repository_1.MemberPetRepository])
], UserEventService);
exports.UserEventService = UserEventService;
//# sourceMappingURL=user-event.service.js.map