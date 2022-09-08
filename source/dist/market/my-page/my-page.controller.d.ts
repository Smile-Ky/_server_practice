import { MyPageInfoService } from './my-page-info.service';
import { MyPageService } from './my-page.service';
import { Request, Response } from 'express';
import { ReqUpdateCancelStatusDto } from "./DTO/ReqUpdateCancelStatus.dto";
import { ReqGetCancelInfoDto } from "./DTO/ReqGetCancelInfo.dto";
import { ReqUpdateOrderClaimDto } from "./DTO/ReqUpdateOrderClaim.dto";
import { ReqGetReturnInfoDto } from "./DTO/ReqGetReturnInfo.dto";
import { ReqInsertCouponDto } from "./DTO/ReqInsertCoupon.dto";
import { ReqGetMyReviewInfoDto } from "./DTO/ReqGetMyReviewInfo.dto";
import { ReqPostInsertReviewDto } from "./DTO/ReqPostInsertReview.dto";
import { ReqGetDeleveryTrackingDto } from "./DTO/ReqGetDeleveryTracking.dto";
import { ReqPostUpdatePetInfoDto } from "./DTO/ReqPostUpdatePetInfo.dto";
import { ReqUpdateMyInfoDto } from "./DTO/ReqUpdateMyInfo.dto";
import { ReqDeleteWishDto } from "./DTO/ReqDeleteWish.dto";
import { ReqMyWishListDto } from "./DTO/ReqMyWishList.dto";
import { ReqMyPointsDto } from "./DTO/ReqMyPoints.dto";
export declare class MyPageController {
    private readonly myPageService;
    private readonly myPageInfoService;
    constructor(myPageService: MyPageService, myPageInfoService: MyPageInfoService);
    getMain(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getOrderList(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getReturnList(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getOrderDetail(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getMyReviewInfo(data: ReqGetMyReviewInfoDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getMyReviewList(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    insertReview(data: ReqPostInsertReviewDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateOrderStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    myPoints(data: ReqMyPointsDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    myCoupons(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    insertCoupon(data: ReqInsertCouponDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getCancelInfo(data: ReqGetCancelInfoDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateCancelStatus(data: ReqUpdateCancelStatusDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateOrderClaim(data: ReqUpdateOrderClaimDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getReturnInfo(data: ReqGetReturnInfoDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateMyinfo(data: ReqUpdateMyInfoDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    myWishList(data: ReqMyWishListDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteWish(data: ReqDeleteWishDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getDeleveryTracking(body: ReqGetDeleveryTrackingDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getMyInfo(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updatePetInfo(body: ReqPostUpdatePetInfoDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}