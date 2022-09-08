import { BaseEntity } from "typeorm";
import { OfflineCouponEntity } from "./OfflineCoupon.entity";
import { MemberEntity } from "../member/Member.entity";
export declare class OfflineCouponInstanceEntity extends BaseEntity {
    offline_coupon_instance_id: string;
    offline_coupon: OfflineCouponEntity;
    instance_serial: string;
    instance_code: number;
    state: number;
    member: MemberEntity;
    create_date: Date;
    use_date: Date;
    cancel_date: Date;
}
