import { BaseEntity } from "typeorm";
export declare class QueryFaqEntity extends BaseEntity {
    query_faq_id: string;
    title: string;
    writer: string;
    faq_q: string;
    faq_a: string;
    create_date: Date;
    update_date: Date;
}
