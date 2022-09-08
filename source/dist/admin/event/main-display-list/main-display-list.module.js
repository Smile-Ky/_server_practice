"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainDisplayListModule = void 0;
const common_1 = require("@nestjs/common");
const main_display_list_controller_1 = require("./main-display-list.controller");
const main_display_list_service_1 = require("./main-display-list.service");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const ProductImage_repository_1 = require("../../../repository/product/ProductImage.repository");
const ProductToClass_repository_1 = require("../../../repository/product/ProductToClass.repository");
const ProductOption_repository_1 = require("../../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../../repository/product/ProductOptionDetail.repository");
const ProductIconToProduct_repository_1 = require("../../../repository/product/ProductIconToProduct.repository");
const ProductIcon_repository_1 = require("../../../repository/product/ProductIcon.repository");
const ProductRelated_repository_1 = require("../../../repository/product/ProductRelated.repository");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
const ProductSearchKeyword_repository_1 = require("../../../repository/product/ProductSearchKeyword.repository");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const MainDisplayList_repository_1 = require("../../../repository/main-display/MainDisplayList.repository");
const MainDisplayToProduct_repository_1 = require("../../../repository/main-display/MainDisplayToProduct.repository");
const MainDisplayToProductClass_repository_1 = require("../../../repository/main-display/MainDisplayToProductClass.repository");
let MainDisplayListModule = class MainDisplayListModule {
};
MainDisplayListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Product_repository_1.ProductRepository,
                ProductImage_repository_1.ProductImageRepository,
                ProductToClass_repository_1.ProductToClassRepository,
                ProductOption_repository_1.ProductOptionRepository,
                ProductOptionDetail_repository_1.ProductOptionDetailRepository,
                ProductIconToProduct_repository_1.ProductIconToProductRepository,
                ProductIcon_repository_1.ProductIconRepository,
                ProductRelated_repository_1.ProductRelatedRepository,
                ProductBrand_repository_1.ProductBrandRepository,
                ProductSearchKeyword_repository_1.ProductSearchKeywordRepository,
                ProductClass_repository_1.ProductClassRepository,
                MemberGroup_repository_1.MemberGroupRepository,
                MainDisplayList_repository_1.MainDisplayListRepository,
                MainDisplayToProduct_repository_1.MainDisplayToProductRepository,
                MainDisplayToProductClass_repository_1.MainDisplayToProductClassRepository
            ])],
        controllers: [main_display_list_controller_1.MainDisplayListController],
        providers: [main_display_list_service_1.MainDisplayListService]
    })
], MainDisplayListModule);
exports.MainDisplayListModule = MainDisplayListModule;
//# sourceMappingURL=main-display-list.module.js.map