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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginService = void 0;
const axios_1 = __importDefault(require("axios"));
require("dotenv/config");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../repository/member/Member.repository");
const Member_entity_1 = require("../../entity/member/Member.entity");
const MemberGroup_repository_1 = require("../../repository/member/MemberGroup.repository");
const MemberAddress_repository_1 = require("../../repository/member/MemberAddress.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const MemberLastVisit_repository_1 = require("../../repository/member/MemberLastVisit.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const xml_js_1 = __importDefault(require("xml-js"));
let UserLoginService = class UserLoginService {
    constructor(memberRepository, memberGroupRepository, memberAddressRepository, memberPetRepository, memberLastVisitRepository, memberMileageRepository) {
        this.memberRepository = memberRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.memberAddressRepository = memberAddressRepository;
        this.memberPetRepository = memberPetRepository;
        this.memberLastVisitRepository = memberLastVisitRepository;
        this.memberMileageRepository = memberMileageRepository;
    }
    async singUp(id) {
        var _a, _b, _c, _d;
        try {
            const member_check = await this.memberRepository.createQueryBuilder('m')
                .select('*')
                .andWhere(`member_id = :id`, { id });
            const _member_check = await member_check.execute();
            if (_member_check.length > 0) {
                if (_member_check[0].is_delete) {
                    return await this.memberRepository.update({ member_id: id }, {
                        is_delete: false,
                        delete_date: null
                    });
                }
                throw '이미 가입 된 유저입니다.';
            }
            const puppy = (await axios_1.default.get(`${process.env.PUPPY_HOST}/user/${id}`, { headers: { authorization: process.env.PUPPY_AUTHORIZATION } })).data;
            const memberData = new Member_entity_1.MemberEntity();
            memberData.member_id = id;
            memberData.is_puppy_member = true;
            memberData.member_code = puppy === null || puppy === void 0 ? void 0 : puppy.userCode;
            memberData.name = puppy === null || puppy === void 0 ? void 0 : puppy.nickname;
            memberData.birth = puppy === null || puppy === void 0 ? void 0 : puppy.birthDate;
            memberData.gender = puppy === null || puppy === void 0 ? void 0 : puppy.gender;
            memberData.phone = puppy === null || puppy === void 0 ? void 0 : puppy.phone;
            memberData.email = puppy === null || puppy === void 0 ? void 0 : puppy.email;
            memberData.is_sms = puppy === null || puppy === void 0 ? void 0 : puppy.pushDisabled;
            memberData.is_information = puppy === null || puppy === void 0 ? void 0 : puppy.pushServiceEnabled;
            memberData.member_group = await this.memberGroupRepository.findOne({ is_default_group: true });
            memberData.profile_image_url = puppy === null || puppy === void 0 ? void 0 : puppy.mainPhoto;
            const member = await this.memberRepository.save(memberData);
            const options = {
                url: process.env.KAKAO_HOST,
                method: 'GET',
                headers: {
                    'content-type': 'application/json"',
                },
                params: {
                    keyword: puppy === null || puppy === void 0 ? void 0 : puppy.address1,
                    confmKey: process.env.KAKAO_AUTHORIZATION
                }
            };
            const userAddress = JSON.parse(xml_js_1.default.xml2json((await (0, axios_1.default)(options)).data));
            await this.memberAddressRepository.createQueryBuilder('ma')
                .insert()
                .values({
                default_delivery: 1,
                delivery_name: (puppy === null || puppy === void 0 ? void 0 : puppy.nickname) || "null",
                address_user_name: (puppy === null || puppy === void 0 ? void 0 : puppy.nickname) || "null",
                phone: (puppy === null || puppy === void 0 ? void 0 : puppy.phone) || "null",
                home_tel: "null",
                address_number: ((_d = (_c = (_b = (_a = userAddress === null || userAddress === void 0 ? void 0 : userAddress.elements[0]) === null || _a === void 0 ? void 0 : _a.elements[1]) === null || _b === void 0 ? void 0 : _b.elements[5]) === null || _c === void 0 ? void 0 : _c.elements[0]) === null || _d === void 0 ? void 0 : _d.cdata) || "null",
                address: (puppy === null || puppy === void 0 ? void 0 : puppy.address1) || "null",
                member: member
            })
                .execute();
            for (let i in puppy === null || puppy === void 0 ? void 0 : puppy.pets) {
                await this.memberPetRepository.createQueryBuilder('p')
                    .insert()
                    .values({
                    member_pet_id: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].petId) || "null",
                    member_id: member,
                    name: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].name) || "null",
                    breed: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].breed) || "null",
                    gender: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].gender) || "null",
                    birth_date: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].birthDate) || "null",
                    is_neutralized: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].isNeutralized) || "null",
                    weight: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].weight) || "null",
                    pet_character: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].character) || "null",
                    image_url: puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].image,
                })
                    .execute();
            }
            await this.memberLastVisitRepository.createQueryBuilder('mlv')
                .insert()
                .values({
                member_id: member
            })
                .execute();
            await this.memberMileageRepository.createQueryBuilder('mg')
                .insert()
                .values({
                member: member,
                mileage: 0
            })
                .execute();
            return {
                result: true,
                name: member.name
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async userCodeLogin(userCode) {
        try {
            const member = (await this.memberRepository.createQueryBuilder('m')
                .select(['member_code', 'member_id', 'name'])
                .andWhere('member_code = :code', { code: userCode })
                .execute())[0];
            if ((member === null || member === void 0 ? void 0 : member.member_code) !== undefined) {
                return {
                    result: true,
                    id: member.member_id,
                    name: member.name
                };
            }
            return {
                result: false,
                id: null,
                name: null
            };
        }
        catch (error) {
            common_1.Logger.error('/user/login : ', error);
        }
    }
    async login(id) {
        try {
            const member = await this.memberRepository.createQueryBuilder('member')
                .select('count(*) as cut')
                .andWhere('member_id = :id', { id });
            const _member = Number((await member.execute())[0]['cut']);
            console.log(_member);
            if (_member === 0) {
                return {
                    result: false,
                    name: null
                };
            }
            const memberData = await this.memberRepository.createQueryBuilder('member')
                .select(['member.name as name'])
                .andWhere('member_id = :id', { id })
                .execute();
            await this.memberLastVisitRepository.update({ member_id: await this.memberRepository.findOne({ member_id: id }) }, { last_visit: (() => 'NOW()') });
            const puppy = (await axios_1.default.get(`${process.env.PUPPY_HOST}/user/${id}`, { headers: { authorization: process.env.PUPPY_AUTHORIZATION } })).data;
            await this.memberRepository.update({ member_id: id }, {
                name: puppy === null || puppy === void 0 ? void 0 : puppy.nickname,
                birth: puppy === null || puppy === void 0 ? void 0 : puppy.birthDate,
                gender: puppy === null || puppy === void 0 ? void 0 : puppy.gender,
                phone: puppy === null || puppy === void 0 ? void 0 : puppy.phone,
                email: puppy === null || puppy === void 0 ? void 0 : puppy.email,
                is_sms: puppy === null || puppy === void 0 ? void 0 : puppy.pushDisabled,
                is_information: puppy === null || puppy === void 0 ? void 0 : puppy.pushServiceEnabled,
                profile_image_url: puppy === null || puppy === void 0 ? void 0 : puppy.mainPhoto,
            });
            for (let i in puppy === null || puppy === void 0 ? void 0 : puppy.pets) {
                await this.memberPetRepository.update({ member_pet_id: puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].petId }, {
                    name: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].name) || "null",
                    breed: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].breed) || "null",
                    gender: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].gender) || "null",
                    birth_date: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].birthDate) || "null",
                    is_neutralized: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].isNeutralized) || "null",
                    weight: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].weight) || "null",
                    pet_character: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].character) || "null",
                    image_url: (puppy === null || puppy === void 0 ? void 0 : puppy.pets[i].image) || "null",
                });
            }
            return {
                result: true,
                name: memberData[0]['name']
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
UserLoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(MemberAddress_repository_1.MemberAddressRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(MemberLastVisit_repository_1.MemberLastVisitRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __metadata("design:paramtypes", [Member_repository_1.MemberRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        MemberAddress_repository_1.MemberAddressRepository,
        MemberPet_repository_1.MemberPetRepository,
        MemberLastVisit_repository_1.MemberLastVisitRepository,
        MemberMileage_repository_1.MemberMileageRepository])
], UserLoginService);
exports.UserLoginService = UserLoginService;
//# sourceMappingURL=user-login.service.js.map