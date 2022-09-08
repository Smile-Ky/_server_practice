import { BaseEntity } from "typeorm";
import { OrderMainEntity } from "./OrderMain.entity";
export declare class OrderRefundEntity extends BaseEntity {
    order_refund_id: number;
    OrderMain: OrderMainEntity;
    refund_price: number;
    refund_deliver_price: number;
    create_date: Date;
    refund_date: Date;
}
