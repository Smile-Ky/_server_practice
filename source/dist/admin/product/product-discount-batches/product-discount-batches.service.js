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
exports.ProductDiscountBatchesService = void 0;
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
const ProductDisToMemberGroup_repository_1 = require("../../../repository/product/ProductDisToMemberGroup.repository");
const ProductDiscount_repository_1 = require("../../../repository/product/ProductDiscount.repository");
const respones_1 = require("../../../common/respones");
const ProductDiscount_entity_1 = require("../../../entity/product/ProductDiscount.entity");
const ProductDisToMemberGroup_entity_1 = require("../../../entity/product/ProductDisToMemberGroup.entity");
const ProductDisToProduct_entity_1 = require("../../../entity/product/ProductDisToProduct.entity");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
let ProductDiscountBatchesService = class ProductDiscountBatchesService {
    constructor(productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository, couponToProductRepository, productDisToProductRepository, productDisToMemberGroupRepository, productDiscountRepository, memberGroupRepository) {
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
        this.productDisToMemberGroupRepository = productDisToMemberGroupRepository;
        this.productDiscountRepository = productDiscountRepository;
        this.memberGroupRepository = memberGroupRepository;
    }
    async findAll(page, pageSize) {
        try {
            const today = new Date();
            const year = today.getFullYear();
            const month = ('0' + (today.getMonth() + 1)).slice(-2);
            const day = ('0' + today.getDate()).slice(-2);
            const dateString = year + '-' + month + '-' + day;
            const result = await this.productDiscountRepository
                .createQueryBuilder('product_dis')
                .select([
                'batch_discount_id',
                'batch_discount_name',
                `CASE
            WHEN use_member_group_type = "0" THEN '전체'
            WHEN use_member_group_type = "1" THEN '회원 그룹 별'
           END as use_member_group_type`,
                'batch_discount_start_date',
                'batch_discount_end_date',
                'is_use',
                `CASE
            WHEN (${dateString} BETWEEN batch_discount_start_date AND batch_discount_end_date) THEN '진행중'
            WHEN (${dateString} < batch_discount_start_date) THEN '진행전'
            WHEN (${dateString} > batch_discount_end_date) THEN '진행완료'
          END as is_progress`,
                `(SELECT COUNT(*) FROM product_dis_to_product as pdtp where pdtp.product_discount_id = product_dis.batch_discount_id) as product_count`,
                'create_date'
            ]);
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy('create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(Number(totalData), page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
    async find(find, page, pageSize) {
        try {
            const today = new Date();
            const year = today.getFullYear();
            const month = ('0' + (today.getMonth() + 1)).slice(-2);
            const day = ('0' + today.getDate()).slice(-2);
            const dateString = year + '-' + month + '-' + day;
            const result = await this.productDiscountRepository
                .createQueryBuilder('product_dis')
                .leftJoin('product_dis_to_member_group', 'pdtmg', 'pdtmg.product_discount_id = product_dis.batch_discount_id')
                .groupBy('batch_discount_id')
                .select([
                'batch_discount_id',
                'batch_discount_name',
                `CASE 
            WHEN (use_member_group_type = 0) THEN '전체'
            WHEN (use_member_group_type = 1) THEN '회원 그룹 별'
           END as use_member_group_type`,
                'batch_discount_start_date',
                'batch_discount_end_date',
                'is_use',
                `CASE
            WHEN (${dateString} BETWEEN batch_discount_start_date AND batch_discount_end_date) THEN '진행중'
            WHEN (${dateString} < batch_discount_start_date) THEN '진행전'
            WHEN (${dateString} > batch_discount_end_date) THEN '진행완료'
          END as is_progress`,
                `(SELECT COUNT(*) FROM product_dis_to_product as pdtp where pdtp.product_discount_id = product_dis.batch_discount_id) as product_count`,
                'create_date'
            ]);
            if (find.discount_find_text !== "") {
                result.andWhere('batch_discount_name LIKE :text', { text: `%${find.discount_find_text}%` });
            }
            switch (find.is_progress) {
                case "1":
                    result.andWhere(`${dateString} BETWEEN batch_discount_start_date AND batch_discount_end_date`);
                    break;
                case "2":
                    result.andWhere(`${dateString} > batch_discount_end_date`);
                    break;
            }
            switch (find.is_use) {
                case "1":
                    result.andWhere('product_dis.is_use = 1');
                    break;
                case "2":
                    result.andWhere('product_dis.is_use = 0');
                    break;
            }
            if (find.is_use_member_group.length !== 0) {
                result.andWhere('use_member_group_type in (:list)', { list: find.is_use_member_group });
            }
            if (find.start_date_start !== "" && find.start_date_end !== "") {
                result.andWhere('batch_discount_start_date BETWEEN :start AND :end', {
                    start: find.start_date_start,
                    end: find.start_date_end
                });
            }
            if (find.end_date_start !== "" && find.end_date_end !== "") {
                result.andWhere('batch_discount_end_date BETWEEN :start AND :end', {
                    start: find.end_date_start,
                    end: find.end_date_end
                });
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy('create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(Number(totalData), page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
    async findId(id) {
        try {
            const productDis = await this.productDiscountRepository
                .createQueryBuilder('product_dis')
                .select([
                'batch_discount_id',
                'batch_discount_name',
                'batch_discount_start_date',
                'batch_discount_end_date',
                'is_use',
                'use_member_group_type',
                'discount_type',
                'discount_setting_text',
            ])
                .andWhere('batch_discount_id = :id', { id });
            const _productDis = await productDis.execute();
            const member_group = await this.productDisToMemberGroupRepository
                .createQueryBuilder('product_dis_to_member')
                .select([
                'member_group_id'
            ])
                .andWhere('product_discount_id = :id', { id });
            const _member_group = await member_group.execute();
            const member_group_list = [];
            for (let i in _member_group) {
                member_group_list.push(_member_group[i].member_group_id);
            }
            const product = await this.productRepository
                .createQueryBuilder('product')
                .leftJoin('product_image', 'pImage', 'product.product_id = pImage.product_id AND pImage.image_mode = 0')
                .innerJoin('product_brand', 'pb', 'product.brand_id = pb.brand_id')
                .innerJoin('product_option', 'po', 'product.product_id = po.product_id')
                .innerJoin('product_option_detail', 'pod', 'po.product_option_id = pod.option_id')
                .groupBy('pod.option_id')
                .innerJoin('product_to_class', 'ptc', 'product.product_id = ptc.product_id')
                .leftJoin('product_dis_to_product', 'pdtp', 'po.product_option_id = pdtp.product_option_id');
            product.select([
                'product.product_id as product_id',
                'po.product_option_id as product_option_id',
                'product_code',
                'image_url as product_url',
                `CONCAT(product_name, '/', group_concat( DISTINCT pod.value separator '/' )) as product_name`,
                'brand_name as product_brand_name',
                'pdtp.discount_product_price as product_price',
                'pdtp.discount_price as product_sale_price',
                'product_sale_state',
                'is_show',
                'pdtp.sequence'
            ]).andWhere('pdtp.product_discount_id = :id', { id })
                .orderBy('product.create_date', 'DESC');
            const _product = await product.execute();
            return Object.assign(Object.assign({}, _productDis[0]), { member_group_list: member_group_list, product_list: _product });
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
    async create(data) {
        try {
            const discount = new ProductDiscount_entity_1.ProductDiscountEntity();
            discount.batch_discount_name = data.batch_discount_name;
            discount.batch_discount_start_date = new Date(data.batch_discount_start_date);
            discount.batch_discount_end_date = new Date(data.batch_discount_end_date);
            discount.is_use = data.is_use;
            discount.use_member_group_type = Number(data.use_member_group_type);
            discount.discount_type = Number(data.discount_type);
            discount.discount_setting_text = data.discount_setting_text;
            console.log(discount.batch_discount_start_date);
            console.log(discount.create_date);
            const _discount = await this.productDiscountRepository.save(discount);
            data.member_group_list.map(async (item) => {
                const create = new ProductDisToMemberGroup_entity_1.ProductDisToMemberGroupEntity();
                create.product_discount_id = _discount;
                create.member_group_id = await this.memberGroupRepository.findOne({ group_id: item });
                await this.productDisToMemberGroupRepository.save(create);
            });
            data.product_list.map(async (item) => {
                const create = new ProductDisToProduct_entity_1.ProductDisToProductEntity();
                create.product_discount_id = _discount;
                create.product_option = await this.productOptionRepository.findOne({ product_option_id: item.product_option_id });
                create.sequence = Number(item.sequence);
                create.discount_product_price = Number(item.product_price);
                create.discount_price = Number(item.product_sale_price);
                await this.productDisToProductRepository.save(create);
            });
            return discount;
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
    async update(id, data) {
        try {
            await this.productDisToMemberGroupRepository
                .query(`DELETE FROM product_dis_to_member_group WHERE product_discount_id = ${id}`);
            await this.productDisToProductRepository
                .query(`DELETE FROM product_dis_to_product WHERE product_discount_id = ${id}`);
            const _discount = await this.productDiscountRepository.findOne({ batch_discount_id: id });
            data.member_group_list.map(async (item) => {
                const create = new ProductDisToMemberGroup_entity_1.ProductDisToMemberGroupEntity();
                create.product_discount_id = _discount;
                create.member_group_id = await this.memberGroupRepository.findOne({ group_id: item });
                await this.productDisToMemberGroupRepository.save(create);
            });
            data.product_list.map(async (item) => {
                const create = new ProductDisToProduct_entity_1.ProductDisToProductEntity();
                create.product_discount_id = _discount;
                create.product_option = await this.productOptionRepository.findOne({ product_option_id: item.product_option_id });
                create.sequence = Number(item.sequence);
                create.discount_product_price = Number(item.product_price);
                create.discount_price = Number(item.product_sale_price);
                await this.productDisToProductRepository.save(create);
            });
            await this.productDiscountRepository.update({ batch_discount_id: id }, {
                batch_discount_name: data.batch_discount_name,
                batch_discount_start_date: new Date(data.batch_discount_end_date),
                batch_discount_end_date: new Date(data.batch_discount_end_date),
                is_use: data.is_use,
                use_member_group_type: Number(data.use_member_group_type),
                discount_type: Number(data.discount_type),
                discount_setting_text: data.discount_setting_text,
                update_date: () => 'NOW()'
            });
            return;
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.productDisToMemberGroupRepository
                .query(`DELETE FROM product_dis_to_member_group WHERE product_discount_id = ${id}`);
            await this.productDisToProductRepository
                .query(`DELETE FROM product_dis_to_product WHERE product_discount_id = ${id}`);
            await this.productDiscountRepository
                .query(`DELETE FROM product_discount WHERE batch_discount_id = ${id}`);
            return {};
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
    async checkProduct(product_option_Id) {
        try {
            const check = await this.productDisToProductRepository
                .createQueryBuilder('pdtp')
                .select('*')
                .andWhere('product_option_id in (:product_option_Id)', { product_option_Id });
            const data = await check.execute();
            console.log(data[0]);
            if (data.length !== 0) {
                throw "중복 됨";
            }
            return { massage: '중복 되는 일괄 할인 등록 상품 없음' };
        }
        catch (error) {
            common_1.Logger.error(`admin/product/discount/batch : ${error}`);
            throw error;
        }
    }
};
ProductDiscountBatchesService = __decorate([
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
    __param(13, (0, typeorm_1.InjectRepository)(ProductDisToMemberGroup_repository_1.ProductDisToMemberGroupRepository)),
    __param(14, (0, typeorm_1.InjectRepository)(ProductDiscount_repository_1.ProductDiscountRepository)),
    __param(15, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
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
        ProductDisToProduct_repository_1.ProductDisToProductRepository,
        ProductDisToMemberGroup_repository_1.ProductDisToMemberGroupRepository,
        ProductDiscount_repository_1.ProductDiscountRepository,
        MemberGroup_repository_1.MemberGroupRepository])
], ProductDiscountBatchesService);
exports.ProductDiscountBatchesService = ProductDiscountBatchesService;
//# sourceMappingURL=product-discount-batches.service.js.map