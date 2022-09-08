import { OrderExcelFormService } from "./order-excel-form.service";
import { Response } from "express";
import { ReqOrderExcelFormSaveDTO } from "./DTO/ReqOrderExcelFormSaveDTO";
export declare class OrderExcelFormController {
    private readonly orderExcelFormService;
    constructor(orderExcelFormService: OrderExcelFormService);
    getExcelFormList(res: Response): Promise<Response<any, Record<string, any>>>;
    postExcelForm(OrderExcelForm: ReqOrderExcelFormSaveDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    putExcelForm(OrderExcelForm: ReqOrderExcelFormSaveDTO, formId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
