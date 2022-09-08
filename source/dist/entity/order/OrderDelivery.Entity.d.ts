import { BaseEntity } from "typeorm";
export declare class OrderDeliveryEntity extends BaseEntity {
    order_delivery_id: number;
    delivery_code: string;
    delivery_price: string;
}
