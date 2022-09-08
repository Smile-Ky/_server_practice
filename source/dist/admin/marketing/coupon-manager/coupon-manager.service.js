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
exports.CouponManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Coupon_repository_1 = require("../../../repository/coupon/Coupon.repository");
const respones_1 = require("../../../common/respones");
const Coupon_entity_1 = require("../../../entity/coupon/Coupon.entity");
const CouponToMemberGroup_repository_1 = require("../../../repository/coupon/CouponToMemberGroup.repository");
const CouponToMember_repository_1 = require("../../../repository/coupon/CouponToMember.repository");
const CouponToProductClass_repository_1 = require("../../../repository/coupon/CouponToProductClass.repository");
const CouponToProductClass_entity_1 = require("../../../entity/coupon/CouponToProductClass.entity");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
const CouponToProduct_repository_1 = require("../../../repository/coupon/CouponToProduct.repository");
const CouponToProduct_entity_1 = require("../../../entity/coupon/CouponToProduct.entity");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const CouponToMemberGroup_entity_1 = require("../../../entity/coupon/CouponToMemberGroup.entity");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const CouponToMember_entity_1 = require("../../../entity/coupon/CouponToMember.entity");
const Member_repository_1 = require("../../../repository/member/Member.repository");
let CouponManagerService = class CouponManagerService {
    constructor(couponRepository, couponToMemberGroupRepository, couponToMemberRepository, couponToProductClassRepository, productClassRepository, couponToProductRepository, productRepository, memberGroupRepository, memberRepository) {
        this.couponRepository = couponRepository;
        this.couponToMemberGroupRepository = couponToMemberGroupRepository;
        this.couponToMemberRepository = couponToMemberRepository;
        this.couponToProductClassRepository = couponToProductClassRepository;
        this.productClassRepository = productClassRepository;
        this.couponToProductRepository = couponToProductRepository;
        this.productRepository = productRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.memberRepository = memberRepository;
    }
    async findSimple(page, pageSize) {
        try {
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select([
                "coupon_id",
                "coupon_name",
                "coupon_number"
            ]);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select(["c.coupon_id as coupon_id",
                "c.coupon_name as coupon_name",
                `CASE
          WHEN c.coupon_date_range = 0 THEN concat(c.use_range_start,"~",c.use_range_end)
          WHEN c.coupon_date_range = 1 THEN concat("발행일로부터 ",use_range_text,
            CASE
            WHEN c.use_range_enum = 0 THEN "일"
            WHEN c.use_range_enum = 1 THEN "개월"
            WHEN c.use_range_enum = 2 THEN "년"
           end, "간")
          WHEN c.coupon_date_range = 2 THEN concat("발급일로부터 ",use_range_text,
            CASE
            WHEN c.use_range_enum = 0 THEN "일"
            WHEN c.use_range_enum = 1 THEN "개월"
            WHEN c.use_range_enum = 2 THEN "년"
           end, "간")
          WHEN c.coupon_date_range = 3 THEN "제한 없음"
         end as coupon_period`,
                "c.coupon_description as coupon_description",
                `CASE
          WHEN c.coupon_use_range = 0 THEN "전체"
          WHEN c.coupon_use_range = 1 THEN "PC"
          WHEN c.coupon_use_range = 2 THEN "Mobile"
          WHEN c.coupon_use_range = 3 THEN "App"
          end as coupon_use_range`,
                `CASE
          WHEN c.coupon_is_use = 0 THEN "사용"
          WHEN c.coupon_is_use = 1 THEN "사용_발급불가"
          WHEN c.coupon_is_use = 2 THEN "사용불가"
          end as coupon_is_use`,
                `CASE
          WHEN c.delivery_coupon_yn = 0 THEN "배송비 쿠폰 아님"
          WHEN c.delivery_coupon_yn = 1 THEN "배송비 쿠폰"
          end as delivery_coupon_yn`,
                `CASE
          WHEN c.discount_type = 0 THEN "정률할인"
          WHEN c.discount_type = 1 THEN "정액할인"
          end as discount_type`,
                "c.discount_text as discount_text",
                `CASE
          WHEN c.digit_number = 0 THEN "일자리"
          WHEN c.digit_number = 1 THEN "십자리"
          WHEN c.digit_number = 2 THEN "백자리"
          end as digit_number`,
                `CASE
          WHEN c.digit_number = 0 THEN "반올림"
          WHEN c.digit_number = 1 THEN "올림"
          WHEN c.digit_number = 2 THEN "내림"
          end as digit_number`,
                "c.minimum_purchase_amount as minimum_purchase_amount",
                "c.minimum_purchase_amount_text as minimum_purchase_amount_text",
                "c.maximum_discount as maximum_discount",
                "c.maximum_discount_text as maximum_discount_text",
                `CASE
          WHEN c.discountable_products = 0 THEN "전체"
          WHEN c.discountable_products = 1 THEN "카테고리"
          WHEN c.discountable_products = 2 THEN "상품"
          end as discountable_products`,
                `CASE
          WHEN c.issued_method = 0 THEN "관리자 수동 발급"
          WHEN c.issued_method = 1 THEN "특정 조건 자동 발급"
          WHEN c.issued_method = 2 THEN "시리얼 넘버 등록"
          end as issued_method`,
                `CASE
          WHEN c.automatic_issuance = 0 THEN "회원가입 완료시"
          WHEN c.automatic_issuance = 1 THEN "회원그룹 변경 시"
          WHEN c.automatic_issuance = 2 THEN "생일"
          WHEN c.automatic_issuance = 2 THEN "APP 푸시 수신여부 동의"
          end as automatic_issuance`,
                `CASE
          WHEN c.issued_user_class = 0 THEN "전체회원"
          WHEN c.issued_user_class = 1 THEN "회원그룹"
          end as issued_user_class`,
                `CASE
          WHEN c.coupon_date_range = 0 THEN "사용기간 지정"
          WHEN c.coupon_date_range = 1 THEN "발행일 기준"
          WHEN c.coupon_date_range = 2 THEN "발급일 기준"
          WHEN c.coupon_date_range = 3 THEN "제한없음"
          end as coupon_date_range`,
                "c.use_range_start as use_range_start ",
                "c.use_range_end as use_range_end",
                "c.use_range_text as use_range_text",
                `CASE
          WHEN c.use_range_enum = 0 THEN "일"
          WHEN c.use_range_enum = 1 THEN "개월"
          WHEN c.use_range_enum = 2 THEN "년"
          end as use_range_enum`,
                "c.issued_range_start as issued_range_start",
                "c.issued_range_end as issued_range_end",
                "c.create_date as create_date",
                "c.update_date as update_date",
                "c.coupon_number as coupon_number",
                `CASE
          WHEN c.offline_coupon_enable_yn = 0 THEN "발급가능"
          WHEN c.offline_coupon_enable_yn = 1 THEN "수량제한 발급불가"
          WHEN c.offline_coupon_enable_yn = 2 THEN "오프라인"
          end as offline_coupon_enable_yn`,
                `(select
           count(ctm.coupon_to_member_id) as issued_count
           from coupon_to_member ctm 
           where is_use != 2 
           and ctm.coupon_id = c.coupon_id) as issued_count`
            ]).andWhere(`c.delete_yn = 0`);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("c.coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async find(req, page, pageSize) {
        try {
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select(["c.coupon_id as coupon_id",
                "c.coupon_name as coupon_name",
                `CASE
          WHEN c.coupon_date_range = 0 THEN concat(c.use_range_start," ~ ",c.use_range_end)
          WHEN c.coupon_date_range = 1 THEN concat("발행일로부터 ",use_range_text,
            CASE
            WHEN c.use_range_enum = 0 THEN "일"
            WHEN c.use_range_enum = 1 THEN "개월"
            WHEN c.use_range_enum = 2 THEN "년" 
           end, "간")
          WHEN c.coupon_date_range = 2 THEN concat("발급일로부터 ",use_range_text,
            CASE
            WHEN c.use_range_enum = 0 THEN "일"
            WHEN c.use_range_enum = 1 THEN "개월"
            WHEN c.use_range_enum = 2 THEN "년"
           end, "간")
          WHEN c.coupon_date_range = 3 THEN "제한 없음"
         end as coupon_period`,
                "c.coupon_description as coupon_description",
                `CASE
          WHEN c.coupon_use_range = 0 THEN "전체"
          WHEN c.coupon_use_range = 1 THEN "PC"
          WHEN c.coupon_use_range = 2 THEN "Mobile"
          WHEN c.coupon_use_range = 3 THEN "App"
          end as coupon_use_range`,
                `CASE
          WHEN c.coupon_is_use = 0 THEN "사용"
          WHEN c.coupon_is_use = 1 THEN "사용_발급불가"
          WHEN c.coupon_is_use = 2 THEN "사용불가"
          end as coupon_is_use`,
                `CASE
          WHEN c.delivery_coupon_yn = 0 THEN "배송비 쿠폰 아님"
          WHEN c.delivery_coupon_yn = 1 THEN "배송비 쿠폰"
          end as delivery_coupon_yn`,
                `CASE
          WHEN c.discount_type = 0 THEN "정률할인"
          WHEN c.discount_type = 1 THEN "정액할인"
          end as discount_type`,
                "c.discount_text as discount_text",
                `CASE
          WHEN c.digit_number = 0 THEN "일자리"
          WHEN c.digit_number = 1 THEN "십자리"
          WHEN c.digit_number = 2 THEN "백자리"
          end as digit_number`,
                `CASE
          WHEN c.digit_number = 0 THEN "반올림"
          WHEN c.digit_number = 1 THEN "올림"
          WHEN c.digit_number = 2 THEN "내림"
          end as digit_number`,
                "c.minimum_purchase_amount as minimum_purchase_amount",
                "c.minimum_purchase_amount_text as minimum_purchase_amount_text",
                "c.maximum_discount as maximum_discount",
                "c.maximum_discount_text as maximum_discount_text",
                `CASE
          WHEN c.discountable_products = 0 THEN "전체"
          WHEN c.discountable_products = 1 THEN "카테고리"
          WHEN c.discountable_products = 2 THEN "상품"
          end as discountable_products`,
                `CASE
          WHEN c.issued_method = 0 THEN "관리자 수동 발급"
          WHEN c.issued_method = 1 THEN "특정 조건 자동 발급"
          WHEN c.issued_method = 2 THEN "시리얼 넘버 등록"
          end as issued_method`,
                `CASE
          WHEN c.automatic_issuance = 0 THEN "회원가입 완료시"
          WHEN c.automatic_issuance = 1 THEN "회원그룹 변경 시"
          WHEN c.automatic_issuance = 2 THEN "생일"
          WHEN c.automatic_issuance = 2 THEN "APP 푸시 수신여부 동의"
          end as automatic_issuance`,
                `CASE
          WHEN c.issued_user_class = 0 THEN "전체회원"
          WHEN c.issued_user_class = 1 THEN "회원그룹"
          end as issued_user_class`,
                `CASE
          WHEN c.coupon_date_range = 0 THEN "사용기간 지정"
          WHEN c.coupon_date_range = 1 THEN "발행일 기준"
          WHEN c.coupon_date_range = 2 THEN "발급일 기준"
          WHEN c.coupon_date_range = 3 THEN "제한없음"
          end as coupon_date_range`,
                "c.use_range_start as use_range_start ",
                "c.use_range_end as use_range_end",
                "c.use_range_text as use_range_text",
                `CASE
          WHEN c.use_range_enum = 0 THEN "일"
          WHEN c.use_range_enum = 1 THEN "개월"
          WHEN c.use_range_enum = 2 THEN "년"
          end as use_range_enum`,
                "c.issued_range_start as issued_range_start",
                "c.issued_range_end as issued_range_end",
                "c.create_date as create_date",
                "c.update_date as update_date",
                "c.coupon_number as coupon_number",
                `CASE
          WHEN c.offline_coupon_enable_yn = 0 THEN "발급가능"
          WHEN c.offline_coupon_enable_yn = 1 THEN "수량제한 발급불가"
          WHEN c.offline_coupon_enable_yn = 2 THEN "오프라인"
          end as offline_coupon_enable_yn`,
                `(select
           count(ctm.coupon_to_member_id) as issued_count
           from coupon_to_member ctm 
           where is_use != 2 
           and ctm.coupon_id = c.coupon_id) as issued_count`
            ]).andWhere(`c.delete_yn = 0`);
            if (req.coupon_find_text.length != 0) {
                switch (req.coupon_find_type) {
                    case "0":
                        result.andWhere(`c.coupon_name like :key`, { key: `%${req.coupon_find_text}%` });
                        break;
                    case "1":
                        result.andWhere(`c.coupon_description like :key`, { key: `%${req.coupon_find_text}%` });
                        break;
                    case "2":
                        result.andWhere(`c.coupon_number like :key`, { key: `%${req.coupon_find_text}%` });
                        break;
                }
            }
            common_1.Logger.error("v" + req.coupon_is_use);
            if (req.coupon_is_use.length !== 0) {
                result.andWhere(`c.coupon_is_use in (:key1)`, { key1: req.coupon_is_use });
            }
            if (req.coupon_use_range.length !== 0) {
                result.andWhere(`c.coupon_use_range in (:key2)`, { key2: req.coupon_use_range });
            }
            if (req.discount_type.length !== 0) {
                result.andWhere(`c.discount_type in (:key3)`, { key3: req.discount_type });
            }
            if (req.issued_method.length !== 0) {
                result.andWhere(`c.issued_method in (:key4)`, { key4: req.issued_method });
            }
            if (req.issued_user_class.length !== 0) {
                result.andWhere(`c.issued_user_class in (:key5)`, { key5: req.issued_user_class });
            }
            if (req.start_date != "" && req.end_date != "") {
                result.andWhere("DATE(c.create_date) BETWEEN :start AND :end", {
                    start: new Date(req.start_date),
                    end: new Date(req.end_date)
                });
            }
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("c.coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findId(couponId) {
        try {
            return await this.couponRepository
                .createQueryBuilder("c")
                .select(`*`)
                .andWhere(`c.coupon_id = :couponId`, { couponId: couponId })
                .andWhere(`c.delete_yn = 0`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async save(data) {
        try {
            const result = new Coupon_entity_1.CouponEntity();
            result.coupon_name = data.coupon_name;
            result.coupon_description = data.coupon_description;
            result.coupon_use_range = Number(data.coupon_use_range);
            result.coupon_is_use = Number(data.coupon_is_use);
            result.delivery_coupon_yn = Number(data.delivery_coupon_yn);
            result.discount_type = Number(data.discount_type);
            result.discount_text = data.discount_text;
            result.digit_number = Number(data.digit_number);
            result.round = Number(data.round);
            result.minimum_purchase_amount = data.minimum_purchase_amount;
            result.minimum_purchase_amount_text = data.minimum_purchase_amount_text;
            result.maximum_discount = data.maximum_discount;
            result.maximum_discount_text = data.maximum_discount_text;
            result.discountable_products = Number(data.discountable_products);
            result.issued_method = Number(data.issued_method);
            result.automatic_issuance = Number(data.automatic_issuance);
            result.issued_user_class = Number(data.issued_user_class);
            result.coupon_date_range = Number(data.coupon_date_range);
            result.use_range_start = data.use_range_start;
            result.use_range_end = data.use_range_end;
            result.use_range_enum = data.use_range_enum;
            result.issued_range_start = data.issued_range_start;
            result.issued_range_end = data.issued_range_end;
            result.use_range_text = data.use_range_text;
            result.coupon_number = String("PP" + Date.now());
            const save_data = await this.couponRepository.save(result);
            for (let i of data.product_class_id_list) {
                await this.couponToProductClassRepository
                    .createQueryBuilder("product_class")
                    .insert()
                    .into(CouponToProductClass_entity_1.CouponToProductClassEntity)
                    .values({
                    coupon: save_data,
                    product_class: await this.productClassRepository.findOne({ product_class_id: i })
                })
                    .execute();
            }
            for (let i of data.product_id_list) {
                await this.couponToProductRepository
                    .createQueryBuilder("product")
                    .insert()
                    .into(CouponToProduct_entity_1.CouponToProductEntity)
                    .values({
                    coupon: save_data,
                    product_id: await this.productRepository.findOne({ product_id: i })
                })
                    .execute();
            }
            for (let i of data.issued_user_class_id) {
                await this.couponToMemberGroupRepository
                    .createQueryBuilder("member_group")
                    .insert()
                    .into(CouponToMemberGroup_entity_1.CouponToMemberGroupEntity)
                    .values({
                    coupon_id: save_data,
                    member_group_id: await this.memberGroupRepository.findOne({ group_id: i })
                })
                    .execute();
            }
            return "저장에 성공하였습니다";
        }
        catch (error) {
            common_1.Logger.log(`admin/group/manager ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async updateFindId(couponId) {
        try {
            const data = await this.couponRepository
                .createQueryBuilder("c")
                .select(`*`)
                .andWhere(`c.coupon_id = :couponId`, { couponId: couponId })
                .execute();
            const mg = await this.couponToMemberGroupRepository
                .createQueryBuilder("ctmg")
                .select(`ctmg.*`)
                .innerJoin("member_group", "mg", "mg.group_id = ctmg.member_group_id")
                .innerJoin("coupon", "c", "c.coupon_id = ctmg.coupon_id")
                .andWhere(`ctmg.coupon_id = :couponId`, { couponId: couponId })
                .andWhere(`c.delete_yn = 0`)
                .execute();
            const p = await this.couponToProductRepository
                .createQueryBuilder("ctp")
                .select([`p.product_id as product_id`,
                `pi.image_url as iamge_url`,
                `p.product_name as product_name`,
                `pb.brand_name as brand_name`,
                `p.product_code as product_code`,
                `po.product_price as product_price`,
                `po.product_sale_price as product_sale_price`,
                `CASE
            WHEN p.is_show = "0" THEN '노출중'
            WHEN p.is_show = "1" THEN '미노출중'
           END as is_show`,
                `CASE
            WHEN p.product_sale_state = "0" THEN '일시품절'
            WHEN p.product_sale_state = "1" THEN '판매중'
            WHEN p.product_sale_state = "2" THEN '판매종료'
           END as product_sale_state`
            ])
                .innerJoin("product", "p", "p.product_id = ctp.product_id")
                .innerJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .innerJoin("coupon", "c", "ctp.product_id = c.coupon_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_option", "po", "p.product_id = po.product_id")
                .andWhere(`ctp.coupon_id = :couponId`, { couponId: couponId })
                .andWhere(`c.delete_yn = 0`)
                .andWhere(`pi.image_mode = 0`)
                .andWhere(`po.is_main = 1`)
                .execute();
            const pg = await this.couponToProductClassRepository
                .createQueryBuilder("ctpc")
                .select([`ctpc.*`, `pc.class_name as class_name`])
                .innerJoin("product_class", "pc", "pc.product_class_id = ctpc.product_class_id")
                .innerJoin("coupon", "c", "c.coupon_id = ctpc.coupon_id")
                .andWhere(`ctpc.coupon_id = :couponId`, { couponId: couponId })
                .andWhere(`c.delete_yn = 0`)
                .execute();
            return { data: data, issued_user_class_id: mg, product_id_list: p, product_class_id_list: pg };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(couponId, data) {
        try {
            await this.couponRepository.update({ coupon_id: couponId }, {
                coupon_name: data.coupon_name,
                coupon_description: data.coupon_description,
                coupon_use_range: Number(data.coupon_use_range),
                coupon_is_use: Number(data.coupon_is_use),
                delivery_coupon_yn: Number(data.delivery_coupon_yn),
                discount_type: Number(data.discount_type),
                discount_text: data.discount_text,
                digit_number: Number(data.digit_number),
                round: Number(data.round),
                minimum_purchase_amount: data.minimum_purchase_amount,
                minimum_purchase_amount_text: data.minimum_purchase_amount_text,
                maximum_discount: data.maximum_discount,
                maximum_discount_text: data.maximum_discount_text,
                discountable_products: Number(data.discountable_products),
                issued_method: Number(data.issued_method),
                automatic_issuance: Number(data.automatic_issuance),
                issued_user_class: Number(data.issued_user_class),
                coupon_date_range: Number(data.coupon_date_range),
                use_range_start: data.use_range_start,
                use_range_end: data.use_range_end,
                use_range_enum: data.use_range_enum,
                issued_range_start: data.issued_range_start,
                issued_range_end: data.issued_range_end,
                update_date: () => "NOW()"
            });
            const save_data = await this.couponRepository.findOne({ coupon_id: couponId });
            await this.couponToProductClassRepository.delete({ coupon: save_data });
            const ctpce = new CouponToProductClass_entity_1.CouponToProductClassEntity();
            ctpce.coupon = save_data;
            data.product_class_id_list.forEach(async (it2) => ctpce.product_class = await this.productClassRepository.findOne({ product_class_id: it2 }), await this.couponToProductClassRepository.save(ctpce));
            const ctpe = new CouponToProduct_entity_1.CouponToProductEntity();
            await this.couponToProductRepository.delete({ coupon: save_data });
            ctpe.coupon = save_data;
            data.product_id_list.forEach(async (it3) => ctpe.product_id = await this.productRepository.findOne({ product_id: it3 }), await this.couponToProductRepository.save(ctpe));
            const ctmge = new CouponToMemberGroup_entity_1.CouponToMemberGroupEntity();
            ctmge.coupon_id = save_data;
            await this.couponToMemberGroupRepository.delete({ coupon_id: save_data });
            data.issued_user_class_id.forEach(async (it4) => ctmge.member_group_id = await this.memberGroupRepository.findOne({ group_id: it4 }), await this.couponToMemberGroupRepository.save(ctmge));
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(couponId) {
        try {
            await this.couponRepository.update({ coupon_id: couponId }, { delete_yn: 1, update_date: () => "NOW()" });
            return "삭제가 완료되었습니다";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findIssuanceCouponUserAll(couponId, page, pageSize) {
        try {
            const coupon_data = await this.couponRepository.findOne({ coupon_id: couponId });
            let start_date, end_date;
            let temp_time;
            switch (coupon_data.use_range_enum) {
                case "0":
                    temp_time = new Date(coupon_data.issued_range_start.setDate(new Date(coupon_data.issued_range_start).getDate() + Number(coupon_data.use_range_text)));
                    break;
                case "1":
                    temp_time = new Date(coupon_data.issued_range_start.setMonth(new Date(coupon_data.issued_range_start).getMonth() + Number(coupon_data.use_range_text)));
                    break;
                case "2":
                    temp_time = new Date(coupon_data.issued_range_start.setFullYear(new Date(coupon_data.issued_range_start).getFullYear() + Number(coupon_data.use_range_text)));
                    break;
            }
            switch (coupon_data.coupon_date_range) {
                case 0:
                    start_date = new Date(coupon_data.use_range_start), end_date = new Date(coupon_data.use_range_end);
                    break;
                case 1:
                    start_date = new Date(coupon_data.issued_range_start), end_date = temp_time;
                    break;
            }
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select([
                `ctm.coupon_to_member_id as issued_id`,
                `m.member_id as user_id`,
                `m.name as user_name`,
                `"` + start_date.toISOString() + `" as use_range_start`,
                `"` + end_date.toISOString() + `" as use_range_end`,
                `ctm.create_date as issued_date`,
                Math.ceil((coupon_data.use_range_end.getTime() - coupon_data.use_range_start.getTime()) / (1000 * 3600 * 24)) > 0
                    ? String(Math.ceil((end_date.getTime() - start_date.getTime()) / (1000 * 3600 * 24))) + " as remain_period" : "0 as remain_period",
                `ctm.is_use`
            ])
                .innerJoin("coupon_to_member", "ctm", "c.coupon_id = ctm.coupon_id")
                .innerJoin("member", "m", "m.member_id = ctm.member_id")
                .andWhere(`ctm.coupon_id = :couponId`, { couponId: couponId });
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("c.coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findIssuanceCouponUser(reqCouponFindUserDTO, couponId, page, pageSize) {
        try {
            const coupon_data = await this.couponRepository.findOne({ coupon_id: couponId });
            let start_date, end_date;
            let temp_time;
            switch (coupon_data.use_range_enum) {
                case "0":
                    temp_time = new Date(coupon_data.issued_range_start.setDate(new Date(coupon_data.issued_range_start).getDate() + Number(coupon_data.use_range_text)));
                    break;
                case "1":
                    temp_time = new Date(coupon_data.issued_range_start.setMonth(new Date(coupon_data.issued_range_start).getMonth() + Number(coupon_data.use_range_text)));
                    break;
                case "2":
                    temp_time = new Date(coupon_data.issued_range_start.setFullYear(new Date(coupon_data.issued_range_start).getFullYear() + Number(coupon_data.use_range_text)));
                    break;
            }
            switch (coupon_data.coupon_date_range) {
                case 0:
                    start_date = new Date(coupon_data.use_range_start), end_date = new Date(coupon_data.use_range_end);
                    break;
                case 1:
                    start_date = new Date(coupon_data.issued_range_start), end_date = temp_time;
                    break;
            }
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select([
                `ctm.coupon_to_member_id as issued_id`,
                `m.member_id as user_id`,
                `m.name as user_name`,
                `"` + start_date.toISOString() + `" as use_range_start`,
                `"` + end_date.toISOString() + `" as use_range_end`,
                `ctm.create_date as issued_date`,
                Math.ceil((coupon_data.use_range_end.getTime() - coupon_data.use_range_start.getTime()) / (1000 * 3600 * 24)) > 0
                    ? String(Math.ceil((end_date.getTime() - start_date.getTime()) / (1000 * 3600 * 24))) + " as remain_period" : "0 as remain_period",
                `ctm.is_use`
            ])
                .leftJoin("coupon_to_member", "ctm", "c.coupon_id = ctm.coupon_id")
                .leftJoin("coupon_to_member_group", "ctmg", "c.coupon_id = ctmg.coupon_id")
                .leftJoin("member", "m", "m.member_id = ctm.member_id")
                .leftJoin("member_group", "mg", "ctmg.member_group_id = mg.group_id")
                .andWhere(`ctm.coupon_id = :couponId`, { couponId: couponId });
            if (reqCouponFindUserDTO.searchText != "") {
                switch (reqCouponFindUserDTO.searchType) {
                    case "0":
                        result.andWhere(`ctm.member_id = :search`, { search: reqCouponFindUserDTO.searchText });
                        break;
                    case "1":
                        result.andWhere(`m.name like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                    case "2":
                        result.andWhere(`m.email like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                    case "3":
                        result.andWhere(`m.phone like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                }
            }
            if (reqCouponFindUserDTO.memberClass != null && reqCouponFindUserDTO.memberClass.length > 0) {
                result.andWhere(`mg.group_name in (:search)`, { search: reqCouponFindUserDTO.memberClass });
            }
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("c.coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async cancelIssuanceCoupon(couponId, data) {
        try {
            for (let it of data.couponToMemberList) {
                await this.couponToMemberRepository
                    .update({ coupon_to_member_id: it }, {
                    cancel_date: () => "NOW()"
                });
            }
            return "쿠폰 취소에 성공하였습니다";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async preIssuanceCoupIssuanceCouponAllonAll(page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder("m")
                .select([
                `m.member_id as user_id`,
                `m.name as user_name`,
                `mg.group_name as user_group`,
                `m.email as user_email`,
                `m.phone as user_phone`
            ])
                .leftJoin("member_group", "mg", "m.member_group_id = mg.group_id");
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("m.member_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async preIssuanceCoupon(reqCouponFindUserDTO, page, pageSize) {
        try {
            const result = await this.memberRepository
                .createQueryBuilder("m")
                .select([
                `m.member_id as user_id`,
                `m.name as user_name`,
                `mg.group_name as user_group`,
                `m.email as user_email`,
                `m.phone as user_phone`
            ])
                .leftJoin("member_group", "mg", "m.member_group_id = mg.group_id");
            if (reqCouponFindUserDTO.memberClass.length !== 0) {
                result.andWhere(`mg.group_id in (:search)`, { search: reqCouponFindUserDTO.memberClass });
            }
            if (reqCouponFindUserDTO.searchText !== "") {
                switch (reqCouponFindUserDTO.searchType) {
                    case "0":
                        result.andWhere(`m.member_id = :search`, { search: reqCouponFindUserDTO.searchText });
                        break;
                    case "1":
                        result.andWhere(`m.name like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                    case "2":
                        result.andWhere(`m.email like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                    case "3":
                        result.andWhere(`m.phone like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("m.member_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async IssuanceCoupIssuanceCouponAllonAll(couponId, page, pageSize) {
        try {
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select([
                `ctm.coupon_to_member_id as coupon_to_member_id`,
                `ctm.member_id as user_id`,
                `m.name as user_name`,
                `ctm.create_date as create_date`,
                `CASE
              WHEN ctm.is_use = 0 THEN '미사용'
              WHEN ctm.is_use = 1 THEN '사용'
              END as is_use`,
                `CASE
              WHEN c.coupon_date_range = 0 THEN concat(c.use_range_start," ~ ",c.use_range_end)
              WHEN c.coupon_date_range = 1 THEN concat(c.create_date ," ~ ", 
               CASE
                  WHEN c.use_range_enum = 0 THEN DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY)
                  WHEN c.use_range_enum = 1 THEN  DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH)
                  WHEN c.use_range_enum = 2 THEN  DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR)
                 END
              )
               WHEN c.coupon_date_range = 2 THEN concat(ctm.create_date ," ~ ", 
               CASE
                  WHEN c.use_range_enum = 0 THEN DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY)
                  WHEN c.use_range_enum = 1 THEN  DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH)
                  WHEN c.use_range_enum = 2 THEN  DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR)
                 END
              )
               WHEN c.coupon_date_range = 3 THEN "제한 없음"
              END as use_date`,
                `CASE
              WHEN c.coupon_date_range = 0 THEN 
              IF(datediff(c.use_range_end,now()) > 0,
              concat(datediff(c.use_range_end,now())," 일전" ),
              "기간만료"
              )
              WHEN c.coupon_date_range = 1 THEN  
               CASE
                  WHEN c.use_range_enum = 0 THEN 
                  IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY),now()) > 0,
                  concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 1 THEN 
                  IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH),now()) > 0 ,
                  concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 2 THEN 
                  IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR),now()) > 0,
                  concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR),now())," 일전" ),
                  "기간만료"
                  )
                 END
               WHEN c.coupon_date_range = 2 THEN
               CASE
                  WHEN c.use_range_enum = 0 THEN 
                  IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY),now()) >0 ,
                  concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 1 THEN 
                  IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH),now()) >0 ,
                  concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 2 THEN  
                   IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR),now()) >0 ,
                  concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR),now())," 일전" ),
                  "기간만료"
                  )
                 END
               WHEN c.coupon_date_range = 3 THEN "제한 없음"
              END as waste_date`
            ])
                .innerJoin("coupon_to_member", "ctm", "c.coupon_id = ctm.coupon_id")
                .leftJoin("member", "m", "m.member_id = ctm.member_id")
                .leftJoin("member_group", "mg", "m.member_group_id = mg.group_id")
                .andWhere(`c.coupon_id = :couponId`, { couponId: couponId })
                .andWhere(`ctm.cancel_date is null`);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("ctm.coupon_to_member_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async IssuanceCoupon(reqCouponFindUserDTO, couponId, page, pageSize) {
        try {
            const result = await this.couponRepository
                .createQueryBuilder("c")
                .select([
                `ctm.coupon_to_member_id as coupon_to_member_id`,
                `ctm.member_id as user_id`,
                `m.name as user_name`,
                `ctm.create_date as create_date`,
                `CASE
              WHEN ctm.is_use = 0 THEN '미사용'
              WHEN ctm.is_use = 1 THEN '사용'
              END as is_use`,
                `CASE
              WHEN c.coupon_date_range = 0 THEN concat(c.use_range_start," ~ ",c.use_range_end)
              WHEN c.coupon_date_range = 1 THEN concat(c.create_date ," ~ ", 
               CASE
                  WHEN c.use_range_enum = 0 THEN DATE_SUB(c.create_date, INTERVAL use_range_enum DAY)
                  WHEN c.use_range_enum = 1 THEN  DATE_SUB(c.create_date, INTERVAL -use_range_enum MONTH)
                  WHEN c.use_range_enum = 2 THEN  DATE_SUB(c.create_date, INTERVAL -use_range_enum YEAR)
                 END
              )
               WHEN c.coupon_date_range = 2 THEN concat(ctm.create_date ," ~ ", 
               CASE
                  WHEN c.use_range_enum = 0 THEN DATE_SUB(ctm.create_date, INTERVAL use_range_enum DAY)
                  WHEN c.use_range_enum = 1 THEN  DATE_SUB(ctm.create_date, INTERVAL -use_range_enum MONTH)
                  WHEN c.use_range_enum = 2 THEN  DATE_SUB(ctm.create_date, INTERVAL -use_range_enum YEAR)
                 END
              )
               WHEN c.coupon_date_range = 3 THEN "제한 없음"
              END as use_date`,
                `CASE
              WHEN c.coupon_date_range = 0 THEN 
              IF(datediff(c.use_range_end,now()) > 0,
              concat(datediff(c.use_range_end,now())," 일전" ),
              "기간만료"
              )
              WHEN c.coupon_date_range = 1 THEN  
               CASE
                  WHEN c.use_range_enum = 0 THEN 
                  IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY),now()) > 0,
                  concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text DAY),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 1 THEN 
                  IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH),now()) > 0 ,
                  concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text MONTH),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 2 THEN 
                  IF(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR),now()) > 0,
                  concat(datediff(DATE_SUB(c.create_date, INTERVAL -1 * c.use_range_text YEAR),now())," 일전" ),
                  "기간만료"
                  )
                 END
               WHEN c.coupon_date_range = 2 THEN
               CASE
                  WHEN c.use_range_enum = 0 THEN 
                  IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY),now()) >0 ,
                  concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text DAY),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 1 THEN 
                  IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH),now()) >0 ,
                  concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text MONTH),now())," 일전" ),
                  "기간만료"
                  )
                  WHEN c.use_range_enum = 2 THEN  
                   IF(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR),now()) >0 ,
                  concat(datediff(DATE_SUB(ctm.create_date, INTERVAL -1 * c.use_range_text YEAR),now())," 일전" ),
                  "기간만료"
                  )
                 END
               WHEN c.coupon_date_range = 3 THEN "제한 없음"
              END as waste_date`
            ])
                .innerJoin("coupon_to_member", "ctm", "c.coupon_id = ctm.coupon_id")
                .leftJoin("member", "m", "m.member_id = ctm.member_id")
                .leftJoin("member_group", "mg", "m.member_group_id = mg.group_id")
                .andWhere(`c.coupon_id = :couponId`, { couponId: couponId })
                .andWhere(`ctm.cancel_date is null`);
            if (reqCouponFindUserDTO.memberClass.length !== 0) {
                result.andWhere(`mg.group_id in (:group)`, { group: reqCouponFindUserDTO.memberClass });
            }
            if (reqCouponFindUserDTO.searchText !== "") {
                switch (reqCouponFindUserDTO.searchType) {
                    case "0":
                        result.andWhere(`ctm.member_id = :search`, { search: reqCouponFindUserDTO.searchText });
                        break;
                    case "1":
                        result.andWhere(`m.name like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                    case "2":
                        result.andWhere(`m.email like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                    case "3":
                        result.andWhere(`m.phone like :search`, { search: `%${reqCouponFindUserDTO.searchText}%` });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("c.coupon_id", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findIssuanceCoupon(reqUserFindDTO, couponId) {
        try {
            const coupon = await this.couponRepository.findOne({ coupon_id: couponId });
            if (reqUserFindDTO.duplicate_yn == "1") {
                if (reqUserFindDTO.all_yn == "0") {
                    for (const x of reqUserFindDTO.userId) {
                        await this.couponToMemberRepository
                            .createQueryBuilder("ctr")
                            .insert()
                            .into(CouponToMember_entity_1.CouponToMemberEntity)
                            .values({
                            is_use: 0,
                            coupon_id: coupon,
                            member_id: await this.memberRepository.findOne({ member_id: x })
                        })
                            .execute();
                    }
                }
                else {
                    const mem = await this.memberRepository.find();
                    for (const x of mem) {
                        await this.couponToMemberRepository
                            .createQueryBuilder("ctr")
                            .insert()
                            .into(CouponToMember_entity_1.CouponToMemberEntity)
                            .values({
                            is_use: 0,
                            coupon_id: coupon,
                            member_id: await this.memberRepository.findOne({ member_id: x.member_id })
                        })
                            .execute();
                    }
                }
            }
            else {
                if (reqUserFindDTO.all_yn == "0") {
                    for (const it2 of reqUserFindDTO.userId) {
                        const member_id = await this.memberRepository.findOne({ member_id: it2 });
                        const ctm = await this.couponToMemberRepository.findOne({
                            member_id: member_id,
                            coupon_id: coupon
                        });
                        if (ctm == null) {
                            await this.couponToMemberRepository
                                .createQueryBuilder("ctr")
                                .insert()
                                .into(CouponToMember_entity_1.CouponToMemberEntity)
                                .values({
                                is_use: 0,
                                coupon_id: coupon,
                                member_id: member_id
                            })
                                .execute();
                        }
                    }
                }
                else {
                    const mem = await this.memberRepository
                        .createQueryBuilder("m")
                        .where(`m.member_id not in (select cm.member_id
                                    from coupon_to_member cm
                                    where cm.coupon_id = ${coupon.coupon_id})
              `).getMany();
                    for (const x of mem) {
                        await this.couponToMemberRepository
                            .createQueryBuilder("ctr")
                            .insert()
                            .into(CouponToMember_entity_1.CouponToMemberEntity)
                            .values({
                            is_use: 0,
                            coupon_id: coupon,
                            member_id: await this.memberRepository.findOne({ member_id: x.member_id })
                        })
                            .execute();
                    }
                }
            }
            return "저장에 성공하였습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
CouponManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Coupon_repository_1.CouponRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(CouponToMemberGroup_repository_1.CouponToMemberGroupRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(CouponToMember_repository_1.CouponToMemberRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(CouponToProductClass_repository_1.CouponToProductClassRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(CouponToProduct_repository_1.CouponToProductRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __metadata("design:paramtypes", [Coupon_repository_1.CouponRepository,
        CouponToMemberGroup_repository_1.CouponToMemberGroupRepository,
        CouponToMember_repository_1.CouponToMemberRepository,
        CouponToProductClass_repository_1.CouponToProductClassRepository,
        ProductClass_repository_1.ProductClassRepository,
        CouponToProduct_repository_1.CouponToProductRepository,
        Product_repository_1.ProductRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        Member_repository_1.MemberRepository])
], CouponManagerService);
exports.CouponManagerService = CouponManagerService;
//# sourceMappingURL=coupon-manager.service.js.map