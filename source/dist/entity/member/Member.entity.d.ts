import { BaseEntity } from "typeorm";
import { MemberAddressEntity } from "./MemberAddress.entity";
import { MemberGroupEntity } from "./MemberGroup.entity";
import { MemberMileageLogEntity } from "./MemberMileageLog.entity";
import { MemberMileageEntity } from "./MemberMileage.entity";
import { CouponToMemberEntity } from "../coupon/CouponToMember.entity";
import { OfflineCouponInstanceEntity } from "../offline-coupon/OfflineCouponInstance.entity";
import { MemberLastVisitEntity } from "./MemberLastVisit.entity";
import { MemberPetEntity } from "./MemberPet.entity";
import { PlanEventCommentEntity } from "../plan/PlanEventComment.entity";
import { QueryOneToOneEntity } from "../query/QueryOneToOne.entity";
import { QueryProductEntity } from "../query/QueryProduct.entity";
import { ReviewEntity } from "../review/Review.entity";
import { ProductLikeEntity } from "../product/ProductLike.entity";
import { ReviewCommentEntity } from "../review/ReviewComment.entity";
export declare class MemberEntity extends BaseEntity {
    member_id: string;
    is_puppy_member: boolean;
    member_code: string;
    password: string;
    name: string;
    birth: string;
    gender: string;
    phone: string;
    email: string;
    is_sms: boolean;
    is_information: boolean;
    profile_image_url: string;
    create_date: Date;
    update_date: Date;
    is_delete: boolean;
    delete_date: Date;
    member_group: MemberGroupEntity;
    member_last_visit: MemberLastVisitEntity;
    member_mileage: MemberMileageEntity;
    member_address: MemberAddressEntity[];
    member_mileage_log_id: MemberMileageLogEntity[];
    coupon_to_member: CouponToMemberEntity[];
    offline_coupon_instance: OfflineCouponInstanceEntity[];
    member_pet: MemberPetEntity[];
    plan_event_comment: PlanEventCommentEntity[];
    query_one_to_one: QueryOneToOneEntity[];
    query_product: QueryProductEntity[];
    review: ReviewEntity[];
    review_comment: ReviewCommentEntity[];
    product_like: ProductLikeEntity[];
}
