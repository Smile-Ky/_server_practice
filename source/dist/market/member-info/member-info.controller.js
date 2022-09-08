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
exports.MemberInfoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const member_info_service_1 = require("./member-info.service");
const ReqGetApiMemberInfo_1 = require("./DTO/ReqGetApiMemberInfo");
const jwt_1 = require("../../common/jwt");
let MemberInfoController = class MemberInfoController {
    constructor(memberInfoServcie) {
        this.memberInfoServcie = memberInfoServcie;
    }
    async getApiMemberInfo(data, req, res) {
        try {
            res.status(200).json(await this.memberInfoServcie.getApiMemberInfo(data.userId, (0, jwt_1.makeToken)({ id: data.userId })));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async getCookieMemberInfo(req, res) {
        try {
            res.status(200).json(await this.memberInfoServcie.getApiMemberInfo(req.cookies['user_id'], (0, jwt_1.makeToken)({ id: req.cookies['user_id'] })));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
};
__decorate([
    (0, common_1.Post)('/getApiMemberInfo'),
    (0, swagger_1.ApiOperation)({ summary: '회원 정보 검색' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetApiMemberInfo_1.REqGetApiMemberInfoDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], MemberInfoController.prototype, "getApiMemberInfo", null);
__decorate([
    (0, common_1.Post)('/getCookieMemberInfo'),
    (0, swagger_1.ApiOperation)({ summary: '쿠키 정보로 회원 정보 검색' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MemberInfoController.prototype, "getCookieMemberInfo", null);
MemberInfoController = __decorate([
    (0, common_1.Controller)('/api/member'),
    (0, swagger_1.ApiTags)('마켓 - 회원 정보'),
    __metadata("design:paramtypes", [member_info_service_1.MemberInfoService])
], MemberInfoController);
exports.MemberInfoController = MemberInfoController;
//# sourceMappingURL=member-info.controller.js.map