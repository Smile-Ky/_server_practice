import { AdminLoginService } from "./admin-login.service";
import { ReqLoginFromDTO } from "./DTO/ReqLoginFromDTO";
import { Response, Request } from 'express';
import { ReqSignUpDto } from "./DTO/ReqSignUp.dto";
export declare class AdminLoginController {
    private readonly adminLoginService;
    constructor(adminLoginService: AdminLoginService);
    signUp(ReqSignUp: ReqSignUpDto, res: Response): Promise<Response<any, Record<string, any>>>;
    login(ReqLoginFrom: ReqLoginFromDTO, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(res: Response): Promise<Response<any, Record<string, any>>>;
    findRequestIp(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    saveApprovedIp(ipId: string, res: Response): Promise<Response<any, Record<string, any>>>;
    findApprovedIp(res: Response): Promise<Response<any, Record<string, any>>>;
    deleteApprovedIp(ipId: string, res: Response): Promise<Response<any, Record<string, any>>>;
}
