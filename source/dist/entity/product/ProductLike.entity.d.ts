import { BaseEntity } from "typeorm";
import { ProductEntity } from "./Product.entity";
import { MemberEntity } from "../member/Member.entity";
export declare class ProductLikeEntity extends BaseEntity {
    product_like_id: string;
    product_id: ProductEntity;
    member_id: MemberEntity;
    create_date: Date;
    update_date: Date;
}
