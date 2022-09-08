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
exports.OrderDeliveryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const respones_1 = require("../../../common/respones");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OrderDeposit_repository_1 = require("../../../repository/order/OrderDeposit.repository");
const OrderDetail_Entity_1 = require("../../../entity/order/OrderDetail.Entity");
const OrderDeposit_entity_1 = require("../../../entity/order/OrderDeposit.entity");
let OrderDeliveryService = class OrderDeliveryService {
    constructor(orderMainRepository, orderDetailRepository, memberRepository, orderDepositRepository) {
        this.orderMainRepository = orderMainRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.memberRepository = memberRepository;
        this.orderDepositRepository = orderDepositRepository;
    }
    async findAllPreDeposit(page, pageSize) {
        const result = await this.orderMainRepository
            .createQueryBuilder("om")
            .select([
            `om.order_id as order_id`,
            `od.order_detail_id as order_detail_id`,
            `om.order_code as order_code`,
            `om.order_create_date as order_create_date`,
            `m.member_id as order_user_id`,
            `m.name as order_user_name`,
            `om.order_user_phone as order_user_phone`,
            `ode.deposit_type as deposit_type`,
            `ode.deposit_bank as deposit_bank`,
            `om.order_price as deposit_price`,
            `ode.deposit_account_num as deposit_account_num`,
            `ode.deposit_closing_date as deposit_closing_date`,
            `ode.deposit_account as deposit_account`
        ])
            .innerJoin("member", "m", "m.member_id = om.member_id")
            .leftJoin("order_deposit", "ode", "ode.order_id = om.order_id")
            .leftJoin("order_detail", "od", "om.order_id = od.order_id")
            .andWhere("od.order_state = :order_state", { order_state: `0` });
        const totalData = await result.getCount();
        return {
            data: await result
                .orderBy("om.order_id", "DESC")
                .limit(pageSize)
                .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                .execute(),
            page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
        };
    }
    async findPreDeposit(req, page, pageSize) {
        const result = await this.orderMainRepository
            .createQueryBuilder("om")
            .select([
            `om.order_id as order_id`,
            `od.order_detail_id as order_detail_id`,
            `om.order_code as order_code`,
            `om.order_create_date as order_create_date`,
            `m.member_id as order_user_id`,
            `m.name as order_user_name`,
            `om.order_user_phone as order_user_phone`,
            `ode.deposit_type as deposit_type`,
            `ode.deposit_bank as deposit_bank`,
            `om.order_price as deposit_price`,
            `ode.deposit_account_num as deposit_account_num`,
            `ode.deposit_closing_date as deposit_closing_date`,
            `ode.deposit_account as deposit_account`
        ])
            .innerJoin("member", "m", "m.member_id = om.member_id")
            .innerJoin("order_detail", "od", "od.order_id = om.order_id")
            .leftJoin("order_deposit", "ode", "om.order_code = ode.order_code")
            .andWhere("od.order_state = :order_state", { order_state: '0' });
        req.order_type.length > 0 ? result.andWhere(`ode.deposit_type in (:data)`, { data: req.order_type }) : "";
        if (req.order_find_text !== "") {
            switch (req.order_find_type) {
                case "0":
                    result.andWhere(`om.order_code like :data`, { data: `%${req.order_find_text}%` });
                    break;
                case "1":
                    result.andWhere(`od.recipient_name like (:data)`, { data: `%${req.order_find_text}%` });
                    break;
                case "2":
                    result.andWhere(`od.recipient_phone like (:data)`, { data: `%${req.order_find_text}%` });
                    break;
            }
        }
        switch (req.date_find_type) {
            case "0":
                if (req.date_find_start !== "" && req.date_find_end !== "") {
                    result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                        start: new Date(req.date_find_start),
                        end: new Date(req.date_find_end)
                    });
                }
                break;
        }
        const totalData = await result.getCount();
        return {
            data: await result
                .orderBy("om.order_id", "DESC")
                .limit(pageSize)
                .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                .execute(),
            page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
        };
    }
    async putPreDepositStatus(req) {
        try {
            let status = "";
            switch (req.order_status) {
                case "1":
                    status = "1";
                    break;
                case "10":
                    status = "10";
                    break;
            }
            for (const it of req.order_id) {
                await this.orderDetailRepository
                    .createQueryBuilder("od")
                    .update(OrderDetail_Entity_1.OrderDetailEntity)
                    .set({ order_state: status })
                    .where("order_detail_id = :order_id", { order_id: it })
                    .execute();
                if (req.order_status == "4") {
                    await this.orderDepositRepository
                        .createQueryBuilder("ode")
                        .update(OrderDeposit_entity_1.OrderDepositEntity)
                        .set({ deposit_status: "2" })
                        .where("order_id = :order_id", { order_id: it })
                        .execute();
                }
            }
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAllDeposit(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `1` });
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findDeposit(req, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `1` });
            if (req.order_find_text !== "" && req.order_find_type !== "") {
                switch (req.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("pod.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("m.member_id like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putDepositStatus(req) {
        try {
            let status = "";
            let cancel_reason = "";
            switch (req.order_status) {
                case "2":
                    status = "2";
                    break;
                case "3":
                    status = "3";
                    break;
                case "12": {
                    status = "12";
                    cancel_reason = "[" + req.order_cancel_reason + "]" + req.order_cancel_reason_detail;
                    break;
                }
            }
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status,
                    claim_reason: cancel_reason.length > 0 ? cancel_reason : "",
                    claim_date: cancel_reason.length > 0 ? new Date().toDateString : ""
                });
            }
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAllDelay(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `3` });
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findDelay(req, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `3` });
            if (req.order_find_text !== "" && req.order_find_type !== "") {
                switch (req.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("pod.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("m.member_id like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "2":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putDelayStatus(req) {
        try {
            let status = "";
            let cancel_reason = "";
            switch (req.order_status) {
                case "2":
                    status = "2";
                    break;
                case "3":
                    status = "3";
                    break;
                case "12": {
                    status = "12";
                    cancel_reason = "[" + req.order_cancel_reason + "]" + req.order_cancel_reason_detail;
                    break;
                }
            }
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status,
                    claim_reason: cancel_reason.length > 0 ? cancel_reason : "",
                    claim_date: cancel_reason.length > 0 ? new Date().toDateString : ""
                });
            }
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAllReady(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `2` });
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findReady(req, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `2` });
            if (req.order_find_text !== "" && req.order_find_type !== "") {
                switch (req.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("pod.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("m.member_id like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "2":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putReadyStatus(req) {
        try {
            let status = "";
            let cancel_reason = "";
            switch (req.order_status) {
                case "2":
                    status = "2";
                    break;
                case "3":
                    status = "3";
                    break;
                case "12": {
                    status = "12";
                    cancel_reason = "[" + req.order_cancel_reason + "]" + req.order_cancel_reason_detail;
                    break;
                }
            }
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status,
                    claim_reason: cancel_reason.length > 0 ? cancel_reason : "",
                    claim_date: cancel_reason.length > 0 ? new Date().toDateString : ""
                });
            }
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAllDelivery(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date,
        (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `4` });
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findDelivery(req, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date,
                (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `4` });
            if (req.order_find_text !== "" && req.order_find_type !== "") {
                switch (req.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("pod.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("m.member_id like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "2":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "3":
                        result.andWhere("DATE(od.delivery_start_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putDelivery(req) {
        try {
            let status = "";
            switch (req.order_status) {
                case "2":
                    status = "2";
                    break;
                case "5":
                    status = "5";
                    break;
            }
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status,
                });
            }
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAllFinish(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date,
        od.delivery_start_date,
        od.delivery_end_date,
        (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `5` });
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findFinish(req, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date,
        od.delivery_start_date,
        od.delivery_end_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `5` });
            if (req.order_find_text !== "" && req.order_find_type !== "") {
                switch (req.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("pod.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("m.member_id like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "2":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "3":
                        result.andWhere("DATE(od.delivery_start_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "4":
                        result.andWhere("DATE(od.delivery_end_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putFinish(req) {
        try {
            let status = "";
            switch (req.order_status) {
                case "6":
                    status = "6";
                    break;
            }
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status,
                });
            }
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findAllConfirm(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date,
        od.delivery_start_date,
        od.delivery_end_date,
        od.confirm_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `6` });
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findConfirm(req, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        om.order_code,
                  CASE 
          WHEN od.order_state = 0 THEN "입금예정"
          WHEN od.order_state = 1 THEN "입금확인"
          WHEN od.order_state = 2 THEN "배송준비중"
          WHEN od.order_state = 3 THEN "배송지연"
          WHEN od.order_state = 4 THEN "배송중"
          WHEN od.order_state = 5 THEN "배송완료"
          WHEN od.order_state = 6 THEN "구매확정"
          WHEN od.order_state = 7 THEN "교환상품발송예정"
          WHEN od.order_state = 10 THEN "입금전취소완료"
          WHEN od.order_state = 11 THEN "취소요청"
          WHEN od.order_state = 12 THEN "취소완료"
          WHEN od.order_state = 20 THEN "반품요청"
          WHEN od.order_state = 21 THEN "반품승인"
          WHEN od.order_state = 22 THEN "반품회수완료"
          WHEN od.order_state = 23 THEN "반품확정"
          WHEN od.order_state = 30 THEN "교환요청"
          WHEN od.order_state = 31 THEN "교환승인"
          WHEN od.order_state = 32 THEN "교환회수완료"
          WHEN od.order_state = 33 THEN "교환확정"
          WHEN od.order_state = 40 THEN "환불요청"
          WHEN od.order_state = 41 THEN "환불완료"
          else null 
          END as order_state,
        om.order_create_date,
        od.order_detail_id,
        p.product_name as product_name,
        (select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url,
       concat(pod.name,':',pod.value) as option_name,
        od.product_sale_price as order_price,
        po.product_sale_price as product_sale_price,
        od.order_product_count,
        om.deposit_date,
        od.delivery_preparing_date,
        od.delivery_start_date,
        od.delivery_end_date,
        od.confirm_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: `6` });
            if (req.order_find_text !== "" && req.order_find_type !== "") {
                switch (req.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("pod.name like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("m.member_id like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "2":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "3":
                        result.andWhere("DATE(od.delivery_start_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "4":
                        result.andWhere("DATE(od.delivery_end_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "5":
                        result.andWhere("DATE(od.confirm_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                }
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy("od.order_id", "DESC")
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OrderDeliveryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(OrderDeposit_repository_1.OrderDepositRepository)),
    __metadata("design:paramtypes", [OrderMain_repository_1.OrderMainRepository,
        OrderDetail_repository_1.OrderDetailRepository,
        Member_repository_1.MemberRepository,
        OrderDeposit_repository_1.OrderDepositRepository])
], OrderDeliveryService);
exports.OrderDeliveryService = OrderDeliveryService;
//# sourceMappingURL=order-delivery.service.js.map