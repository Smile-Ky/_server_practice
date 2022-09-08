export declare class ResRefundRequestItemDTO {
    claim_code: number;
    refund_state: string;
    product_image_url: string;
    product_name: string;
    option_name: string;
    product_sale_price: number;
    order_product_count: number;
    payment_price: number;
    delivery_charge_id: number;
    delivery_price: number;
    claim_reason: string;
    constructor(partial: Partial<ResRefundRequestItemDTO>);
}
export declare const ResRefundRequestItemData: {
    payment_state: string;
    claim_state: string;
    refund_state: string;
    order_state: string;
    product_image_url: string;
    product_name: string;
    option_name: string;
    product_sale_price: number;
    order_product_count: number;
    payment_price: number;
    delivery_price: number;
    order_user_name: string;
    order_user_phone: string;
    deposit_date: string;
    refund_reason: string;
    order_date: string;
    refund_start_date: string;
    refund_end_date: string;
};
