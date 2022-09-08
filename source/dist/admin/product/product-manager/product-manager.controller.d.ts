/// <reference types="multer-s3" />
import { ProductManagerService } from './product-manager.service';
import { ReqProductFindListDTO } from './DTO/ReqProductFindListDTO';
import { Response, Request } from "express";
import { ReqProductFromDTO } from "./DTO/ReqProductFromDTO";
import { ReqProductUpdateDTO } from "./DTO/ReqProductUpdateDTO";
export declare class ProductManagerController {
    private readonly productManagerService;
    constructor(productManagerService: ProductManagerService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(ReqProductFind: ReqProductFindListDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(productId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(product: ReqProductFromDTO, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    update(productId: string, data: ReqProductUpdateDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteOption(optionId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(productId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    imageUpload(images: Array<Express.MulterS3.File>, res: Response): Promise<Response<any, Record<string, any>> | {
        result: number;
        data: object;
    }>;
}
