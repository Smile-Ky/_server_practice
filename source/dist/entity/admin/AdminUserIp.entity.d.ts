import { BaseEntity } from "typeorm";
import { AdminUserEntity } from "./AdminUser.entity";
export declare class AdminUserIpEntity extends BaseEntity {
    ip_id: string;
    ip: string;
    ip_user: string;
    approved_state: boolean;
    create_date: Date;
    update_date: Date;
    adminUser: AdminUserEntity;
}
