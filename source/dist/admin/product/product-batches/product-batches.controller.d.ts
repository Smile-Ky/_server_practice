import { ProductBatchesService } from "./product-batches.service";
import { Response } from 'express';
import { ReqBatchesProductFindDTO } from "./DTO/ReqBatchesProductFindDTO";
import { ReqBatchesProductUpdateDTO } from "./DTO/ReqBatchesProductUpdateDTO";
export declare class ProductBatchesController {
    private readonly productBatchesService;
    constructor(productBatchesService: ProductBatchesService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(ReqBatchesProductFind: ReqBatchesProductFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    update(ReqBatchesProduct: ReqBatchesProductUpdateDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
