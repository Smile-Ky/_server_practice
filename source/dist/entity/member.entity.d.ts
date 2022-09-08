import { BaseEntity } from "typeorm";
export declare class MemberEntity extends BaseEntity {
    member_id: string;
    name: string;
    phone: string;
    create_at: Date;
    update_at: Date;
}
