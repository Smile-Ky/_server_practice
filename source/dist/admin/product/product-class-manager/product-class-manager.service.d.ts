/// <reference types="multer-s3" />
import { ProductClassEntity } from "../../../entity/product/ProductClass.entity";
import { ReqProductClassFromDTO } from "./DTO/ReqProductClassFrom.dto";
import { ReqProductClassSequenceDTO } from "./DTO/ReqProductClassSequenceDTO";
import { ProductClassRepository } from "../../../repository/product/ProductClass.repository";
import { ReqProductClassSaveDto } from "./DTO/ReqProductClassSave.dto";
export declare class ProductClassMangerService {
    private productClassRepository;
    constructor(productClassRepository: ProductClassRepository);
    findAll(): Promise<any[]>;
    findClass(topClass: string): Promise<any>;
    findOneData(id: string): Promise<any>;
    save(data: ReqProductClassSaveDto): Promise<ProductClassEntity | import("typeorm").UpdateResult>;
    update(id: string, update_data: ReqProductClassFromDTO): Promise<ProductClassEntity>;
    updateSequence(update_data: Array<ReqProductClassSequenceDTO>): Promise<void>;
    delete(id: string): Promise<void>;
    imageUpload(images: Array<Express.MulterS3.File>): Promise<any[] | {
        image_url: string;
    }>;
}
