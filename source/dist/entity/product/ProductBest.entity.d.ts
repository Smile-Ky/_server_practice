import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
import { ProductClassEntity } from "./ProductClass.entity";
export declare class ProductBestEntity extends BaseEntity {
    product_best_id: string;
    sequence: number;
    sale_count: number;
    best_period: number;
    product_class_id: ProductClassEntity;
    product_id: ProductEntity;
}
