import { BaseEntity } from "typeorm";
import { MileageSettingGroupPaymentEntity } from "./MileageSettingGroupPayment.entity";
export declare class MileageSettingEntity extends BaseEntity {
    mileage_setting_id: string;
    is_mileage_use: boolean;
    mileage_name: string;
    mileage_unit: string;
    is_use_purchase_date: Boolean;
    mileage_use_unit: number;
    mileage_limit: number;
    is_delivery_charge: boolean;
    purchase_amount_limit: number;
    mileage_max_use_limit_type: number;
    mileage_max_use_limit_text: number;
    update_date: Date;
    mileage_setting_group_payment: MileageSettingGroupPaymentEntity[];
}
