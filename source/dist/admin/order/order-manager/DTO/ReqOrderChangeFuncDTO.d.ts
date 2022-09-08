import { ReqOrderSeparateDTO } from "./ReqOrderSeparateDTO";
import { ReqOrderChangeItem } from "./ReqOrderChangeItem";
export declare class ReqOrderChangeFuncDTO {
    order_detail: Array<ReqOrderSeparateDTO>;
    change_order_detail: Array<ReqOrderChangeItem> | null;
    order_changed_reason: string;
    order_changed_status: string;
    order_detail_changed_reason: string;
    refund_price: string;
    return_delivery_name: string | null;
    return_delivery_phone: string | null;
    return_delivery_address_number: string | null;
    return_delivery_address: string | null;
    return_delivery_address_detail: string | null;
    return_delivery_message: string | null;
    re_delivery_name: string | null;
    re_delivery_phone: string | null;
    re_delivery_address_number: string | null;
    re_delivery_address: string | null;
    re_delivery_address_detail: string | null;
    re_delivery_message: string | null;
}
