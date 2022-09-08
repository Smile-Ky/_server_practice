import { PuppyPointService } from "./puppy-point.service";
import { Request, Response } from "express";
import { ReqPostMakePointDto } from "./DTO/ReqPostMakePoint.dto";
import { ReqPostMakeCouponDto } from "./DTO/ReqPostMakeCoupon.dto";
import { ReqPostGetUserCouponCountDto } from "./DTO/ReqPostGetUserCouponCount.dto";
import { ReqPostGetUserPointDto } from "./DTO/ReqPostGetUserPoint.dto";
import 'dotenv/config';
export declare class PuppyPointController {
    private readonly puppyPointService;
    constructor(puppyPointService: PuppyPointService);
    postMakePoint(data: ReqPostMakePointDto, req: Request, res: Response): Promise<void>;
    postGetUserPoint(data: ReqPostGetUserPointDto, req: Request, res: Response): Promise<void>;
    getCouponList(req: Request, res: Response): Promise<void>;
    postMakeCoupon(data: ReqPostMakeCouponDto, req: Request, res: Response): Promise<void>;
    postGetUserCouponCount(data: ReqPostGetUserCouponCountDto, req: Request, res: Response): Promise<void>;
}
