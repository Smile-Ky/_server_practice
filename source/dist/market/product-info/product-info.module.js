"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInfoModule = void 0;
const common_1 = require("@nestjs/common");
const product_info_controller_1 = require("./product-info.controller");
const product_info_service_1 = require("./product-info.service");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../repository/product/Product.repository");
const ProductImage_repository_1 = require("../../repository/product/ProductImage.repository");
const ProductToClass_repository_1 = require("../../repository/product/ProductToClass.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../repository/product/ProductOptionDetail.repository");
const ProductIconToProduct_repository_1 = require("../../repository/product/ProductIconToProduct.repository");
const ProductIcon_repository_1 = require("../../repository/product/ProductIcon.repository");
const ProductRelated_repository_1 = require("../../repository/product/ProductRelated.repository");
const ProductBrand_repository_1 = require("../../repository/product/ProductBrand.repository");
const ProductSearchKeyword_repository_1 = require("../../repository/product/ProductSearchKeyword.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const MemberGroup_repository_1 = require("../../repository/member/MemberGroup.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const QueryProduct_repository_1 = require("../../repository/query/QueryProduct.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
const Keyword_repository_1 = require("../../repository/keyword/Keyword.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const Banner_repository_1 = require("../../repository/banner/Banner.repository");
let ProductInfoModule = class ProductInfoModule {
};
ProductInfoModule = __decorate([
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
                Member_repository_1.MemberRepository,
                MemberGroup_repository_1.MemberGroupRepository,
                QueryProduct_repository_1.QueryProductRepository,
                ProductLike_repository_1.ProductLikeRepository,
                Keyword_repository_1.KeywordRepository,
                Review_repository_1.ReviewRepository,
                Banner_repository_1.BannerRepository
            ])],
        controllers: [product_info_controller_1.ProductInfoController],
        providers: [product_info_service_1.ProductInfoService]
    })
], ProductInfoModule);
exports.ProductInfoModule = ProductInfoModule;
//# sourceMappingURL=product-info.module.js.map