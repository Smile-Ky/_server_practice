"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOrderModule = void 0;
const common_1 = require("@nestjs/common");
const user_order_controller_1 = require("./user-order.controller");
const user_order_service_1 = require("./user-order.service");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../repository/product/Product.repository");
const Cart_repository_1 = require("../../repository/cart/Cart.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
const OrderMain_repository_1 = require("../../repository/order/OrderMain.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberAddress_repository_1 = require("../../repository/member/MemberAddress.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const CouponToMember_repository_1 = require("../../repository/coupon/CouponToMember.repository");
const OfflineCouponInstance_repository_1 = require("../../repository/offline-coupon/OfflineCouponInstance.repository");
let UserOrderModule = class UserOrderModule {
};
UserOrderModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Product_repository_1.ProductRepository,
                ProductClass_repository_1.ProductClassRepository,
                ProductLike_repository_1.ProductLikeRepository,
                Cart_repository_1.CartRepository,
                OrderMain_repository_1.OrderMainRepository,
                Member_repository_1.MemberRepository,
                MemberAddress_repository_1.MemberAddressRepository,
                MemberMileage_repository_1.MemberMileageRepository,
                CouponToMember_repository_1.CouponToMemberRepository,
                OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository
            ])],
        controllers: [user_order_controller_1.UserOrderController],
        providers: [user_order_service_1.UserOrderService]
    })
], UserOrderModule);
exports.UserOrderModule = UserOrderModule;
//# sourceMappingURL=user-order.module.js.map