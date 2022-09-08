import { OrderClaimListService } from "./order-claim-list.service";
import { Response } from "express";
import { ReqOrderCancelDTO } from "./DTO/ReqOrderCancelDTO";
import { ReqCancelListFindDTO } from "./DTO/ReqCancelListFindDTO";
import { ReqReturnListFindDTO } from "./DTO/ReqReturnListFindDTO";
import { ReqOrderReturnDTO } from "./DTO/ReqOrderReturnDTO";
import { ReqChangeListFindDTO } from "./DTO/ReqChangeListFindDTO";
import { ReqOrderChangeDTO } from "./DTO/ReqOrderChangeDTO";
import { ReqRefundListFindDTO } from "./DTO/ReqRefundListFindDTO";
import { ReqOrderRefundSetDetail } from "./DTO/ReqOrderRefundSetDetail";
export declare class OrderClaimListController {
    private readonly claimListService;
    constructor(claimListService: OrderClaimListService);
    findAllCancel(status: number, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findCancel(req: ReqCancelListFindDTO, status: number, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    putCancel(req: ReqOrderCancelDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    findAllReturn(status: number, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findReturn(req: ReqReturnListFindDTO, status: number, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    putReturn(req: ReqOrderReturnDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    findAllChange(status: number, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findChange(req: ReqChangeListFindDTO, status: number, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    putChange(req: ReqOrderChangeDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    findAllRefund(page: number, pageSize: number, status: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findRefund(req: ReqRefundListFindDTO, page: number, pageSize: number, status: number, res: Response): Promise<Response<any, Record<string, any>>>;
    getRefundPopup(orderId: number, res: Response): Promise<Response<any, Record<string, any>>>;
    putRefundPopup(req: ReqOrderRefundSetDetail, orderId: number, res: Response): Promise<Response<any, Record<string, any>>>;
    putRefund(req: ReqOrderRefundSetDetail, orderId: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
