import { BaseEntity } from "typeorm";
import { MainDisplayToProductEntity } from "./MainDisplayToProduct.entity";
import { MainDisplayToProductClassEntity } from "./MainDisplayToProductClass.entity";
export declare class MainDisplayListEntity extends BaseEntity {
    main_display_list_id: string;
    sequence: number;
    display_name: string;
    is_show: boolean;
    is_date: boolean;
    start_date: Date;
    end_date: Date;
    create_date: Date;
    update_date: Date;
    main_display_to_product: MainDisplayToProductEntity[];
    main_display_to_product_class: MainDisplayToProductClassEntity;
}
