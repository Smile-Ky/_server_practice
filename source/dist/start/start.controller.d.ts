import { StartService } from "./start.service";
export declare class StartController {
    private readonly startService;
    constructor(startService: StartService);
    memberSave(): Promise<any>;
}
