import { FaqQueryService } from "./faq-query.service";
import { Response } from "express";
import { ReqFAQDto } from "./DTO/ReqFAQ.dto";
export declare class FaqQueryController {
    private readonly faqQueryService;
    constructor(faqQueryService: FaqQueryService);
    find(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: ReqFAQDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, data: ReqFAQDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
