/// <reference types="multer-s3" />
import { Response } from "express";
import { ProductReviewListService } from "./product-review-list.service";
import { ReqReviewCreateMemberDto } from "./DTO/ReqReviewCreateMember.dto";
import { ReqReviewCreateAdminDto } from "./DTO/ReqReviewCreateAdmin.dto";
import { ReqReviewCommentDto } from "./DTO/ReqReviewComment.dto";
import { ReqReviewUpdateDto } from "./DTO/ReqReviewUpdate.dto";
import { ReqReviewFindDto } from "./DTO/ReqReviewFind.dto";
export declare class ProductReviewListController {
    private readonly productReviewService;
    constructor(productReviewService: ProductReviewListService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(data: ReqReviewFindDto, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    createUser(data: ReqReviewCreateMemberDto, res: Response): Promise<Response<any, Record<string, any>>>;
    createAdmin(data: ReqReviewCreateAdminDto, res: Response): Promise<Response<any, Record<string, any>>>;
    createComment(id: string, data: ReqReviewCommentDto, res: Response): Promise<Response<any, Record<string, any>>>;
    updateOpen(id: string, data: boolean, res: Response): Promise<Response<any, Record<string, any>>>;
    updateReview(id: string, data: ReqReviewUpdateDto, res: Response): Promise<Response<any, Record<string, any>>>;
    updateComment(id: string, data: ReqReviewCommentDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteComment(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    imageUpload(images: Array<Express.MulterS3.File>, res: Response): Promise<Response<any, Record<string, any>> | {
        result: number;
        data: object;
    }>;
}
