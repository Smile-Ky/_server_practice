import { HomeService } from './home.service';
import { Response } from 'express';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    FindAll(res: Response): Promise<Response<any, Record<string, any>>>;
    getOrder(res: Response): Promise<Response<any, Record<string, any>>>;
    getClaim(res: Response): Promise<Response<any, Record<string, any>>>;
    getProduct(res: Response): Promise<Response<any, Record<string, any>>>;
    getSalesGraph(res: Response): Promise<Response<any, Record<string, any>>>;
}
