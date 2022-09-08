import { ReqReviewSettingDto } from "./DTO/ReqReviewSetting.dto";
import { ReviewSettingEntity } from "../../../entity/review/ReviewSetting.entity";
import { ReviewSettingToMemberGroupEntity } from "../../../entity/review/ReviewSettingToMemberGroup.entity";
import { ReviewSettingRepository } from "../../../repository/review/ReviewSetting.repository";
import { ReviewSettingToMemberGroupRepository } from "../../../repository/review/ReviewSettingToMemberGroup.repository";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { ReviewCommentAutoSettingRepository } from "../../../repository/review/ReviewCommentAutoSetting.repository";
import { ReviewCommentAutoSettingEntity } from "../../../entity/review/ReviewCommentAutoSetting.entity";
import { ReqAutoCommentFromDto } from "./DTO/ReqAutoCommentFrom.dto";
export declare class ProductReviewSettingService {
    private memberGroupRepository;
    private reviewSettingRepository;
    private reviewSettingToMemberGroupRepository;
    private reviewCommentAutoSettingRepository;
    constructor(memberGroupRepository: MemberGroupRepository, reviewSettingRepository: ReviewSettingRepository, reviewSettingToMemberGroupRepository: ReviewSettingToMemberGroupRepository, reviewCommentAutoSettingRepository: ReviewCommentAutoSettingRepository);
    reviewSettingFind(): Promise<{
        member_group: any;
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
    }>;
    reviewSettingUpdate(id: string, data: ReqReviewSettingDto): Promise<ReviewSettingEntity>;
    autoCommentFind(): Promise<ReviewCommentAutoSettingEntity[]>;
    autoCommentCreate(data: ReqAutoCommentFromDto): Promise<ReviewCommentAutoSettingEntity>;
    autoCommentUpdate(id: string, data: ReqAutoCommentFromDto): Promise<import("typeorm").UpdateResult>;
    autoCommentDelete(id: string): Promise<import("typeorm").DeleteResult>;
    autoChaneIsUse(is_use: boolean): Promise<import("typeorm").UpdateResult>;
}
