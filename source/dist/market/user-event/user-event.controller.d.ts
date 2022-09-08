import { UserEventService } from "./user-event.service";
import { Response, Request } from "express";
import { ReqFindCommentDto } from "./DTO/ReqFindComment.dto";
import { ReqAddCommentByUserDto } from "./DTO/ReqAddCommentByUser.dto";
import { ReqCommentModifyDto } from "./DTO/ReqCommentModify.dto";
import { ReqDelCommentDto } from "./DTO/ReqDelComment.dto";
export declare class UserEventController {
    private readonly userEventService;
    constructor(userEventService: UserEventService);
    getCommentList(data: ReqFindCommentDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    addCommentByUser(data: ReqAddCommentByUserDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    commentModify(data: ReqCommentModifyDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    delComment(data: ReqDelCommentDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
