export declare class ResOrderManagerUserInfoDTO {
    order_id: string;
    order_code: string;
    order_create_date: string;
    user_id: string;
}
export declare const ResOrderManagerUserInfoDTOList: {
    order_id: string;
    order_code: string;
    order_create_date: string;
    user_id: string;
    user_name: string;
    group_name: string;
    order_user_phone: string;
    address: string;
    address_detail: string;
};
export declare const ResOrderManagerItemInfoDTO: {
    product_image_url: string;
    product_name: string;
    order_state: string;
    product_code: string;
    option_name: string;
    product_sale_price: number;
    order_product_count: number;
    member_discount: number;
    special_discount: number;
    coupon_discount: number;
    planning_discount: number;
    coupon_name: string;
    order_mileage: number;
    payment_price: number;
    mileage_payment: number;
    order_price: number;
    order_delivery: number;
    recipient_name: string;
    recipient_phone: string;
    address_number: string;
    address: string;
    address_detail: string;
    delivery_message: string;
    delivery_company_name: string;
    delivery_invoice_code: string;
    delivery_preparing_date: string;
    order_create_date: string;
    delivery_start_date: string;
    delivery_end_date: string;
}[];
export declare const ResOrderManagerClaimInfoDTO: {
    product_image_url: string;
    product_name: string;
    order_state: string;
    product_code: string;
    option_name: string;
    product_sale_price: number;
    order_product_count: number;
    member_discount: number;
    special_discount: number;
    coupon_discount: number;
    planning_discount: number;
    coupon_name: string;
    order_mileage: number;
    payment_price: number;
    mileage_payment: number;
    order_price: number;
    order_delivery: number;
    recipient_name: string;
    recipient_phone: string;
    address_number: string;
    address: string;
    address_detail: string;
    delivery_message: string;
    delivery_company_name: string;
    delivery_invoice_code: string;
    delivery_preparing_date: string;
    order_create_date: string;
    delivery_start_date: string;
    delivery_end_date: string;
}[];
export declare const ResOrderMemoDTOList: {
    order_memo_id: number;
    order_memo_context: string;
    order_memo_class: string;
    memo_writer: string;
    order_memo_state: string;
    order_memo_write_date: string;
}[];
export declare const ResOrderPaymentInfoDTO: {
    order_price: number;
    member_discount: number;
    special_discount: number;
    coupon_discount: number;
    planning_discount: number;
    delivery_price: number;
    deposit_date: string;
    order_mileage: number;
};
export declare const ResOrderPaymentMethodDTOList: {
    payment_method: string;
    payment_price: number;
    refund_price: number;
    waste_price: number;
    payment_memo: string;
}[];