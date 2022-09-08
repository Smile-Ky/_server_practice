import { CouponManagerService } from "./coupon-manager.service";
import { Response } from 'express';
import { ReqCouponFindDTO } from "./DTO/ReqCouponFindDTO";
import { ReqUserFindDTO } from "./DTO/ReqUserFindDTO";
import { ReqCouponFindUserDTO } from "./DTO/ReqCouponFindUserDTO";
import { ReqCouponIdFindDTO } from "./DTO/ReqCouponIdFindDTO";
import { ReqCouponSaveDTO } from "./DTO/ReqCouponSaveDTO";
export declare class CouponManagerController {
    private readonly couponManagerService;
    constructor(couponManagerService: CouponManagerService);
    findSimple(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(couponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    find(find: ReqCouponFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    save(CouponSaveDTO: ReqCouponSaveDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    updateFindId(couponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(couponId: string, CouponSaveDTO: ReqCouponSaveDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    Delete(couponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findIssuanceCouponUserAll(couponId: string, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findIssuanceCouponUser(reqCouponFindUserDTO: ReqCouponFindUserDTO, couponId: string, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    cancelIssuanceCoupon(memberIdList: ReqCouponIdFindDTO, couponId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    preIssuanceCouponAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    preIssuanceCoupon(reqCouponFindUserDTO: ReqCouponFindUserDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    IssuanceCouponAll(couponId: string, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    IssuanceCoupon(reqCouponFindUserDTO: ReqCouponFindUserDTO, couponId: string, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findIssuanceCoupon(couponId: string, useridList: ReqUserFindDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
