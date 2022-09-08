import { ProductSearchTabService } from "./product-search-tab.service";
import { Response } from "express";
import { ReqProductFindDTO } from "./DTO/ReqProductFindDTO";
export declare class ProductSearchTabController {
    private readonly productSearchTabService;
    constructor(productSearchTabService: ProductSearchTabService);
    findProductAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findProduct(productFind: ReqProductFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    selectProduct(productList: Array<string>, res: Response): Promise<Response<any, Record<string, any>>>;
    selectProductOption(productList: Array<string>, res: Response): Promise<Response<any, Record<string, any>>>;
}
