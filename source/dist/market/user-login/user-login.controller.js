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
exports.UserLoginController = void 0;
const common_1 = require("@nestjs/common");
const user_login_service_1 = require("./user-login.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_1 = require("../../common/jwt");
let UserLoginController = class UserLoginController {
    constructor(userLoginService) {
        this.userLoginService = userLoginService;
    }
    async login(id, req, res) {
        try {
            let member = await this.userLoginService.login(id);
            if (member.result === false) {
                const member = await this.userLoginService.singUp(id);
                res.cookie('user_login', (0, jwt_1.makeToken)({ id }), { sameSite: 'none', secure: true });
                res.cookie('user_id', id, { sameSite: 'none', secure: true });
                return res.status(200).json({ data: member });
            }
            res.cookie('user_login', (0, jwt_1.makeToken)({ id }), { sameSite: 'none', secure: true });
            res.cookie('user_id', id, { sameSite: 'none', secure: true });
            return res.status(200).json({ data: member });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async userCodeLogin(code, req, res) {
        try {
            const member = await this.userLoginService.userCodeLogin(code);
            if (member.result === false) {
                return res.status(200).json({ data: { result: false, message: '등록된 회원이 아닙니다.' } });
            }
            res.cookie('user_login', (0, jwt_1.makeToken)({ userId: member.id }), { sameSite: 'none', secure: true });
            res.cookie('user_id', member.id, { sameSite: 'none', secure: true });
            return res.status(200).json({ data: member });
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async logout(req, res) {
        try {
            res.clearCookie('token');
            res.clearCookie('user_id');
            res.status(200).json({
                data: {
                    result: true
                }
            });
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
};
__decorate([
    (0, common_1.Get)('/login/:userId'),
    (0, swagger_1.ApiOperation)({ summary: '유저 고유 아이디로 유저 회원가입/로그인을 수행합니다.' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('/login/code/:userCode'),
    (0, swagger_1.ApiOperation)({ summary: '유저 코드로 로그인을 수행합니다.' }),
    __param(0, (0, common_1.Param)('userCode')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "userCodeLogin", null);
__decorate([
    (0, common_1.Get)('/logout'),
    (0, swagger_1.ApiOperation)({ summary: '요청 온 유저에 로그아웃을 수행합니다.' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "logout", null);
UserLoginController = __decorate([
    (0, common_1.Controller)('api/user'),
    (0, swagger_1.ApiTags)('마켓 - 유저 로그인'),
    __metadata("design:paramtypes", [user_login_service_1.UserLoginService])
], UserLoginController);
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=user-login.controller.js.map