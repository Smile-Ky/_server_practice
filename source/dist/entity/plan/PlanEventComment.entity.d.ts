import { BaseEntity } from "typeorm";
import { MemberEntity } from "../member/Member.entity";
import { PlanEventEntity } from "./PlanEvent.entity";
export declare class PlanEventCommentEntity extends BaseEntity {
    plan_event_comment_id: string;
    member_id: MemberEntity;
    plan_event_id: PlanEventEntity;
    comment: string;
    create_date: Date;
    update_date: Date;
}
