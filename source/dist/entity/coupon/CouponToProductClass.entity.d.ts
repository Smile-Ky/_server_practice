import { BaseEntity } from "typeorm";
import { CouponEntity } from "./Coupon.entity";
import { ProductClassEntity } from "../product/ProductClass.entity";
export declare class CouponToProductClassEntity extends BaseEntity {
    coupon_to_product_class_id: string;
    coupon: CouponEntity;
    product_class: ProductClassEntity;
}
