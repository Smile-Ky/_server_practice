import { Repository } from "typeorm";
import { CartEntity } from "../../entity/cart/Cart.entity";
export declare class CartRepository extends Repository<CartEntity> {
    getCartIdList(member_id: string): Promise<any>;
    getCartList(member_id: string, idList: Array<string>): Promise<any>;
    getCartSummary(): Promise<void>;
    getDeliveryPrice(total_price: number, delivery_price: number): Promise<0 | 3000>;
}
