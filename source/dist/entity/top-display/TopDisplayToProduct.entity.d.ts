import { BaseEntity } from "typeorm";
import { ProductEntity } from "../product/Product.entity";
import { TopDisplayListEntity } from "./TopDisplayList.entity";
export declare class TopDisplayToProductEntity extends BaseEntity {
    top_display_to_product_id: string;
    sequence: number;
    product: ProductEntity;
    top_display_list: TopDisplayListEntity;
}
