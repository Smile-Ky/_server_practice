import { BaseEntity } from "typeorm";
import { MainDisplayListEntity } from "./MainDisplayList.entity";
import { ProductClassEntity } from "../product/ProductClass.entity";
export declare class MainDisplayToProductClassEntity extends BaseEntity {
    main_display_to_product_class_id: string;
    main_display_list: MainDisplayListEntity;
    product_class: ProductClassEntity;
}
