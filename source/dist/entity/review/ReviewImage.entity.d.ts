import { BaseEntity } from "typeorm";
import { ReviewEntity } from "./Review.entity";
export declare class ReviewImageEntity extends BaseEntity {
    review_image_id: string;
    image_url: string;
    is_main: boolean;
    review_id: ReviewEntity;
}
