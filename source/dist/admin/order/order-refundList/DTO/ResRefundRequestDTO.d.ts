import { ResRefundRequestItemDTO } from "./ResRefundRequestItemDTO";
export declare class ResRefundRequestDTO {
    order_id: string;
    order_code: string;
    user_id: string;
    order_refund_list_item: Array<ResRefundRequestItemDTO>;
    refund_price: number;
    offset_delivery_price: number;
    coupon_discount_price: number;
    final_price: number;
    pay_type: string;
    waste_price: number;
    tax_on_refund_price: number;
    untax_on_refund_price: number;
    final_refund_price: number;
}
export declare const ResReListData: {
    order_id: string;
    order_code: string;
    user_id: string;
    order_item: {
        order_id: string;
        order_code: string;
        claim_code: number;
        refund_state: string;
        order_state: string;
        product_image_url: string;
        product_name: string;
        option_name: string;
        product_sale_price: number;
        order_product_count: number;
        order_price: number;
        order_delivery: number;
        user_name: string;
        order_user_phone: string;
        deposit_date: string;
        claim_reason: string;
        order_create_date: string;
        refund_start_date: string;
        refund_end_date: string;
    }[];
};
