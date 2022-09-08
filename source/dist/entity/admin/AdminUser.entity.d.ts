import { BaseEntity } from "typeorm";
import { AdminUserIpEntity } from "./AdminUserIp.entity";
export declare class AdminUserEntity extends BaseEntity {
    admin_user_id: string;
    login_id: string;
    login_pw: string;
    admin_name: string;
    create_date: Date;
    update_date: Date;
    adminUserIps: AdminUserIpEntity[];
}
