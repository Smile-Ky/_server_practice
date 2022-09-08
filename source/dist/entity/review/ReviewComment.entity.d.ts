import { BaseEntity } from "typeorm";
import { ReviewEntity } from "./Review.entity";
import { MemberEntity } from "../member/Member.entity";
export declare class ReviewCommentEntity extends BaseEntity {
    review_comment_id: string;
    is_admin: boolean;
    comment_content: string;
    create_date: Date;
    update_date: Date;
    review_id: ReviewEntity;
    member_id: MemberEntity;
}
