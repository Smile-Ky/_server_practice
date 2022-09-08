import { OrderMainRepository } from "../../../repository/order/OrderMain.repository";
import { OrderDetailRepository } from "../../../repository/order/OrderDetail.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { OrderDepositRepository } from "../../../repository/order/OrderDeposit.repository";
import { ReqOrderCancelDTO } from "./DTO/ReqOrderCancelDTO";
import { ReqCancelListFindDTO } from "./DTO/ReqCancelListFindDTO";
import { ReqReturnListFindDTO } from "./DTO/ReqReturnListFindDTO";
import { ReqOrderReturnDTO } from "./DTO/ReqOrderReturnDTO";
import { ReqChangeListFindDTO } from "./DTO/ReqChangeListFindDTO";
import { ReqOrderChangeDTO } from "./DTO/ReqOrderChangeDTO";
import { ReqRefundListFindDTO } from "./DTO/ReqRefundListFindDTO";
import { OrderRefundRepository } from "../../../repository/order/OrderRefund.repository";
import { ReqOrderRefundSetDetail } from "./DTO/ReqOrderRefundSetDetail";
export declare class OrderClaimListService {
    private orderMainRepository;
    private orderDetailRepository;
    private memberRepository;
    private orderDepositRepository;
    private orderRefundRepository;
    constructor(orderMainRepository: OrderMainRepository, orderDetailRepository: OrderDetailRepository, memberRepository: MemberRepository, orderDepositRepository: OrderDepositRepository, orderRefundRepository: OrderRefundRepository);
    findAllCancel(status: number, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findCancel(req: ReqCancelListFindDTO, page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putCancelStatus(req: ReqOrderCancelDTO): Promise<{
        data: string;
    }>;
    findAllReturn(page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findReturn(req: ReqReturnListFindDTO, page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putReturn(req: ReqOrderReturnDTO): Promise<{
        data: string;
    }>;
    findChangeAll(page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findChange(req: ReqChangeListFindDTO, page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putChange(req: ReqOrderChangeDTO): Promise<{
        data: string;
    }>;
    findRefundAll(page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findRefund(req: ReqRefundListFindDTO, page: number, pageSize: number, status: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    getRefundPopup(orderId: number): Promise<{
        order_id: any;
        order_detail: any;
        discount_detail: {
            all_payment_price: any;
            order_delivery: number;
            order_use_mileage: number;
            order_coupon_discount: number;
        };
        refund_detail: {
            refund_delivery_price: number;
            order_return_use_mileage: number;
            not_accept_coupon_discount: number;
        };
    }>;
    putRefundData(orderId: number, req: ReqOrderRefundSetDetail): Promise<{
        data: string;
    }>;
    postRefundAction(orderId: number, req: ReqOrderRefundSetDetail): Promise<{
        data: string;
    }>;
}
