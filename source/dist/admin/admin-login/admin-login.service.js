"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLoginService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const AdminUser_repository_1 = require("../../repository/admin/AdminUser.repository");
const AdminUserIp_repository_1 = require("../../repository/admin/AdminUserIp.repository");
const AdminUser_entity_1 = require("../../entity/admin/AdminUser.entity");
let AdminLoginService = class AdminLoginService {
    constructor(adminLoginRepository, adminUserIpRepository) {
        this.adminLoginRepository = adminLoginRepository;
        this.adminUserIpRepository = adminUserIpRepository;
    }
    async signUp(data) {
        try {
            const saveData = new AdminUser_entity_1.AdminUserEntity();
            saveData.login_id = data.login_id;
            saveData.login_pw = data.login_pw;
            saveData.admin_name = data.user_name;
            saveData.create_date = new Date();
            saveData.update_date = new Date();
            return await this.adminLoginRepository.save(saveData);
        }
        catch (error) {
            common_1.Logger.error(`admin/login : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async login(data) {
        try {
            const login = await this.adminLoginRepository.query(`
            select * from admin_user where login_id = "${data.login_id}" AND login_pw = "${data.login_pw}" 
            `);
            if (login.length === 0)
                return { result: false, massage: '아이디, 패스워드가 다릅니다.' };
            const ip = await this.adminLoginRepository.query(`
            SELECT * FROM admin_user as admin INNER JOIN admin_user_ip as ip
            on ip.adminUserAdminUserId = admin.admin_user_id where admin.login_id = "${data.login_id}";
            `);
            for (let i in ip) {
                if (ip[i].ip === data.login_ip && ip[i].approved_state === 1) {
                    return { result: true, user: ip[i].admin_name };
                }
            }
            const buffer = await this.adminUserIpRepository.find({ ip: data.login_ip });
            if (buffer.length > 0) {
                return { result: false, massage: '동일 IP로 요청이 왔습니다.' };
            }
            await this.adminUserIpRepository.createQueryBuilder()
                .insert()
                .values({
                adminUser: await this.adminLoginRepository.findOne({ admin_user_id: login[0].admin_user_id }),
                ip: data.login_ip,
                ip_user: data.ip_user,
                approved_state: false,
                create_date: new Date(),
                update_date: new Date()
            }).execute();
            return { result: false, massage: "IP가 요청 되었습니다." };
        }
        catch (error) {
            common_1.Logger.error(`admin/login : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findIpAll() {
        try {
            return await this.adminUserIpRepository.query(`
            select * from admin_user_ip where approved_state = 0
            `);
        }
        catch (error) {
            common_1.Logger.error(`admin/login : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async approvedIp(id) {
        try {
            return await this.adminUserIpRepository.update({ ip_id: id }, {
                approved_state: true,
                update_date: new Date()
            });
        }
        catch (error) {
            common_1.Logger.error(`admin/login : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async approvedIpFind() {
        try {
            return await this.adminUserIpRepository.query(`
            select * from admin_user_ip where approved_state = 1
            `);
        }
        catch (error) {
            common_1.Logger.error(`admin/login : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            return await this.adminUserIpRepository.delete({ ip_id: id });
        }
        catch (error) {
            common_1.Logger.error(`admin/login : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
AdminLoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(AdminUser_repository_1.AdminUserRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(AdminUserIp_repository_1.AdminUserIpRepository)),
    __metadata("design:paramtypes", [AdminUser_repository_1.AdminUserRepository,
        AdminUserIp_repository_1.AdminUserIpRepository])
], AdminLoginService);
exports.AdminLoginService = AdminLoginService;
//# sourceMappingURL=admin-login.service.js.map