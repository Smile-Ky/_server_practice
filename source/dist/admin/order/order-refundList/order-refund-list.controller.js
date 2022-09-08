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
exports.OrderRefundListController = void 0;
const common_1 = require("@nestjs/common");
const order_refund_list_service_1 = require("./order-refund-list.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResOrderListDTO_1 = require("../order-list/DTO/ResOrderListDTO");
const ReqOrderListFindDTO_1 = require("../order-list/DTO/ReqOrderListFindDTO");
let OrderRefundListController = class OrderRefundListController {
    constructor(orderRefundListService) {
        this.orderRefundListService = orderRefundListService;
    }
    ;
    async findOrderId(orderId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderRefundListService.getRefundId(orderId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderRefundListService.getRefundAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(OrderListFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderRefundListService.getRefund(OrderListFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/:orderId"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 내역 ID 조회",
        description: "요청 온 ID 값에 해당하는 주문 내역을 조회합니다."
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResOrderListDTO_1.ResOrderListDTO }),
    __param(0, (0, common_1.Param)("orderId")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderRefundListController.prototype, "findOrderId", null);
__decorate([
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 내역 전체 조회",
        description: "모든 주문 내역을 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResOrderListDTO_1.ResOrderListDTO] }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderRefundListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/find"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 내역 검색",
        description: "검색 조건에 따라 주문 내역 리스트를 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderListFindDTO_1.ReqOrderListFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderRefundListController.prototype, "find", null);
OrderRefundListController = __decorate([
    (0, common_1.Controller)("admin/refund/list"),
    (0, swagger_1.ApiTags)("어드민 - 주문관리 : 환불리스트"),
    __metadata("design:paramtypes", [order_refund_list_service_1.OrderRefundListService])
], OrderRefundListController);
exports.OrderRefundListController = OrderRefundListController;
//# sourceMappingURL=order-refund-list.controller.js.map