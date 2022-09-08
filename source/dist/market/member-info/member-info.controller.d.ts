import { MemberInfoService } from './member-info.service';
import { Request, Response } from "express";
import { REqGetApiMemberInfoDTO } from './DTO/ReqGetApiMemberInfo';
export declare class MemberInfoController {
    private readonly memberInfoServcie;
    constructor(memberInfoServcie: MemberInfoService);
    getApiMemberInfo(data: REqGetApiMemberInfoDTO, req: Request, res: Response): Promise<void>;
    getCookieMemberInfo(req: Request, res: Response): Promise<void>;
}
