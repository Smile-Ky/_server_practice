import { BaseEntity } from "typeorm";
import { ProductClassEntity } from "../product/ProductClass.entity";
import { TopDisplayListEntity } from "./TopDisplayList.entity";
export declare class TopDisplayToProductClassEntity extends BaseEntity {
    top_display_to_product_class_id: string;
    product_class: ProductClassEntity;
    top_display_list: TopDisplayListEntity;
}
