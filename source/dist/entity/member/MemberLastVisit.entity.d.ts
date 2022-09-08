import { BaseEntity } from "typeorm";
import { MemberEntity } from "./Member.entity";
export declare class MemberLastVisitEntity extends BaseEntity {
    member_last_visit_id: string;
    member_id: MemberEntity;
    last_visit: Date;
}
