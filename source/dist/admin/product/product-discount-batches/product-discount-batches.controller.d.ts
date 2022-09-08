import { ProductDiscountBatchesService } from './product-discount-batches.service';
import { ReqDiscountFindDTO } from "./DTO/ReqDiscountFindDTO";
import { Response } from 'express';
import { ReqDiscountFromDTO } from "./DTO/ReqDiscountFromDTO";
export declare class ProductDiscountBatchesController {
    private readonly productDiscountBatchService;
    constructor(productDiscountBatchService: ProductDiscountBatchesService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(productDiscountFind: ReqDiscountFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findOne(batchDiscountId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    save(ReqDiscountFrom: ReqDiscountFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(batchDiscountId: string, ReqDiscountFrom: ReqDiscountFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(batchDiscountId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    check(product_option_Id: Array<string>, res: Response): Promise<Response<any, Record<string, any>>>;
}
