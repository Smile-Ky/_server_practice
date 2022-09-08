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
exports.MemberMileageController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const member_mileage_service_1 = require("./member-mileage.service");
const MileageSaveFromDTO_1 = require("./DTO/MileageSaveFromDTO");
const ResMileageListDTO_1 = require("./DTO/ResMileageListDTO");
const ReqMemberMileageFindDTO_1 = require("./DTO/ReqMemberMileageFindDTO");
const ResMemberMileageListDTO_1 = require("./DTO/ResMemberMileageListDTO");
const ReqMileageFindDTO_1 = require("./DTO/ReqMileageFindDTO");
const ReqMileageLogSaveFromDTO_1 = require("./DTO/ReqMileageLogSaveFromDTO");
let MemberMileageController = class MemberMileageController {
    constructor(memberMileageService) {
        this.memberMileageService = memberMileageService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberMileageService.mileageLogFindAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(ReqMileageFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberMileageService.mileageLogFind(ReqMileageFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findMemberAll(member_id, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberMileageService.mileageLogMemberFindAll(member_id, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findMember(member_id, ReqMemberMileageFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberMileageService.mileageLogMemberFind(member_id, ReqMemberMileageFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(mileageLogSaveFromDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.memberMileageService.mileageLogCreate(mileageLogSaveFromDTO)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(MileageSaveFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.memberMileageService.mileageSetting_create(MileageSaveFrom)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(MileageSaveFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.memberMileageService
                    .mileageSetting_update(MileageSaveFrom)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findSetting(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.memberMileageService.mileageSetting_find()
            }));
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
        summary: '마일리지 목록 전체 조회',
        description: '마일리지 목록에 표시 되는 데이터를 전체 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMileageListDTO_1.ResMileageListDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '마일리지 목록 검색 조회',
        description: '마일리지 목록에 표시 되는 데이터를 검색 조건에 맞게 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiBody)({ type: ReqMileageFindDTO_1.ReqMileageFindDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMileageListDTO_1.ResMileageListDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMileageFindDTO_1.ReqMileageFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/member/:memberId'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 유저 마일리지 모아보기 : 전체 조회',
        description: '자세히 보기 버튼 클릭 시, 특정 유저에 모든 마일리지 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'memberId', description: '마일리지 적럽 현황을 조회하려는 유저 아이디 값' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemberMileageListDTO_1.ResMemberMileageListDTO] }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "findMemberAll", null);
__decorate([
    (0, common_1.Post)('/find/member/:memberId'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 유저 마일리지 모아보기 : 검색',
        description: '회원 마일리지 탭에 확인 버튼 클릭 시, 검색 조건에 맞는 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'memberId', description: '마일리지 적럽 현황을 조회하려는 유저 아이디 값' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiBody)({ type: ReqMemberMileageFindDTO_1.ReqMemberMileageFindDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemberMileageListDTO_1.ResMemberMileageListDTO] }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqMemberMileageFindDTO_1.ReqMemberMileageFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "findMember", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({
        summary: '[테스트 용] 맴버 마일리지 로그 생성',
        description: '맴버 마일리지 로그 생성합니다.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMileageLogSaveFromDTO_1.ReqMileageLogSaveFromDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/mileage/setting/create'),
    (0, swagger_1.ApiOperation)({
        summary: '마일리지 설정 저장',
        description: '마일리지 설정 내용을 저장합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: MileageSaveFromDTO_1.MileageSaveFromDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: MileageSaveFromDTO_1.MileageSaveFromDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MileageSaveFromDTO_1.MileageSaveFromDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "save", null);
__decorate([
    (0, common_1.Put)('/mileage/setting/update'),
    (0, swagger_1.ApiOperation)({
        summary: '마일리지 설정 수정',
        description: '마일리지 설정 내용을 수정합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: MileageSaveFromDTO_1.MileageSaveFromDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: MileageSaveFromDTO_1.MileageSaveFromDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MileageSaveFromDTO_1.MileageSaveFromDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/mileage/setting/find'),
    (0, swagger_1.ApiOperation)({
        summary: '마일리지 설정 조회',
        description: '기존 마일리지 설정 내용을 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: MileageSaveFromDTO_1.MileageSaveFromDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MemberMileageController.prototype, "findSetting", null);
MemberMileageController = __decorate([
    (0, common_1.Controller)('admin/mileage'),
    (0, swagger_1.ApiTags)('어드민 - 회원 관리 : 마일리지 관리 [ 33 페이지 ]'),
    __metadata("design:paramtypes", [member_mileage_service_1.MemberMileageService])
], MemberMileageController);
exports.MemberMileageController = MemberMileageController;
//# sourceMappingURL=member-mileage.controller.js.map