import { BaseEntity } from "typeorm";
import { OrderMainEntity } from "./OrderMain.entity";
export declare class OrderDepositEntity extends BaseEntity {
    order_deposit_id: number;
    OrderMain: OrderMainEntity;
    order_code: string;
    deposit_type: string;
    deposit_bank: string;
    deposit_account_num: string;
    deposit_closing_date: string;
    deposit_account: string;
    deposit_status: string;
}
