import { Repository } from "typeorm";
import { CouponToMemberEntity } from "../../entity/coupon/CouponToMember.entity";
export declare class CouponToMemberRepository extends Repository<CouponToMemberEntity> {
    useCouponList(member_id: string, class_list: Array<string>, product_list: Array<string>): Promise<any[]>;
}
