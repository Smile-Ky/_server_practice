import { BaseEntity } from "typeorm";
import { PlanEventEntity } from "./PlanEvent.entity";
export declare class PlanEventImageEntity extends BaseEntity {
    plan_event_image_id: string;
    plan_event_url: string;
    is_OG_tag: boolean;
    plan_event_id: PlanEventEntity;
}
