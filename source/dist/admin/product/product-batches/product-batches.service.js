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
exports.ProductBatchesService = void 0;
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
const CouponToProduct_repository_1 = require("../../../repository/coupon/CouponToProduct.repository");
const ProductDisToProduct_repository_1 = require("../../../repository/product/ProductDisToProduct.repository");
const respones_1 = require("../../../common/respones");
const ProductToClass_entity_1 = require("../../../entity/product/ProductToClass.entity");
let ProductBatchesService = class ProductBatchesService {
    constructor(productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository, couponToProductRepository, productDisToProductRepository) {
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
        this.couponToProductRepository = couponToProductRepository;
        this.productDisToProductRepository = productDisToProductRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id AND po.is_main = 1')
                .groupBy('pod.option_id')
                .innerJoin('product_to_class', 'ptc', 'product.product_id = ptc.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'ptc.product_class_id = pc.product_class_id');
            const totalData = (await result.select('COUNT(po.product_option_id) AS `cnt`').execute()).length;
            result.select([
                'product.product_id as product_id',
                'po.product_option_id as option_id',
                'pImage.image_url as product_url',
                'pb.brand_name as brand_name',
                `product_name as product_name`,
                'product_code',
                'product_wholesale_price',
                'product_price',
                'product_sale_price',
                `CASE 
          WHEN product_sale_state = 0 THEN '일시품절'
          WHEN product_sale_state = 1 THEN '판매중'
          WHEN product_sale_state = 2 THEN '팬매종료'
        END as product_sale_state`,
                'ptc.product_class_id as product_class_id',
                'pc.class_name as product_class_name',
                'is_show',
                'product.create_date as create_date',
                'product.update_date as update_date',
            ]);
            return {
                data: await result
                    .orderBy('product.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/product/batches : ${error}`);
            throw error;
        }
    }
    async find(find, page, pageSize) {
        try {
            const result = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_main = 1')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id')
                .innerJoin('product_to_class', 'ptc', 'product.product_id = ptc.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'ptc.product_class_id = pc.product_class_id');
            switch (find.product_find_type) {
                case "0":
                    result.andWhere('product.product_name like :text', { text: find.product_find_text });
                    break;
                case "1":
                    result.andWhere('product.product_code like :text', { text: find.product_find_text });
                    break;
            }
            switch (find.date_find_type) {
                case "0":
                    result.andWhere('product.create_date BETWEEN :start AND :end', {
                        start: find.date_start,
                        end: find.date_end
                    });
                    break;
                case "1":
                    result.andWhere('product.update_date BETWEEN :start AND :end', {
                        start: find.date_start,
                        end: find.date_end
                    });
                    break;
            }
            const totalData = (await result.select('COUNT(po.product_option_id) AS `cnt`').execute()).length;
            result.select([
                'product.product_id as product_id',
                'po.product_option_id as option_id',
                'pImage.image_url as product_url',
                'pb.brand_name as brand_name',
                `product_name as product_name`,
                'product_code',
                'product_wholesale_price',
                'product_price',
                'product_sale_price',
                `CASE 
          WHEN product_sale_state = 0 THEN '일시품절'
          WHEN product_sale_state = 1 THEN '판매중'
          WHEN product_sale_state = 2 THEN '팬매종료'
        END as product_sale_state`,
                'ptc.product_class_id as product_class_id',
                'pc.class_name as product_class_name',
                'is_show',
                'product.create_date as create_date',
                'product.update_date as update_date',
            ]);
            return {
                data: await result
                    .orderBy('product.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/product/batches : ${error}`);
            throw error;
        }
    }
    async update(data) {
        try {
            const product = await this.productRepository;
            for (let i in data.product_list) {
                switch (data.product_sale_state) {
                    case "0":
                        await product.update({ product_id: data.product_list[i] }, { product_sale_state: 0 });
                        break;
                    case "1":
                        await product.update({ product_id: data.product_list[i] }, { product_sale_state: 1 });
                        break;
                    case "2":
                        await product.update({ product_id: data.product_list[i] }, { product_sale_state: 2 });
                        break;
                }
                if (data.is_show !== "") {
                    await product.update({ product_id: data.product_list[i] }, { is_show: data.is_show });
                }
                switch (data.product_class_type) {
                    case "0":
                        await this.productToClassRepository
                            .query(`DELETE FROM product_to_class 
                            WHERE product_id = ${data.product_list[i]} AND is_main = 1`);
                        const product_to_class = new ProductToClass_entity_1.ProductToClassEntity();
                        product_to_class.product_id = await product.findOne({ product_id: data.product_list[i] });
                        product_to_class.product_class_id = await this.productClassRepository.findOne({ product_class_id: data.product_class_id[0] });
                        product_to_class.is_main = true;
                        await this.productToClassRepository.save(product_to_class);
                        break;
                    case "1":
                        await this.productToClassRepository
                            .query(`DELETE FROM product_to_class 
                            WHERE product_id = ${data.product_list[i]} AND is_main = 0`);
                        for (let j in data.product_class_id) {
                            const _product_to_class = new ProductToClass_entity_1.ProductToClassEntity();
                            _product_to_class.product_id = await product.findOne({ product_id: data.product_list[i] });
                            _product_to_class.product_class_id = await this.productClassRepository.findOne({ product_class_id: data.product_class_id[j] });
                            _product_to_class.is_main = false;
                            await this.productToClassRepository.save(_product_to_class);
                        }
                }
            }
        }
        catch (error) {
            common_1.Logger.error(`admin/product/batches : ${error}`);
            throw error;
        }
    }
};
ProductBatchesService = __decorate([
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
    __param(11, (0, typeorm_1.InjectRepository)(CouponToProduct_repository_1.CouponToProductRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(ProductDisToProduct_repository_1.ProductDisToProductRepository)),
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
        ProductClass_repository_1.ProductClassRepository,
        CouponToProduct_repository_1.CouponToProductRepository,
        ProductDisToProduct_repository_1.ProductDisToProductRepository])
], ProductBatchesService);
exports.ProductBatchesService = ProductBatchesService;
//# sourceMappingURL=product-batches.service.js.map