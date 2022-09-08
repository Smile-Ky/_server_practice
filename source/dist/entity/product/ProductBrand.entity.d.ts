import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
export declare class ProductBrandEntity extends BaseEntity {
    brand_id: string;
    brand_name: string;
    brand_code: string;
    is_use_brand: boolean;
    refund_address_number: string;
    refund_address: string;
    create_date: Date;
    update_date: Date;
    product: ProductEntity[];
}
