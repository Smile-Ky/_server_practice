import { OrderMainRepository } from "../../../repository/order/OrderMain.repository";
import { ReqOrderListFindDTO } from "./DTO/ReqOrderListFindDTO";
import { OrderDetailRepository } from "../../../repository/order/OrderDetail.repository";
export declare class OrderListService {
    private orderListRepository;
    private orderDetailRepository;
    constructor(orderListRepository: OrderMainRepository, orderDetailRepository: OrderDetailRepository);
    getOrderListAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    getOrderId(orderId: String): Promise<any>;
    postFindAllByOption(findOptionDto: ReqOrderListFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
}
