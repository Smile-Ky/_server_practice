import { ExcelDownloadService } from "./excel-download.service";
import { Response } from "express";
export declare class ExcelDownloadController {
    private readonly excelDownloadService;
    constructor(excelDownloadService: ExcelDownloadService);
    excelDownload(res: Response): Promise<Response<any, Record<string, any>> | {
        file_url: string;
    }>;
}
