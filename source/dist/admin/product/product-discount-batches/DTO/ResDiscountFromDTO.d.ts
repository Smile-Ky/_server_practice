export declare class ResDiscountFromDTO {
    batch_discount_id: string;
    batch_discount_name: string;
    batch_discount_start_date: Date;
    batch_discount_end_date: Date;
    is_use: Boolean;
    use_member_group_type: string;
    member_group_list: Array<string>;
    discount_type: string;
    discount_setting_text: number;
    product_list: Array<{
        sequence: string;
        product_option_id: string;
        product_price: string;
        product_sale_price: string;
    }>;
}
