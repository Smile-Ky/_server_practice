import { BaseEntity } from "typeorm";
import { MemberEntity } from "../member/Member.entity";
import { CouponEntity } from "./Coupon.entity";
import { OrderDetailEntity } from "../order/OrderDetail.Entity";
export declare class CouponToMemberEntity extends BaseEntity {
    coupon_to_member_id: string;
    member_id: MemberEntity;
    coupon_id: CouponEntity;
    create_date: Date;
    use_date: Date;
    is_use: number;
    cancel_date: Date;
    order_detail: OrderDetailEntity;
}
