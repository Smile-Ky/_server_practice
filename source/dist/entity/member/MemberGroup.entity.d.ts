import { BaseEntity } from "typeorm";
import { MemberEntity } from "./Member.entity";
import { MileageSettingGroupPaymentEntity } from "../mileage/MileageSettingGroupPayment.entity";
import { ProductDisToMemberGroupEntity } from "../product/ProductDisToMemberGroup.entity";
import { CouponToMemberGroupEntity } from "../coupon/CouponToMemberGroup.entity";
import { ReviewSettingToMemberGroupEntity } from "../review/ReviewSettingToMemberGroup.entity";
export declare class MemberGroupEntity extends BaseEntity {
    group_id: string;
    group_name: string;
    group_level: number;
    is_default_group: Boolean;
    is_use_coupon: Boolean;
    is_use_mileage: Boolean;
    is_use_group_discount: Boolean;
    group_discount: number;
    is_auto_change_group: boolean;
    change_group_range: number;
    change_group_start_price: number;
    change_group_end_price: number;
    create_date: Date;
    update_date: Date;
    member: MemberEntity[];
    mileage_setting_group_payment: MileageSettingGroupPaymentEntity[];
    product_dis_to_member_group: ProductDisToMemberGroupEntity[];
    coupon_to_member_group: CouponToMemberGroupEntity[];
    review_setting_to_member_group: ReviewSettingToMemberGroupEntity[];
}
