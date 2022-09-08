import { BaseEntity } from "typeorm";
import { MemberGroupEntity } from "../member/MemberGroup.entity";
import { MileageSettingEntity } from "./MileageSetting.entity";
export declare class MileageSettingGroupPaymentEntity extends BaseEntity {
    mileage_group_payment_id: string;
    mileage_setting: MileageSettingEntity;
    member_group: MemberGroupEntity;
    payment_rate: number;
}
