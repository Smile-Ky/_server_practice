import { Request, Response } from "express";
import { BaseInfoService } from "./base-info.service";
import { ReqGetTopDisplayProductDto } from "./DTO/ReqGetTopDisplayProduct.dto";
export declare class BaseInfoController {
    private readonly baseInfoService;
    constructor(baseInfoService: BaseInfoService);
    base(res: Response): Promise<void>;
    getCartInfo(req: Request, res: Response): Promise<void>;
    getMainInfo(req: Request, res: Response): Promise<void>;
    getSpecialList(tab: string, code: string, req: Request, res: Response): Promise<void>;
    getSpecialInfo(eventId: string, req: Request, res: Response): Promise<void>;
    getBestList(data: string, req: Request, res: Response): Promise<void>;
    getAgreeInfo(res: Response): Promise<void>;
    getTopDisplayProduct(data: ReqGetTopDisplayProductDto, req: Request, res: Response): Promise<void>;
}
