import { BaseEntity } from "typeorm";
import { MemberEntity } from "../member/Member.entity";
import { MemberAddressEntity } from "../member/MemberAddress.entity";
export declare class OrderMainEntity extends BaseEntity {
    order_id: number;
    order_code: string;
    order_create_date: string;
    order_user_phone: string;
    order_email_address: string;
    deposit_date: string;
    order_price: number;
    order_use_mileage: number;
    order_delivery: number;
    planning_discount: string;
    coupon_discount: number;
    member_discount: number;
    special_discount: number;
    order_check_yn: number;
    member: MemberEntity;
    member_address_id: MemberAddressEntity;
}
