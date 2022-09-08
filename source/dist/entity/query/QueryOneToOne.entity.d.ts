import { BaseEntity } from "typeorm";
import { MemberEntity } from "../member/Member.entity";
export declare class QueryOneToOneEntity extends BaseEntity {
    query_one_to_one_id: string;
    state: number;
    order_code: string;
    title: string;
    writer: string;
    one_to_one_q: string;
    one_to_one_a: string;
    create_date: Date;
    update_date: Date;
    member_id: MemberEntity;
}
