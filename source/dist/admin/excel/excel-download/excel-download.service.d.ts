import { OrderMainRepository } from "../../../repository/order/OrderMain.repository";
import { OrderDetailRepository } from "../../../repository/order/OrderDetail.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { OrderDepositRepository } from "../../../repository/order/OrderDeposit.repository";
export declare class ExcelDownloadService {
    private orderMainRepository;
    private orderDetailRepository;
    private memberRepository;
    private orderDepositRepository;
    constructor(orderMainRepository: OrderMainRepository, orderDetailRepository: OrderDetailRepository, memberRepository: MemberRepository, orderDepositRepository: OrderDepositRepository);
    excelDownload(): Promise<{
        file_url: string;
    }>;
}
