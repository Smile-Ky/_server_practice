import { UserLoginService } from "./user-login.service";
import { Response, Request } from 'express';
export declare class UserLoginController {
    private readonly userLoginService;
    constructor(userLoginService: UserLoginService);
    login(id: string, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    userCodeLogin(code: string, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    logout(req: Request, res: Response): Promise<void>;
}
