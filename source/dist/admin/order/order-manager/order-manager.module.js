"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderManagerModule = void 0;
const common_1 = require("@nestjs/common");
const order_manager_controller_1 = require("./order-manager.controller");
const order_manager_service_1 = require("./order-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const OrderPayment_repository_1 = require("../../../repository/order/OrderPayment.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OrderRefund_repository_1 = require("../../../repository/order/OrderRefund.repository");
const MemberAddress_repository_1 = require("../../../repository/member/MemberAddress.repository");
const ProductOption_repository_1 = require("../../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../../repository/product/ProductOptionDetail.repository");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
const DeliveryCompany_repository_1 = require("../../../repository/delivery/DeliveryCompany.repository");
const OrderHistory_repository_1 = require("../../../repository/order/OrderHistory.repository");
let OrderManagerModule = class OrderManagerModule {
};
OrderManagerModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_manager_controller_1.OrderManagerController],
        providers: [order_manager_service_1.OrderManagerService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                OrderDetail_repository_1.OrderDetailRepository,
                OrderMain_repository_1.OrderMainRepository,
                OrderPayment_repository_1.OrderPaymentRepository,
                Member_repository_1.MemberRepository,
                OrderRefund_repository_1.OrderRefundRepository,
                MemberAddress_repository_1.MemberAddressRepository,
                ProductOption_repository_1.ProductOptionRepository,
                ProductOptionDetail_repository_1.ProductOptionDetailRepository,
                ProductBrand_repository_1.ProductBrandRepository,
                DeliveryCompany_repository_1.DeliveryCompanyRepository,
                OrderHistory_repository_1.OrderHistoryRepository
            ])]
    })
], OrderManagerModule);
exports.OrderManagerModule = OrderManagerModule;
//# sourceMappingURL=order-manager.module.js.map