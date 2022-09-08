import { ResMemoDTO } from "../../order-memo/DTO/ResMemoDTO";
import { ResOrderRroductListDTO } from "./ResOrderRroductListDTO";
export declare class ResOrderManagerDTO {
    order_code: string;
    order_create_date: Date;
    order_member_name: string;
    order_member_id: string;
    order_member_group: string;
    order_member_mail: string;
    order_member_phone: string;
    order_adress: string;
    product_list: Array<ResOrderRroductListDTO>;
    memo_list: Array<ResMemoDTO>;
    payment_amount: string;
    payment_create_date: string;
    payment_mileage: string;
    payment_discount: {
        amount: string;
        planning_discount: string;
        coupon_discount: string;
        member_discount: string;
        special_discount: string;
    };
    payment_method: Array<{
        method_name: string;
        payment_amount: string;
        refund_amount: string;
        remaining: string;
        etc: string;
    }>;
    constructor(partial: Partial<ResOrderManagerDTO>);
}
export declare const ResOrderManagerData: {};
