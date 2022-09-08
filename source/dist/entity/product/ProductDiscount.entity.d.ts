import { BaseEntity } from "typeorm";
import { ProductDisToMemberGroupEntity } from "./ProductDisToMemberGroup.entity";
import { ProductDisToProductEntity } from "./ProductDisToProduct.entity";
export declare class ProductDiscountEntity extends BaseEntity {
    batch_discount_id: string;
    batch_discount_name: string;
    batch_discount_start_date: Date;
    batch_discount_end_date: Date;
    is_use: Boolean;
    use_member_group_type: number;
    discount_type: number;
    discount_setting_text: number;
    create_date: Date;
    update_date: Date;
    product_dis_to_member_group: ProductDisToMemberGroupEntity[];
    product_dis_to_product: ProductDisToProductEntity[];
}
