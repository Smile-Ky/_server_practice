import { CartService } from "./cart.service";
import { Request, Response } from "express";
import { ReqCartAddDTO } from "./DTO/ReqCartAddDTO";
import { ReqCartCountDTO } from "./DTO/ReqCartCountDTO";
import { ReqCartIdxDTO } from "./DTO/ReqCartIdxDTO";
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    cartAdd(body: ReqCartAddDTO, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getCart(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateCount(body: ReqCartCountDTO, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteCart(body: ReqCartIdxDTO, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getCartSummary(body: ReqCartIdxDTO, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
