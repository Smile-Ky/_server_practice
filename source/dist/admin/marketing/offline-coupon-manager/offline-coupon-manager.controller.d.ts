import { Response } from 'express';
import { ReqFindOfflineCouponDTO } from "./DTO/ReqFindOfflineCouponDTO";
import { ReqIssuanceFindDTO } from "../coupon-manager/DTO/ReqIssuanceFindDTO";
import { ReqCouponIdFindDTO } from "../coupon-manager/DTO/ReqCouponIdFindDTO";
import { ReqOfflineCouponDTO } from "./DTO/ReqOfflineCouponDTO";
import { OfflineCouponManagerService } from "./offline-coupon-manager.service";
export declare class OfflineCouponManagerController {
    private offlineCouponManagerService;
    constructor(offlineCouponManagerService: OfflineCouponManagerService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(reqFindOfflineCoupon: ReqFindOfflineCouponDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findSimpleId(offlineCouponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findFullId(offlineCouponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findPaymentCouponList(res: Response): Promise<Response<any, Record<string, any>>>;
    save(resOfflineCoupon: ReqOfflineCouponDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(resOfflineCoupon: ReqOfflineCouponDTO, offlineCouponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(offlineCouponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findIssuanceAll(offlineCouponId: string, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findIssuance(offlineCouponId: string, page: number, pageSize: number, req: ReqIssuanceFindDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    cancelIssuance(couponIdList: ReqCouponIdFindDTO, offlineCouponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
