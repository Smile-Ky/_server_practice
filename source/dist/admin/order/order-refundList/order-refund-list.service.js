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
exports.OrderRefundListService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const respones_1 = require("../../../common/respones");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
let OrderRefundListService = class OrderRefundListService {
    constructor(orderListRepository, orderDetailRepository) {
        this.orderListRepository = orderListRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async getRefundAll(page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select([`od.*`,
                `om.*`,
                `(select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url`,
                `p.product_code as product_code`,
                `pb.brand_name as brand_name`,
                `p.product_name as product_name`
            ])
                .leftJoin("order_main", "om", "om.order_id = od.order_id")
                .leftJoin("member", "m", "m.member_id = om.member_id")
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id");
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
    async getRefundId(orderId) {
        try {
            return await this.orderDetailRepository
                .createQueryBuilder("od")
                .select([`od.*`,
                `om.*`,
                `(select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url`,
                `p.product_code as product_code`,
                `pb.brand_name as brand_name`,
                `p.product_name as product_name`
            ])
                .leftJoin("order_main", "om", "om.order_id = od.order_id")
                .leftJoin("member", "m", "m.member_id = om.member_id")
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id")
                .andWhere("om.order_id = :keyword", { keyword: orderId })
                .execute();
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async getRefund(findOptionDto, page, pageSize) {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select([`od.*`,
                `om.*`,
                `(select pii.image_url 
       from product_image pii 
       where pii.image_id = pi.image_id
       and pii.image_mode = 1) as image_url`,
                `p.product_code as product_code`,
                `pb.brand_name as brand_name`,
                `p.product_name as product_name`,
            ])
                .leftJoin("order_main", "om", "om.order_id = od.order_id")
                .leftJoin("member", "m", "m.member_id = om.member_id")
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id")
                .leftJoin("product_image", "pi", "p.product_id = pi.product_id");
            findOptionDto.order_processing_state !== null && findOptionDto.order_processing_state.length > 0 ?
                result.andWhere("od.order_state in (:keyword)", { keyword: findOptionDto.order_processing_state }) : "";
            findOptionDto.order_payment !== null && findOptionDto.order_payment.length > 0 ?
                result.andWhere("od.order_payment_method in (:keyword)", { keyword: findOptionDto.order_payment }) : "";
            findOptionDto.order_payment_platform !== null && findOptionDto.order_payment_platform.length > 0 ?
                result.andWhere("od.order_payment_platform in (:keyword)", { keyword: findOptionDto.order_payment_platform }) : "";
            if (findOptionDto.order_find_text !== null && findOptionDto.order_find_text.length > 0) {
                switch (findOptionDto.order_find_type) {
                    case "0":
                        result.andWhere("od.recipient_name like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        result.orWhere("m.name like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                    case "1":
                        result.andWhere("od.recipient_phone like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        result.orWhere("m.phone like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                    case "2":
                        result.andWhere("om.order_code like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                    case "3":
                        result.andWhere("m.puppy_member_id like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                    case "4":
                        result.andWhere("od.delivery_invoice_code like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                    case "5":
                        result.andWhere("p.product_name like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                    case "6":
                        result.andWhere("p.product_code like :keyword", { keyword: `%${findOptionDto.order_find_text}%` });
                        break;
                }
            }
            if (findOptionDto.date_find_start !== null && findOptionDto.date_find_end !== null && findOptionDto.date_find_type !== null) {
                switch (findOptionDto.date_find_type) {
                    case "0":
                        result.andWhere("DATE(om.order_create_date) BETWEEN :start AND :end", {
                            start: new Date(findOptionDto.date_find_start),
                            end: new Date(findOptionDto.date_find_end)
                        });
                        break;
                    case "1":
                        result.andWhere("DATE(om.deposit_date) BETWEEN :start AND :end", {
                            start: new Date(findOptionDto.date_find_start),
                            end: new Date(findOptionDto.date_find_end)
                        });
                        break;
                    case "2":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(findOptionDto.date_find_start),
                            end: new Date(findOptionDto.date_find_end)
                        });
                        break;
                    case "3":
                        result.andWhere("DATE(od.delivery_preparing_date) BETWEEN :start AND :end", {
                            start: new Date(findOptionDto.date_find_start),
                            end: new Date(findOptionDto.date_find_end)
                        });
                        break;
                    case "4":
                        result.andWhere("DATE(od.delivery_end_date) BETWEEN :start AND :end", {
                            start: new Date(findOptionDto.date_find_start),
                            end: new Date(findOptionDto.date_find_end)
                        });
                        break;
                    case "5":
                        result.andWhere("DATE(od.confirm_date) BETWEEN :start AND :end", {
                            start: new Date(findOptionDto.date_find_start),
                            end: new Date(findOptionDto.date_find_end)
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
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OrderRefundListService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __metadata("design:paramtypes", [OrderMain_repository_1.OrderMainRepository,
        OrderDetail_repository_1.OrderDetailRepository])
], OrderRefundListService);
exports.OrderRefundListService = OrderRefundListService;
//# sourceMappingURL=order-refund-list.service.js.map