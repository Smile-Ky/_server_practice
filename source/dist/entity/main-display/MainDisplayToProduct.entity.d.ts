import { BaseEntity } from "typeorm";
import { ProductEntity } from "../product/Product.entity";
import { MainDisplayListEntity } from "./MainDisplayList.entity";
export declare class MainDisplayToProductEntity extends BaseEntity {
    main_display_to_product_id: string;
    sequence: number;
    product: ProductEntity;
    main_display_list: MainDisplayListEntity;
}
