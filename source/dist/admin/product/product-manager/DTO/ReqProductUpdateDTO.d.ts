export declare class ReqProductUpdateDTO {
    brand_id: string;
    product_code: string;
    product_company_type: string;
    product_company_name: string;
    is_show: Boolean;
    product_sale_state: string;
    product_name: string;
    use_tax_free: Boolean;
    sale_basie_volume: number;
    sale_max_volume_id: number;
    option_count: number;
    product_description: string;
    is_show_product_information: Boolean;
    use_point: Boolean;
    use_point_text: string;
    use_point_range: Boolean;
    use_point_range_text: string;
    icon_list: Array<string>;
    related_product_list: Array<string>;
    product_class_id: string;
    product_class_sub_id: Array<string>;
    search_keyword: Array<string>;
    basie_image_id: string;
    add_image_id_list: Array<{
        sequence: number;
        image_id: string;
    }>;
    product_description_image: Array<{
        sequence: number;
        image_id: string;
        image_url: string;
    }>;
    options: Array<{
        option: Array<{
            name: string;
            value: string;
        }>;
        product_option_id: string;
        product_wholesale_price: number;
        product_price: number;
        product_sale_price: number;
        is_out_of_stock: Boolean;
        stock_count: number;
        sale_stock_count: number;
        product_option_code: string;
    }>;
}
