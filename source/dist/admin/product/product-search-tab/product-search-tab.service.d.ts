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
import { ReqProductFindDTO } from "./DTO/ReqProductFindDTO";
export declare class ProductSearchTabService {
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
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(data: ReqProductFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    productFind(productId: Array<string>): Promise<{
        data: any;
    }>;
    productOption(productId: Array<string>): Promise<{
        data: any;
    }>;
}
