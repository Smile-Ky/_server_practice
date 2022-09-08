import { AdminUserRepository } from '../../repository/admin/AdminUser.repository';
import { ReqLoginFromDTO } from "./DTO/ReqLoginFromDTO";
import { AdminUserIpRepository } from "../../repository/admin/AdminUserIp.repository";
import { ReqSignUpDto } from "./DTO/ReqSignUp.dto";
import { AdminUserEntity } from "../../entity/admin/AdminUser.entity";
export declare class AdminLoginService {
    private adminLoginRepository;
    private adminUserIpRepository;
    constructor(adminLoginRepository: AdminUserRepository, adminUserIpRepository: AdminUserIpRepository);
    signUp(data: ReqSignUpDto): Promise<AdminUserEntity>;
    login(data: ReqLoginFromDTO): Promise<{
        result: boolean;
        massage: string;
        user?: undefined;
    } | {
        result: boolean;
        user: any;
        massage?: undefined;
    }>;
    findIpAll(): Promise<any>;
    approvedIp(id: string): Promise<import("typeorm").UpdateResult>;
    approvedIpFind(): Promise<any>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
