"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderClaimListModule = void 0;
const common_1 = require("@nestjs/common");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const typeorm_1 = require("@nestjs/typeorm");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OrderDeposit_repository_1 = require("../../../repository/order/OrderDeposit.repository");
const order_claim_list_controller_1 = require("./order-claim-list.controller");
const order_claim_list_service_1 = require("./order-claim-list.service");
const OrderRefund_repository_1 = require("../../../repository/order/OrderRefund.repository");
let OrderClaimListModule = class OrderClaimListModule {
};
OrderClaimListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                OrderMain_repository_1.OrderMainRepository,
                OrderDetail_repository_1.OrderDetailRepository,
                Member_repository_1.MemberRepository,
                OrderDeposit_repository_1.OrderDepositRepository,
                OrderRefund_repository_1.OrderRefundRepository
            ])],
        controllers: [order_claim_list_controller_1.OrderClaimListController],
        providers: [order_claim_list_service_1.OrderClaimListService]
    })
], OrderClaimListModule);
exports.OrderClaimListModule = OrderClaimListModule;
//# sourceMappingURL=order-claim-list.module.js.map