import { IconManagerService } from './icon-manager.service';
import { ReqIconFromDTO } from './DTO/ReqIconFromDTO';
import { Response } from "express";
export declare class IconManagerController {
    private iconManagerService;
    constructor(iconManagerService: IconManagerService);
    findAllIcon(page: number, pageSize: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findOneIcon(iconId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    create(data: ReqIconFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    update(iconId: string, data: ReqIconFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    Delete(iconId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
