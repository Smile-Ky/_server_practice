import { ReqBrandFindDTO } from "./DTO/ReqBrandFindDTO";
import { ReqBrandFromDTO } from "./DTO/ReqBrandFromDTO";
import { ProductBrandEntity } from "../../../entity/product/ProductBrand.entity";
import { ProductBrandRepository } from "../../../repository/product/ProductBrand.repository";
export declare class BrandManagerService {
    private brandManagerRepository;
    constructor(brandManagerRepository: ProductBrandRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<ProductBrandEntity>;
    find(find: ReqBrandFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    save(data: ReqBrandFromDTO): Promise<ProductBrandEntity>;
    update(id: string, data: ReqBrandFromDTO): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
