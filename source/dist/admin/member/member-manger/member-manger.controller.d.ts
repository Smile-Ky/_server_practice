import { MemberMangerService } from './member-manger.service';
import { ReqMemberFindDTO } from "./DTO/ReqMemberFindDTO";
import { Response } from "express";
import { ReqUserFromDTO } from "./DTO/ReqUserFromDTO";
import { ReqMemberUpdateDto } from "./DTO/ReqMemberUpdate.dto";
import { ReqMemberPetUpdateDto } from "./DTO/ReqMemberPetUpdate.dto";
export declare class MemberMangerController {
    private readonly memberManagerService;
    constructor(memberManagerService: MemberMangerService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findIdx(user_id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    find(ReqMemberFind: ReqMemberFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    create(memberFrom: ReqUserFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(memberFrom: ReqMemberUpdateDto, data: string, res: Response): Promise<Response<any, Record<string, any>>>;
    petUpdate(pet: ReqMemberPetUpdateDto, data: string, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(userId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
