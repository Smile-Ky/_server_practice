import { Response } from "express";
import { OrderMemoService } from "./order-memo.service";
import { ReqMemoDTO } from "./DTO/ReqMemoDTO";
export declare class OrderMemoController {
    private readonly orderMemoService;
    constructor(orderMemoService: OrderMemoService);
    getAllMemo(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    getMemoBySearchOption(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findMemoId(memoId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    save(order_code: string, ReqMemo: ReqMemoDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(memoId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(memoId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
