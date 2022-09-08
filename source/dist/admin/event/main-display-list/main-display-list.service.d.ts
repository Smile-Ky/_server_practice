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
import { ReqDisplaySequenceDto } from "./DTO/ReqDisplaySequence.dto";
import { ReqDisplaySaveDto } from "./DTO/ReqDisplaySave.dto";
import { MainDisplayListEntity } from "../../../entity/main-display/MainDisplayList.entity";
import { MainDisplayListRepository } from "../../../repository/main-display/MainDisplayList.repository";
import { MainDisplayToProductRepository } from "../../../repository/main-display/MainDisplayToProduct.repository";
import { MainDisplayToProductClassRepository } from "../../../repository/main-display/MainDisplayToProductClass.repository";
export declare class MainDisplayListService {
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
    private mainDisplayListRepository;
    private mainDisplayToProductRepository;
    private mainDisplayToProductClassRepository;
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, mainDisplayListRepository: MainDisplayListRepository, mainDisplayToProductRepository: MainDisplayToProductRepository, mainDisplayToProductClassRepository: MainDisplayToProductClassRepository);
    findAll(): Promise<{
        data: any;
    }>;
    findId(id: string): Promise<{
        data: {
            display: any;
            product: {};
        };
    }>;
    updateList(data: ReqDisplaySequenceDto): Promise<{
        data: any;
    }>;
    create(data: ReqDisplaySaveDto): Promise<MainDisplayListEntity>;
    update(id: string, data: ReqDisplaySaveDto): Promise<void>;
    delete(id: string): Promise<void>;
}
