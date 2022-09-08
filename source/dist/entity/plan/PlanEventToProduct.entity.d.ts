import { BaseEntity } from "typeorm";
import { PlanEventEntity } from "./PlanEvent.entity";
import { ProductEntity } from "../product/Product.entity";
export declare class PlanEventToProductEntity extends BaseEntity {
    plan_event_to_product_id: string;
    sequence: number;
    plan_event_id: PlanEventEntity;
    product_id: ProductEntity;
}
