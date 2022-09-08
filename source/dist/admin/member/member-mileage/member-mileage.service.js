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
exports.MemberMileageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const MemberMileage_repository_1 = require("../../../repository/member/MemberMileage.repository");
const MileageSetting_repository_1 = require("../../../repository/mileage/MileageSetting.repository");
const MileageSettingGroupPayment_entity_1 = require("../../../entity/mileage/MileageSettingGroupPayment.entity");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const MileageSetting_entity_1 = require("../../../entity/mileage/MileageSetting.entity");
const MileageSettingGroupPayment_repository_1 = require("../../../repository/mileage/MileageSettingGroupPayment.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const MemberMileageLog_repository_1 = require("../../../repository/member/MemberMileageLog.repository");
const respones_1 = require("../../../common/respones");
const MemberMileageLog_entity_1 = require("../../../entity/member/MemberMileageLog.entity");
let MemberMileageService = class MemberMileageService {
    constructor(memberRepository, memberMileageLogRepository, memberMileageRepository, mileageSettingRepository, mileageSettingGroupPaymentRepository, memberGroupRepository) {
        this.memberRepository = memberRepository;
        this.memberMileageLogRepository = memberMileageLogRepository;
        this.memberMileageRepository = memberMileageRepository;
        this.mileageSettingRepository = mileageSettingRepository;
        this.mileageSettingGroupPaymentRepository = mileageSettingGroupPaymentRepository;
        this.memberGroupRepository = memberGroupRepository;
    }
    async mileageLogFindAll(page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_mileage_log', "mLog", 'member.member_id = mLog.member')
                .innerJoin('member_group', 'mg', 'member.member_group = mg.group_id');
            const totalData = (await result.select('COUNT(*) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'mLog.member_mileage_log_id',
                'order_detail_id as order_id',
                'name as member_name',
                'member.member_id as member_id',
                'group_name as member_group',
                'mileage_description',
                'mileage_payment',
                `IF(mileage_payment_use_state, '적립완료(+)', '사용(-)') as mileage_payment_state`,
                'mLog.create_date as mileage_payment_create_date'
            ]);
            return {
                data: await result
                    .orderBy('mLog.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageLogFind(data, page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_mileage_log', "mLog", 'member.member_id = mLog.member')
                .innerJoin('member_group', 'mg', 'member.member_group = mg.group_id');
            switch (data.mileage_payment_state) {
                case "1":
                    result.andWhere('mLog.mileage_payment_use_state = 1');
                    break;
                case "2":
                    result.andWhere('mLog.mileage_payment_use_state = 0');
                    break;
            }
            if (data.range_end_date !== "" && data.range_end_date !== "") {
                result.andWhere('mLog.create_date BETWEEN :start AND :end', {
                    start: new Date(data.range_start_date),
                    end: new Date(data.range_end_date)
                });
            }
            switch (data.find_type) {
                case "0":
                    result.andWhere('name like :text', { text: `%${data.find_text}%` });
                    break;
                case "1":
                    result.andWhere('order_id like :text', { text: `%${data.find_text}%` });
                    break;
                case "2":
                    result.andWhere('member.member_id like :text', { text: `%${data.find_text}%` });
                    break;
                case "3":
                    result.andWhere('mileage_description like :text', { text: `%${data.find_text}%` });
                    break;
            }
            const totalData = (await result.select('COUNT(*) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'mLog.member_mileage_log_id',
                'order_detail_id as order_id',
                'name as member_name',
                'member.member_id as member_id',
                'group_name as member_group',
                'mileage_description',
                'mileage_payment',
                `IF(mileage_payment_use_state, '적립완료(+)', '사용(-)') as mileage_payment_state`,
                'mLog.create_date as mileage_payment_create_date'
            ]);
            return {
                data: await result
                    .orderBy('mLog.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageLogMemberFindAll(memberId, page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_mileage_log', "mLog", 'member.member_id = mLog.member')
                .innerJoin('member_group', 'mg', 'member.member_group = mg.group_id');
            result.andWhere('member.member_id = :id', { id: memberId });
            const totalData = (await result.select('COUNT(*) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'mLog.member_mileage_log_id',
                'mLog.create_date as mileage_payment_create_date',
                'name as member_name',
                'mileage_description',
                'mileage_payment',
                `IF(mileage_payment_use_state, '적립완료(+)', '사용(-)') as mileage_payment_state`,
                'order_detail_id as order_id',
            ]);
            return {
                data: await result
                    .orderBy('mLog.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageLogMemberFind(memberId, data, page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .innerJoin('member_mileage_log', "mLog", 'member.member_id = mLog.member')
                .innerJoin('member_group', 'mg', 'member.member_group = mg.group_id');
            result.andWhere('member.member_id = :id', { id: memberId });
            switch (data.mileage_payment_state_is_use) {
                case "0":
                    result.andWhere('mLog.mileage_payment_use_state = 0');
                    break;
                case "1":
                    result.andWhere('mLog.mileage_payment_use_state = 1');
                    break;
            }
            if (data.mileage_description !== "") {
                result.andWhere('mileage_description like :text', { text: `%${data.mileage_description}%` });
            }
            if (data.mileage_payment !== "") {
                result.andWhere('mileage_payment = :mileage', { mileage: Number(data.mileage_payment) });
            }
            const totalData = (await result.select('COUNT(*) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'mLog.member_mileage_log_id',
                'mLog.create_date as mileage_payment_create_date',
                'name as member_name',
                'mileage_description',
                'mileage_payment',
                `IF(mileage_payment_use_state, '적립완료(+)', '사용(-)') as mileage_payment_state`,
                'order_detail_id as order_id',
            ]);
            return {
                data: await result
                    .orderBy('mLog.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageLogCreate(data) {
        try {
            const saveLog = new MemberMileageLog_entity_1.MemberMileageLogEntity();
            saveLog.order_detail_id = data.order_id;
            saveLog.member = await this.memberRepository.findOne({ member_id: data.member_id });
            saveLog.mileage_description = data.mileage_description;
            saveLog.mileage_payment = Number(data.mileage_payment);
            saveLog.mileage_payment_use_state = data.mileage_payment_use_state;
            saveLog.create_date = new Date();
            saveLog.update_date = new Date();
            return await this.memberMileageLogRepository.save(saveLog);
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageSetting_find() {
        try {
            const setting = await this.mileageSettingRepository.find();
            if (setting.length === 0) {
                return { data: '저장 된 셋팅이 없습니다.' };
            }
            const mileage_group = await this.mileageSettingGroupPaymentRepository
                .createQueryBuilder('mileage_setting_group_payment')
                .select([
                'mileage_group_payment_id',
                'member_group_id as group_id',
                'group_name',
                'payment_rate'
            ])
                .leftJoin('mileage_setting_group_payment.member_group', 'member_group.mileage_setting_group_payment')
                .andWhere('mileage_setting = :id', { id: setting[0].mileage_setting_id })
                .execute();
            return Object.assign(Object.assign({}, setting), { mileage_setting_group_payment: mileage_group });
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageSetting_create(data) {
        try {
            if ((await this.mileageSettingRepository.find()).length !== 0) {
                throw '이미 저장 된 마일리지 정보가 있습니다.';
            }
            const result = new MileageSetting_entity_1.MileageSettingEntity();
            result.is_mileage_use = data.is_mileage_use;
            result.mileage_name = data.mileage_name;
            result.mileage_unit = data.mileage_unit;
            result.is_use_purchase_date = data.is_use_purchase_date;
            result.mileage_use_unit = data.mileage_use_unit;
            result.mileage_limit = data.mileage_limit;
            result.is_delivery_charge = data.is_delivery_charge;
            result.purchase_amount_limit = data.purchase_amount_limit;
            result.mileage_max_use_limit_type = Number(data.mileage_max_use_limit_type);
            result.mileage_max_use_limit_text = data.mileage_max_use_limit_text;
            result.update_date = new Date();
            const save = await this.mileageSettingRepository.save(result);
            for (let i in data.mileage_setting_group_payment) {
                const group_data = await this.memberGroupRepository.findOne({ group_id: data.mileage_setting_group_payment[i].group_id });
                const groupSetting = new MileageSettingGroupPayment_entity_1.MileageSettingGroupPaymentEntity();
                groupSetting.mileage_setting = result;
                groupSetting.member_group = group_data;
                groupSetting.payment_rate = data.mileage_setting_group_payment[i].payment_rate;
                console.log(groupSetting);
                await this.mileageSettingGroupPaymentRepository.save(groupSetting);
            }
            return save;
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error;
        }
    }
    async mileageSetting_update(data) {
        try {
            const setting = (await this.mileageSettingRepository.find())[0];
            await this.mileageSettingGroupPaymentRepository
                .query(`DELETE FROM mileage_setting_group_payment WHERE mileage_setting = ${setting.mileage_setting_id}`);
            for (let i in data.mileage_setting_group_payment) {
                const group_data = await this.memberGroupRepository.findOne({ group_id: data.mileage_setting_group_payment[i].group_id });
                const groupSetting = new MileageSettingGroupPayment_entity_1.MileageSettingGroupPaymentEntity();
                groupSetting.mileage_setting = setting;
                groupSetting.member_group = group_data;
                groupSetting.payment_rate = data.mileage_setting_group_payment[i].payment_rate;
                console.log(groupSetting);
                await this.mileageSettingGroupPaymentRepository.save(groupSetting);
            }
            await this.mileageSettingRepository.update({ mileage_setting_id: setting.mileage_setting_id }, {
                is_mileage_use: data.is_mileage_use,
                mileage_name: data.mileage_name,
                mileage_unit: data.mileage_unit,
                is_use_purchase_date: data.is_use_purchase_date,
                mileage_use_unit: data.mileage_use_unit,
                mileage_limit: data.mileage_limit,
                is_delivery_charge: data.is_delivery_charge,
                purchase_amount_limit: data.purchase_amount_limit,
                mileage_max_use_limit_type: Number(data.mileage_max_use_limit_type),
                mileage_max_use_limit_text: data.mileage_max_use_limit_text,
                update_date: new Date()
            });
            return { mileage_setting_id: setting.mileage_setting_id };
        }
        catch (error) {
            common_1.Logger.error(`admin/mileage ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
MemberMileageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(MemberMileageLog_repository_1.MemberMileageLogRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(MileageSetting_repository_1.MileageSettingRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(MileageSettingGroupPayment_repository_1.MileageSettingGroupPaymentRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __metadata("design:paramtypes", [Member_repository_1.MemberRepository,
        MemberMileageLog_repository_1.MemberMileageLogRepository,
        MemberMileage_repository_1.MemberMileageRepository,
        MileageSetting_repository_1.MileageSettingRepository,
        MileageSettingGroupPayment_repository_1.MileageSettingGroupPaymentRepository,
        MemberGroup_repository_1.MemberGroupRepository])
], MemberMileageService);
exports.MemberMileageService = MemberMileageService;
//# sourceMappingURL=member-mileage.service.js.map