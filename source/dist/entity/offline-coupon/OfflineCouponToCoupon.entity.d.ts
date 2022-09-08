import { BaseEntity } from "typeorm";
import { CouponEntity } from "../coupon/Coupon.entity";
import { OfflineCouponEntity } from "./OfflineCoupon.entity";
export declare class OfflineCouponToCouponEntity extends BaseEntity {
    offline_coupon_to_coupon_id: string;
    coupon: CouponEntity;
    offline_coupon: OfflineCouponEntity;
}
