import { OneToOneQueryService } from "./one-to-one-query.service";
import { Response } from "express";
import { ReqAnswerFromDto } from "./DTO/ReqAnswerFrom.dto";
import { ReqQueryFromDto } from "./DTO/ReqQueryFrom.dto";
export declare class OneToOneQueryController {
    private readonly oneToOneQueryService;
    constructor(oneToOneQueryService: OneToOneQueryService);
    find(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    query(id: string, data: ReqQueryFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    answer(id: string, data: ReqAnswerFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    queryUpdate(id: string, data: ReqQueryFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
