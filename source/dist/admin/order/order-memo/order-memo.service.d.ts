import { OrderMemoRepository } from "./order-memo.repository";
import { ReqMemoDTO } from "./DTO/ReqMemoDTO";
import { OrderMemoEntity } from "../../../entity/order/OrderMemo.entity";
export declare class OrderMemoService {
    private orderMemoRepository;
    constructor(orderMemoRepository: OrderMemoRepository);
    getAllMemo(): Promise<any>;
    postOrderMemo(orderId: string, data: ReqMemoDTO): Promise<OrderMemoEntity>;
}
