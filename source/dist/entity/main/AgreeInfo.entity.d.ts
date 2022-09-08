import { BaseEntity } from "typeorm";
export declare class AgreeInfoEntity extends BaseEntity {
    agree_info_id: string;
    agree_info_type: string;
    contents: string;
    create_date: Date;
    update_date: Date;
}
