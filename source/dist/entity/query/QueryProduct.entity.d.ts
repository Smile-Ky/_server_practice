import { BaseEntity } from "typeorm";
import { ProductOptionEntity } from "../product/ProductOption.entity";
import { MemberEntity } from "../member/Member.entity";
export declare class QueryProductEntity extends BaseEntity {
    query_product_id: string;
    query_type: number;
    is_open: boolean;
    is_answer: boolean;
    title: string;
    query_content: string;
    answer_writer: string;
    answer_content: string;
    create_date: Date;
    update_date: Date;
    member_id: MemberEntity;
    product_option_id: ProductOptionEntity;
}
