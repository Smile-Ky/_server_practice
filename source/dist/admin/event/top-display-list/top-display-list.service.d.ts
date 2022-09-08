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
import { ReqTopDisplaySequenceDto } from "./DTO/ReqTopDisplaySequence.dto";
import { ReqTopDisplaySaveDto } from "./DTO/ReqTopDisplaySave.dto";
import { TopDisplayListRepository } from "../../../repository/top-display/TopDisplayList.repository";
import { TopDisplayToProductRepository } from "../../../repository/top-display/TopDisplayToProduct.repository";
import { TopDisplayToProductClassRepository } from "../../../repository/top-display/TopDisplayToProductClass.repository";
import { TopDisplayListEntity } from "../../../entity/top-display/TopDisplayList.entity";
export declare class TopDisplayListService {
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
    private topDisplayListRepository;
    private topDisplayToProductRepository;
    private topDisplayToProductClassRepository;
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, topDisplayListRepository: TopDisplayListRepository, topDisplayToProductRepository: TopDisplayToProductRepository, topDisplayToProductClassRepository: TopDisplayToProductClassRepository);
    findAll(): Promise<{
        data: any;
    }>;
    findId(id: string): Promise<{
        data: {
            display: any;
            product: {};
        };
    }>;
    updateList(data: ReqTopDisplaySequenceDto): Promise<{
        data: any;
    }>;
    create(data: ReqTopDisplaySaveDto): Promise<TopDisplayListEntity>;
    update(id: string, data: ReqTopDisplaySaveDto): Promise<void>;
    delete(id: string): Promise<void>;
}
