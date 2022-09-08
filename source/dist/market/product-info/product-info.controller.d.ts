import { ProductInfoService } from "./product-info.service";
import { Request, Response } from 'express';
import { ReqGetGoodsListDto } from "./DTO/ReqGetGoodsList.dto";
import { ReqInsertQnaDto } from "./DTO/ReqInsertQna.dto";
import { ReqGetQnaList } from "./DTO/ReqGetQnaList.dto";
import { ReqWishDto } from "./DTO/ReqWish.dto";
import { ReqDoGoodsSearchDto } from "./DTO/ReqDoGoodsSearch.dto";
import { ReqGetViewDto } from "./DTO/ReqGetView.dto";
export declare class ProductInfoController {
    private readonly productInfoService;
    constructor(productInfoService: ProductInfoService);
    getGoodsList(data: ReqGetGoodsListDto, req: Request, res: Response): Promise<void>;
    getView(data: ReqGetViewDto, req: Request, res: Response): Promise<void>;
    qnaRegist(pid: string, res: Response): Promise<void>;
    insertQna(data: ReqInsertQnaDto, req: Request, res: Response): Promise<void>;
    getQnaList(data: ReqGetQnaList, req: Request, res: Response): Promise<void>;
    wish(body: ReqWishDto, req: Request, res: Response): Promise<void>;
    getSearch(req: Request, res: Response): Promise<void>;
    doGoodsSearch(data: ReqDoGoodsSearchDto, req: Request, res: Response): Promise<void>;
}
