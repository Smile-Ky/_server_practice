import { BaseEntity } from "typeorm";
export declare class KeywordEntity extends BaseEntity {
    keyword_id: string;
    keyword_name: string;
    sequence: number;
    create_date: Date;
    update_date: Date;
}
