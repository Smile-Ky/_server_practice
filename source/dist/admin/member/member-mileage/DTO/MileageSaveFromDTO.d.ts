export declare class MileageSaveFromDTO {
    is_mileage_use: boolean;
    mileage_name: string;
    mileage_unit: string;
    mileage_setting_group_payment: Array<{
        group_id: string;
        payment_rate: number;
    }>;
    is_use_purchase_date: Boolean;
    mileage_use_unit: number;
    mileage_limit: number;
    is_delivery_charge: boolean;
    purchase_amount_limit: number;
    mileage_max_use_limit_type: string;
    mileage_max_use_limit_text: number;
}
export declare const MileageSaveFromData: {
    is_mileage_use: boolean;
    mileage_name: string;
    mileage_unit: string;
    mileage_payment_range: string;
    mileage_payment_standard: string;
    group_mileage_payment_rate: {
        group_name: string;
        payment_rate: number;
    }[];
    is_use_purchase_date: boolean;
    mileage_use_unit: number;
    mileage_limit: number;
    is_delivery_charge: boolean;
    purchase_amount_limit: number;
    mileage_max_use_limit: string;
    mileage_max_use_limit_text: number;
    mileage_auto_delete: boolean;
    autoDeleteYear: number;
    autoDeleteMonth: number;
};
