"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppyPointModule = void 0;
const common_1 = require("@nestjs/common");
const puppy_point_controller_1 = require("./puppy-point.controller");
const puppy_point_service_1 = require("./puppy-point.service");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const MemberMileageLog_repository_1 = require("../../repository/member/MemberMileageLog.repository");
const Coupon_repository_1 = require("../../repository/coupon/Coupon.repository");
const CouponToMemberGroup_repository_1 = require("../../repository/coupon/CouponToMemberGroup.repository");
const CouponToMember_repository_1 = require("../../repository/coupon/CouponToMember.repository");
const CouponToProductClass_repository_1 = require("../../repository/coupon/CouponToProductClass.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const CouponToProduct_repository_1 = require("../../repository/coupon/CouponToProduct.repository");
let PuppyPointModule = class PuppyPointModule {
};
PuppyPointModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Member_repository_1.MemberRepository,
                MemberMileage_repository_1.MemberMileageRepository,
                MemberMileageLog_repository_1.MemberMileageLogRepository,
                Coupon_repository_1.CouponRepository,
                CouponToMemberGroup_repository_1.CouponToMemberGroupRepository,
                CouponToMember_repository_1.CouponToMemberRepository,
                CouponToProductClass_repository_1.CouponToProductClassRepository,
                ProductClass_repository_1.ProductClassRepository,
                CouponToProduct_repository_1.CouponToProductRepository
            ])],
        controllers: [puppy_point_controller_1.PuppyPointController],
        providers: [puppy_point_service_1.PuppyPointService]
    })
], PuppyPointModule);
exports.PuppyPointModule = PuppyPointModule;
//# sourceMappingURL=puppy-point.module.js.map