export declare const resFindAll: {
    result: number;
    data: {
        data: {
            top_display_list_id: string;
            sequence: string;
            display_name: string;
            start_date: string;
            end_date: string;
            is_show: string;
            create_date: string;
            update_date: string;
        }[];
    };
};
export declare const resFindId: {
    result: number;
    data: {
        data: {
            display: {
                top_display_list_id: string;
                sequence: string;
                display_name: string;
                start_date: string;
                end_date: string;
                is_show: string;
                is_date: string;
                create_date: string;
                update_date: string;
            };
            product: {
                product_id: string;
                product_option_id: string;
                product_code: string;
                product_url: string;
                product_name: string;
                product_brand_name: string;
                product_price: string;
                product_sale_price: string;
                product_sale_state: string;
                is_show: string;
            }[];
        };
    };
};
export declare const resSaveSequence: {
    result: number;
    data: {
        data: {
            top_display_list_id: string;
            sequence: string;
            display_name: string;
            start_date: string;
            end_date: string;
            is_show: string;
            create_date: string;
            update_date: string;
        }[];
    };
};
export declare const resCreate: {
    result: number;
    data: {
        sequence: string;
        display_name: string;
        is_show: string;
        is_date: string;
        start_date: string;
        end_date: string;
        create_date: string;
        update_date: string;
        top_display_list_id: string;
    };
};
export declare const resUpdate: {
    result: number;
    data: {
        data: string;
    };
};
export declare const resDelete: {
    result: number;
    data: {
        data: string;
    };
};
