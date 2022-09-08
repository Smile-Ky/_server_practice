export declare class ResOfflineCouponDTO {
    offlineCoupon_id: string;
    name: string;
    description: string;
    issued_method: string;
    mileage_serial: string;
    mileage_serial_method: string;
    mileage_generation_count: number;
    mileage_amount: number;
    random_coupon_serial: string;
    random_coupon_serial_method: string;
    random_coupon_generation_count: number;
    random_coupon_List: Array<string>;
    same_coupon_serial_method: string;
    same_coupon_List: Array<string>;
    coupon_start_date: Date;
    coupon_end_date: Date;
}
export declare const ResOfflineCouponData: {
    office_coupon_id: string;
    name: string;
    description: string;
    issued_method: string;
    mileage_serial: string;
    mileage_serial_method: string;
    mileage_generation_count: number;
    mileage_amount: number;
    random_coupon_serial: string;
    random_coupon_serial_method: string;
    random_coupon_generation_count: number;
    random_coupon_list: string[];
    same_coupon_serial_method: string;
    same_coupon_list: string[];
    coupon_start_date: string;
    coupon_end_date: string;
};
