import { Response } from "express";
import { ReqReviewSettingDto } from "./DTO/ReqReviewSetting.dto";
import { ProductReviewSettingService } from "./product-review-setting.service";
import { ReqAutoCommentFromDto } from "./DTO/ReqAutoCommentFrom.dto";
export declare class ProductReviewSettingController {
    private readonly productReviewSettingService;
    constructor(productReviewSettingService: ProductReviewSettingService);
    findSetting(res: Response): Promise<Response<any, Record<string, any>>>;
    update(data: ReqReviewSettingDto, id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    autoCommentFind(res: Response): Promise<Response<any, Record<string, any>>>;
    autoCommentCreate(data: ReqAutoCommentFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    autoCommentUpdate(id: string, data: ReqAutoCommentFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    autoCommentDelete(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    autoChaneIsUse(data: boolean, res: Response): Promise<Response<any, Record<string, any>>>;
}
