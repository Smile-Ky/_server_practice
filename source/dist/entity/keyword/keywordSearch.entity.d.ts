import { BaseEntity } from "typeorm";
export declare class KeywordSearchEntity extends BaseEntity {
    search_keyword_id: string;
    member_id: string;
    search_keyword: string;
    create_date: Date;
}
