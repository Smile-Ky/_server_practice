/// <reference types="multer-s3" />
import { ProductClassMangerService } from './product-class-manager.service';
import { ReqProductClassFromDTO } from "./DTO/ReqProductClassFrom.dto";
import { ReqProductClassSequenceDTO } from "./DTO/ReqProductClassSequenceDTO";
import { Response } from 'express';
import { ReqProductClassSaveDto } from "./DTO/ReqProductClassSave.dto";
export declare class ProductClassMangerController {
    private readonly productClassMangerService;
    constructor(productClassMangerService: ProductClassMangerService);
    getCategory(res: Response): Promise<Response<any, Record<string, any>>>;
    findTopClass(res: Response): Promise<Response<any, Record<string, any>>>;
    findSubClass(productClassId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    getCategoryOne(productClassId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    insertSubcategory(ReqProductClassFrom: ReqProductClassSaveDto, res: Response): Promise<Response<any, Record<string, any>> | "hello">;
    updateCategory(productClassId: string, data: ReqProductClassFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    updateSequence(data: Array<ReqProductClassSequenceDTO>, res: Response): Promise<Response<any, Record<string, any>>>;
    DeleteCategory(productClassId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    imageUpload(images: Array<Express.MulterS3.File>, res: Response): Promise<Response<any, Record<string, any>> | {
        result: number;
        data: object;
    }>;
}
