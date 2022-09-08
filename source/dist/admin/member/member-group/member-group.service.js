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
exports.MemberGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const MemberGroup_entity_1 = require("../../../entity/member/MemberGroup.entity");
let MemberGroupService = class MemberGroupService {
    constructor(memberGroupRepository) {
        this.memberGroupRepository = memberGroupRepository;
    }
    async findAll() {
        try {
            return await this.memberGroupRepository
                .createQueryBuilder('member_group')
                .select([
                'group_id',
                'group_name',
                'group_level',
                'is_default_group',
                'is_use_coupon',
                'is_use_mileage',
                'is_use_group_discount',
                'group_discount',
                'is_auto_change_group',
                'change_group_range',
                'change_group_start_price',
                'change_group_end_price'
            ])
                .orderBy('group_level', 'ASC')
                .execute();
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findSimple() {
        try {
            return await this.memberGroupRepository
                .createQueryBuilder('member_group')
                .select([
                'group_id',
                'group_name',
                'group_level',
            ])
                .orderBy('group_level', 'ASC')
                .execute();
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findId(id) {
        try {
            return await this.memberGroupRepository.findOne({ group_id: id });
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async save(data) {
        try {
            const result = new MemberGroup_entity_1.MemberGroupEntity();
            result.group_name = data.group_name;
            result.group_level = data.group_level;
            result.is_default_group = data.is_default_group;
            result.is_use_coupon = data.is_use_coupon;
            result.is_use_mileage = data.is_use_mileage;
            result.is_use_group_discount = data.is_use_group_discount;
            result.group_discount = data.group_discount;
            result.is_auto_change_group = data.is_auto_change_group;
            result.change_group_range = data.change_group_range;
            result.change_group_start_price = data.change_group_start_price;
            result.change_group_end_price = data.change_group_end_price;
            result.create_date = new Date();
            result.update_date = new Date();
            return await this.memberGroupRepository.save(result);
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(id, data) {
        try {
            await this.memberGroupRepository.update({ group_id: id }, Object.assign(Object.assign({}, data), { update_date: new Date() }));
            return;
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            await this.memberGroupRepository.delete({ group_id: id });
            return;
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
MemberGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __metadata("design:paramtypes", [MemberGroup_repository_1.MemberGroupRepository])
], MemberGroupService);
exports.MemberGroupService = MemberGroupService;
//# sourceMappingURL=member-group.service.js.map