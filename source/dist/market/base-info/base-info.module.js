"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseInfoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Banner_repository_1 = require("../../repository/banner/Banner.repository");
const Cart_repository_1 = require("../../repository/cart/Cart.repository");
const MainDisplayToProduct_repository_1 = require("../../repository/main-display/MainDisplayToProduct.repository");
const MainDisplayToProductClass_repository_1 = require("../../repository/main-display/MainDisplayToProductClass.repository");
const AgreeInfo_repository_1 = require("../../repository/main/AgreeInfo.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const PlanEvent_repository_1 = require("../../repository/plan/PlanEvent.repository");
const PlanEventToProduct_repository_1 = require("../../repository/plan/PlanEventToProduct.repository");
const Product_repository_1 = require("../../repository/product/Product.repository");
const ProductBest_repository_1 = require("../../repository/product/ProductBest.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const base_info_controller_1 = require("./base-info.controller");
const base_info_service_1 = require("./base-info.service");
const TopDisplayList_repository_1 = require("../../repository/top-display/TopDisplayList.repository");
const MainDisplayList_repository_1 = require("../../repository/main-display/MainDisplayList.repository");
let BaseInfoModule = class BaseInfoModule {
};
BaseInfoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Product_repository_1.ProductRepository,
                ProductOption_repository_1.ProductOptionRepository,
                ProductClass_repository_1.ProductClassRepository,
                Member_repository_1.MemberRepository,
                MemberPet_repository_1.MemberPetRepository,
                Cart_repository_1.CartRepository,
                PlanEvent_repository_1.PlanEventRepository,
                PlanEventToProduct_repository_1.PlanEventToProductRepository,
                ProductBest_repository_1.ProductBestRepository,
                AgreeInfo_repository_1.AgreeInfoRepository,
                MainDisplayToProductClass_repository_1.MainDisplayToProductClassRepository,
                MainDisplayToProduct_repository_1.MainDisplayToProductRepository,
                Banner_repository_1.BannerRepository,
                TopDisplayList_repository_1.TopDisplayListRepository,
                MainDisplayList_repository_1.MainDisplayListRepository
            ])],
        controllers: [base_info_controller_1.BaseInfoController],
        providers: [base_info_service_1.BaseInfoService]
    })
], BaseInfoModule);
exports.BaseInfoModule = BaseInfoModule;
//# sourceMappingURL=base-info.module.js.map