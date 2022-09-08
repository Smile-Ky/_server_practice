"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearchTabService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const ProductToClass_repository_1 = require("../../../repository/product/ProductToClass.repository");
const ProductOption_repository_1 = require("../../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../../repository/product/ProductOptionDetail.repository");
const ProductIconToProduct_repository_1 = require("../../../repository/product/ProductIconToProduct.repository");
const ProductIcon_repository_1 = require("../../../repository/product/ProductIcon.repository");
const ProductRelated_repository_1 = require("../../../repository/product/ProductRelated.repository");
const ProductImage_repository_1 = require("../../../repository/product/ProductImage.repository");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
const ProductSearchKeyword_repository_1 = require("../../../repository/product/ProductSearchKeyword.repository");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
const respones_1 = require("../../../common/respones");
let ProductSearchTabService = class ProductSearchTabService {
    constructor(productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository) {
        this.productRepository = productRepository;
        this.productToClassRepository = productToClassRepository;
        this.productOptionRepository = productOptionRepository;
        this.productOptionDetailRepository = productOptionDetailRepository;
        this.productIconToProductRepository = productIconToProductRepository;
        this.productIconRepository = productIconRepository;
        this.productRelatedRepository = productRelatedRepository;
        this.productImageRepository = productImageRepository;
        this.productBrandRepository = productBrandRepository;
        this.productSearchKeywordRepository = productSearchKeywordRepository;
        this.productClassRepository = productClassRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_main = 1')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id');
            const totalData = (await result.select('COUNT(po.product_option_id) AS `cnt`').execute()).length;
            result.select([
                'product.product_id as product_id',
                'product_option_id',
                'product_code',
                'image_url as product_url',
                `product_name as product_name`,
                'brand_name as product_brand_name',
                'product_price',
                'product_sale_price',
                'product_sale_state',
                'is_show'
            ]);
            return {
                data: await result
                    .orderBy('product.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(Number(totalData), page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/product/tab : ${error}`);
            throw error.driverError;
        }
    }
    async find(data, page, pageSize) {
        try {
            const result = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_main = 1')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id')
                .innerJoin('product_to_class', 'ptc', 'product.product_id = ptc.product_id AND ptc.is_main = 1');
            if (data.product_class_id !== "") {
                result.andWhere('ptc.product_class_id = :class_id', { class_id: data.product_class_id });
            }
            switch (data.product_find_type) {
                case "0":
                    result.andWhere('product.product_name like :text', { text: `%${data.product_find_text}%` });
                    break;
                case "1":
                    result.andWhere('product.product_code like :text', { text: `%${data.product_find_text}%` });
                    break;
            }
            const totalData = (await result.select('COUNT(po.product_option_id) AS `cnt`').execute()).length;
            result.select([
                'product.product_id as product_id',
                'product_option_id',
                'product_code',
                'image_url as product_url',
                `product_name as product_name`,
                'brand_name as product_brand_name',
                'product_sale_price',
                'product_sale_state',
                'is_show'
            ]);
            return {
                data: await result
                    .orderBy('product.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(Number(totalData), page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/product/tab : ${error}`);
            throw error.driverError;
        }
    }
    async productFind(productId) {
        try {
            const result = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_main = 1')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id');
            result.select([
                'product.product_id as product_id',
                'product_option_id',
                'product_code',
                'image_url as product_url',
                `product_name as product_name`,
                'brand_name as product_brand_name',
                'product_price',
                'product_sale_price',
                'product_sale_state',
                'is_show'
            ]);
            result.andWhere('product.product_id in (:list)', { list: productId });
            return {
                data: await result
                    .orderBy('product.create_date', 'DESC')
                    .execute()
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/product/tab : ${error}`);
            throw error.driverError;
        }
    }
    async productOption(productId) {
        try {
            const result = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .leftJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_delete = false')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id');
            result.select([
                'product.product_id as product_id',
                'product_option_id',
                'product_code',
                'image_url as product_url',
                `CONCAT(product_name, '/', group_concat( pod.value separator '/' )) as product_name`,
                'brand_name as product_brand_name',
                'product_price',
                'product_sale_price',
                'product_sale_state',
                'is_show'
            ]);
            result.andWhere('product.product_id in (:list)', { list: productId });
            return {
                data: await result
                    .orderBy('product.create_date', 'DESC')
                    .execute()
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/product/tab : ${error}`);
            throw error.driverError;
        }
    }
};
ProductSearchTabService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductToClass_repository_1.ProductToClassRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ProductIconToProduct_repository_1.ProductIconToProductRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(ProductIcon_repository_1.ProductIconRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(ProductRelated_repository_1.ProductRelatedRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductImage_repository_1.ProductImageRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(ProductSearchKeyword_repository_1.ProductSearchKeywordRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __metadata("design:paramtypes", [Product_repository_1.ProductRepository,
        ProductToClass_repository_1.ProductToClassRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductOptionDetail_repository_1.ProductOptionDetailRepository,
        ProductIconToProduct_repository_1.ProductIconToProductRepository,
        ProductIcon_repository_1.ProductIconRepository,
        ProductRelated_repository_1.ProductRelatedRepository,
        ProductImage_repository_1.ProductImageRepository,
        ProductBrand_repository_1.ProductBrandRepository,
        ProductSearchKeyword_repository_1.ProductSearchKeywordRepository,
        ProductClass_repository_1.ProductClassRepository])
], ProductSearchTabService);
exports.ProductSearchTabService = ProductSearchTabService;
//# sourceMappingURL=product-search-tab.service.js.map