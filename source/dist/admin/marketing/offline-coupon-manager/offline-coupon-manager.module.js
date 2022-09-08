"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfflineCouponManagerModule = void 0;
const common_1 = require("@nestjs/common");
const offline_coupon_manager_controller_1 = require("./offline-coupon-manager.controller");
const offline_coupon_manager_service_1 = require("./offline-coupon-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const Coupon_repository_1 = require("../../../repository/coupon/Coupon.repository");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OfflineCouponToCoupon_repository_1 = require("../../../repository/offline-coupon/OfflineCouponToCoupon.repository");
const OfflineCouponInstance_repository_1 = require("../../../repository/offline-coupon/OfflineCouponInstance.repository");
const OfflineCoupon_repository_1 = require("../../../repository/offline-coupon/OfflineCoupon.repository");
let OfflineCouponManagerModule = class OfflineCouponManagerModule {
};
OfflineCouponManagerModule = __decorate([
    (0, common_1.Module)({
        controllers: [offline_coupon_manager_controller_1.OfflineCouponManagerController],
        providers: [offline_coupon_manager_service_1.OfflineCouponManagerService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Product_repository_1.ProductRepository,
                MemberGroup_repository_1.MemberGroupRepository,
                Member_repository_1.MemberRepository,
                Coupon_repository_1.CouponRepository,
                OfflineCouponToCoupon_repository_1.OfflineCouponToCouponRepository,
                OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository,
                OfflineCoupon_repository_1.OfflineCouponRepository
            ])]
    })
], OfflineCouponManagerModule);
exports.OfflineCouponManagerModule = OfflineCouponManagerModule;
//# sourceMappingURL=offline-coupon-manager.module.js.map