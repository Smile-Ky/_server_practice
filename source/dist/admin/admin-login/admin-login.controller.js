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
exports.AdminLoginController = void 0;
const common_1 = require("@nestjs/common");
const admin_login_service_1 = require("./admin-login.service");
const swagger_1 = require("@nestjs/swagger");
const ReqLoginFromDTO_1 = require("./DTO/ReqLoginFromDTO");
const respones_1 = require("../../common/respones");
const jwt_1 = require("../../common/jwt");
const AdminUserIp_entity_1 = require("../../entity/admin/AdminUserIp.entity");
const ReqSignUp_dto_1 = require("./DTO/ReqSignUp.dto");
let AdminLoginController = class AdminLoginController {
    constructor(adminLoginService) {
        this.adminLoginService = adminLoginService;
    }
    async signUp(ReqSignUp, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.adminLoginService.signUp(ReqSignUp)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async login(ReqLoginFrom, res) {
        try {
            const data = await this.adminLoginService.login(ReqLoginFrom);
            if (!data.result) {
                res.clearCookie('access_token');
                return res.status(200).json((0, respones_1.SUCCESS)({ data: data.massage }));
            }
            res.cookie('access_token', (0, jwt_1.makeToken)({ ReqLoginFrom }), { sameSite: 'none', secure: true });
            return res.status(200).json((0, respones_1.SUCCESS)({ data: { user_name: data.user } }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async logout(res) {
        try {
            res.clearCookie('access_token');
            return res.status(200).json((0, respones_1.SUCCESS)({ data: "성공" }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findRequestIp(req, res) {
        try {
            return res.status(200).json({
                data: await this.adminLoginService.findIpAll()
            });
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json(error);
        }
    }
    async saveApprovedIp(ipId, res) {
        try {
            await this.adminLoginService.approvedIp(ipId);
            return res.status(200).json({ data: '성공' });
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json(error);
        }
    }
    async findApprovedIp(res) {
        try {
            return res.status(200).json({
                data: await this.adminLoginService.approvedIpFind()
            });
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json(error);
        }
    }
    async deleteApprovedIp(ipId, res) {
        try {
            await this.adminLoginService.delete(ipId);
            return res.status(200).json({ data: '성공' });
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json(error);
        }
    }
};
__decorate([
    (0, common_1.Post)('/signup'),
    (0, swagger_1.ApiOperation)({
        summary: '어드민 페이지 회원가입',
        description: '아이디, 패스워드를 통해 회원 가입을 진행합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        schema: { example: { data: {
                    login_id: '아이디',
                    login_pw: '패스워드',
                    admin_name: '어드민 사용자 이름',
                } } }
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqSignUp_dto_1.ReqSignUpDto, Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('/userLogin'),
    (0, swagger_1.ApiOperation)({
        summary: '어드민 페이지 로그인',
        description: '아이디, 패스워드를 통해 로그인을 진행합니다. </br> 최초 접속 시, ip는 자동으로 승인 요청이 진행 됩니다. 승인 이후 접속이 가능합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqLoginFromDTO_1.ReqLoginFromDTO }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '요청 성공 시, 쿠키로 access_token이 전달 됩니다.', schema: { example: { data: { user_name: '게임베리' } } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqLoginFromDTO_1.ReqLoginFromDTO, Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/logout'),
    (0, swagger_1.ApiOperation)({
        summary: '어드민 페이지 로그아웃',
        description: '로그아웃 요청 시, 쿠키에 토큰을 지웁니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: '로그아웃', schema: { example: { data: "성공" } } }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('/login/ip/request/find'),
    (0, swagger_1.ApiOperation)({
        summary: '승인 요청 한 ip 조회',
        description: '승인 요청을 보낸 ip를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [AdminUserIp_entity_1.AdminUserIpEntity] }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "findRequestIp", null);
__decorate([
    (0, common_1.Post)('/login/ip/approved/:ipId'),
    (0, swagger_1.ApiOperation)({
        summary: '요청 온 IP 승인',
        description: '요청 온 IP를 승인 합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'ipId', description: '승인 할 요청에 고유 ID' }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, description: '승인 결과', schema: { example: { data: '성공' } } }),
    __param(0, (0, common_1.Param)('ipId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "saveApprovedIp", null);
__decorate([
    (0, common_1.Get)('/login/ip/approved/find'),
    (0, swagger_1.ApiOperation)({
        summary: '승인 된 ip 조회',
        description: '승인이 완료 된 ip를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [AdminUserIp_entity_1.AdminUserIpEntity] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "findApprovedIp", null);
__decorate([
    (0, common_1.Post)('/login/ip/approved/delete/:ipId'),
    (0, swagger_1.ApiOperation)({
        summary: '승인 된 ip 삭제',
        description: '요청 온 IP를 삭제 합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'ipId', description: '삭제 할 고유 ID' }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, description: '승인 결과', schema: { example: { data: '성공' } } }),
    __param(0, (0, common_1.Param)('ipId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AdminLoginController.prototype, "deleteApprovedIp", null);
AdminLoginController = __decorate([
    (0, common_1.Controller)('admin'),
    (0, swagger_1.ApiTags)('어드민 - 로그인'),
    __metadata("design:paramtypes", [admin_login_service_1.AdminLoginService])
], AdminLoginController);
exports.AdminLoginController = AdminLoginController;
//# sourceMappingURL=admin-login.controller.js.map