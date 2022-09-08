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
exports.OrderClaimListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_claim_list_service_1 = require("./order-claim-list.service");
const respones_1 = require("../../../common/respones");
const ReqOrderCancelDTO_1 = require("./DTO/ReqOrderCancelDTO");
const ReqCancelListFindDTO_1 = require("./DTO/ReqCancelListFindDTO");
const ReqReturnListFindDTO_1 = require("./DTO/ReqReturnListFindDTO");
const ReqOrderReturnDTO_1 = require("./DTO/ReqOrderReturnDTO");
const ReqChangeListFindDTO_1 = require("./DTO/ReqChangeListFindDTO");
const ReqOrderChangeDTO_1 = require("./DTO/ReqOrderChangeDTO");
const ReqRefundListFindDTO_1 = require("./DTO/ReqRefundListFindDTO");
const ReqOrderRefundSetDetail_1 = require("./DTO/ReqOrderRefundSetDetail");
let OrderClaimListController = class OrderClaimListController {
    constructor(claimListService) {
        this.claimListService = claimListService;
    }
    ;
    async findAllCancel(status, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findAllCancel(status, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findCancel(req, status, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findCancel(req, page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putCancel(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.putCancelStatus(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllReturn(status, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findAllReturn(page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findReturn(req, status, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findReturn(req, page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putReturn(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.putReturn(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllChange(status, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findChangeAll(page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findChange(req, status, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findChange(req, page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putChange(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.putChange(req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAllRefund(page, pageSize, status, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findRefundAll(page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findRefund(req, page, pageSize, status, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.findRefund(req, page, pageSize, status)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getRefundPopup(orderId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.getRefundPopup(orderId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putRefundPopup(req, orderId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.putRefundData(orderId, req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putRefund(req, orderId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.claimListService.postRefundAction(orderId, req)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/cancel"),
    (0, swagger_1.ApiOperation)({
        summary: "취소 리스트 전체 조회",
        description: "모든 취소 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(11 = 취소요청, 12 = 취소완료)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("status")),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findAllCancel", null);
__decorate([
    (0, common_1.Post)("/cancel"),
    (0, swagger_1.ApiOperation)({
        summary: "취소 리스트 검색내역 조회",
        description: "검색 조건에 따른 취소 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(11 = 취소요청, 12 = 취소완료)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("status")),
    __param(2, (0, common_1.Query)("page")),
    __param(3, (0, common_1.Query)("pageSize")),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCancelListFindDTO_1.ReqCancelListFindDTO, Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findCancel", null);
__decorate([
    (0, common_1.Put)("/cancel/status"),
    (0, swagger_1.ApiOperation)({
        summary: "취소 리스트에서 상태 일괄 변경",
        description: "취소 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderCancelDTO_1.ReqOrderCancelDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "putCancel", null);
__decorate([
    (0, common_1.Get)("/return"),
    (0, swagger_1.ApiOperation)({
        summary: "반품 리스트 전체 조회",
        description: "모든 반품 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(20 = 반품요청, 21 = 반품승인, 22 = 반품회수완료, 23 = 반품확정)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("status")),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findAllReturn", null);
__decorate([
    (0, common_1.Post)("/return"),
    (0, swagger_1.ApiOperation)({
        summary: "반품 리스트 검색내역 조회",
        description: "검색 조건에 따른 반품 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(20 = 반품요청, 21 = 반품승인, 22 = 반품회수완료, 23 = 반품확정)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("status")),
    __param(2, (0, common_1.Query)("page")),
    __param(3, (0, common_1.Query)("pageSize")),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqReturnListFindDTO_1.ReqReturnListFindDTO, Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findReturn", null);
__decorate([
    (0, common_1.Put)("/return/status"),
    (0, swagger_1.ApiOperation)({
        summary: "반품 리스트에서 상태 일괄 변경",
        description: "반품 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderReturnDTO_1.ReqOrderReturnDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "putReturn", null);
__decorate([
    (0, common_1.Get)("/change"),
    (0, swagger_1.ApiOperation)({
        summary: "교환 리스트 전체 조회",
        description: "모든 교환 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(30 = 교환요청, 31 = 교환승인, 32 = 교환회수완료 , 33 = 교환확정)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("status")),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findAllChange", null);
__decorate([
    (0, common_1.Post)("/change"),
    (0, swagger_1.ApiOperation)({
        summary: "교환 리스트 검색내역 조회",
        description: "검색 조건에 따른 교환 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(30 = 교환요청, 31 = 교환승인, 32 = 교환회수완료 , 33 = 교환확정)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("status")),
    __param(2, (0, common_1.Query)("page")),
    __param(3, (0, common_1.Query)("pageSize")),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqChangeListFindDTO_1.ReqChangeListFindDTO, Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findChange", null);
__decorate([
    (0, common_1.Put)("/change/status"),
    (0, swagger_1.ApiOperation)({
        summary: "교환 리스트에서 상태 일괄 변경",
        description: "교환 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderChangeDTO_1.ReqOrderChangeDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "putChange", null);
__decorate([
    (0, common_1.Get)("/refund"),
    (0, swagger_1.ApiOperation)({
        summary: "환불 리스트 전체 조회",
        description: "모든 환불 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(40 = 환불요청, 41 = 환불완료)" }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지", required: false }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Query)("status")),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findAllRefund", null);
__decorate([
    (0, common_1.Post)("/refund"),
    (0, swagger_1.ApiOperation)({
        summary: "환불 리스트 검색내역 조회",
        description: "검색 조건에 따른 환불 리스트를 전체 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiQuery)({ name: "status", description: "페이지 상태(40 = 환불요청, 41 = 환불완료)" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("page")),
    __param(2, (0, common_1.Query)("pageSize")),
    __param(3, (0, common_1.Query)("status")),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqRefundListFindDTO_1.ReqRefundListFindDTO, Number, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "findRefund", null);
__decorate([
    (0, common_1.Get)("/refund/popup"),
    (0, swagger_1.ApiOperation)({
        summary: "환불 리스트 항목에서 환불 버튼 클릭",
        description: "환불 리스트에서 환불 버튼을 클릭합니다,."
    }),
    (0, swagger_1.ApiQuery)({ name: "orderId", description: "환불 요청할 order_id" }),
    __param(0, (0, common_1.Query)("orderId")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "getRefundPopup", null);
__decorate([
    (0, common_1.Put)("/refund/dataChange"),
    (0, swagger_1.ApiOperation)({
        summary: "환불 리스트 팝업에서 데이터 수정",
        description: "팝업에서 데이터를 일괄적으로 수정합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "orderId", description: "환불 요청할 order_id" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("orderId")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderRefundSetDetail_1.ReqOrderRefundSetDetail, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "putRefundPopup", null);
__decorate([
    (0, common_1.Post)("/refund/action"),
    (0, swagger_1.ApiOperation)({
        summary: "환불 리스트에서 실제 환불 요청",
        description: "환불 리스트에서 선택한 항목들의 상태를 일괄 변경합니다"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("orderId")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderRefundSetDetail_1.ReqOrderRefundSetDetail, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderClaimListController.prototype, "putRefund", null);
OrderClaimListController = __decorate([
    (0, common_1.Controller)("admin/shipping"),
    (0, swagger_1.ApiTags)("어드민 - 주문관리 : 취소/반품/교환/환불리스트"),
    __metadata("design:paramtypes", [order_claim_list_service_1.OrderClaimListService])
], OrderClaimListController);
exports.OrderClaimListController = OrderClaimListController;
//# sourceMappingURL=order-claim-list.controller.js.map