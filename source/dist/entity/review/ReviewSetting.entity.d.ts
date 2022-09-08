import { BaseEntity } from "typeorm";
import { ReviewSettingToMemberGroupEntity } from "./ReviewSettingToMemberGroup.entity";
export declare class ReviewSettingEntity extends BaseEntity {
    review_setting_id: string;
    is_use_rating: boolean;
    is_use_write_review: number;
    is_write_authority: boolean;
    is_use_review_update: boolean;
    is_use_review_delete: boolean;
    is_use_acc_mileage: boolean;
    is_acc_mileage_type: number;
    bath_mileage: number;
    class_mileage_normal: number;
    class_mileage_premium: number;
    member_mileage: ReviewSettingToMemberGroupEntity[];
}
