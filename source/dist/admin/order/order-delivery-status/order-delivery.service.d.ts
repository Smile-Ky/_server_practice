import { OrderMainRepository } from "../../../repository/order/OrderMain.repository";
import { OrderDetailRepository } from "../../../repository/order/OrderDetail.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { OrderDepositRepository } from "../../../repository/order/OrderDeposit.repository";
import { ReqOrderPreDepositDTO } from "./DTO/ReqOrderPreDepositDTO";
import { ReqOrderPreDepositStatusDTO } from "./DTO/ReqOrderPreDepositStatusDTO";
import { ReqOrderDeliverySearchDepositDTO } from "./DTO/ReqOrderDeliverySearchDepositDTO";
import { ReqOrderDepositStatusDTO } from "./DTO/ReqOrderDepositStatusDTO";
import { ReqOrderDelayStatusDTO } from "./DTO/ReqOrderDelayStatusDTO";
import { ReqOrderDeliverySearchReadyDTO } from "./DTO/ReqOrderDeliverySearchReadyDTO";
import { ReqOrderDeliveryStatusDTO } from "./DTO/ReqOrderDeliveryStatusDTO";
import { ReqOrderDeliverySearchDeliveryDTO } from "./DTO/ReqOrderDeliverySearchDeliveryDTO";
import { ReqOrderFinishStatusDTO } from "./DTO/ReqOrderFinishStatusDTO";
import { ReqOrderDeliverySearchFinishDTO } from "./DTO/ReqOrderDeliverySearchFinishDTO";
import { ReqOrderDeliverySearchConfirmDTO } from "./DTO/ReqOrderDeliverySearchConfirmDTO";
export declare class OrderDeliveryService {
    private orderMainRepository;
    private orderDetailRepository;
    private memberRepository;
    private orderDepositRepository;
    constructor(orderMainRepository: OrderMainRepository, orderDetailRepository: OrderDetailRepository, memberRepository: MemberRepository, orderDepositRepository: OrderDepositRepository);
    findAllPreDeposit(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findPreDeposit(req: ReqOrderPreDepositDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putPreDepositStatus(req: ReqOrderPreDepositStatusDTO): Promise<{
        data: string;
    }>;
    findAllDeposit(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findDeposit(req: ReqOrderDeliverySearchDepositDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putDepositStatus(req: ReqOrderDepositStatusDTO): Promise<{
        data: string;
    }>;
    findAllDelay(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findDelay(req: ReqOrderDeliverySearchDepositDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putDelayStatus(req: ReqOrderDelayStatusDTO): Promise<{
        data: string;
    }>;
    findAllReady(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findReady(req: ReqOrderDeliverySearchReadyDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putReadyStatus(req: ReqOrderDelayStatusDTO): Promise<{
        data: string;
    }>;
    findAllDelivery(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findDelivery(req: ReqOrderDeliverySearchDeliveryDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putDelivery(req: ReqOrderDeliveryStatusDTO): Promise<{
        data: string;
    }>;
    findAllFinish(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findFinish(req: ReqOrderDeliverySearchFinishDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    putFinish(req: ReqOrderFinishStatusDTO): Promise<{
        data: string;
    }>;
    findAllConfirm(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findConfirm(req: ReqOrderDeliverySearchConfirmDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
}
