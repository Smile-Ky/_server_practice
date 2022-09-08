import { ProductIconRepository } from "../../../repository/product/ProductIcon.repository";
import { ReqIconFromDTO } from "./DTO/ReqIconFromDTO";
import { ProductIconEntity } from "../../../entity/product/ProductIcon.entity";
import { ProductIconToProductRepository } from "../../../repository/product/ProductIconToProduct.repository";
export declare class IconManagerService {
    private productIconRepository;
    private productIconToProductRepository;
    constructor(productIconRepository: ProductIconRepository, productIconToProductRepository: ProductIconToProductRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<ProductIconEntity>;
    create(data: ReqIconFromDTO): Promise<ProductIconEntity>;
    update(id: string, data: ReqIconFromDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<void>;
}
