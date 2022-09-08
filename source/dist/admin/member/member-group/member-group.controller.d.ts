import { MemberGroupService } from './member-group.service';
import { Response } from 'express';
import { ReqGroupFromDTO } from "./DTO/ReqGroupFromDTO";
export declare class MemberGroupController {
    private readonly memberGroupService;
    constructor(memberGroupService: MemberGroupService);
    findAll(res: Response): Promise<Response<any, Record<string, any>>>;
    findSimple(res: Response): Promise<Response<any, Record<string, any>>>;
    findId(groupId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    save(GroupFrom: ReqGroupFromDTO, res: Response): Promise<object>;
    update(groupId: string, GroupFrom: ReqGroupFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(groupId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
