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
exports.ProductManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const ProductImage_repository_1 = require("../../../repository/product/ProductImage.repository");
const ProductImage_entity_1 = require("../../../entity/product/ProductImage.entity");
const respones_1 = require("../../../common/respones");
const Product_entity_1 = require("../../../entity/product/Product.entity");
const ProductToClass_repository_1 = require("../../../repository/product/ProductToClass.repository");
const ProductIconToProduct_repository_1 = require("../../../repository/product/ProductIconToProduct.repository");
const ProductOption_repository_1 = require("../../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../../repository/product/ProductOptionDetail.repository");
const ProductRelated_repository_1 = require("../../../repository/product/ProductRelated.repository");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
const ProductSearchKeyword_repository_1 = require("../../../repository/product/ProductSearchKeyword.repository");
const ProductToClass_entity_1 = require("../../../entity/product/ProductToClass.entity");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
const ProductSearchKeyword_entity_1 = require("../../../entity/product/ProductSearchKeyword.entity");
const ProductOption_entity_1 = require("../../../entity/product/ProductOption.entity");
const ProductOptionDetail_entity_1 = require("../../../entity/product/ProductOptionDetail.entity");
const ProductIconToProduct_entity_1 = require("../../../entity/product/ProductIconToProduct.entity");
const ProductIcon_repository_1 = require("../../../repository/product/ProductIcon.repository");
const ProductRelated_entity_1 = require("../../../entity/product/ProductRelated.entity");
const CouponToProduct_repository_1 = require("../../../repository/coupon/CouponToProduct.repository");
const ProductDisToProduct_repository_1 = require("../../../repository/product/ProductDisToProduct.repository");
const uuid_1 = require("uuid");
let ProductManagerService = class ProductManagerService {
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
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_main = 1')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id');
            const totalData = (await result.select('COUNT(po.product_option_id) AS `cnt`').execute()).length;
            result.select([
                'product.product_id as product_id',
                'po.product_option_id as option_id',
                'pImage.image_url as image_url',
                'pb.brand_name as brand_name',
                'product_code',
                `product_name as product_name`,
                'product_wholesale_price',
                'product_price',
                'product_sale_price',
                `CASE 
          WHEN product_sale_state = 0 THEN '일시품절'
          WHEN product_sale_state = 1 THEN '팬마중'
          WHEN product_sale_state = 2 THEN '팬매종료'
        END as product_sale_state`,
                'is_show',
                'product.create_date as create_date',
                'product.update_date as update_date',
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
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
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
                .innerJoin('product_to_class', 'ptc', 'product.product_id = ptc.product_id');
            switch (find.find_product_type) {
                case "0":
                    result.andWhere('product_name like :text', { text: `%${find.find_product_name}%` });
                    break;
                case "1":
                    result.andWhere('product_code like :text', { text: `%${find.find_product_name}%` });
                    break;
            }
            switch (find.find_date_type) {
                case "0":
                    result.andWhere('DATE(product.create_date) BETWEEN :start AND :end', {
                        start: new Date(find.find_date_start),
                        end: new Date(find.find_date_end)
                    });
                    break;
                case "1":
                    result.andWhere('DATE(product.update_date) BETWEEN :start AND :end', {
                        start: new Date(find.find_date_start),
                        end: new Date(find.find_date_end)
                    });
                    break;
            }
            if (find.product_class_id !== "") {
                result.andWhere('ptc.product_class_id = :id', { id: find.product_class_id });
                result.andWhere('ptc.is_main = :is_main', { is_main: 1 });
            }
            if (find.is_sales_state_list.length !== 0) {
                result.andWhere('product.product_sale_state IN (:states)', { states: find.is_sales_state_list });
            }
            if (find.is_show.length !== 0) {
                result.andWhere('is_show IN (:is_show)', { is_show: find.is_show });
            }
            if (find.brand_id !== "") {
                result.andWhere('product.brand_id = :id', { id: find.brand_id });
            }
            switch (find.product_company_type) {
                case "0":
                    result.andWhere('product_company_type = "0"');
                    break;
                case "1":
                    result.andWhere('product_company_type = "1"');
                    break;
            }
            const totalData = (await result.select('COUNT(po.product_option_id) AS `cnt`').execute()).length;
            result.select([
                'product.product_id as product_id',
                'po.product_option_id as option_id',
                'pImage.image_url as image_url',
                'pb.brand_name as brand_name',
                'product_code',
                `product_name as product_name`,
                'product_wholesale_price',
                'product_price',
                'product_sale_price',
                `CASE 
          WHEN product_sale_state = 0 THEN '일시품절'
          WHEN product_sale_state = 1 THEN '팬마중'
          WHEN product_sale_state = 2 THEN '팬매종료'
        END as product_sale_state`,
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
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findId(id) {
        try {
            const product = await this.productRepository.findOne({ product_id: id });
            const brand = (await this.productRepository
                .createQueryBuilder('product')
                .select([
                'product.brand_id',
                'brand_name'
            ])
                .innerJoin('product.brand', 'product_brand.product')
                .andWhere('product_id = :id', { id: id })
                .execute())[0];
            const _product_class_id = await this.productToClassRepository
                .createQueryBuilder('product_to_class')
                .select([
                'product_class_id'
            ])
                .andWhere('product_to_class.product_id = :id', { id: id })
                .andWhere('product_to_class.is_main = :is_main', { is_main: true });
            common_1.Logger.log((await _product_class_id.execute())[0]);
            const product_class_id = (await _product_class_id.execute())[0];
            const _product_class_sub_id = await this.productToClassRepository
                .createQueryBuilder('product_to_class')
                .select([
                'product_class_id'
            ])
                .andWhere('product_id = :id', { id: id })
                .andWhere('is_main = :is_main', { is_main: false });
            const product_class_sub_list = await _product_class_sub_id.execute();
            const product_class_sub_id = [];
            for (let i in product_class_sub_list) {
                product_class_sub_id.push(product_class_sub_list[i].product_class_id);
            }
            const search_keyword = await this.productSearchKeywordRepository.find({ product: product });
            const basie_image = await this.productImageRepository
                .createQueryBuilder()
                .select([
                'image_id',
                'image_url'
            ])
                .andWhere('product_id = :id', { id })
                .andWhere('image_mode = :mode', { mode: 0 })
                .execute();
            const add_image_id_list = await this.productImageRepository
                .createQueryBuilder('product_image')
                .select([
                'image_id',
                'sequence',
                'image_url'
            ])
                .andWhere('product_id = :id', { id: product.product_id })
                .andWhere('image_mode = :mode', { mode: 1 })
                .execute();
            const product_description_image = await this.productImageRepository
                .createQueryBuilder('product_image')
                .select([
                'image_id',
                'sequence',
                'image_url'
            ])
                .andWhere('product_id = :id', { id: product.product_id })
                .andWhere('image_mode = :mode', { mode: 2 })
                .execute();
            const options = await this.productOptionRepository.find({ product: product });
            for (let i in options) {
                const option_detail = [];
                option_detail.push(await this.productOptionDetailRepository
                    .createQueryBuilder('product_option_detail')
                    .select('*')
                    .andWhere('product_option_detail.option_id = :id', { id: options[i].product_option_id })
                    .execute());
                options[i].option = option_detail[0];
            }
            const icon = await this.productIconToProductRepository
                .createQueryBuilder('product_icon_to_product')
                .select([
                'icon_id',
                'icon_name'
            ])
                .innerJoin('product_icon_to_product.product_icon', 'product_icon.product_icon_to_product')
                .andWhere('product_id = :id', { id: product.product_id })
                .execute();
            const related_list = await this.productRelatedRepository.find({ product_id: product });
            const list_buffer = [];
            for (let i in related_list) {
                common_1.Logger.log(related_list[i]);
                list_buffer.push(related_list[i].related_product);
            }
            common_1.Logger.log(list_buffer);
            const related = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id AND po.is_delete=false')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id');
            related.select([
                'product.product_id as product_id',
                'product_option_id',
                'product_code',
                'image_url as product_url',
                `CONCAT(product_name, '/', group_concat( pod.value separator '/' )) as product_name`,
                'brand_name as brand_name',
                'po.product_option_code',
                'product_sale_price',
                'product_sale_state',
                'is_show'
            ]);
            let related_product_list = [];
            if (list_buffer.length !== 0) {
                related.andWhere('product.product_id in (:list)', { list: list_buffer });
                related_product_list = (await related.execute());
            }
            return {
                data: Object.assign(Object.assign(Object.assign({}, product), brand), { product_class_id: product_class_id.product_class_id, product_class_sub_id,
                    search_keyword,
                    basie_image,
                    add_image_id_list,
                    product_description_image, options: options, icon_list: icon, related_product_list: related_product_list })
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async create(data) {
        try {
            const option_code_list = [];
            for (let i in data.options) {
                option_code_list.push(data.options[i].product_option_code);
            }
            const option_check = await this.productOptionRepository
                .createQueryBuilder('product_option')
                .select('product_option_code')
                .andWhere('product_option.product_option_code in (:id)', { id: option_code_list });
            const _option_check = await option_check.execute();
            if (_option_check.length !== 0) {
                const buffer_list = [];
                for (let j in _option_check) {
                    buffer_list.push(_option_check[j].product_option_code);
                }
                return { result: false, data: buffer_list };
            }
            const productCreate = new Product_entity_1.ProductEntity();
            if (data.product_code === "") {
                productCreate.product_code = (0, uuid_1.v4)();
            }
            else {
                productCreate.product_code = data.product_code;
            }
            productCreate.product_company_type = Number(data.product_company_type);
            if (data.product_company_name !== "") {
                productCreate.product_company_name = data.product_company_name;
            }
            else {
                productCreate.product_company_name = '주식회사 게임베리';
            }
            productCreate.is_show = data.is_show;
            productCreate.product_sale_state = Number(data.product_sale_state);
            productCreate.product_name = data.product_name;
            productCreate.use_tax_free = data.use_tax_free;
            productCreate.sale_basie_volume = data.sale_basie_volume;
            productCreate.option_count = data.option_count;
            productCreate.product_description = data.product_description;
            productCreate.is_show_product_information = data.is_show_product_information;
            productCreate.use_point = data.use_point;
            productCreate.use_point_text = Number(data.use_point_text);
            productCreate.use_point_range = data.use_point_range;
            productCreate.use_point_range_text = Number(data.use_point_range_text);
            productCreate.is_use_icon = data.icon_list.length !== 0;
            productCreate.brand = await this.productBrandRepository.findOne({ brand_id: data.brand_id });
            const productSave = await this.productRepository.save(productCreate);
            const classCreate = new ProductToClass_entity_1.ProductToClassEntity();
            classCreate.product_class_id = await this.productClassRepository
                .findOne({ product_class_id: data.product_class_id });
            classCreate.product_id = productSave;
            classCreate.is_main = true;
            await this.productToClassRepository.save(classCreate);
            data.product_class_sub_id.map(async (item) => {
                const classCreateSub = new ProductToClass_entity_1.ProductToClassEntity();
                classCreateSub.product_class_id = await this.productClassRepository
                    .findOne({ product_class_id: item });
                classCreateSub.product_id = productSave;
                await this.productToClassRepository.save(classCreateSub);
            });
            data.search_keyword.map(async (item) => {
                const keywordCreate = new ProductSearchKeyword_entity_1.ProductSearchKeywordEntity();
                keywordCreate.product = productSave;
                keywordCreate.search_keyword = item;
                await this.productSearchKeywordRepository.save(keywordCreate);
            });
            await this.productImageRepository.update({ image_id: data.basie_image_id }, {
                image_mode: 0,
                product_id: productSave
            });
            data.add_image_id_list.map(async (item) => {
                await this.productImageRepository.update({ image_id: item.image_id }, {
                    image_mode: 1,
                    sequence: item.sequence,
                    product_id: productSave
                });
            });
            data.product_description_image.map(async (item) => {
                await this.productImageRepository.update({ image_id: item.image_id }, {
                    image_mode: 2,
                    sequence: item.sequence,
                    product_id: productSave
                });
            });
            data.options.sort(function (a, b) {
                return a.product_sale_price - b.product_sale_price;
            });
            for (let i in data.options) {
                const optionCreate = new ProductOption_entity_1.ProductOptionEntity();
                optionCreate.product = productSave;
                optionCreate.product_wholesale_price = data.options[i].product_wholesale_price;
                optionCreate.product_price = data.options[i].product_price;
                optionCreate.product_sale_price = data.options[i].product_sale_price;
                optionCreate.is_out_of_stock = data.options[i].is_out_of_stock;
                optionCreate.stock_count = data.options[i].stock_count;
                optionCreate.sale_stock_count = data.options[i].sale_stock_count;
                optionCreate.product_option_code = data.options[i].product_option_code;
                optionCreate.is_main = Number(i) === 0;
                let optionSave = await this.productOptionRepository.save(optionCreate);
                data.options[i].option.map(async (detail) => {
                    const optionDetailCreate = new ProductOptionDetail_entity_1.ProductOptionDetailEntity();
                    optionDetailCreate.name = detail.name;
                    optionDetailCreate.value = detail.value;
                    optionDetailCreate.product_option = optionSave;
                    await this.productOptionDetailRepository.save(optionDetailCreate);
                });
            }
            data.icon_list.map(async (item) => {
                const iconMappingCreate = new ProductIconToProduct_entity_1.ProductIconToProductEntity();
                iconMappingCreate.product = productSave;
                iconMappingCreate.product_icon = await this.productIconRepository.findOne({ icon_id: item });
                await this.productIconToProductRepository.save(iconMappingCreate);
            });
            data.related_product_list.map(async (item) => {
                const relatedCreate = new ProductRelated_entity_1.ProductRelatedEntity();
                relatedCreate.product_id = productSave;
                relatedCreate.related_product = item;
                await this.productRelatedRepository.save(relatedCreate);
            });
            return productSave;
        }
        catch (error) {
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(product_id, data) {
        try {
            const brand = await this.productBrandRepository.findOne({ brand_id: data.brand_id });
            const _product = await this.productRepository.findOne({ product_id: product_id });
            const product = await this.productRepository.update({ product_id: product_id }, {
                product_code: data.product_code,
                product_company_type: Number(data.product_company_type),
                product_company_name: data.product_company_name,
                is_show: data.is_show,
                product_sale_state: Number(data.product_sale_state),
                product_name: data.product_name,
                use_tax_free: data.use_tax_free,
                sale_basie_volume: data.sale_basie_volume,
                sale_max_volume_id: data.sale_max_volume_id,
                option_count: data.option_count,
                product_description: data.product_description,
                is_show_product_information: data.is_show_product_information,
                use_point: data.use_point,
                use_point_text: Number(data.use_point_text),
                use_point_range: data.use_point_range,
                use_point_range_text: Number(data.use_point_range_text),
                is_use_icon: (data.icon_list.length !== 0),
                brand: brand
            });
            await this.productIconToProductRepository
                .query(`DELETE FROM product_icon_to_product WHERE product_id = ${product_id}`);
            for (let i in data.icon_list) {
                await this.productIconToProductRepository
                    .createQueryBuilder('product_icon_to')
                    .insert()
                    .into(ProductIconToProduct_entity_1.ProductIconToProductEntity)
                    .values({
                    product: _product,
                    product_icon: await this.productIconRepository.findOne({ icon_id: data.icon_list[i] })
                })
                    .execute();
            }
            await this.productRelatedRepository
                .query(`DELETE FROM product_related WHERE product_id = ${product_id}`);
            for (let i in data.related_product_list) {
                await this.productRelatedRepository
                    .createQueryBuilder('product_related')
                    .insert()
                    .into(ProductRelated_entity_1.ProductRelatedEntity)
                    .values({
                    related_product: data.related_product_list[i],
                    product_id: _product
                })
                    .execute();
            }
            await this.productToClassRepository
                .query(`DELETE FROM product_to_class WHERE product_id = ${product_id}`);
            await this.productToClassRepository
                .createQueryBuilder('product_to_class')
                .insert()
                .into(ProductToClass_entity_1.ProductToClassEntity)
                .values({
                is_main: true,
                product_id: _product,
                product_class_id: await this.productClassRepository.findOne({ product_class_id: data.product_class_id })
            })
                .execute();
            for (let i in data.product_class_sub_id) {
                await this.productToClassRepository
                    .createQueryBuilder('product_to_class')
                    .insert()
                    .into(ProductToClass_entity_1.ProductToClassEntity)
                    .values({
                    is_main: false,
                    product_id: _product,
                    product_class_id: await this.productClassRepository.findOne({ product_class_id: data.product_class_sub_id[i] })
                })
                    .execute();
            }
            await this.productSearchKeywordRepository
                .query(`DELETE FROM product_search_keyword WHERE product_id = ${product_id}`);
            for (let i in data.search_keyword) {
                await this.productSearchKeywordRepository
                    .createQueryBuilder('product_search_keyword')
                    .insert()
                    .into(ProductSearchKeyword_entity_1.ProductSearchKeywordEntity)
                    .values({
                    search_keyword: data.search_keyword[i],
                    product: _product
                })
                    .execute();
            }
            await this.productImageRepository.update({ product_id: _product }, {
                image_mode: null,
                sequence: null,
                product_id: null
            });
            await this.productImageRepository.update({ image_id: data.basie_image_id }, {
                image_mode: 0,
                product_id: _product
            });
            data.add_image_id_list.map(async (item) => {
                await this.productImageRepository.update({ image_id: item.image_id }, {
                    image_mode: 1,
                    sequence: item.sequence,
                    product_id: _product
                });
            });
            data.product_description_image.map(async (item) => {
                await this.productImageRepository.update({ image_id: item.image_id }, {
                    image_mode: 2,
                    sequence: item.sequence,
                    product_id: _product
                });
            });
            const findOption = await this.productOptionRepository.find({ product: _product });
            for (let i in findOption) {
                await this.productOptionDetailRepository
                    .query(`DELETE FROM product_option_detail WHERE option_id = ${findOption[i].product_option_id}`);
            }
            data.options.sort(function (a, b) {
                return a.product_sale_price - b.product_sale_price;
            });
            data.options.map(async (item, index) => {
                await this.productOptionRepository.update({ product_option_id: item.product_option_id }, {
                    product_wholesale_price: item.product_wholesale_price,
                    product_price: item.product_price,
                    product_sale_price: item.product_sale_price,
                    is_out_of_stock: item.is_out_of_stock,
                    stock_count: item.stock_count,
                    sale_stock_count: item.sale_stock_count,
                    product_option_code: item.product_option_code,
                    is_main: Number(index) === 0
                });
                for (let i in item.option) {
                    const optionDetailCreate = new ProductOptionDetail_entity_1.ProductOptionDetailEntity();
                    optionDetailCreate.name = item.option[i].name;
                    optionDetailCreate.value = item.option[i].value;
                    optionDetailCreate.product_option = await this.productOptionRepository
                        .findOne({ product_option_id: item.product_option_id });
                    await this.productOptionDetailRepository.save(optionDetailCreate);
                }
            });
        }
        catch (error) {
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async optionDelete(optionId) {
        try {
            await this.productOptionRepository
                .update({ product_option_id: optionId }, { is_delete: true });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async delete(product_id) {
        try {
            const _product = await this.productRepository.findOne({ product_id: product_id });
            const _option = await this.productOptionRepository.find({ product: _product });
            for (let i in _option) {
                await this.productDisToProductRepository
                    .query(`DELETE FROM product_dis_to_product WHERE product_option_id = ${_option[i].product_option_id}`);
            }
            await this.productIconToProductRepository
                .query(`DELETE FROM product_icon_to_product WHERE product_id = ${product_id}`);
            await this.productRelatedRepository
                .query(`DELETE FROM product_related WHERE product_id = ${product_id}`);
            await this.productToClassRepository
                .query(`DELETE FROM product_to_class WHERE product_id = ${product_id}`);
            await this.productSearchKeywordRepository
                .query(`DELETE FROM product_search_keyword WHERE product_id = ${product_id}`);
            await this.productImageRepository
                .query(`DELETE FROM product_image WHERE product_id = ${product_id}`);
            const findOption = await this.productOptionRepository.find({ product: _product });
            for (let i in findOption) {
                await this.productOptionDetailRepository
                    .query(`DELETE FROM product_option_detail WHERE option_id = ${findOption[i].product_option_id}`);
            }
            await this.couponToProductRepository
                .query(`DELETE FROM coupon_to_product WHERE product_id = ${product_id}`);
            await this.productOptionRepository
                .update({ product: _product }, { is_delete: true });
            await this.productRepository
                .update({ product_id: product_id }, { is_delete: true });
        }
        catch (error) {
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async imageUpload(images) {
        try {
            if (images.length === 1) {
                const data = new ProductImage_entity_1.ProductImageEntity();
                data.image_url = images[0].location;
                return {
                    image_id: (await this.productImageRepository.save(data)).image_id,
                    image_url: images[0].location
                };
            }
            const image_list = [];
            for (let i in images) {
                const image = new ProductImage_entity_1.ProductImageEntity();
                image.image_url = images[i].location;
                image_list.push({
                    image_id: (await this.productImageRepository.save(image)).image_id,
                    image_url: images[i].location
                });
            }
            return image_list;
        }
        catch (error) {
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
ProductManagerService = __decorate([
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
], ProductManagerService);
exports.ProductManagerService = ProductManagerService;
//# sourceMappingURL=product-manager.service.js.map