import { TopDisplayListService } from "./top-display-list.service";
import { Response } from "express";
import { ReqTopDisplaySequenceDto } from "./DTO/ReqTopDisplaySequence.dto";
import { ReqTopDisplaySaveDto } from "./DTO/ReqTopDisplaySave.dto";
export declare class TopDisplayListController {
    private readonly topDisplayListService;
    constructor(topDisplayListService: TopDisplayListService);
    FindAll(res: Response): Promise<Response<any, Record<string, any>>>;
    FindId(displayId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    saveSequence(data: ReqTopDisplaySequenceDto, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: ReqTopDisplaySaveDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(displayId: string, data: ReqTopDisplaySaveDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(displayId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
