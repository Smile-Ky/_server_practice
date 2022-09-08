"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDeliveryTrackingModule = void 0;
const common_1 = require("@nestjs/common");
const order_delivery_tracking_controller_1 = require("./order-delivery-tracking.controller");
const order_delivery_tracking_service_1 = require("./order-delivery-tracking.service");
const typeorm_1 = require("@nestjs/typeorm");
const order_manager_module_1 = require("../order-manager/order-manager.module");
let OrderDeliveryTrackingModule = class OrderDeliveryTrackingModule {
};
OrderDeliveryTrackingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_manager_module_1.OrderManagerModule])],
        controllers: [order_delivery_tracking_controller_1.OrderDeliveryTrackingController],
        providers: [order_delivery_tracking_service_1.OrderDeliveryTrackingService]
    })
], OrderDeliveryTrackingModule);
exports.OrderDeliveryTrackingModule = OrderDeliveryTrackingModule;
//# sourceMappingURL=order-delivery-tracking.module.js.map