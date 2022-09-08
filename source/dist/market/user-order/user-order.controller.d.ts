import { UserOrderService } from "./user-order.service";
import { Request, Response } from "express";
import { ReqUpdateAddressBookDto } from "./DTO/ReqUpdateAddressBook.dto";
import { ReqUpdateAddressDefaultDto } from "./DTO/ReqUpdateAddressDefault.dto";
import { ReqGetOrderInputDto } from "./DTO/ReqGetOrderInput.dto";
export declare class UserOrderController {
    private readonly userOrderService;
    constructor(userOrderService: UserOrderService);
    getShppingAddress(oid: string, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateAddressBook(data: ReqUpdateAddressBookDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateAddressDefault(data: ReqUpdateAddressDefaultDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getOrderInput(data: ReqGetOrderInputDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateOrderInput(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    paymentAction(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getOrderComplete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
