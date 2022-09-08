export declare class ReqReviewSettingDto {
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
    member_mileage: Array<{
        member_group_id: string;
        acc_mileage: number;
    }>;
}
