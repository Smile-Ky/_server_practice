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
exports.MemberMangerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const uuid_1 = require("uuid");
const respones_1 = require("../../../common/respones");
const Member_entity_1 = require("../../../entity/member/Member.entity");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const MemberAddress_entity_1 = require("../../../entity/member/MemberAddress.entity");
const MemberAddress_repository_1 = require("../../../repository/member/MemberAddress.repository");
const MemberLastVisit_repository_1 = require("../../../repository/member/MemberLastVisit.repository");
const MemberLastVisit_entity_1 = require("../../../entity/member/MemberLastVisit.entity");
const MemberMileage_entity_1 = require("../../../entity/member/MemberMileage.entity");
const MemberMileage_repository_1 = require("../../../repository/member/MemberMileage.repository");
const MemberPet_repository_1 = require("../../../repository/member/MemberPet.repository");
const MemberPet_entity_1 = require("../../../entity/member/MemberPet.entity");
let MemberMangerService = class MemberMangerService {
    constructor(memberRepository, memberMileageRepository, memberGroupRepository, memberAddressRepository, memberLastVisitRepository, memberPetRepository) {
        this.memberRepository = memberRepository;
        this.memberMileageRepository = memberMileageRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.memberAddressRepository = memberAddressRepository;
        this.memberLastVisitRepository = memberLastVisitRepository;
        this.memberPetRepository = memberPetRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .select([
                'member.member_id as member_id',
                'group_name as member_group',
                'name',
                'member.member_code as user_code',
                'email',
                'member.phone',
                'last_visit as last_visit_date',
                'mileage'
            ]).innerJoin('member.member_group', 'member_group.member')
                .innerJoin('member.member_last_visit', 'member_last_visit.member_id')
                .innerJoin('member.member_mileage', 'member_mileage.member')
                .andWhere('member.is_delete = false');
            const totalData = await result.getCount();
            return {
                data: await result.limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findById(id) {
        try {
            const memberResult = await this.memberRepository
                .createQueryBuilder('member')
                .select([
                'member.member_id as member_id',
                'member.create_date as create_date',
                'last_visit as last_visit_date',
                'name',
                'member_code',
                'password',
                'group_id',
                'group_name',
                'birth',
                `gender`,
                'phone',
                'email',
                `is_sms`,
                `is_information`
            ])
                .innerJoin('member.member_group', 'member_group.member')
                .innerJoin('member.member_last_visit', 'member_last_visit.member_id')
                .where('member.member_id = :id', { id })
                .andWhere('member.is_delete = false')
                .execute();
            const addressResult = await this.memberAddressRepository
                .createQueryBuilder('member_address')
                .innerJoin('member', 'm', 'm.member_id = member_address.member_id')
                .select(['address_id', 'address_number', 'address', 'address_detail'])
                .where('member_address.member_id = :id', { id })
                .andWhere('m.is_delete = false')
                .execute();
            const data = Object.assign({}, memberResult);
            return Object.assign(Object.assign({}, data["0"]), { member_address: addressResult });
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async find(data, page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder('member')
                .select([
                'member.member_id as member_id',
                'group_name as member_group',
                'name',
                'member.member_code as user_code',
                'email',
                'member.phone',
                'last_visit as last_visit_date',
                'mileage'
            ])
                .innerJoin('member.member_group', 'member_group.member')
                .innerJoin('member.member_last_visit', 'member_last_visit.member_id')
                .innerJoin('member.member_mileage', 'member_mileage.member')
                .andWhere('member.is_delete = false');
            switch (data.find_type) {
                case "0":
                    result.andWhere('member.name like :text', { text: `%${data.find_text}%` });
                    break;
                case "1":
                    result.andWhere('member.member_id like :text', { text: `%${data.find_text}%` });
                    break;
                case "2":
                    result.andWhere('member.phone like :text', { text: `%${data.find_text}%` });
                    break;
                case "3":
                    result.andWhere('member.email like :text', { text: `%${data.find_text}%` });
                    break;
            }
            if (data.user_group_id !== "") {
                result.andWhere('member.member_group_id = :group_id', { group_id: data.user_group_id });
            }
            switch (data.find_date_type) {
                case "0":
                    result.andWhere('DATE(member.create_date) BETWEEN :start AND :end', {
                        start: new Date(data.start_date),
                        end: new Date(data.end_date)
                    });
                    break;
                case "1":
                    result.andWhere('DATE(last_visit) BETWEEN :start AND :end', {
                        start: new Date(data.start_date),
                        end: new Date(data.end_date)
                    });
                    break;
            }
            const totalData = await result.getCount();
            return {
                data: await result.limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async create(data) {
        try {
            console.log(data.birth);
            const visit = new MemberLastVisit_entity_1.MemberLastVisitEntity();
            visit.last_visit = new Date();
            const mileage = new MemberMileage_entity_1.MemberMileageEntity();
            mileage.mileage = 0;
            const save = new Member_entity_1.MemberEntity();
            save.is_puppy_member = false;
            save.member_code = (0, uuid_1.v4)();
            save.password = data.password;
            save.name = data.name;
            save.birth = data.birth;
            save.gender = data.gender;
            save.phone = data.phone;
            save.email = data.email;
            save.is_sms = data.is_sms;
            save.profile_image_url = data.profile_image_url;
            save.member_group = await this.memberGroupRepository.findOne({ is_default_group: 1 });
            save.member_last_visit = await this.memberLastVisitRepository.save(visit);
            save.member_mileage = await this.memberMileageRepository.save(mileage);
            const member_data = await this.memberRepository.save(save);
            const address_save = new MemberAddress_entity_1.MemberAddressEntity();
            address_save.member = member_data;
            data.member_address.map(async (item) => {
                address_save.address_number = item.address_number;
                address_save.address = item.address;
                address_save.address_detail = item.address_detail;
                address_save.address_user_name = data.name;
                address_save.phone = data.phone;
                await this.memberAddressRepository.save(address_save);
            });
            const memberPetSave = new MemberPet_entity_1.MemberPetEntity();
            memberPetSave.member_id = member_data;
            memberPetSave.name = data.member_pet.name;
            memberPetSave.breed = data.member_pet.breed;
            memberPetSave.gender = data.member_pet.gender;
            memberPetSave.birth_date = data.member_pet.birth_date;
            memberPetSave.is_neutralized = data.member_pet.is_neutralized;
            memberPetSave.weight = data.member_pet.weight;
            memberPetSave.pet_character = data.member_pet.character;
            memberPetSave.image_url = data.member_pet.image_url;
            await this.memberPetRepository.save(memberPetSave);
            return member_data;
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(userId, data) {
        try {
            data.member_address.map(async (item) => {
                await this.memberAddressRepository.update({ address_id: item.address_id }, {
                    address_number: item.address_number,
                    address: item.address,
                    address_detail: item.address_detail
                });
            });
            await this.memberRepository.update({ member_id: userId }, {
                name: data.name,
                password: data.password,
                member_group: await this.memberGroupRepository.findOne({ group_id: data.group_id }),
                birth: data.birth,
                gender: data.gender,
                phone: data.phone,
                email: data.email,
                is_sms: data.is_sms,
                is_information: data.is_information,
                update_date: () => 'NOW()'
            });
            return;
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async updatePet(id, data) {
        try {
            await this.memberPetRepository.update({ member_pet_id: id }, Object.assign(Object.assign({}, data), { update_date: () => 'NOW()' }));
            return;
        }
        catch (error) {
            common_1.Logger.error('admin/member' + error);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            await this.memberRepository.update({ member_id: id }, {
                is_delete: true,
                delete_date: () => 'NOW()'
            });
            return;
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
MemberMangerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(MemberAddress_repository_1.MemberAddressRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(MemberLastVisit_repository_1.MemberLastVisitRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __metadata("design:paramtypes", [Member_repository_1.MemberRepository,
        MemberMileage_repository_1.MemberMileageRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        MemberAddress_repository_1.MemberAddressRepository,
        MemberLastVisit_repository_1.MemberLastVisitRepository,
        MemberPet_repository_1.MemberPetRepository])
], MemberMangerService);
exports.MemberMangerService = MemberMangerService;
//# sourceMappingURL=member-manger.service.js.map