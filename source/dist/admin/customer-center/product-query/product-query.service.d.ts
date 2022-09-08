import { ProductRepository } from "../../../repository/product/Product.repository";
import { ProductToClassRepository } from "../../../repository/product/ProductToClass.repository";
import { ProductOptionRepository } from "../../../repository/product/ProductOption.repository";
import { ProductOptionDetailRepository } from "../../../repository/product/ProductOptionDetail.repository";
import { ProductIconToProductRepository } from "../../../repository/product/ProductIconToProduct.repository";
import { ProductIconRepository } from "../../../repository/product/ProductIcon.repository";
import { ProductRelatedRepository } from "../../../repository/product/ProductRelated.repository";
import { ProductImageRepository } from "../../../repository/product/ProductImage.repository";
import { ProductBrandRepository } from "../../../repository/product/ProductBrand.repository";
import { ProductSearchKeywordRepository } from "../../../repository/product/ProductSearchKeyword.repository";
import { ProductClassRepository } from "../../../repository/product/ProductClass.repository";
import { QueryProductRepository } from "../../../repository/query/QueryProduct.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { ReqProductQueryFindDto } from "./DTO/ReqProductQueryFind.dto";
import { ReqProductAnswerFromDto } from "./DTO/ReqProductAnswerFrom.dto";
import { ReqProductQueryUpdateDto } from "./DTO/ReqProductQueryUpdate.dto";
import { ReqProductQueryFromDto } from "./DTO/ReqProductQueryFrom.dto";
import { QueryProductEntity } from "../../../entity/query/QueryProduct.entity";
import { ReqProductQueryUserUpdateDto } from "./DTO/ReqProductQueryUserUpdate.dto";
export declare class ProductQueryService {
    private queryProductRepository;
    private productRepository;
    private productToClassRepository;
    private productOptionRepository;
    private productOptionDetailRepository;
    private productIconToProductRepository;
    private productIconRepository;
    private productRelatedRepository;
    private productImageRepository;
    private productBrandRepository;
    private productSearchKeywordRepository;
    private productClassRepository;
    private memberRepository;
    constructor(queryProductRepository: QueryProductRepository, productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, memberRepository: MemberRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(find: ReqProductQueryFindDto, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<any>;
    query(memberId: string, data: ReqProductQueryFromDto): Promise<QueryProductEntity>;
    answer(id: string, data: ReqProductAnswerFromDto): Promise<import("typeorm").UpdateResult>;
    queryAdminUpdate(id: string, data: ReqProductQueryUserUpdateDto): Promise<import("typeorm").UpdateResult>;
    queryFrontUpdate(id: string, data: ReqProductQueryUpdateDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
