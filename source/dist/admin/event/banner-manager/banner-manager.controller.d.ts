/// <reference types="multer-s3" />
import { Response } from "express";
import { BannerManagerService } from "./banner-manager.service";
import { ReqBannerFindDto } from "./DTO/ReqBannerFind.dto";
import { ReqBannerFromDto } from "./DTO/ReqBannerFrom.dto";
export declare class BannerManagerController {
    private readonly bannerManager;
    constructor(bannerManager: BannerManagerService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(page: number, pageSize: number, bannerFindDto: ReqBannerFindDto, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(bannerId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(bannerFromDto: ReqBannerFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(bannerId: string, bannerFromDto: ReqBannerFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(bannerId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    imageUpload(images: Array<Express.MulterS3.File>, res: Response): Promise<{
        result: number;
        data: object;
    } | Response<any, Record<string, any>>>;
}
