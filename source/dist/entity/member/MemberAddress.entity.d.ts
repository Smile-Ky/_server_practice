import { BaseEntity } from "typeorm";
import { MemberEntity } from "./Member.entity";
import { OrderMainEntity } from "../order/OrderMain.entity";
export declare class MemberAddressEntity extends BaseEntity {
    address_id: string;
    default_delivery: number;
    delivery_name: string;
    address_user_name: string;
    phone: string;
    home_tel: string;
    address_number: string;
    address: string;
    address_detail: string;
    member: MemberEntity;
    order_main: OrderMainEntity;
}
