"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const my_page_info_service_1 = require("./my-page-info.service");
const my_page_controller_1 = require("./my-page.controller");
const my_page_service_1 = require("./my-page.service");
const OrderDetail_repository_1 = require("../../repository/order/OrderDetail.repository");
const OrderMain_repository_1 = require("../../repository/order/OrderMain.repository");
const OrderPayment_repository_1 = require("../../repository/order/OrderPayment.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const OrderRefund_repository_1 = require("../../repository/order/OrderRefund.repository");
const MemberAddress_repository_1 = require("../../repository/member/MemberAddress.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../repository/product/ProductOptionDetail.repository");
const ProductBrand_repository_1 = require("../../repository/product/ProductBrand.repository");
const DeliveryCompany_repository_1 = require("../../repository/delivery/DeliveryCompany.repository");
const OrderHistory_repository_1 = require("../../repository/order/OrderHistory.repository");
const OfflineCouponInstance_repository_1 = require("../../repository/offline-coupon/OfflineCouponInstance.repository");
const CouponToProduct_repository_1 = require("../../repository/coupon/CouponToProduct.repository");
const Coupon_repository_1 = require("../../repository/coupon/Coupon.repository");
const ReviewImage_repository_1 = require("../../repository/review/ReviewImage.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const ReviewSetting_repository_1 = require("../../repository/review/ReviewSetting.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const MemberMileageLog_repository_1 = require("../../repository/member/MemberMileageLog.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
const Product_repository_1 = require("../../repository/product/Product.repository");
const Banner_repository_1 = require("../../repository/banner/Banner.repository");
let MyPageModule = class MyPageModule {
};
MyPageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                OrderDetail_repository_1.OrderDetailRepository,
                OrderMain_repository_1.OrderMainRepository,
                OrderPayment_repository_1.OrderPaymentRepository,
                Member_repository_1.MemberRepository,
                OrderRefund_repository_1.OrderRefundRepository,
                OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository,
                CouponToProduct_repository_1.CouponToProductRepository,
                Coupon_repository_1.CouponRepository,
                ReviewImage_repository_1.ReviewImageRepository,
                MemberAddress_repository_1.MemberAddressRepository,
                ProductOption_repository_1.ProductOptionRepository,
                ProductOptionDetail_repository_1.ProductOptionDetailRepository,
                ProductBrand_repository_1.ProductBrandRepository,
                DeliveryCompany_repository_1.DeliveryCompanyRepository,
                OrderHistory_repository_1.OrderHistoryRepository,
                MemberPet_repository_1.MemberPetRepository,
                ReviewSetting_repository_1.ReviewSettingRepository,
                Review_repository_1.ReviewRepository,
                MemberPet_repository_1.MemberPetRepository,
                MemberMileage_repository_1.MemberMileageRepository,
                MemberMileageLog_repository_1.MemberMileageLogRepository,
                ProductLike_repository_1.ProductLikeRepository,
                Product_repository_1.ProductRepository,
                Banner_repository_1.BannerRepository
            ])],
        controllers: [my_page_controller_1.MyPageController],
        providers: [my_page_service_1.MyPageService, my_page_info_service_1.MyPageInfoService]
    })
], MyPageModule);
exports.MyPageModule = MyPageModule;
//# sourceMappingURL=my-page.module.js.map