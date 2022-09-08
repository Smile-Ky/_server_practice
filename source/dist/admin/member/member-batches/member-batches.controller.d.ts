import { MemberBatchesService } from "./member-batches.service";
import { BatchesGroupDTO } from "./DTO/batchesGroupDTO";
import { BatchesMileageDTO } from "./DTO/batchesMaileageDTO";
import { ReqMemberBatchFindDTO } from "./DTO/ReqMemberBatchFindDTO";
import { Response } from "express";
export declare class MemberBatchesController {
    private readonly BatchesService;
    constructor(BatchesService: MemberBatchesService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(ReqMemberBatchFind: ReqMemberBatchFindDTO, page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    groupChange(BatchesGroup: BatchesGroupDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    MileageChange(BatchesMileage: BatchesMileageDTO, res: Response): Promise<Response<any, Record<string, any>>>;
}
