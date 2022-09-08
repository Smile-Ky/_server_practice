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
exports.OrderManagerController = void 0;
const common_1 = require("@nestjs/common");
const order_manager_service_1 = require("./order-manager.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ReqUserUpdateDTO_1 = require("./DTO/ReqUserUpdateDTO");
const ReqOrderStatusChangeDTO_1 = require("./DTO/ReqOrderStatusChangeDTO");
const ReqOrderStatusChangePageDTO_1 = require("./DTO/ReqOrderStatusChangePageDTO");
const ReqOrderChangeFuncDTO_1 = require("./DTO/ReqOrderChangeFuncDTO");
const ReqOrderStatusChangeDepositDTO_1 = require("./DTO/ReqOrderStatusChangeDepositDTO");
let OrderManagerController = class OrderManagerController {
    constructor(orderManagerService) {
        this.orderManagerService = orderManagerService;
    }
    async findOrderDetail(orderCode, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.getSelectOrder(orderCode) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async orderSeparation(ReqOrderSeparationData, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.postSeperateOrders(ReqOrderSeparationData) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putOrderUserUpdate(userUpdateDTO, res, orderCode) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.putOrderUserData(orderCode, userUpdateDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async manualStatusChange(reqOrderStatusChangeDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.putStateChange(reqOrderStatusChangeDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async manualStatusChangeDeposit(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.putStateChangeDeposit(req) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findChangeRecord(orderId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.findChangeRecord(orderId) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findChangeRecordByOrder(orderId, orderDetailId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.findChangeRecordByOrder(orderId, orderDetailId) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async postChangePageOn(reqOrderStatusChangePageDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.postChangePageOn(reqOrderStatusChangePageDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async postChangePageRun(reqOrderChangeFuncDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderManagerService.postChangePageRun(reqOrderChangeFuncDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/:orderCode"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 상세 조회",
        description: "요청 온 주문 번호에 해당하는 상세 주문 내용을 조회합니다. [주문 리스트에서 주문 번호를 클릭 시, 호출 되는 API]"
    }),
    (0, swagger_1.ApiParam)({ name: "orderCode", description: "주문 번호" }),
    __param(0, (0, common_1.Param)("orderCode")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "findOrderDetail", null);
__decorate([
    (0, common_1.Post)("/order/separation"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 분할",
        description: "요청 온 개벌 주문 건을 분할"
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: { order: "기존 주문 ID", new_order: "새로 생성 된 한 주문 ID" } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "orderSeparation", null);
__decorate([
    (0, common_1.Put)("/user/update/:orderCode"),
    (0, swagger_1.ApiOperation)({
        summary: "주문자 정보 수정",
        description: "주문 관리 > 주문자 정보 수정"
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: { order_code: "수정한 주문 ID" } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Param)("orderCode")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUserUpdateDTO_1.ReqUserUpdateDTO, Object, String]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "putOrderUserUpdate", null);
__decorate([
    (0, common_1.Put)("/order/state/change"),
    (0, swagger_1.ApiOperation)({
        summary: "수동 상태 변경",
        description: "수동 상태 변경 : 배송준비중(2), 배송중(4), 배송완료(5) -> 변경 내역 반영"
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: { order_id: "수정한 주문 ID" } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderStatusChangeDTO_1.ReqOrderStatusChangeDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "manualStatusChange", null);
__decorate([
    (0, common_1.Put)("/order/state/change/deposit"),
    (0, swagger_1.ApiOperation)({
        summary: "수동 상태 변경(입금예정 -> 입금 확인)",
        description: ""
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: { order_id: "변경이 완료되었습니다." } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderStatusChangeDepositDTO_1.ReqOrderStatusChangeDepositDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "manualStatusChangeDeposit", null);
__decorate([
    (0, common_1.Get)("/change/record/all/:orderId"),
    (0, swagger_1.ApiOperation)({
        summary: "변경 내역 조회 : 주문 별로",
        description: "해당 주문에 변경 된 내역을 조회합니다."
    }),
    (0, swagger_1.ApiParam)({ name: "orderId", description: "주문 번호" }),
    (0, swagger_1.ApiResponse)({ type: "" }),
    __param(0, (0, common_1.Param)("orderId")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "findChangeRecord", null);
__decorate([
    (0, common_1.Get)("/change/record/:orderId/:orderDetailId"),
    (0, swagger_1.ApiOperation)({
        summary: "변경 내역 조회 : 주문 상세 번호 별로",
        description: "해당 주문에 변경 된 내역을 조회합니다."
    }),
    (0, swagger_1.ApiParam)({ name: "orderId", description: "주문 번호" }),
    (0, swagger_1.ApiParam)({ name: "orderDetailId", description: "주문 상세 번호" }),
    (0, swagger_1.ApiResponse)({ type: "" }),
    __param(0, (0, common_1.Param)("orderId")),
    __param(1, (0, common_1.Param)("orderDetailId")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "findChangeRecordByOrder", null);
__decorate([
    (0, common_1.Post)("/order/change/page"),
    (0, swagger_1.ApiOperation)({
        summary: "교환/취소/환불 - 페이지 진입",
        description: "교환/취소/환불 신청한 항목에 대해 교환 값 체크"
    }),
    (0, swagger_1.ApiResponse)({ type: "" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderStatusChangePageDTO_1.ReqOrderStatusChangePageDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "postChangePageOn", null);
__decorate([
    (0, common_1.Post)("/order/change/claim"),
    (0, swagger_1.ApiOperation)({
        summary: "교환/취소/환불 - 실제 액션",
        description: "교환/취소/환불 신청한 항목에 대해 교환 값 체크"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderChangeFuncDTO_1.ReqOrderChangeFuncDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderManagerController.prototype, "postChangePageRun", null);
OrderManagerController = __decorate([
    (0, common_1.Controller)("/admin/order/manager"),
    (0, swagger_1.ApiTags)("어드민 - 주문관리 : 주문관리 [ 77 페이지 ]"),
    __metadata("design:paramtypes", [order_manager_service_1.OrderManagerService])
], OrderManagerController);
exports.OrderManagerController = OrderManagerController;
//# sourceMappingURL=order-manager.controller.js.map