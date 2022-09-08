import { ReqOrderListFindDTO } from "../order-list/DTO/ReqOrderListFindDTO";
import { OrderMainRepository } from "../../../repository/order/OrderMain.repository";
import { OrderDetailRepository } from "../../../repository/order/OrderDetail.repository";
export declare class OrderRefundListService {
    private orderListRepository;
    private orderDetailRepository;
    constructor(orderListRepository: OrderMainRepository, orderDetailRepository: OrderDetailRepository);
    getRefundAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    getRefundId(orderId: String): Promise<any>;
    getRefund(findOptionDto: ReqOrderListFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
}
