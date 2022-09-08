import { BaseEntity } from "typeorm";
export declare class ReviewCommentAutoSettingEntity extends BaseEntity {
    auto_setting_id: string;
    star_point: number;
    auto_comment: string;
    is_use: boolean;
    create_date: Date;
    update_date: Date;
}
