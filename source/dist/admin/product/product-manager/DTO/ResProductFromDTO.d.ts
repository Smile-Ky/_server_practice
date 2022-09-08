export declare class ResProductFromDTO {
    product_id: string;
    product_code: string;
    product_company_type: string;
    product_company_name: string;
    product_class_id: string;
    product_class_sub_id: Array<string>;
    is_show: Boolean;
    product_sale_state: string;
    product_name: string;
    use_tax_free: Boolean;
    search_keyword: Array<string>;
    brand_id: string;
    brand_name: string;
    basie_image_id: string;
    basie_image_url: string;
    add_image_id_list: Array<{
        sequence: number;
        image_id: string;
        image_url: string;
    }>;
    sale_basie_volume: number;
    sale_max_volume_id: number;
    option_count: number;
    options: Array<{
        options_id: string;
        option: Array<{
            name: string;
            value: string;
        }>;
        product_wholesale_price: number;
        product_price: number;
        product_sale_price: number;
        is_out_of_stock: Boolean;
        stock_count: number;
        sale_stock_count: number;
    }>;
    product_description: string;
    is_show_product_information: Boolean;
    product_description_image: Array<{
        sequence: number;
        image_id: string;
        image_url: string;
    }>;
    use_point: Boolean;
    use_point_text: string;
    use_point_range: Boolean;
    use_point_range_text: string;
    is_use_icon: Boolean;
    icon_list: Array<string>;
    related_product_list: Array<string>;
    create_date: Date;
    update_date: Date;
}
export declare const ResProductFromData: {
    product_id: string;
    product_code: string;
    product_company_type: string;
    product_company_name: string;
    product_class_id: string;
    product_class_sub_id: string[];
    is_show: boolean;
    product_sale_state: string;
    product_name: string;
    use_tax_free: boolean;
    search_keywords: string[];
    brand_id: string;
    brand_name: string;
    basie_image_id: string;
    basie_image_url: string;
    add_image_id_list: {
        sequence: number;
        image_id: string;
        image_url: string;
    }[];
    product_wholesale_price: number;
    product_price: number;
    product_sale_price: number;
    sale_basie_volume: number;
    sale_max_volume_id: number;
    option_count: number;
    options: {
        option_id: string;
        option: {
            name: string;
            value: string;
        }[];
        wholesale_product_prices: number;
        product_prices: number;
        sale_prices: number;
        is_out_of_stock: boolean;
        stock_count: number;
        sale_stock_count: number;
    }[];
    product_description: string;
    is_show_product_information: boolean;
    product_description_image_id: {
        sequence: number;
        image_id: string;
        image_url: string;
    }[];
    use_point: boolean;
    use_point_text: string;
    use_point_range: boolean;
    use_point_range_text: string;
    is_use_icon: boolean;
    icon_id_list: string[];
    related_product_id_list: string[];
    create_date: string;
    update_date: string;
};
