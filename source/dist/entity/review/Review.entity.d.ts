import { BaseEntity } from "typeorm";
import { MemberEntity } from "../member/Member.entity";
import { ProductOptionEntity } from "../product/ProductOption.entity";
import { ReviewImageEntity } from "./ReviewImage.entity";
import { ReviewCommentEntity } from "./ReviewComment.entity";
import { ReviewLikeEntity } from "./ReviewLike.entity";
import { OrderDetailEntity } from "../order/OrderDetail.Entity";
export declare class ReviewEntity extends BaseEntity {
    review_id: string;
    review_type: string;
    review_star_point: number;
    review_title: string;
    review_content: string;
    is_open: boolean;
    is_admin: boolean;
    admin_name: string;
    admin_puppy_name: string;
    admin_puppy_age: string;
    admin_puppy_weight: string;
    is_write_admin_comment: boolean;
    create_date: Date;
    update_date: Date;
    member_id: MemberEntity;
    product_option_id: ProductOptionEntity;
    order_etail_id: OrderDetailEntity;
    review_comment: ReviewCommentEntity[];
    review_image: ReviewImageEntity[];
    review_like: ReviewLikeEntity[];
}
