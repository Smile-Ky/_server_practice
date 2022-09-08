"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRefundListModule = void 0;
const common_1 = require("@nestjs/common");
const order_refund_list_controller_1 = require("./order-refund-list.controller");
const order_refund_list_service_1 = require("./order-refund-list.service");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
let OrderRefundListModule = class OrderRefundListModule {
};
OrderRefundListModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_refund_list_controller_1.OrderRefundListController],
        providers: [order_refund_list_service_1.OrderRefundListService],
        imports: [typeorm_1.TypeOrmModule.forFeature([OrderMain_repository_1.OrderMainRepository, OrderDetail_repository_1.OrderDetailRepository])],
    })
], OrderRefundListModule);
exports.OrderRefundListModule = OrderRefundListModule;
//# sourceMappingURL=order-refund-list.module.js.map