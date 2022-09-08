import { BaseEntity } from "typeorm";
import { OfflineCouponInstanceEntity } from "./OfflineCouponInstance.entity";
import { OfflineCouponToCouponEntity } from "./OfflineCouponToCoupon.entity";
export declare class OfflineCouponEntity extends BaseEntity {
    offline_coupon_id: string;
    name: string;
    description: string;
    issued_method: string;
    coupon_serial: string;
    serial_method: number;
    coupon_generation_count: number;
    mileage_amount: number;
    offline_coupon_to_coupon: OfflineCouponToCouponEntity[];
    coupon_start_date: Date;
    coupon_end_date: Date;
    create_date: Date;
    update_date: Date;
    offline_coupon_instance: OfflineCouponInstanceEntity[];
}
