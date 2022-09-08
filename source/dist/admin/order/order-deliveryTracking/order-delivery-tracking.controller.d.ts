import { Response } from "express";
import { OrderDeliveryTrackingService } from "./order-delivery-tracking.service";
import { ResTrackerResultDTO } from "./DTO/ResTrackerResultDTO";
export declare class OrderDeliveryTrackingController {
    private readonly orderDeliveryTrackingService;
    constructor(orderDeliveryTrackingService: OrderDeliveryTrackingService);
    postTracking(resTrackerResultDTO: ResTrackerResultDTO, res: Response): Promise<void | Response<any, Record<string, any>>>;
}
