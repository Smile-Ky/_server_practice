import { BrandManagerService } from './brand-manager.service';
import { ReqBrandFromDTO } from "./DTO/ReqBrandFromDTO";
import { ReqBrandFindDTO } from "./DTO/ReqBrandFindDTO";
import { Response } from "express";
export declare class BrandManagerController {
    private readonly brandManagerService;
    constructor(brandManagerService: BrandManagerService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(brandId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    find(ReqBrandFind: ReqBrandFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    save(ReqBrandFrom: ReqBrandFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(brandId: string, ReqBrandFrom: ReqBrandFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(brandId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
