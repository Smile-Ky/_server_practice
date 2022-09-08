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
exports.MemberBatchesController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const member_batches_service_1 = require("./member-batches.service");
const batchesGroupDTO_1 = require("./DTO/batchesGroupDTO");
const batchesMaileageDTO_1 = require("./DTO/batchesMaileageDTO");
const ReqMemberBatchFindDTO_1 = require("./DTO/ReqMemberBatchFindDTO");
const ResMemberBatchDTO_1 = require("./DTO/ResMemberBatchDTO");
let MemberBatchesController = class MemberBatchesController {
    constructor(BatchesService) {
        this.BatchesService = BatchesService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.BatchesService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(ReqMemberBatchFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.BatchesService.find(ReqMemberBatchFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async groupChange(BatchesGroup, res) {
        try {
            await this.BatchesService.groupChange(BatchesGroup);
            return res.status(200).json((0, respones_1.SUCCESS)({ usersId: BatchesGroup.user_list }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async MileageChange(BatchesMileage, res) {
        try {
            await this.BatchesService.MileageChange(BatchesMileage);
            return res.status(200).json((0, respones_1.SUCCESS)({ usersId: BatchesMileage.user_list }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/find/all"),
    (0, swagger_1.ApiOperation)({
        summary: '회원 정보 일괄 관리 : 전체 조회',
        description: '모든 회원 정보를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemberBatchDTO_1.ResMemberBatchDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberBatchesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)("/find"),
    (0, swagger_1.ApiOperation)({
        summary: '회원 정보 일괄 관리 : 검색 조회',
        description: '검색 조건에 맞는 회원 정보를 조회합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqMemberBatchFindDTO_1.ReqMemberBatchFindDTO }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemberBatchDTO_1.ResMemberBatchDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMemberBatchFindDTO_1.ReqMemberBatchFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MemberBatchesController.prototype, "find", null);
__decorate([
    (0, common_1.Put)("/group"),
    (0, swagger_1.ApiOperation)({
        summary: '그룹 일괄 변경',
        description: ' 요청이 들어온 유저에 회원 그룹을 일괄 변경합니다. '
    }),
    (0, swagger_1.ApiBody)({ type: batchesGroupDTO_1.BatchesGroupDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batchesGroupDTO_1.BatchesGroupDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberBatchesController.prototype, "groupChange", null);
__decorate([
    (0, common_1.Put)("/mileage"),
    (0, swagger_1.ApiOperation)({
        summary: '마일리지 일괄 지급',
        description: ' 요청이 들어온 유저에게 마일리지를 지급합니다. '
    }),
    (0, swagger_1.ApiBody)({ type: batchesMaileageDTO_1.BatchesMileageDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [batchesMaileageDTO_1.BatchesMileageDTO, Object]),
    __metadata("design:returntype", Promise)
], MemberBatchesController.prototype, "MileageChange", null);
MemberBatchesController = __decorate([
    (0, common_1.Controller)("/admin/member/batches"),
    (0, swagger_1.ApiTags)("어드민 - 회원 정보 일괄 관리 : 회원그룹 일괄변경/쿠폰 일괄지급/마일리지 일괄지급 [ 37 페이지 ]"),
    __metadata("design:paramtypes", [member_batches_service_1.MemberBatchesService])
], MemberBatchesController);
exports.MemberBatchesController = MemberBatchesController;
//# sourceMappingURL=member-batches.controller.js.map