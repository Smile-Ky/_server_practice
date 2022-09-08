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
exports.MemberGroupController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const member_group_service_1 = require("./member-group.service");
const ResGroupFromDTO_1 = require("./DTO/ResGroupFromDTO");
const GroupFromSimpleDTO_1 = require("./DTO/GroupFromSimpleDTO");
const ReqGroupFromDTO_1 = require("./DTO/ReqGroupFromDTO");
let MemberGroupController = class MemberGroupController {
    constructor(memberGroupService) {
        this.memberGroupService = memberGroupService;
    }
    async findAll(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.memberGroupService.findAll() }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findSimple(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.memberGroupService.findSimple()
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(groupId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.memberGroupService.findId(groupId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(GroupFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.memberGroupService.save(GroupFrom) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(groupId, GroupFrom, res) {
        try {
            await this.memberGroupService.update(groupId, GroupFrom);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: groupId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(groupId, res) {
        try {
            await this.memberGroupService.delete(groupId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: groupId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find/all'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 그룹 전체 조회',
        description: '회원 그룹 전체 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResGroupFromDTO_1.ResGroupFromDTO] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberGroupController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/find/simple'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 그룹 간단 조회',
        description: '회원 그룹 전체 데이터를 간략하여 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [GroupFromSimpleDTO_1.GroupFromSimpleDTO] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberGroupController.prototype, "findSimple", null);
__decorate([
    (0, common_1.Get)('/find/:groupId'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 그룹 ID 조회',
        description: '회원 그룹에 고유 아이디 값으로 특정 회원 그룹 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'groupId', description: '회원 그룹 고유 아이디 값을 전달합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResGroupFromDTO_1.ResGroupFromDTO }),
    __param(0, (0, common_1.Param)('groupId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemberGroupController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 그룹 생성',
        description: '회원 그룹을 생성합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqGroupFromDTO_1.ReqGroupFromDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResGroupFromDTO_1.ResGroupFromDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGroupFromDTO_1.ReqGroupFromDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberGroupController.prototype, "save", null);
__decorate([
    (0, common_1.Put)('/update/:groupId'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 그룹 업데이트',
        description: '선택한 회원 그룹을 업데이트 합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'groupId', description: '회원 그룹 고유 아이디 값을 전달합니다.' }),
    (0, swagger_1.ApiBody)({ type: ReqGroupFromDTO_1.ReqGroupFromDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResGroupFromDTO_1.ResGroupFromDTO }),
    __param(0, (0, common_1.Param)('groupId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqGroupFromDTO_1.ReqGroupFromDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberGroupController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:groupId'),
    (0, swagger_1.ApiOperation)({
        summary: '회원 그룹 삭제',
        description: '선택한 회원 그룹을 삭제 합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'groupId', description: '회원 그룹 고유 아이디 값을 전달합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: [GroupFromSimpleDTO_1.GroupFromSimpleDTO], description: '삭제 이후 남은 회원 그룹 목록을 전달합니다.' }),
    __param(0, (0, common_1.Param)('groupId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MemberGroupController.prototype, "delete", null);
MemberGroupController = __decorate([
    (0, common_1.Controller)('admin/group/manager'),
    (0, swagger_1.ApiTags)('어드민 - 회원 관리 : 회원 그룹 관리 [ 29 페이지 ]'),
    __metadata("design:paramtypes", [member_group_service_1.MemberGroupService])
], MemberGroupController);
exports.MemberGroupController = MemberGroupController;
//# sourceMappingURL=member-group.controller.js.map