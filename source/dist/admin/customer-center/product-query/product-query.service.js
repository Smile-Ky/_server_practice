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
exports.ProductQueryService = void 0;
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
const QueryProduct_repository_1 = require("../../../repository/query/QueryProduct.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const QueryProduct_entity_1 = require("../../../entity/query/QueryProduct.entity");
const respones_1 = require("../../../common/respones");
let ProductQueryService = class ProductQueryService {
    constructor(queryProductRepository, productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository, memberRepository) {
        this.queryProductRepository = queryProductRepository;
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
        this.memberRepository = memberRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.queryProductRepository
                .createQueryBuilder('qp')
                .innerJoin('product_option', 'po', 'po.product_option_id = qp.product_option_id')
                .innerJoin('member', 'm', 'm.member_id = qp.member_id')
                .innerJoin('product', 'product', 'product.product_id = po.product_id');
            const totalData = (await result.select('COUNT(qp.query_product_id) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'product.product_id as product_id',
                'po.product_option_id as product_option_id',
                'm.member_id as member_id',
                'qp.query_product_id as query_product_id',
                `CONCAT(product_name, ': ', 
          (select group_concat( pod.value separator '|' ) as product_name 
          from product_option_detail as pod where pod.option_id = qp.product_option_id)
          ) as product_name`,
                'm.name as query_writer',
                'qp.update_date as create_date',
                `CASE
          WHEN qp.query_type=0 THEN '상품문의'
          WHEN qp.query_type=1 THEN '배송문의'
          WHEN qp.query_type=2 THEN '기타' 
          END as query_type`,
                `CASE
          WHEN qp.is_open=0 THEN '숨김'
          WHEN qp.is_open=1 THEN '공개'
          END as is_open`,
                `qp.title as query_title`,
                `qp.query_content as query_content`,
                `qp.answer_writer as answer_name`,
                `qp.answer_content as answer_content`,
                `CASE
          WHEN product.product_company_type=0 THEN '주식회사 게임베리' 
          WHEN product.product_company_type=1 THEN product.product_company_name
          END as company_name`,
                `CASE
          WHEN qp.is_answer=0 THEN '답변대기'
          WHEN qp.is_answer=1 THEN '답변완료'
          END as is_answer`,
            ]);
            return {
                data: await result
                    .orderBy('qp.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async find(find, page, pageSize) {
        try {
            const result = await this.queryProductRepository
                .createQueryBuilder('qp')
                .innerJoin('product_option', 'po', 'po.product_option_id = qp.product_option_id')
                .innerJoin('member', 'm', 'm.member_id = qp.member_id')
                .innerJoin('product', 'product', 'product.product_id = po.product_id');
            switch (find.is_answer) {
                case "1":
                    result.andWhere('qp.is_answer=1');
                    break;
                case "2":
                    result.andWhere('qp.is_answer=0');
                    break;
            }
            if (find.write_date_start !== "" && find.write_date_end !== "") {
                result.andWhere('qp.create_date BETWEEN :start AND :end', {
                    start: find.write_date_start,
                    end: find.write_date_end
                });
            }
            switch (find.find_type) {
                case "0":
                    result.andWhere('product.product_name like :product ', { product: `%${find.find_text}%` });
                    break;
                case "1":
                    result.andWhere('qp.title like :title', { title: `%${find.find_text}%` });
                    break;
                case "2":
                    result.andWhere('qp.answer_content like :content', { content: `%${find.find_text}%` });
                    break;
                case "3":
                    result.andWhere('m.name like :name', { name: `%${find.find_text}%` });
                    break;
            }
            switch (find.query_type) {
                case "0":
                    result.andWhere('qp.query_type=0');
                    break;
                case "1":
                    result.andWhere('qp.query_type=1');
                    break;
                case "2":
                    result.andWhere('qp.query_type=2');
                    break;
            }
            if (find.product_company_name !== "") {
                result.andWhere('product.product_company_name like :text', { text: `%${find.product_company_name}%` });
            }
            const totalData = (await result.select('COUNT(qp.query_product_id) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'product.product_id as product_id',
                'po.product_option_id as product_option_id',
                'm.member_id as member_id',
                'qp.query_product_id as query_product_id',
                `CONCAT(product_name, ': ', 
          (select group_concat( pod.value separator '|' ) as product_name 
          from product_option_detail as pod where pod.option_id = qp.product_option_id)) as product_name`,
                'm.name as query_writer',
                'qp.update_date as create_date',
                `CASE
          WHEN qp.query_type=0 THEN '상품문의'
          WHEN qp.query_type=1 THEN '배송문의'
          WHEN qp.query_type=2 THEN '기타' 
          END as query_type`,
                `CASE
          WHEN qp.is_open=0 THEN '숨김'
          WHEN qp.is_open=1 THEN '공개'
          END as is_open`,
                `qp.title as query_title`,
                `qp.query_content as query_content`,
                `qp.answer_writer as answer_name`,
                `qp.answer_content as answer_content`,
                `CASE
          WHEN product.product_company_type=0 THEN '주식회사 게임베리' 
          WHEN product.product_company_type=1 THEN product.product_company_name
          END as company_name`,
                `CASE
          WHEN qp.is_answer=0 THEN '답변대기'
          WHEN qp.is_answer=1 THEN '답변완료'
          END as is_answer`,
            ]);
            return {
                data: await result
                    .orderBy('qp.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async findId(id) {
        try {
            const result = await this.queryProductRepository
                .createQueryBuilder('qp')
                .innerJoin('product_option', 'po', 'po.product_option_id = qp.product_option_id')
                .innerJoin('member', 'm', 'm.member_id = qp.member_id')
                .innerJoin('product', 'product', 'product.product_id = po.product_id')
                .select([
                'product.product_id as product_id',
                'po.product_option_id as product_option_id',
                'm.member_id as member_id',
                'qp.query_product_id as query_product_id',
                `CONCAT(product_name, ': ', 
          (select group_concat( pod.value separator '|' ) as product_name 
           from product_option_detail as pod where pod.option_id = qp.product_option_id)
          ) as product_name`,
                'm.name as query_writer',
                'qp.update_date as create_date',
                `CASE
          WHEN qp.query_type=0 THEN '상품문의'
          WHEN qp.query_type=1 THEN '배송문의'
          WHEN qp.query_type=2 THEN '기타' 
          END as query_type`,
                `CASE
          WHEN qp.is_open=0 THEN '숨김'
          WHEN qp.is_open=1 THEN '공개'
          END as is_open`,
                `CASE
          WHEN qp.is_answer=0 THEN '답변대기'
          WHEN qp.is_answer=1 THEN '답변완료'
          END as is_answer`,
                `qp.title as query_title`,
                `qp.query_content as query_content`,
                `qp.answer_writer as answer_name`,
                `qp.answer_content as answer_content`
            ])
                .andWhere('qp.query_product_id = :id', { id });
            return Object.assign({}, ((await result.execute())[0]));
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async query(memberId, data) {
        try {
            const member = await this.memberRepository.findOne({ member_id: memberId });
            const productOption = await this.productOptionRepository.findOne({ product_option_id: data.product_option_id });
            const productQuery = new QueryProduct_entity_1.QueryProductEntity();
            productQuery.query_type = Number(data.query_type);
            productQuery.is_open = data.is_open;
            productQuery.title = data.title;
            productQuery.query_content = data.query_content;
            productQuery.is_answer = false;
            productQuery.member_id = member;
            productQuery.product_option_id = productOption;
            return await this.queryProductRepository.save(productQuery);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async answer(id, data) {
        try {
            return await this.queryProductRepository.update({ query_product_id: id }, {
                is_answer: true,
                answer_writer: '피리부는 강아지',
                answer_content: data.answer_content,
                update_date: (() => 'NOW()')
            });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async queryAdminUpdate(id, data) {
        try {
            return await this.queryProductRepository.update({ query_product_id: id }, {
                query_type: Number(data.query_type),
                is_open: data.is_open,
                title: data.title,
                query_content: data.query_content,
                update_date: (() => 'NOW()')
            });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async queryFrontUpdate(id, data) {
        try {
            return await this.queryProductRepository.update({ query_product_id: id }, {
                query_type: Number(data.query_type),
                is_open: data.is_open,
                update_date: (() => 'NOW()')
            });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        try {
            return await this.queryProductRepository.delete({ query_product_id: id });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
ProductQueryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(QueryProduct_repository_1.QueryProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ProductToClass_repository_1.ProductToClassRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(ProductIconToProduct_repository_1.ProductIconToProductRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(ProductIcon_repository_1.ProductIconRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductRelated_repository_1.ProductRelatedRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductImage_repository_1.ProductImageRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(ProductSearchKeyword_repository_1.ProductSearchKeywordRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __metadata("design:paramtypes", [QueryProduct_repository_1.QueryProductRepository,
        Product_repository_1.ProductRepository,
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
        Member_repository_1.MemberRepository])
], ProductQueryService);
exports.ProductQueryService = ProductQueryService;
//# sourceMappingURL=product-query.service.js.map