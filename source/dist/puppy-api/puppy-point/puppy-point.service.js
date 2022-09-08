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
exports.PuppyPointService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const MemberMileageLog_repository_1 = require("../../repository/member/MemberMileageLog.repository");
const Coupon_repository_1 = require("../../repository/coupon/Coupon.repository");
const CouponToMemberGroup_repository_1 = require("../../repository/coupon/CouponToMemberGroup.repository");
const CouponToMember_repository_1 = require("../../repository/coupon/CouponToMember.repository");
const CouponToProductClass_repository_1 = require("../../repository/coupon/CouponToProductClass.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const CouponToProduct_repository_1 = require("../../repository/coupon/CouponToProduct.repository");
let PuppyPointService = class PuppyPointService {
    constructor(memberRepository, memberMileageRepository, memberMileageLogRepository, couponRepository, couponToMemberGroupRepository, couponToMemberRepository, couponToProductClassRepository, productClassRepository, couponToProductRepository) {
        this.memberRepository = memberRepository;
        this.memberMileageRepository = memberMileageRepository;
        this.memberMileageLogRepository = memberMileageLogRepository;
        this.couponRepository = couponRepository;
        this.couponToMemberGroupRepository = couponToMemberGroupRepository;
        this.couponToMemberRepository = couponToMemberRepository;
        this.couponToProductClassRepository = couponToProductClassRepository;
        this.productClassRepository = productClassRepository;
        this.couponToProductRepository = couponToProductRepository;
    }
    async postMakePoint(data) {
        try {
            if (data.point === 0 || data.message === "" || data.uid === "" || data.state === null) {
                throw { code: "103", result: "validate error" };
            }
            const member = await this.memberRepository
                .createQueryBuilder('m')
                .andWhere('m.member_id = :memberid', { memberid: data.uid })
                .getCount();
            if (member === 0) {
                throw { code: "104", result: "wrong uid" };
            }
            const last_mileage = (await this.memberMileageRepository
                .createQueryBuilder('mm')
                .select([`mileage as mileage`])
                .andWhere('mm.member_id= :mid', { mid: data.uid })
                .execute())[0]['mileage'];
            await this.memberMileageRepository.createQueryBuilder().update().set({
                mileage: data.state === 1 ? Number(last_mileage) + data.point : Number(last_mileage) - data.point
            }).where('member_id= :mid', { mid: data.uid }).execute();
            await this.memberMileageLogRepository.createQueryBuilder().insert().values({
                member: await this.memberRepository.findOne({ member_id: data.uid }),
                create_date: () => 'NOW()',
                mileage_payment_use_state: data.state === 1,
                mileage_payment: data.point,
                mileage_description: data.message,
            }).execute();
            const after_last_mileage = (await this.memberMileageRepository
                .createQueryBuilder('mm')
                .select([`mileage as mileage`])
                .andWhere('mm.member_id= :mid', { mid: data.uid })
                .execute())[0]['mileage'];
            return {
                code: "200",
                result: "succ",
                total: String(after_last_mileage)
            };
        }
        catch (error) {
            common_1.Logger.error('api/berry : ' + error);
            throw error;
        }
    }
    async postGetUserPoint(data) {
        try {
            if (data.uid === "") {
                throw { code: "103", result: "validate error" };
            }
            const member = await this.memberRepository
                .createQueryBuilder('m')
                .andWhere('m.member_id = :memberid', { memberid: data.uid })
                .getCount();
            if (member === 0) {
                throw { code: "104", result: "wrong uid" };
            }
            const after_last_mileage = (await this.memberMileageRepository
                .createQueryBuilder('mm')
                .select([`mileage as mileage`])
                .andWhere('mm.member_id= :mid', { mid: data.uid })
                .execute())[0]['mileage'];
            return {
                code: "200",
                result: "succ",
                total: String(after_last_mileage)
            };
        }
        catch (error) {
            common_1.Logger.error('api/berry : ' + error);
            throw error;
        }
    }
    async getCouponList() {
        try {
            const coupon_all = await this.couponRepository
                .createQueryBuilder('c')
                .select([
                `c.coupon_name as name`,
                `c.coupon_number as code`
            ])
                .andWhere('NOW() BETWEEN c.issued_range_start AND c.issued_range_end')
                .andWhere('c.issued_user_class = 0')
                .andWhere('c.delete_yn = 0')
                .execute();
            const coupon_group = await this.couponRepository
                .createQueryBuilder('c')
                .select([
                `c.coupon_name as name`,
                `c.coupon_number as code`
            ])
                .innerJoin('coupon_to_member_group', 'ctmg', 'c.coupon_id = ctmg.coupon_id')
                .andWhere('NOW() BETWEEN c.issued_range_start AND c.issued_range_end')
                .andWhere('c.issued_user_class = 1')
                .andWhere('c.delete_yn = 0')
                .andWhere('ctmg.member_group_id = 1')
                .execute();
            return {
                code: "200",
                result: "succ",
                couponData: coupon_all.concat(coupon_group)
            };
        }
        catch (error) {
            common_1.Logger.error('api/berry : ' + error);
            throw error;
        }
    }
    async postMakeCoupon(data) {
        try {
            if (data.code === "" || data.uid === "") {
                throw { code: "103", result: "validate error" };
            }
            const member = await this.memberRepository
                .createQueryBuilder('m')
                .andWhere('m.member_id = :memberid', { memberid: data.uid })
                .getCount();
            if (member === 0) {
                throw { code: "104", result: "wrong uid" };
            }
            const coupon = await this.couponRepository
                .createQueryBuilder('c')
                .andWhere('c.coupon_number = :code', { code: data.code })
                .getCount();
            if (coupon === 0) {
                throw { code: "500", result: "fail" };
            }
            const coupon_object = await this.couponRepository
                .createQueryBuilder('c')
                .select('c.coupon_id')
                .andWhere('c.coupon_number = :code', { code: data.code })
                .execute();
            await this
                .couponToMemberRepository
                .createQueryBuilder('c')
                .insert()
                .values({
                member_id: await this.memberRepository.findOne({ member_id: data.uid }),
                is_use: 0,
                coupon_id: await this.couponRepository.findOne({ coupon_id: coupon_object[0]['coupon_id'] })
            }).execute();
            return {
                code: "200",
                result: "succ",
            };
        }
        catch (error) {
            common_1.Logger.error('api/berry : ' + error);
            throw error;
        }
    }
    async postGetUserCouponCount(data) {
        try {
            const count = await this.couponToMemberRepository
                .createQueryBuilder('ctm')
                .andWhere('ctm.member_id = :mid', { mid: data.uid })
                .getCount();
            return {
                code: "200",
                result: "succ",
                total: String(count)
            };
        }
        catch (error) {
            common_1.Logger.error('api/berry : ' + error);
            throw error;
        }
    }
};
PuppyPointService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(MemberMileageLog_repository_1.MemberMileageLogRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Coupon_repository_1.CouponRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(CouponToMemberGroup_repository_1.CouponToMemberGroupRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(CouponToMember_repository_1.CouponToMemberRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(CouponToProductClass_repository_1.CouponToProductClassRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(CouponToProduct_repository_1.CouponToProductRepository)),
    __metadata("design:paramtypes", [Member_repository_1.MemberRepository,
        MemberMileage_repository_1.MemberMileageRepository,
        MemberMileageLog_repository_1.MemberMileageLogRepository,
        Coupon_repository_1.CouponRepository,
        CouponToMemberGroup_repository_1.CouponToMemberGroupRepository,
        CouponToMember_repository_1.CouponToMemberRepository,
        CouponToProductClass_repository_1.CouponToProductClassRepository,
        ProductClass_repository_1.ProductClassRepository,
        CouponToProduct_repository_1.CouponToProductRepository])
], PuppyPointService);
exports.PuppyPointService = PuppyPointService;
//# sourceMappingURL=puppy-point.service.js.map