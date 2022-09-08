import { BaseEntity } from "typeorm";
import { MemberEntity } from "./Member.entity";
export declare class MemberMileageEntity extends BaseEntity {
    member_mileage_id: string;
    member: MemberEntity;
    mileage: number;
}
