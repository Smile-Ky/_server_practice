import { OrderManagerService } from "./order-manager.service";
import { Response } from "express";
import { ReqOrderSeparationDTO } from "./DTO/ReqOrderSeparationDTO";
import { ReqUserUpdateDTO } from "./DTO/ReqUserUpdateDTO";
import { ReqOrderStatusChangeDTO } from "./DTO/ReqOrderStatusChangeDTO";
import { ReqOrderStatusChangePageDTO } from "./DTO/ReqOrderStatusChangePageDTO";
import { ReqOrderChangeFuncDTO } from "./DTO/ReqOrderChangeFuncDTO";
import { ReqOrderStatusChangeDepositDTO } from "./DTO/ReqOrderStatusChangeDepositDTO";
export declare class OrderManagerController {
    private readonly orderManagerService;
    constructor(orderManagerService: OrderManagerService);
    findOrderDetail(orderCode: string, res: Response): Promise<Response<any, Record<string, any>>>;
    orderSeparation(ReqOrderSeparationData: Array<ReqOrderSeparationDTO>, res: Response): Promise<Response<any, Record<string, any>>>;
    putOrderUserUpdate(userUpdateDTO: ReqUserUpdateDTO, res: Response, orderCode: string): Promise<Response<any, Record<string, any>>>;
    manualStatusChange(reqOrderStatusChangeDTO: ReqOrderStatusChangeDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    manualStatusChangeDeposit(req: ReqOrderStatusChangeDepositDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    findChangeRecord(orderId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findChangeRecordByOrder(orderId: string, orderDetailId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    postChangePageOn(reqOrderStatusChangePageDTO: ReqOrderStatusChangePageDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    postChangePageRun(reqOrderChangeFuncDTO: ReqOrderChangeFuncDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
