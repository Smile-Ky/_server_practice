import { BaseEntity } from "typeorm";
import { MemberEntity } from "./Member.entity";
export declare class MemberMileageLogEntity extends BaseEntity {
    member_mileage_log_id: string;
    order_detail_id: string;
    member: MemberEntity;
    mileage_description: string;
    mileage_payment: number;
    mileage_payment_use_state: boolean;
    create_date: Date;
    update_date: Date;
}
