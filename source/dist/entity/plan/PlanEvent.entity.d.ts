import { BaseEntity } from "typeorm";
import { PlanEventImageEntity } from "./PlanEventImage.entity";
import { PlanEventToProductEntity } from "./PlanEventToProduct.entity";
import { PlanEventCommentEntity } from "./PlanEventComment.entity";
export declare class PlanEventEntity extends BaseEntity {
    plan_event_id: string;
    from_type: number;
    is_display: boolean;
    title: string;
    is_use_comment: boolean;
    start_date: string;
    end_date: string;
    is_show_date: boolean;
    description: string;
    create_date: Date;
    update_date: Date;
    plan_event_image_id: PlanEventImageEntity[];
    plan_event_to_product_id: PlanEventToProductEntity[];
    plan_event_comment: PlanEventCommentEntity[];
}
