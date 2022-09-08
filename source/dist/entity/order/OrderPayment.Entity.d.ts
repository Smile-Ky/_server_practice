import { BaseEntity } from "typeorm";
import { OrderMainEntity } from "./OrderMain.entity";
export declare class OrderPaymentEntity extends BaseEntity {
    order_payment_id: number;
    order_main: OrderMainEntity;
    payment_method: string;
    payment_price: number;
    refund_price: number;
    waste_price: number;
    payment_memo: number;
}
