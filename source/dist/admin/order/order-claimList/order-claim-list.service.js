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
exports.OrderClaimListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OrderDeposit_repository_1 = require("../../../repository/order/OrderDeposit.repository");
const respones_1 = require("../../../common/respones");
const OrderDetail_Entity_1 = require("../../../entity/order/OrderDetail.Entity");
const OrderRefund_repository_1 = require("../../../repository/order/OrderRefund.repository");
const OrderRefund_entity_1 = require("../../../entity/order/OrderRefund.entity");
const axios_1 = __importDefault(require("axios"));
let OrderClaimListService = class OrderClaimListService {
    constructor(orderMainRepository, orderDetailRepository, memberRepository, orderDepositRepository, orderRefundRepository) {
        this.orderMainRepository = orderMainRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.memberRepository = memberRepository;
        this.orderDepositRepository = orderDepositRepository;
        this.orderRefundRepository = orderRefundRepository;
    }
    async findAllCancel(status, page, pageSize) {
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
        od.order_product_count order_product_count,
        om.deposit_date as deposit_date,
        od.claim_date as claim_date,
         m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_reason as claim_reason,
        od.claim_clear_date as claim_clear_date,
        pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: status });
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
    async findCancel(req, page, pageSize, status) {
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
        od.order_product_count order_product_count,
        om.deposit_date as deposit_date,
        od.claim_date as claim_date,
         m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_reason as claim_reason,
        od.claim_clear_date as claim_clear_date,
                pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: status });
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
                    case "7":
                        result.andWhere("od.product_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(od.claim_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(od.claim_date) BETWEEN :start AND :end", {
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
    async putCancelStatus(req) {
        try {
            let status = "";
            switch (req.order_status) {
                case "0":
                    status = "0";
                    break;
                case "1":
                    status = "1";
                    break;
                case "2": {
                    status = "2";
                    break;
                }
            }
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status
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
    async findAllReturn(page, pageSize, status) {
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
         od.claim_reason  as claim_reason,
        od.claim_date as claim_date,
        "지정택배방문요청" as claim_method,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code,
         m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_clear_date as claim_clear_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_name,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
                pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: status });
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
    async findReturn(req, page, pageSize, status) {
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
         od.claim_reason  as claim_reason,
        od.claim_date as claim_date,
        "지정택배방문요청" as claim_method,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code,
          m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_clear_date as claim_clear_date,
         (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_name,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
                pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: status });
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
                    case "7":
                        result.andWhere("od.product_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(od.claim_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(od.delivery_start_date) BETWEEN :start AND :end", {
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
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "4":
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
    async putReturn(req) {
        try {
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status
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
    async findChangeAll(page, pageSize, status) {
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
         od.claim_reason  as claim_reason,
        od.claim_date as claim_date,
        "지정택배방문요청" as claim_method,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code,
        m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_clear_date as claim_clear_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_name,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
                pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: status });
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
    async findChange(req, page, pageSize, status) {
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
         od.claim_reason  as claim_reason,
        od.claim_date as claim_date,
        "지정택배방문요청" as claim_method,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code,
        (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_code,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
        m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_clear_date as claim_clear_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_name,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
                        pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state = :order_state", { order_state: status });
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
                    case "7":
                        result.andWhere("od.product_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(od.claim_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(od.delivery_start_date) BETWEEN :start AND :end", {
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
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "4":
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
    async putChange(req) {
        try {
            for (const it of req.order_detail_id) {
                await this.orderDetailRepository.update({ order_detail_id: it }, {
                    order_state: req.order_status
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
    async findRefundAll(page, pageSize, status) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
                od.order_id,
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
         od.claim_reason  as claim_reason,
        od.claim_date as claim_date,
        "지정택배방문요청" as claim_method,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code,
        m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_clear_date as claim_clear_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_name,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
                        pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state in (11,21,22,23)");
            if (status === 40) {
                result.andWhere("od.claim_clear_date is null");
            }
            else if (status === 41) {
                result.andWhere("od.claim_clear_date is not null");
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
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findRefund(req, page, pageSize, status) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        od.order_id,
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
         od.claim_reason  as claim_reason,
        od.claim_date as claim_date,
        "지정택배방문요청" as claim_method,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.delivery_company_id = dc.delivery_company_code) as delivery_company_name,
        od.delivery_invoice_code,
        (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_code,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
        m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_clear_date as claim_clear_date,
       (select dc.delivery_company_name
        from delivery_company dc
        where od.return_delivery_company_code = dc.delivery_company_code) as return_delivery_company_name,
        od.return_delivery_invoice_code as return_delivery_invoice_code,
                        pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_state in (11,21,22,23)");
            if (status === 40) {
                result.andWhere("od.claim_clear_date is null");
            }
            else if (status === 41) {
                result.andWhere("od.claim_clear_date is not null");
            }
            req.order_payment !== null && req.order_payment.length > 0 ?
                result.andWhere("od.order_payment_platform in (:keyword)", { keyword: req.order_payment }) : "";
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
                    case "7":
                        result.andWhere("od.product_code like :keyword", { keyword: `%${req.order_find_text}%` });
                        break;
                }
            }
            if (req.date_find_type !== "" && req.date_find_start !== "" && req.date_find_end !== "") {
                switch (req.date_find_type) {
                    case "0":
                        result.andWhere("DATE(od.claim_date) BETWEEN :start AND :end", {
                            start: new Date(req.date_find_start),
                            end: new Date(req.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(od.claim_clear_date) BETWEEN :start AND :end", {
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
    async getRefundPopup(orderId) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`
        od.order_id,
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
        od.order_product_count order_product_count,
        om.deposit_date as deposit_date,
        od.claim_date as claim_date,
         m.name  as order_name,
        od.order_user_phone as order_phone,
        od.recipient_name as recipient_name,
        od.recipient_phone as recipient_phone,
        od.claim_reason as claim_reason,
        od.claim_clear_date as claim_clear_date,
        pb.brand_name as brand_name
        `)
                .innerJoin("order_main", "om", "od.order_id = om.order_id")
                .innerJoin("member", "m", "m.member_id = om.member_id")
                .innerJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product_option_detail", "pod", "pod.product_option_detail_id = od.product_option_detail_id")
                .innerJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .andWhere("od.order_id = :order_id", { order_id: orderId })
                .andWhere("od.order_state in (11,21,22,23)")
                .andWhere("od.claim_clear_date is null")
                .execute();
            const online_minimum_purchase = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`c.minimum_purchase_amount_text`)
                .innerJoin("coupon_to_member", "ctm", "od.coupon_to_member_id = ctm.coupon_to_member_id")
                .innerJoin("coupon", "c", "c.coupon_id = ctm.coupon_id")
                .andWhere("od.order_id = :order_id", { order_id: orderId })
                .andWhere("od.order_state in (11,21,22,23)")
                .andWhere("od.claim_clear_date is null")
                .andWhere("od.coupon_to_member_id  is not null")
                .execute();
            const all_payment_price = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`sum(od.product_sale_price) as product_sale_price`)
                .andWhere("od.order_id = :order_id", { order_id: orderId })
                .andWhere("od.claim_clear_date is null")
                .andWhere("od.order_state in (11,21,22,23)")
                .getRawOne();
            const refund = await this.orderRefundRepository
                .createQueryBuilder("or")
                .select("or.refund_deliver_price")
                .andWhere("or.order_id = :order_id", { order_id: orderId })
                .getOne();
            const result2 = await this.orderMainRepository.findOne({ order_id: orderId });
            return {
                order_id: result[0].order_id,
                order_detail: result,
                discount_detail: {
                    all_payment_price: all_payment_price.product_sale_price,
                    order_delivery: result2.order_delivery,
                    order_use_mileage: result2.order_use_mileage,
                    order_coupon_discount: result2.coupon_discount
                },
                refund_detail: {
                    refund_delivery_price: refund.refund_deliver_price,
                    order_return_use_mileage: result2.order_use_mileage,
                    not_accept_coupon_discount: Number(all_payment_price.product_sale_price) - Number(online_minimum_purchase.minimum_purchase_amount_text) > 0 ? 0 : result2.coupon_discount
                }
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async putRefundData(orderId, req) {
        try {
            await this.orderRefundRepository
                .createQueryBuilder()
                .update(OrderRefund_entity_1.OrderRefundEntity)
                .set({
                refund_price: Number(req.return_price),
                refund_deliver_price: Number(req.return_delivery_price)
            }).andWhere("order_id = :order_id ", { order_id: orderId })
                .execute();
            return {
                data: "변경이 완료되었습니다."
            };
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async postRefundAction(orderId, req) {
        try {
            const main = await this.orderMainRepository.findOne({ order_id: orderId });
            const { data: { response: { access_token: token } } } = await axios_1.default.post(`https://api.iamport.kr/users/getToken`, {
                imp_key: "8997928029651118",
                imp_secret: "ecca308d338308f946a8d63699d642c6a094c23ba16f24b70ed1635128ba8f805e8ecea9a084a70b"
            });
            const { data: { code: code } } = await (0, axios_1.default)({
                url: "https://api.iamport.kr/payments/cancel",
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
                data: {
                    reason: "",
                    imp_uid: main.order_code,
                    amount: req.return_price
                }
            });
            if (code === 0) {
                await this.orderRefundRepository
                    .createQueryBuilder()
                    .update(OrderRefund_entity_1.OrderRefundEntity)
                    .set({
                    refund_price: Number(req.return_price),
                    refund_deliver_price: Number(req.return_delivery_price)
                }).andWhere("order_id = :orderId ", { orderId: orderId })
                    .execute();
                await this.orderRefundRepository
                    .createQueryBuilder()
                    .update(OrderRefund_entity_1.OrderRefundEntity)
                    .set({
                    refund_date: () => "NOW()"
                }).andWhere("order_id = :orderId ", { orderId: orderId })
                    .execute();
                await this.orderDetailRepository
                    .createQueryBuilder()
                    .update(OrderDetail_Entity_1.OrderDetailEntity)
                    .set({
                    claim_clear_date: () => "NOW()"
                }).andWhere("order_id = :orderId", { orderId: orderId })
                    .execute();
                return { data: "환불에 성공했습니다" };
            }
            else {
                return { data: "환불에 실패했습니다. 환불 가능한 잔액을 확인하세요" };
            }
        }
        catch (error) {
            common_1.Logger.log(`/deposit/status ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OrderClaimListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(OrderDeposit_repository_1.OrderDepositRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(OrderRefund_repository_1.OrderRefundRepository)),
    __metadata("design:paramtypes", [OrderMain_repository_1.OrderMainRepository,
        OrderDetail_repository_1.OrderDetailRepository,
        Member_repository_1.MemberRepository,
        OrderDeposit_repository_1.OrderDepositRepository,
        OrderRefund_repository_1.OrderRefundRepository])
], OrderClaimListService);
exports.OrderClaimListService = OrderClaimListService;
//# sourceMappingURL=order-claim-list.service.js.map