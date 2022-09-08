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
import { CouponToProductRepository } from "../../../repository/coupon/CouponToProduct.repository";
import { ProductDisToProductRepository } from "../../../repository/product/ProductDisToProduct.repository";
import { ProductDisToMemberGroupRepository } from "../../../repository/product/ProductDisToMemberGroup.repository";
import { ProductDiscountRepository } from "../../../repository/product/ProductDiscount.repository";
import { ReqDiscountFromDTO } from "./DTO/ReqDiscountFromDTO";
import { ReqDiscountFindDTO } from "./DTO/ReqDiscountFindDTO";
import { ProductDiscountEntity } from "../../../entity/product/ProductDiscount.entity";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
export declare class ProductDiscountBatchesService {
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
    private couponToProductRepository;
    private productDisToProductRepository;
    private productDisToMemberGroupRepository;
    private productDiscountRepository;
    private memberGroupRepository;
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, couponToProductRepository: CouponToProductRepository, productDisToProductRepository: ProductDisToProductRepository, productDisToMemberGroupRepository: ProductDisToMemberGroupRepository, productDiscountRepository: ProductDiscountRepository, memberGroupRepository: MemberGroupRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(find: ReqDiscountFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<any>;
    create(data: ReqDiscountFromDTO): Promise<ProductDiscountEntity>;
    update(id: string, data: ReqDiscountFromDTO): Promise<void>;
    delete(id: string): Promise<{}>;
    checkProduct(product_option_Id: Array<string>): Promise<{
        massage: string;
    }>;
}
