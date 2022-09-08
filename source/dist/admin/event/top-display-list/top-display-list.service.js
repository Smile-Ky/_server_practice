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
exports.TopDisplayListService = void 0;
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
const TopDisplayList_repository_1 = require("../../../repository/top-display/TopDisplayList.repository");
const TopDisplayToProduct_repository_1 = require("../../../repository/top-display/TopDisplayToProduct.repository");
const TopDisplayToProductClass_repository_1 = require("../../../repository/top-display/TopDisplayToProductClass.repository");
const TopDisplayToProductClass_entity_1 = require("../../../entity/top-display/TopDisplayToProductClass.entity");
const TopDisplayToProduct_entity_1 = require("../../../entity/top-display/TopDisplayToProduct.entity");
const TopDisplayList_entity_1 = require("../../../entity/top-display/TopDisplayList.entity");
let TopDisplayListService = class TopDisplayListService {
    constructor(productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository, topDisplayListRepository, topDisplayToProductRepository, topDisplayToProductClassRepository) {
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
        this.topDisplayListRepository = topDisplayListRepository;
        this.topDisplayToProductRepository = topDisplayToProductRepository;
        this.topDisplayToProductClassRepository = topDisplayToProductClassRepository;
    }
    async findAll() {
        try {
            const result = await this.topDisplayListRepository
                .createQueryBuilder('top_display_list')
                .select([
                'top_display_list_id',
                'sequence',
                'display_name',
                `CASE 
                WHEN is_date = 0 THEN null
                WHEN is_date = 1 THEN start_date 
                END as start_date`,
                `CASE 
                WHEN is_date = 0 THEN null
                WHEN is_date = 1 THEN end_date 
                END as end_date`,
                'is_date',
                'is_show',
                'create_date',
                'update_date'
            ]);
            return {
                data: await result.orderBy('sequence', 'ASC').execute()
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/main/display : ${error}`);
            throw error;
        }
    }
    async findId(id) {
        try {
            const result = await this.topDisplayListRepository
                .createQueryBuilder('top_display_list')
                .select([
                'top_display_list_id',
                'sequence',
                'display_name',
                'start_date',
                'end_date',
                'is_show',
                'is_date',
                'create_date',
                'update_date'
            ]).andWhere('top_display_list_id = :id', { id });
            const _product_list = await this.topDisplayToProductRepository
                .createQueryBuilder('display_to_product')
                .select('product_id as product_id')
                .andWhere('top_display_list_id = :id', { id });
            const product_list = await _product_list.execute();
            const list = [];
            for (let i in product_list) {
                list.push(product_list[i].product_id);
            }
            let product_data = {};
            if (list.length !== 0) {
                const product = await this.productRepository
                    .createQueryBuilder('product')
                    .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                    .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                    .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_main = 1')
                    .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                    .groupBy('pod.option_id');
                product.select([
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
                product.andWhere('product.product_id in (:id)', { id: list });
                product_data = await product.execute();
            }
            return {
                data: {
                    display: (await result.execute())[0],
                    product: product_data
                }
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/main/display : ${error}`);
            throw error;
        }
    }
    async updateList(data) {
        try {
            for (let i in data.main_display_list_sequence) {
                await this.topDisplayListRepository
                    .update({ top_display_list_id: data.main_display_list_sequence[i].display_id }, { sequence: Number(data.main_display_list_sequence[i].sequence) });
            }
            const result = await this.topDisplayListRepository
                .createQueryBuilder('top_display_list')
                .select([
                'top_display_list_id',
                'sequence',
                'display_name',
                'start_date',
                'end_date',
                'is_show',
                'create_date',
                'update_date'
            ]);
            return {
                data: await result.orderBy('sequence', 'ASC').execute()
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/main/display : ${error}`);
            throw error;
        }
    }
    async create(data) {
        try {
            const count_list = (await this.topDisplayListRepository
                .createQueryBuilder('main_display')
                .select("COUNT(*) as count")
                .execute())[0]["count"];
            const display = new TopDisplayList_entity_1.TopDisplayListEntity();
            display.sequence = Number(count_list);
            display.display_name = data.display_name;
            display.is_show = data.is_show;
            display.is_date = data.is_date;
            display.start_date = new Date(data.start_date);
            display.end_date = new Date(data.end_date);
            display.create_date = new Date();
            display.update_date = new Date();
            const mainDisplay = await this.topDisplayListRepository.save(display);
            let product_list = [];
            for (let i in data.product_id_list) {
                product_list.push(data.product_id_list[i].product_id);
            }
            if (product_list.length !== 0) {
                const productClass = await this.productToClassRepository
                    .createQueryBuilder('product_to_class')
                    .select([
                    'product_id',
                    'product_class_id'
                ])
                    .andWhere('is_main = 1')
                    .andWhere('product_id in (:list)', { list: product_list });
                const classData = await productClass.execute();
                for (let i in classData) {
                    const classSave = new TopDisplayToProductClass_entity_1.TopDisplayToProductClassEntity();
                    classSave.top_display_list = mainDisplay;
                    classSave.product_class = await this.productClassRepository
                        .findOne({ product_class_id: classData[i].product_class_id });
                    await this.topDisplayToProductClassRepository.save(classSave);
                }
            }
            for (let i in data.product_id_list) {
                const productSave = new TopDisplayToProduct_entity_1.TopDisplayToProductEntity();
                productSave.sequence = Number(data.product_id_list[i].sequence);
                productSave.product = await this.productRepository
                    .findOne({ product_id: data.product_id_list[i].product_id });
                productSave.top_display_list = mainDisplay;
                await this.topDisplayToProductRepository.save(productSave);
            }
            return mainDisplay;
        }
        catch (error) {
            common_1.Logger.error(`admin/main/display : ${error}`);
            throw error;
        }
    }
    async update(id, data) {
        try {
            await this.topDisplayToProductRepository
                .query(`DELETE FROM top_display_to_product
                        WHERE top_display_list_id = ${id}`);
            await this.topDisplayToProductClassRepository
                .query(`DELETE FROM top_display_to_product_class
                        WHERE top_display_list_id = ${id}`);
            await this.topDisplayListRepository.update({ top_display_list_id: id }, {
                display_name: data.display_name,
                is_show: data.is_show,
                is_date: data.is_date,
                start_date: new Date(data.start_date),
                end_date: new Date(data.end_date),
                update_date: new Date()
            });
            const mainDisplay = await this.topDisplayListRepository
                .findOne({ top_display_list_id: id });
            let product_list = [];
            for (let i in data.product_id_list) {
                product_list.push(data.product_id_list[i].product_id);
            }
            if (product_list.length !== 0) {
                const productClass = await this.productToClassRepository
                    .createQueryBuilder('product_to_class')
                    .select([
                    'product_id',
                    'product_class_id'
                ])
                    .andWhere('is_main = 1')
                    .andWhere('product_id in (:list)', { list: product_list });
                const classData = await productClass.execute();
                for (let i in classData) {
                    const classSave = new TopDisplayToProductClass_entity_1.TopDisplayToProductClassEntity();
                    classSave.top_display_list = mainDisplay;
                    classSave.product_class = await this.productClassRepository
                        .findOne({ product_class_id: classData[i].product_class_id });
                    await this.topDisplayToProductClassRepository.save(classSave);
                }
            }
            for (let i in data.product_id_list) {
                const productSave = new TopDisplayToProduct_entity_1.TopDisplayToProductEntity();
                productSave.sequence = Number(data.product_id_list[i].sequence);
                productSave.product = await this.productRepository
                    .findOne({ product_id: data.product_id_list[i].product_id });
                productSave.top_display_list = mainDisplay;
                await this.topDisplayToProductRepository.save(productSave);
            }
            return;
        }
        catch (error) {
            common_1.Logger.error(`admin/main/display : ${error}`);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.topDisplayToProductRepository
                .query(`DELETE FROM top_display_to_product
                        WHERE top_display_list_id = ${id}`);
            await this.topDisplayToProductClassRepository
                .query(`DELETE FROM top_display_to_product_class
                        WHERE top_display_list_id = ${id}`);
            await this.topDisplayListRepository
                .query(`DELETE FROM top_display_list
                        WHERE top_display_list_id = ${id}`);
            return;
        }
        catch (error) {
            common_1.Logger.error(`admin/main/display : ${error}`);
            throw error;
        }
    }
};
TopDisplayListService = __decorate([
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
    __param(11, (0, typeorm_1.InjectRepository)(TopDisplayList_repository_1.TopDisplayListRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(TopDisplayToProduct_repository_1.TopDisplayToProductRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(TopDisplayToProductClass_repository_1.TopDisplayToProductClassRepository)),
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
        TopDisplayList_repository_1.TopDisplayListRepository,
        TopDisplayToProduct_repository_1.TopDisplayToProductRepository,
        TopDisplayToProductClass_repository_1.TopDisplayToProductClassRepository])
], TopDisplayListService);
exports.TopDisplayListService = TopDisplayListService;
//# sourceMappingURL=top-display-list.service.js.map