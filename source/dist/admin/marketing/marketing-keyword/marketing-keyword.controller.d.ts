import { MarketingKeywordService } from "./marketing-keyword.service";
import { Response } from "express";
import { ReqKeywordSaveOrderDTO } from "./DTO/ReqKeywordSaveOrderDTO";
export declare class MarketingKeywordController {
    private readonly marketingKeywordService;
    constructor(marketingKeywordService: MarketingKeywordService);
    searchFind(startDate: Date, endDate: Date, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    keywordFind(res: Response): Promise<Response<any, Record<string, any>>>;
    keywordSave(keyword: string, res: Response): Promise<Response<any, Record<string, any>>>;
    keywordSaveOrder(req: ReqKeywordSaveOrderDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    keywordUpdate(keywordId: string, keyword: string, res: Response): Promise<Response<any, Record<string, any>>>;
    keywordDelete(keywordId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
