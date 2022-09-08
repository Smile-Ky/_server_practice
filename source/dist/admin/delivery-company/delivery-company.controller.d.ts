import { DeliveryCompanyService } from "./delivery-company.service";
import { Response } from 'express';
export declare class DeliveryCompanyController {
    private readonly DeliveryCompanyService;
    constructor(DeliveryCompanyService: DeliveryCompanyService);
    deliveryFindAll(res: Response): Promise<Response<any, Record<string, any>>>;
    deliveryFindId(deliveryCompanyId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    deliveryFindName(deliveryCompanyName: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(deliveryCompanyName: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(deliveryCompanyId: string, deliveryCompanyName: string, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(deliveryCompanyId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
