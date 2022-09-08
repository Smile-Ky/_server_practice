import { OrderListService } from "./order-list.service";
import { ReqOrderListFindDTO } from "./DTO/ReqOrderListFindDTO";
import { Response } from "express";
export declare class OrderListController {
    private readonly orderListService;
    constructor(orderListService: OrderListService);
    findOrderId(orderId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(OrderListFind: ReqOrderListFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
