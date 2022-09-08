import { BaseEntity } from "typeorm";
import { CouponEntity } from "./Coupon.entity";
import { MemberGroupEntity } from "../member/MemberGroup.entity";
export declare class CouponToMemberGroupEntity extends BaseEntity {
    coupon_to_member_group_id: string;
    member_group_id: MemberGroupEntity;
    coupon_id: CouponEntity;
}
