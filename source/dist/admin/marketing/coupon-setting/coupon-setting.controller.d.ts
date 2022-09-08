import { CouponSettingService } from "./coupon-setting.service";
import { CouponSettingDTO } from "./DTO/CouponSettingResponseDTO";
import { Response } from "express";
export declare class CouponSettingController {
    private readonly couponSettingService;
    constructor(couponSettingService: CouponSettingService);
    find(res: Response): Promise<Response<any, Record<string, any>>>;
    update(couponSettingDTO: CouponSettingDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
