import { BaseEntity } from "typeorm";
import { ProductOptionEntity } from "../product/ProductOption.entity";
import { MemberEntity } from "../member/Member.entity";
import { ProductEntity } from "../product/Product.entity";
export declare class CartEntity extends BaseEntity {
    cart_id: string;
    member: MemberEntity;
    product: ProductEntity;
    product_option: ProductOptionEntity;
    wish_list_yn: boolean;
    create_date: Date;
    count: number;
}
