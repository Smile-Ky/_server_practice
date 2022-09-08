"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminLoginModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_login_controller_1 = require("./admin-login.controller");
const admin_login_service_1 = require("./admin-login.service");
const AdminUser_repository_1 = require("../../repository/admin/AdminUser.repository");
const AdminUserIp_repository_1 = require("../../repository/admin/AdminUserIp.repository");
let AdminLoginModule = class AdminLoginModule {
};
AdminLoginModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([AdminUser_repository_1.AdminUserRepository, AdminUserIp_repository_1.AdminUserIpRepository])],
        controllers: [admin_login_controller_1.AdminLoginController],
        providers: [admin_login_service_1.AdminLoginService]
    })
], AdminLoginModule);
exports.AdminLoginModule = AdminLoginModule;
//# sourceMappingURL=admin-login.module.js.map