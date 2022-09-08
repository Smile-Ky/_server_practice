import { BaseEntity } from "typeorm";
export declare class NoticeEntity extends BaseEntity {
    notice_id: string;
    title: string;
    writer: string;
    notice_doc: string;
    create_date: Date;
    update_date: Date;
}
