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
exports.MemberMangerController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const member_manger_service_1 = require("./member-manger.service");
const ResUserFromDTO_1 = require("./DTO/ResUserFromDTO");
const ReqMemberFindDTO_1 = require("./DTO/ReqMemberFindDTO");
const ResMemberListFromDTO_1 = require("./DTO/ResMemberListFromDTO");
const ReqUserFromDTO_1 = require("./DTO/ReqUserFromDTO");
const ReqMemberUpdate_dto_1 = require("./DTO/ReqMemberUpdate.dto");
const ReqMemberPetUpdate_dto_1 = require("./DTO/ReqMemberPetUpdate.dto");
let MemberMangerController = class MemberMangerController {
    constructor(memberManagerService) {
        this.memberManagerService = memberManagerService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberManagerService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findIdx(user_id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.memberManagerService.findById(user_id)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(ReqMemberFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberManagerService.find(ReqMemberFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(memberFrom, res) {
        try {
            console.log(memberFrom.name);
            return res.status(200).json({
                data: await this.memberManagerService.create(memberFrom)
            });
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(memberFrom, data, res) {
        try {
            await this.memberManagerService.update(data, memberFrom);
            return res.status(200).json((0, respones_1.SUCCESS)({ id: data }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async petUpdate(pet, data, res) {
        try {
            await this.memberManagerService.updatePet(data, pet);
            return res.status(200).json((0, respones_1.SUCCESS)({ id: data }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(userId, res) {
        try {
            await this.memberManagerService.delete(userId);
            return res.status(200).json((0, respones_1.SUCCESS)({ id: userId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({
        summary: '유저 목록 전체 조회',
        description: '전체 유저 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', example: 1, description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', example: 50, description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemberListFromDTO_1.ResMemberListFromDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/find/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 정보 ID 조회',
        description: '특정 유저에 ID 값으로 목록 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '조회하려는 유저 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResUserFromDTO_1.ResUserFromDTO }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "findIdx", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '전체 회원 리스트 조건 조회',
        description: '전체 회원 중 조건에 맞는 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqMemberFindDTO_1.ReqMemberFindDTO }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemberListFromDTO_1.ResMemberListFromDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMemberFindDTO_1.ReqMemberFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({
        summary: '유저 생성',
        description: '마켓 사용자를 저장합니다.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUserFromDTO_1.ReqUserFromDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 수정',
        description: '선택한 회원 정보를 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '유저 아이디' }),
    (0, swagger_1.ApiCreatedResponse)({ description: '수정 한 회원 ID 값이 리턴 됩니다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMemberUpdate_dto_1.ReqMemberUpdateDto, String, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "update", null);
__decorate([
    (0, common_1.Put)('update/pet/:petId'),
    (0, swagger_1.ApiOperation)({
        summary: '강아지 수정',
        description: '선택한 강아지 정보를 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'petId', description: '강아지 데이터 고유 ID' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('petId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMemberPetUpdate_dto_1.ReqMemberPetUpdateDto, String, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "petUpdate", null);
__decorate([
    (0, common_1.Delete)('/delete/:userId'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 삭제',
        description: '선택한 회원을 완전히 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: '삭제하려는 유저 ID 값' }),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemberMangerController.prototype, "delete", null);
MemberMangerController = __decorate([
    (0, common_1.Controller)('admin/member'),
    (0, swagger_1.ApiTags)('어드민 - 회원 관리 : 회원 관리_전체 회원 리스트 [ 27 페이지 ] '),
    __metadata("design:paramtypes", [member_manger_service_1.MemberMangerService])
], MemberMangerController);
exports.MemberMangerController = MemberMangerController;
//# sourceMappingURL=member-manger.controller.js.map