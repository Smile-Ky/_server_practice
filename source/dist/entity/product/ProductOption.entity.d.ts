import { BaseEntity } from "typeorm";
import { ProductOptionDetailEntity } from "./ProductOptionDetail.entity";
import { ProductEntity } from "./Product.entity";
import { ProductDisToProductEntity } from "./ProductDisToProduct.entity";
import { QueryProductEntity } from "../query/QueryProduct.entity";
import { ReviewEntity } from "../review/Review.entity";
export declare class ProductOptionEntity extends BaseEntity {
    product_option_id: string;
    product_option_code: string;
    product_wholesale_price: number;
    product_price: number;
    product_sale_price: number;
    is_out_of_stock: Boolean;
    stock_count: number;
    sale_stock_count: number;
    is_main: boolean;
    create_date: Date;
    update_date: Date;
    is_delete: boolean;
    product: ProductEntity;
    option_detail: ProductOptionDetailEntity[];
    product_dis_to_product: ProductDisToProductEntity[];
    query_product: QueryProductEntity[];
    review: ReviewEntity[];
}
