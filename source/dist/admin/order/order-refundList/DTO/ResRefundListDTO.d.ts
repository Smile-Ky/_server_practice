import { ResRefundListItemDTO } from "./ResRefundListItemDTO";
export declare class ResRefundListDTO {
    order_id: string;
    order_code: string;
    user_id: string;
    order_refund_list_item: Array<ResRefundListItemDTO>;
    constructor(partial: Partial<ResRefundListDTO>);
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
