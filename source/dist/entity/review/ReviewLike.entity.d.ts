import { BaseEntity } from "typeorm";
import { MemberEntity } from "../member/Member.entity";
import { ReviewEntity } from "./Review.entity";
export declare class ReviewLikeEntity extends BaseEntity {
    review_like_id: string;
    member_id: MemberEntity;
    review_id: ReviewEntity;
    create_date: Date;
    update_date: Date;
}
