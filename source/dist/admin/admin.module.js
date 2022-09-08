"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const brand_manager_module_1 = require("./product/brand-manager/brand-manager.module");
const home_module_1 = require("./home/home.module");
const product_class_manager_module_1 = require("./product/product-class-manager/product-class-manager.module");
const icon_manager_module_1 = require("./product/icon-manager/icon-manager.module");
const member_manger_module_1 = require("./member/member-manger/member-manger.module");
const member_group_module_1 = require("./member/member-group/member-group.module");
const member_mileage_module_1 = require("./member/member-mileage/member-mileage.module");
const member_batches_module_1 = require("./member/member-batches/member-batches.module");
const product_manager_module_1 = require("./product/product-manager/product-manager.module");
const product_discount_batches_module_1 = require("./product/product-discount-batches/product-discount-batches.module");
const order_list_module_1 = require("./order/order-list/order-list.module");
const order_refund_list_module_1 = require("./order/order-refundList/order-refund-list.module");
const order_manager_module_1 = require("./order/order-manager/order-manager.module");
const coupon_setting_module_1 = require("./marketing/coupon-setting/coupon-setting.module");
const coupon_manager_module_1 = require("./marketing/coupon-manager/coupon-manager.module");
const offline_coupon_manager_module_1 = require("./marketing/offline-coupon-manager/offline-coupon-manager.module");
const marketing_keyword_module_1 = require("./marketing/marketing-keyword/marketing-keyword.module");
const admin_login_module_1 = require("./admin-login/admin-login.module");
const product_batches_module_1 = require("./product/product-batches/product-batches.module");
const product_search_tab_module_1 = require("./product/product-search-tab/product-search-tab.module");
const delivery_company_module_1 = require("./delivery-company/delivery-company.module");
const order_memo_module_1 = require("./order/order-memo/order-memo.module");
const token_middleware_1 = require("../common/token.middleware");
const main_display_list_module_1 = require("./event/main-display-list/main-display-list.module");
const top_display_list_module_1 = require("./event/top-display-list/top-display-list.module");
const order_delivery_module_1 = require("./order/order-delivery-status/order-delivery.module");
const banner_manager_module_1 = require("./event/banner-manager/banner-manager.module");
const plan_event_manager_module_1 = require("./event/plan-event-manager/plan-event-manager.module");
const faq_query_module_1 = require("./customer-center/faq-query/faq-query.module");
const notice_module_1 = require("./customer-center/notice/notice.module");
const one_to_one_query_module_1 = require("./customer-center/one-to-one-query/one-to-one-query.module");
const product_query_module_1 = require("./customer-center/product-query/product-query.module");
const product_review_list_module_1 = require("./customer-center/product-review-list/product-review-list.module");
const order_claim_list_module_1 = require("./order/order-claimList/order-claim-list.module");
const product_review_setting_module_1 = require("./customer-center/product-review-setting/product-review-setting.module");
const excel_download_module_1 = require("./excel/excel-download/excel-download.module");
let AdminModule = class AdminModule {
    configure(consumer) {
        consumer.apply(token_middleware_1.TokenMiddleware).forRoutes("*");
    }
};
AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            home_module_1.HomeModule,
            admin_login_module_1.AdminLoginModule,
            member_manger_module_1.MemberMangerModule,
            member_group_module_1.MemberGroupModule,
            member_mileage_module_1.MemberMileageModule,
            member_batches_module_1.MemberBatchesModule,
            brand_manager_module_1.BrandManagerModule,
            product_class_manager_module_1.ProductClassMangerModule,
            icon_manager_module_1.IconManagerModule,
            product_manager_module_1.ProductManagerModule,
            product_batches_module_1.ProductBatchesModule,
            product_discount_batches_module_1.ProductDiscountBatchesModule,
            product_search_tab_module_1.ProductSearchTabModule,
            order_list_module_1.OrderListModule,
            order_refund_list_module_1.OrderRefundListModule,
            order_manager_module_1.OrderManagerModule,
            order_memo_module_1.OrderMemoModule,
            order_delivery_module_1.OrderDeliveryModule,
            order_claim_list_module_1.OrderClaimListModule,
            coupon_setting_module_1.CouponSettingModule,
            coupon_manager_module_1.CouponManagerModule,
            offline_coupon_manager_module_1.OfflineCouponManagerModule,
            marketing_keyword_module_1.MarketingKeywordModule,
            delivery_company_module_1.DeliveryCompanyModule,
            main_display_list_module_1.MainDisplayListModule,
            top_display_list_module_1.TopDisplayListModule,
            banner_manager_module_1.BannerManagerModule,
            plan_event_manager_module_1.PlanEventManagerModule,
            notice_module_1.NoticeModule,
            faq_query_module_1.FaqQueryModule,
            one_to_one_query_module_1.OneToOneQueryModule,
            product_query_module_1.ProductQueryModule,
            product_review_list_module_1.ProductReviewListModule,
            product_review_setting_module_1.ProductReviewSettingModule,
            excel_download_module_1.ExcelDownloadModule
        ],
        controllers: [],
        providers: [],
    })
], AdminModule);
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map