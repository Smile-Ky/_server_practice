import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
export declare class ProductRelatedEntity extends BaseEntity {
    product_related_id: string;
    product_id: ProductEntity;
    related_product: string;
}
