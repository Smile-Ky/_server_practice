import { BaseEntity } from "typeorm";
import { OrderMainEntity } from "./OrderMain.entity";
export declare class OrderMemoEntity extends BaseEntity {
    order_memo_id: number;
    OrderMain: OrderMainEntity;
    memo_type: string;
    order_memo_context: string;
    order_memo_state: string;
    memo_writer: string;
    memo_write_date: string;
}
