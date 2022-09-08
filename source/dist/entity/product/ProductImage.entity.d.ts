import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
export declare class ProductImageEntity extends BaseEntity {
    image_id: string;
    image_mode: number;
    sequence: number;
    image_url: string;
    product_id: ProductEntity;
}
