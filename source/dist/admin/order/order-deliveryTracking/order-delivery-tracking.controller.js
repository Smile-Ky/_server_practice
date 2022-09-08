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
exports.OrderDeliveryTrackingController = void 0;
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const swagger_1 = require("@nestjs/swagger");
const order_delivery_tracking_service_1 = require("./order-delivery-tracking.service");
const ResTrackerResultDTO_1 = require("./DTO/ResTrackerResultDTO");
let OrderDeliveryTrackingController = class OrderDeliveryTrackingController {
    constructor(orderDeliveryTrackingService) {
        this.orderDeliveryTrackingService = orderDeliveryTrackingService;
    }
    async postTracking(resTrackerResultDTO, res) {
        try {
            return this.orderDeliveryTrackingService.postTrackingStatus(resTrackerResultDTO);
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Post)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "스마트택배 트래킹 API",
        description: "트래킹 걸어놓은 운송장 번호에 대한 콜백(프론트 사용용도 아님)"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ResTrackerResultDTO_1.ResTrackerResultDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderDeliveryTrackingController.prototype, "postTracking", null);
OrderDeliveryTrackingController = __decorate([
    (0, common_1.Controller)("admin/order/tracking"),
    (0, swagger_1.ApiTags)(""),
    __metadata("design:paramtypes", [order_delivery_tracking_service_1.OrderDeliveryTrackingService])
], OrderDeliveryTrackingController);
exports.OrderDeliveryTrackingController = OrderDeliveryTrackingController;
//# sourceMappingURL=order-delivery-tracking.controller.js.map