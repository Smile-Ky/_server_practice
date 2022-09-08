"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponToMemberRepository = void 0;
const typeorm_1 = require("typeorm");
const CouponToMember_entity_1 = require("../../entity/coupon/CouponToMember.entity");
const common_1 = require("@nestjs/common");
let CouponToMemberRepository = class CouponToMemberRepository extends typeorm_1.Repository {
    async useCouponList(member_id, class_list, product_list) {
        try {
            const all_coupon = await this.createQueryBuilder('ctm')
                .innerJoin('coupon', 'cp', 'cp.coupon_id = ctm.coupon_id AND cp.discountable_products = 0')
                .andWhere('cp.delivery_coupon_yn = 0')
                .andWhere('cp.coupon_is_use != 2')
                .andWhere('ctm.member_id = :member_id', { member_id })
                .select([
                `cp.coupon_id as regist_ix`,
                `cp.use_range_start as regist_start`,
                `cp.use_range_end as regist_end`,
                `cp.coupon_name as publish_name`,
                `cp.discount_text as cupon_sale_value`,
                `if(cp.discount_type = 0, 'true', 'false') as cupon_sale_type_percent`,
                `if(cp.delivery_coupon_yn, 'true', 'false') as is_delivery_coupon_yn`
            ])
                .execute();
            const class_coupon = await this.createQueryBuilder('ctm')
                .innerJoin('coupon', 'cp', 'cp.coupon_id = ctm.coupon_id AND cp.discountable_products = 1')
                .innerJoin('coupon_to_product_class', 'ctpc', 'ctpc.coupon_id = cp.coupon_id')
                .andWhere('cp.delivery_coupon_yn = 0')
                .andWhere('cp.coupon_is_use != 2')
                .andWhere('ctm.member_id = :member_id', { member_id })
                .andWhere('ctpc.product_class_id in (:class_list)', { class_list })
                .select([
                `cp.coupon_id as regist_ix`,
                `cp.use_range_start as regist_start`,
                `cp.use_range_end as regist_end`,
                `cp.coupon_name as publish_name`,
                `cp.discount_text as cupon_sale_value`,
                `if(cp.discount_type = 0, 'true', 'false') as cupon_sale_type_percent`,
                `if(cp.delivery_coupon_yn, 'true', 'false') as is_delivery_coupon_yn`
            ])
                .execute();
            const product_coupon = await this.createQueryBuilder('ctm')
                .innerJoin('coupon', 'cp', 'cp.coupon_id = ctm.coupon_id AND cp.discountable_products = 2')
                .innerJoin('coupon_to_product', 'ctp', 'ctp.coupon_id = cp.coupon_id')
                .andWhere('cp.delivery_coupon_yn = 0')
                .andWhere('cp.coupon_is_use != 2')
                .andWhere('ctm.member_id = :member_id', { member_id })
                .andWhere('ctp.product_id in (:product_list)', { product_list })
                .select([
                `cp.coupon_id as regist_ix`,
                `cp.use_range_start as regist_start`,
                `cp.use_range_end as regist_end`,
                `cp.coupon_name as publish_name`,
                `cp.discount_text as cupon_sale_value`,
                `if(cp.discount_type = 0, 'true', 'false') as cupon_sale_type_percent`,
                `if(cp.delivery_coupon_yn, 'true', 'false') as is_delivery_coupon_yn`
            ])
                .execute();
            const delivery_coupon = await this.createQueryBuilder('ctm')
                .innerJoin('coupon', 'cp', 'cp.coupon_id = ctm.coupon_id AND cp.discountable_products = 2')
                .innerJoin('coupon_to_product', 'ctp', 'ctp.coupon_id = cp.coupon_id')
                .andWhere('cp.delivery_coupon_yn = 1')
                .andWhere('cp.coupon_is_use != 2')
                .andWhere('ctm.member_id = :member_id', { member_id })
                .andWhere('ctp.product_id in (:product_list)', { product_list })
                .select([
                `cp.coupon_id as regist_ix`,
                `cp.use_range_start as regist_start`,
                `cp.use_range_end as regist_end`,
                `cp.coupon_name as publish_name`,
                `cp.discount_text as cupon_sale_value`,
                `if(cp.discount_type = 0, 'true', 'false') as cupon_sale_type_percent`,
                `if(cp.delivery_coupon_yn, 'true', 'false') as is_delivery_coupon_yn`
            ])
                .execute();
            return [...all_coupon, ...class_coupon, ...product_coupon, ...delivery_coupon];
        }
        catch (error) {
            common_1.Logger.error("CouponToMember : ", error);
            throw error;
        }
    }
};
CouponToMemberRepository = __decorate([
    (0, typeorm_1.EntityRepository)(CouponToMember_entity_1.CouponToMemberEntity)
], CouponToMemberRepository);
exports.CouponToMemberRepository = CouponToMemberRepository;
//# sourceMappingURL=CouponToMember.repository.js.map