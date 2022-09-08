import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
export declare class ProductStarPointEntity extends BaseEntity {
    product_star_point_id: string;
    product_id: ProductEntity;
    average_star_point: string;
}
