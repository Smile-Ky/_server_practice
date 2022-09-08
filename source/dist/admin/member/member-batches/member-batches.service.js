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
exports.MemberBatchesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const MemberMileage_repository_1 = require("../../../repository/member/MemberMileage.repository");
const MemberMileageLog_repository_1 = require("../../../repository/member/MemberMileageLog.repository");
const respones_1 = require("../../../common/respones");
const MemberMileageLog_entity_1 = require("../../../entity/member/MemberMileageLog.entity");
let MemberBatchesService = class MemberBatchesService {
    constructor(memberRepository, memberGroupRepository, memberMileageRepository, memberMileageLogRepository) {
        this.memberRepository = memberRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.memberMileageRepository = memberMileageRepository;
        this.memberMileageLogRepository = memberMileageLogRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_group', 'mg', 'member.member_group_id = mg.group_id')
                .innerJoin('member_last_visit', 'mLast', 'member.member_id = mLast.member_id');
            const totalData = (await result.select('COUNT(*) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'member.member_id as member_id',
                'member.create_date',
                'last_visit',
                'mg.group_id as user_group_id',
                'mg.group_name as user_group_name',
                'member.member_id as user_id',
                'name as user_name',
                'phone as user_phone',
                'email as user_email',
                'is_sms',
                'is_information'
            ]);
            return {
                data: await result
                    .orderBy('member.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/admin/member/batches : ${error}`);
            throw error;
        }
    }
    async find(find, page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_group', 'mg', 'member.member_group_id = mg.group_id')
                .innerJoin('member_last_visit', 'mLast', 'member.member_id = mLast.member_id');
            if (find.user_group.length !== 0) {
                result.andWhere('mg.group_id in (:id)', { id: find.user_group });
            }
            if (find.is_sms.length !== 0) {
                result.andWhere('member.is_sms in (:sms)', { sms: find.is_sms });
            }
            if (find.is_email.length !== 0) {
                result.andWhere('member.is_information in (:is_information)', { is_information: find.is_email });
            }
            if (find.start_date !== "" && find.end_date !== "") {
                result.andWhere('DATE(member.create_date) BETWEEN :start AND :end', {
                    start: new Date(find.start_date),
                    end: new Date(find.end_date)
                });
            }
            switch (find.find_type) {
                case "0":
                    result.andWhere('member.name like :text', { text: `%${find.find_text}%` });
                    break;
                case "1":
                    result.andWhere('member.member_id like :text', { text: `%${find.find_text}%` });
                    break;
                case "2":
                    result.andWhere('member.phone like :text', { text: `%${find.find_text}%` });
                    break;
            }
            const totalData = (await result.select('COUNT(*) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'member.member_id as member_id',
                'member.create_date',
                'last_visit',
                'mg.group_id as user_group_id',
                'mg.group_name as user_group_name',
                'member.member_id as user_id',
                'name as user_name',
                'phone as user_phone',
                'email as user_email',
                'is_sms',
                'is_information'
            ]);
            return {
                data: await result
                    .orderBy('member.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error('/admin/member/batches : ', error);
            throw error;
        }
    }
    async groupChange(data) {
        try {
            const group = await this.memberGroupRepository.findOne({ group_id: data.group_id });
            data.user_list.forEach((item, index) => {
                this.memberRepository.update({ member_id: item }, { member_group: group });
            });
            return;
        }
        catch (error) {
            common_1.Logger.error('/admin/member/batches : ', error);
            throw error;
        }
    }
    async MileageChange(data) {
        try {
            for (const item of data.user_list) {
                const member = await this.memberRepository.findOne({ member_id: item });
                const memberMileage = await this.memberMileageRepository.findOne({ member: member });
                let state = -1;
                switch (data.mileage_payment_state) {
                    case "0":
                        const mileage = Number(memberMileage.mileage) - Number(data.mileage_price);
                        if (mileage > 0) {
                            state = Number(memberMileage.mileage) - Number(data.mileage_price);
                            break;
                        }
                        state = 0;
                        break;
                    case "1":
                        state = Number(memberMileage.mileage) + Number(data.mileage_price);
                        break;
                }
                if (state === -1) {
                    throw '마일리지 적립 상태를 확안하세요';
                }
                else {
                    await this.memberMileageRepository.update({ member_mileage_id: item }, { mileage: state });
                }
                const mLog = new MemberMileageLog_entity_1.MemberMileageLogEntity();
                mLog.member = member;
                mLog.mileage_description = data.mileage_description;
                mLog.mileage_payment = Number(data.mileage_price);
                mLog.mileage_payment_use_state = Boolean(data.mileage_payment_state);
                await this.memberMileageLogRepository.save(mLog);
            }
        }
        catch (error) {
            common_1.Logger.error('/admin/member/batches : ', error);
            throw error;
        }
    }
};
MemberBatchesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(MemberMileageLog_repository_1.MemberMileageLogRepository)),
    __metadata("design:paramtypes", [Member_repository_1.MemberRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        MemberMileage_repository_1.MemberMileageRepository,
        MemberMileageLog_repository_1.MemberMileageLogRepository])
], MemberBatchesService);
exports.MemberBatchesService = MemberBatchesService;
//# sourceMappingURL=member-batches.service.js.map