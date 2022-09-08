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
exports.OrderListController = void 0;
const common_1 = require("@nestjs/common");
const order_list_service_1 = require("./order-list.service");
const respones_1 = require("../../../common/respones");
const swagger_1 = require("@nestjs/swagger");
const ReqOrderListFindDTO_1 = require("./DTO/ReqOrderListFindDTO");
const ResOrderListDTO_1 = require("./DTO/ResOrderListDTO");
let OrderListController = class OrderListController {
    constructor(orderListService) {
        this.orderListService = orderListService;
    }
    async findOrderId(orderId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderListService.getOrderId(orderId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderListService.getOrderListAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(OrderListFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderListService.postFindAllByOption(OrderListFind, page, pageSize)));
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
], OrderListController.prototype, "findOrderId", null);
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
], OrderListController.prototype, "findAll", null);
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
], OrderListController.prototype, "find", null);
OrderListController = __decorate([
    (0, common_1.Controller)("admin/order/list"),
    (0, swagger_1.ApiTags)("어드민 - 주문관리 : 주문리스트 / 환불리스트"),
    __metadata("design:paramtypes", [order_list_service_1.OrderListService])
], OrderListController);
exports.OrderListController = OrderListController;
//# sourceMappingURL=order-list.controller.js.map