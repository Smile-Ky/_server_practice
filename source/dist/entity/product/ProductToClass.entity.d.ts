import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
import { ProductClassEntity } from "./ProductClass.entity";
export declare class ProductToClassEntity extends BaseEntity {
    product_to_class_id: string;
    is_main: boolean;
    product_id: ProductEntity;
    product_class_id: ProductClassEntity;
}
