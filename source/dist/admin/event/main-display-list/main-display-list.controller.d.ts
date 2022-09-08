import { MainDisplayListService } from "./main-display-list.service";
import { Response } from "express";
import { ReqDisplaySequenceDto } from "./DTO/ReqDisplaySequence.dto";
import { ReqDisplaySaveDto } from "./DTO/ReqDisplaySave.dto";
export declare class MainDisplayListController {
    private readonly mainDisplayListService;
    constructor(mainDisplayListService: MainDisplayListService);
    FindAll(res: Response): Promise<Response<any, Record<string, any>>>;
    FindId(displayId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    saveSequence(data: ReqDisplaySequenceDto, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: ReqDisplaySaveDto, res: Response): Promise<Response<any, Record<string, any>>>;
    update(displayId: string, data: ReqDisplaySaveDto, res: Response): Promise<Response<any, Record<string, any>>>;
    delete(displayId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
