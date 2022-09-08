import { BaseEntity } from "typeorm";
export declare class CouponSettingEntity extends BaseEntity {
    coupon_setting_id: string;
    is_use_coupon: Boolean;
    is_use_bargain_prices: Boolean;
    is_restore_cancel_before_deposit: Boolean;
    is_restore_cancel: Boolean;
    is_restore_product_return: Boolean;
    create_date: Date;
    update_date: Date;
}
