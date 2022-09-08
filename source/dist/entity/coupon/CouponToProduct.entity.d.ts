import { BaseEntity } from "typeorm";
import { CouponEntity } from "./Coupon.entity";
import { ProductEntity } from "../product/Product.entity";
export declare class CouponToProductEntity extends BaseEntity {
    coupon_to_product_id: string;
    coupon: CouponEntity;
    product_id: ProductEntity;
}
