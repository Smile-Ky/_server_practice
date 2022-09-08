import { BaseEntity } from "typeorm";
import { ProductDiscountEntity } from "./ProductDiscount.entity";
import { ProductOptionEntity } from "./ProductOption.entity";
export declare class ProductDisToProductEntity extends BaseEntity {
    product_dis_to_product_id: string;
    sequence: number;
    discount_product_price: number;
    discount_price: number;
    product_discount_id: ProductDiscountEntity;
    product_option: ProductOptionEntity;
}
