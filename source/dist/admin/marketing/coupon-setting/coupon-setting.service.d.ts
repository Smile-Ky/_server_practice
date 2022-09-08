import { CouponSettingRepository } from "../../../repository/coupon/CouponSetting.repository";
import { CouponSettingDTO } from "./DTO/CouponSettingResponseDTO";
export declare class CouponSettingService {
    private couponSettingRepository;
    constructor(couponSettingRepository: CouponSettingRepository);
    findCouponSetting(): Promise<import("../../../entity/coupon/CouponSetting.entity").CouponSettingEntity>;
    saveCouponSetting(couponSettingDTO: CouponSettingDTO): Promise<string>;
}
