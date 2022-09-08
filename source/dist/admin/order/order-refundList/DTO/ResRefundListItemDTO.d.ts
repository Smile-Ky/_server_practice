export declare class ResRefundListItemDTO {
    payment_state: string;
    claim_code: number;
    refund_state: string;
    order_state: string;
    product_image_url: string;
    product_name: string;
    option_name: string;
    product_sale_price: number;
    order_product_count: number;
    payment_price: number;
    delivery_price: string;
    order_user_name: string;
    order_user_phone: string;
    deposit_date: Date;
    refund_reason: string;
    order_date: Date;
    refund_start_date: Date;
    refund_end_date: Date;
    constructor(partial: Partial<ResRefundListItemDTO>);
}
export declare const ResRefundListItemData: {
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
};