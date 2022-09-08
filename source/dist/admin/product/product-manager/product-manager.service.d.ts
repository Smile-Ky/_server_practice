/// <reference types="multer-s3" />
import { ProductRepository } from "../../../repository/product/Product.repository";
import { ProductImageRepository } from "../../../repository/product/ProductImage.repository";
import { ReqProductFindListDTO } from "./DTO/ReqProductFindListDTO";
import { ProductEntity } from "../../../entity/product/Product.entity";
import { ProductToClassRepository } from "../../../repository/product/ProductToClass.repository";
import { ProductIconToProductRepository } from "../../../repository/product/ProductIconToProduct.repository";
import { ProductOptionRepository } from "../../../repository/product/ProductOption.repository";
import { ProductOptionDetailRepository } from "../../../repository/product/ProductOptionDetail.repository";
import { ProductRelatedRepository } from "../../../repository/product/ProductRelated.repository";
import { ReqProductFromDTO } from "./DTO/ReqProductFromDTO";
import { ProductBrandRepository } from "../../../repository/product/ProductBrand.repository";
import { ProductSearchKeywordRepository } from "../../../repository/product/ProductSearchKeyword.repository";
import { ProductClassRepository } from "../../../repository/product/ProductClass.repository";
import { ProductIconRepository } from "../../../repository/product/ProductIcon.repository";
import { ReqProductUpdateDTO } from "./DTO/ReqProductUpdateDTO";
import { CouponToProductRepository } from "../../../repository/coupon/CouponToProduct.repository";
import { ProductDisToProductRepository } from "../../../repository/product/ProductDisToProduct.repository";
export declare class ProductManagerService {
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
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, couponToProductRepository: CouponToProductRepository, productDisToProductRepository: ProductDisToProductRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(find: ReqProductFindListDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<{
        data: any;
    }>;
    create(data: ReqProductFromDTO): Promise<ProductEntity | {
        result: boolean;
        data: any[];
    }>;
    update(product_id: string, data: ReqProductUpdateDTO): Promise<void>;
    optionDelete(optionId: string): Promise<void>;
    delete(product_id: string): Promise<void>;
    imageUpload(images: Array<Express.MulterS3.File>): Promise<any[] | {
        image_id: string;
        image_url: string;
    }>;
}
