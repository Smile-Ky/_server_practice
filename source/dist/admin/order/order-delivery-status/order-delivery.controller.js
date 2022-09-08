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
exports.OrderDeliveryController = void 0;
const common_1 = require("@nestjs/common");
const order_delivery_service_1 = require("./order-delivery.service");
const respones_1 = require("../../../common/respones");
const swagger_1 = require("@nestjs/swagger");
const ReqOrderDeliverySearchCommonDTO_1 = require("./DTO/ReqOrderDeliverySearchCommonDTO");
const ReqOrderPreDepositDTO_1 = require("./DTO/ReqOrderPreDepositDTO");
const ResDepositDTO_1 = require("./DTO/ResDepositDTO");
const ResPreDepositDTO_1 = require("./DTO/ResPreDepositDTO");
const ReqOrderPreDepositStatusDTO_1 = require("./DTO/ReqOrderPreDepositStatusDTO");
const ReqOrderDepositStatusDTO_1 = require("./DTO/ReqOrderDepositStatusDTO");
const ReqOrderDelayStatusDTO_1 = require("./DTO/ReqOrderDelayStatusDTO");
const ReqOrderDeliverySearchDepositDTO_1 = require("./DTO/ReqOrderDeliverySearchDepositDTO");
const ReqOrderDeliverySearchReadyDTO_1 = require("./DTO/ReqOrderDeliverySearchReadyDTO");
const ReqOrderDeliveryStatusDTO_1 = require("./DTO/ReqOrderDeliveryStatusDTO");
const ReqOrderDeliverySearchDeliveryDTO_1 = require("./DTO/ReqOrderDeliverySearchDeliveryDTO");
const ReqOrderFinishStatusDTO_1 = require("./DTO/ReqOrderFinishStatusDTO");
const ReqOrderDeliverySearchFinishDTO_1 = require("./DTO/ReqOrderDeliverySearchFinishDTO");
const ReqOrderDeliverySearchConfirmDTO_1 = require("./DTO/ReqOrderDeliverySearchConfirmDTO");
let OrderDeliveryController = class OrderDeliveryController {
    constructor(orderDeliveryService) {
        this.orderDeliveryService = orderDeliveryService;
    }
    async findAllPreDeposit(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllPreDeposit(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findPreDeposit(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findPreDeposit(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putPreDepositStatus(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.putPreDepositStatus(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllDeposit(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllDeposit(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findDeposit(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findDeposit(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putDepositStatus(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.putDepositStatus(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllOrderDelay(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllDelay(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOrderDelay(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findDelay(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putOrderDelay(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.putDelayStatus(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllOrderReady(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllReady(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOrderReady(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findReady(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putOrderReady(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.putReadyStatus(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllOrderDelivery(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllDelivery(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOrderDelivery(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findDelivery(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putOrderDelivery(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.putDelivery(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllOrderFinish(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllFinish(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOrderFinish(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findFinish(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putOrderFinish(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.putFinish(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllOrderConfirm(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findAllConfirm(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOrderConfirm(req, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.orderDeliveryService.findConfirm(req, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/preDeposit"),
    (0, swagger_1.ApiOperation)({
        summary: "입금예정 리스트 전체 조회",
        description: "모든 입금예정 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResPreDepositDTO_1.ResPreDepositDTO] }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllPreDeposit", null);
__decorate([
    (0, common_1.Post)("/preDeposit"),
    (0, swagger_1.ApiOperation)({
        summary: "입금예정 리스트 검색내역 조회",
        description: "검색 조건에 따른 입금예정 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResPreDepositDTO_1.ResPreDepositDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderPreDepositDTO_1.ReqOrderPreDepositDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findPreDeposit", null);
__decorate([
    (0, common_1.Put)("/preDeposit/status"),
    (0, swagger_1.ApiOperation)({
        summary: "입금예정 리스트에서 상태 일괄 변경",
        description: "입금예정 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderPreDepositStatusDTO_1.ReqOrderPreDepositStatusDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "putPreDepositStatus", null);
__decorate([
    (0, common_1.Get)("/deposit"),
    (0, swagger_1.ApiOperation)({
        summary: "입금확인 리스트 전체 조회",
        description: "모든 입금확인 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResDepositDTO_1.ResDepositDTO] }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllDeposit", null);
__decorate([
    (0, common_1.Post)("/deposit"),
    (0, swagger_1.ApiOperation)({
        summary: "입금확인 리스트 검색내역 조회",
        description: "검색 조건에 따른 입금확인 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResDepositDTO_1.ResDepositDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliverySearchCommonDTO_1.ReqOrderDeliverySearchCommonDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findDeposit", null);
__decorate([
    (0, common_1.Put)("/deposit/status"),
    (0, swagger_1.ApiOperation)({
        summary: "입금 확인 리스트에서 상태 일괄 변경",
        description: "입금 확인 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDepositStatusDTO_1.ReqOrderDepositStatusDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "putDepositStatus", null);
__decorate([
    (0, common_1.Get)("/delay"),
    (0, swagger_1.ApiOperation)({
        summary: "배송지연 리스트 전체 조회",
        description: "모든 배송지연 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllOrderDelay", null);
__decorate([
    (0, common_1.Post)("/delay"),
    (0, swagger_1.ApiOperation)({
        summary: "배송지연 리스트 검색내역 조회",
        description: "검색 조건에 따른 배송지연 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliverySearchDepositDTO_1.ReqOrderDeliverySearchDepositDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findOrderDelay", null);
__decorate([
    (0, common_1.Put)("/delay/status"),
    (0, swagger_1.ApiOperation)({
        summary: "배송지연 리스트에서 상태 일괄 변경",
        description: "배송지연 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDelayStatusDTO_1.ReqOrderDelayStatusDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "putOrderDelay", null);
__decorate([
    (0, common_1.Get)("/ready"),
    (0, swagger_1.ApiOperation)({
        summary: "배송준비중 리스트 전체 조회",
        description: "모든 배송지연 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllOrderReady", null);
__decorate([
    (0, common_1.Post)("/ready"),
    (0, swagger_1.ApiOperation)({
        summary: "배송준비중  리스트 검색내역 조회",
        description: "검색 조건에 따른 배송지연 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliverySearchReadyDTO_1.ReqOrderDeliverySearchReadyDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findOrderReady", null);
__decorate([
    (0, common_1.Put)("/ready/status"),
    (0, swagger_1.ApiOperation)({
        summary: "배송준비중 리스트에서 상태 일괄 변경",
        description: "배송준비중 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDelayStatusDTO_1.ReqOrderDelayStatusDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "putOrderReady", null);
__decorate([
    (0, common_1.Get)("/delivery"),
    (0, swagger_1.ApiOperation)({
        summary: "배송중 리스트 전체 조회",
        description: "모든 배송지연 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllOrderDelivery", null);
__decorate([
    (0, common_1.Post)("/delivery"),
    (0, swagger_1.ApiOperation)({
        summary: "배송중  리스트 검색내역 조회",
        description: "검색 조건에 따른 배송중 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliverySearchDeliveryDTO_1.ReqOrderDeliverySearchDeliveryDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findOrderDelivery", null);
__decorate([
    (0, common_1.Put)("/delivery/status"),
    (0, swagger_1.ApiOperation)({
        summary: "배송중 리스트에서 상태 일괄 변경",
        description: "배송중 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliveryStatusDTO_1.ReqOrderDeliveryStatusDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "putOrderDelivery", null);
__decorate([
    (0, common_1.Get)("/finish"),
    (0, swagger_1.ApiOperation)({
        summary: "배송완료 리스트 전체 조회",
        description: "모든 배송완료 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllOrderFinish", null);
__decorate([
    (0, common_1.Post)("/finish"),
    (0, swagger_1.ApiOperation)({
        summary: "배송완료 리스트 검색내역 조회",
        description: "검색 조건에 따른 배송완료 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliverySearchFinishDTO_1.ReqOrderDeliverySearchFinishDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findOrderFinish", null);
__decorate([
    (0, common_1.Put)("/finish/status"),
    (0, swagger_1.ApiOperation)({
        summary: "배송완료 리스트에서 상태 일괄 변경",
        description: "배송완료 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderFinishStatusDTO_1.ReqOrderFinishStatusDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "putOrderFinish", null);
__decorate([
    (0, common_1.Get)("/confirm"),
    (0, swagger_1.ApiOperation)({
        summary: "구매확정 리스트 전체 조회",
        description: "모든 구매확정 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findAllOrderConfirm", null);
__decorate([
    (0, common_1.Post)("/confirm"),
    (0, swagger_1.ApiOperation)({
        summary: "구매확정 리스트 검색내역 조회",
        description: "검색 조건에 따른 배송완료 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderDeliverySearchConfirmDTO_1.ReqOrderDeliverySearchConfirmDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryController.prototype, "findOrderConfirm", null);
OrderDeliveryController = __decorate([
    (0, common_1.Controller)("admin/order/delivery"),
    (0, swagger_1.ApiTags)("어드민 - 배송관리"),
    __metadata("design:paramtypes", [order_delivery_service_1.OrderDeliveryService])
], OrderDeliveryController);
exports.OrderDeliveryController = OrderDeliveryController;
//# sourceMappingURL=order-delivery.controller.js.map