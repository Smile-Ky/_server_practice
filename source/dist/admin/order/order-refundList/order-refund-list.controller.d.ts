import { OrderRefundListService } from "./order-refund-list.service";
import { Response } from "express";
import { ReqOrderListFindDTO } from "../order-list/DTO/ReqOrderListFindDTO";
export declare class OrderRefundListController {
    private readonly orderRefundListService;
    constructor(orderRefundListService: OrderRefundListService);
    findOrderId(orderId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(OrderListFind: ReqOrderListFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
