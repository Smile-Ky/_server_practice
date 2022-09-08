import { BaseEntity } from "typeorm";
import { CouponEntity } from "./Coupon.entity";
export declare class CouponOverlapEntity extends BaseEntity {
    coupon_overlap_id: string;
    coupon_id: CouponEntity;
    overlap_coupon: string;
}
