import { BaseEntity } from "typeorm";
import { ProductIconToProductEntity } from "./ProductIconToProduct.entity";
export declare class ProductIconEntity extends BaseEntity {
    icon_id: string;
    icon_name: string;
    icon_text: string;
    font_color: string;
    background_color: string;
    is_use_icon: boolean;
    create_date: Date;
    update_date: Date;
    product_icon_to_product: ProductIconToProductEntity[];
}
