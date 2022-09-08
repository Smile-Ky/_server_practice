import { BaseEntity } from "typeorm";
import { OrderMainEntity } from "./OrderMain.entity";
import { OrderDetailEntity } from "./OrderDetail.Entity";
export declare class OrderHistoryEntity extends BaseEntity {
    order_history_id: number;
    order_main: OrderMainEntity;
    order_detail: OrderDetailEntity;
    changed_status: string;
    changed_text: string;
    changed_user: string;
    changed_date: Date;
}
