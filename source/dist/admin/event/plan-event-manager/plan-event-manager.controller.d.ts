/// <reference types="multer-s3" />
import { PlanEventManagerService } from "./plan-event-manager.service";
import { Response } from "express";
import { ReqPlanEventFromDTO } from "./DTO/ReqPlanEventFromDTO";
import { ReqPlanEventFindDTO } from "./DTO/ReqPlanEventFindDTO";
export declare class PlanEventManagerController {
    private readonly planEventManager;
    constructor(planEventManager: PlanEventManagerService);
    findAll(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    find(page: number, pageSize: number, planEventFind: ReqPlanEventFindDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    findId(planEventId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(planEventFrom: ReqPlanEventFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(planEventId: string, planEventFrom: ReqPlanEventFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(planEventId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    imageUpload(images: Array<Express.MulterS3.File>, res: Response): Promise<Response<any, Record<string, any>> | {
        result: number;
        data: object;
    }>;
}
