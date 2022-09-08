import { UserCustomerCenterService } from "./user-customer-center.service";
import { ReqGetBoardListDto } from "./DTO/ReqGetBoardList.dto";
import { ReqGetReviewListDto } from "./DTO/ReqGetReviewList.dto";
import { ReqGetReviewInfoDto } from "./DTO/ReqGetReviewInfo.dto";
import { ReqInsertReviewCommentDto } from "./DTO/ReqInsertReviewComment.dto";
import { ReqUpdateReviewLikeDto } from "./DTO/ReqUpdateReviewLike.dto";
import { Request, Response } from "express";
import { ReqGetAllReviewList } from "./DTO/ReqGetAllReviewList";
export declare class UserCustomerCenterController {
    private readonly userCustomerCenterService;
    constructor(userCustomerCenterService: UserCustomerCenterService);
    getBoardList(data: ReqGetBoardListDto, req: Request, res: Response): Promise<void>;
    getAllReviewList(data: ReqGetAllReviewList, req: Request, res: Response): Promise<void>;
    getReviewList(data: ReqGetReviewListDto, req: Request, res: Response): Promise<void>;
    getReviewInfo(data: ReqGetReviewInfoDto, req: Request, res: Response): Promise<void>;
    insertReviewComment(data: ReqInsertReviewCommentDto, req: Request, res: Response): Promise<void>;
    updateReviewLike(data: ReqUpdateReviewLikeDto, req: Request, res: Response): Promise<void>;
}
