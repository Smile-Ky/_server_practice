import { BaseEntity } from "typeorm";
import { ProductToClassEntity } from "./ProductToClass.entity";
import { CouponToProductClassEntity } from "../coupon/CouponToProductClass.entity";
import { MainDisplayToProductClassEntity } from "../main-display/MainDisplayToProductClass.entity";
import { TopDisplayToProductClassEntity } from "../top-display/TopDisplayToProductClass.entity";
export declare class ProductClassEntity extends BaseEntity {
    product_class_id: string;
    class_name: string;
    use_classification: number;
    top_class: string;
    top_end_class: string;
    depth: number;
    sequence: number;
    image_url: string;
    create_date: Date;
    update_date: Date;
    product_mapped: ProductToClassEntity[];
    coupon_to_product_class: CouponToProductClassEntity[];
    main_display_to_product_class: MainDisplayToProductClassEntity[];
    top_display_to_product_class: TopDisplayToProductClassEntity[];
}
