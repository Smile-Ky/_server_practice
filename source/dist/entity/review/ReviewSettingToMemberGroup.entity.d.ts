import { MemberGroupEntity } from "../member/MemberGroup.entity";
import { ReviewSettingEntity } from "./ReviewSetting.entity";
export declare class ReviewSettingToMemberGroupEntity {
    review_setting_to_member_group_id: string;
    acc_mileage: number;
    review_setting_id: ReviewSettingEntity;
    member_group_id: MemberGroupEntity;
}
