import { MemberMileageService } from './member-mileage.service';
import { MileageSaveFromDTO } from "./DTO/MileageSaveFromDTO";
import { Response } from 'express';
import { ReqMemberMileageFindDTO } from "./DTO/ReqMemberMileageFindDTO";
import { ReqMileageFindDTO } from "./DTO/ReqMileageFindDTO";
import { ReqMileageLogSaveFromDTO } from "./DTO/ReqMileageLogSaveFromDTO";
export declare class MemberMileageController {
    private readonly memberMileageService;
    constructor(memberMileageService: MemberMileageService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(ReqMileageFind: ReqMileageFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findMemberAll(member_id: string, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findMember(member_id: string, ReqMemberMileageFind: ReqMemberMileageFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    create(mileageLogSaveFromDTO: ReqMileageLogSaveFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    save(MileageSaveFrom: MileageSaveFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(MileageSaveFrom: MileageSaveFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    findSetting(res: Response): Promise<Response<any, Record<string, any>>>;
}
