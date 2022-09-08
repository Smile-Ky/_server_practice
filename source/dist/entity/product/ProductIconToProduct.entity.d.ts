import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
import { ProductIconEntity } from "./ProductIcon.entity";
export declare class ProductIconToProductEntity extends BaseEntity {
    product_icon_to_product_id: string;
    product: ProductEntity;
    product_icon: ProductIconEntity;
}
