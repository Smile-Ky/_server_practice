import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
export declare class ProductSearchKeywordEntity extends BaseEntity {
    product_search_keyword_id: string;
    search_keyword: string;
    product: ProductEntity;
}
