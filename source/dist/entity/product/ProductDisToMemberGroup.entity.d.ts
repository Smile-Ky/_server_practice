import { BaseEntity } from "typeorm";
import { ProductDiscountEntity } from "./ProductDiscount.entity";
import { MemberGroupEntity } from "../member/MemberGroup.entity";
export declare class ProductDisToMemberGroupEntity extends BaseEntity {
    product_dis_to_member_group_id: string;
    product_discount_id: ProductDiscountEntity;
    member_group_id: MemberGroupEntity;
}
