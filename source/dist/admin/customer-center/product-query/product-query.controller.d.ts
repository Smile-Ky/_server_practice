import { ProductQueryService } from "./product-query.service";
import { Response } from "express";
import { ReqProductQueryFindDto } from "./DTO/ReqProductQueryFind.dto";
import { ReqProductAnswerFromDto } from "./DTO/ReqProductAnswerFrom.dto";
import { ReqProductQueryUpdateDto } from "./DTO/ReqProductQueryUpdate.dto";
import { ReqProductQueryFromDto } from "./DTO/ReqProductQueryFrom.dto";
import { ReqProductQueryUserUpdateDto } from "./DTO/ReqProductQueryUserUpdate.dto";
export declare class ProductQueryController {
    private readonly productQueryService;
    constructor(productQueryService: ProductQueryService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(page: number, pageSize: number, data: ReqProductQueryFindDto, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(id: string, data: ReqProductQueryFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    answer(id: string, data: ReqProductAnswerFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    queryAdminUpdate(id: string, data: ReqProductQueryUserUpdateDto, res: Response): Promise<Response<any, Record<string, any>>>;
    queryFrontUpdate(id: string, data: ReqProductQueryUpdateDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
