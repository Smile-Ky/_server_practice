import { OrderDetailRepository } from "../../../repository/order/OrderDetail.repository";
import { ReqTrackerRegistDTO } from "./DTO/ReqTrackerRegistDTO";
import { ResTrackerResultDTO } from "./DTO/ResTrackerResultDTO";
export declare class OrderDeliveryTrackingService {
    private orderManagerRepository;
    constructor(orderManagerRepository: OrderDetailRepository);
    postTrackingNumber(reqTrackerRegistDTO: ReqTrackerRegistDTO): Promise<import("axios").AxiosResponse<any, any>>;
    postTrackingStatus(resTrackerResultDTO: ResTrackerResultDTO): Promise<void>;
}
