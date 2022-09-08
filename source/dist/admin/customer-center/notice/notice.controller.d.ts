import { NoticeService } from "./notice.service";
import { Response } from "express";
import { ReqNoticeFromDto } from "./DTO/ReqNoticeFrom.dto";
export declare class NoticeController {
    private readonly noticeService;
    constructor(noticeService: NoticeService);
    find(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: ReqNoticeFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, data: ReqNoticeFromDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
