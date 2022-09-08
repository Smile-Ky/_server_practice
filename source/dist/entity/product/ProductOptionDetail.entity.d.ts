import { BaseEntity } from "typeorm";
import { ProductOptionEntity } from "./ProductOption.entity";
export declare class ProductOptionDetailEntity extends BaseEntity {
    product_option_detail_id: string;
    name: string;
    value: string;
    product_option: ProductOptionEntity;
}
