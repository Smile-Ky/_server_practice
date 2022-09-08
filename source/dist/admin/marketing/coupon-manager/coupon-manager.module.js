"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponManagerModule = void 0;
const common_1 = require("@nestjs/common");
const coupon_manager_controller_1 = require("./coupon-manager.controller");
const coupon_manager_service_1 = require("./coupon-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const Coupon_repository_1 = require("../../../repository/coupon/Coupon.repository");
const CouponToMemberGroup_repository_1 = require("../../../repository/coupon/CouponToMemberGroup.repository");
const CouponToMember_repository_1 = require("../../../repository/coupon/CouponToMember.repository");
const CouponToProductClass_repository_1 = require("../../../repository/coupon/CouponToProductClass.repository");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
const CouponToProduct_repository_1 = require("../../../repository/coupon/CouponToProduct.repository");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
let CouponManagerModule = class CouponManagerModule {
};
CouponManagerModule = __decorate([
    (0, common_1.Module)({
        controllers: [coupon_manager_controller_1.CouponManagerController],
        providers: [coupon_manager_service_1.CouponManagerService],
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Coupon_repository_1.CouponRepository,
                CouponToMemberGroup_repository_1.CouponToMemberGroupRepository,
                CouponToMember_repository_1.CouponToMemberRepository,
                CouponToProductClass_repository_1.CouponToProductClassRepository,
                ProductClass_repository_1.ProductClassRepository,
                CouponToProduct_repository_1.CouponToProductRepository,
                Product_repository_1.ProductRepository,
                MemberGroup_repository_1.MemberGroupRepository,
                Member_repository_1.MemberRepository
            ])]
    })
], CouponManagerModule);
exports.CouponManagerModule = CouponManagerModule;
//# sourceMappingURL=coupon-manager.module.js.map