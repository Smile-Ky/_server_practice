import { BaseEntity } from "typeorm";
import { TopDisplayToProductEntity } from "./TopDisplayToProduct.entity";
import { TopDisplayToProductClassEntity } from "./TopDisplayToProductClass.entity";
export declare class TopDisplayListEntity extends BaseEntity {
    top_display_list_id: string;
    sequence: number;
    display_name: string;
    is_show: boolean;
    is_date: boolean;
    start_date: Date;
    end_date: Date;
    create_date: Date;
    update_date: Date;
    top_display_to_product: TopDisplayToProductEntity[];
    top_display_to_product_class: TopDisplayToProductClassEntity[];
}
