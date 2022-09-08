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
exports.NoticeController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const notice_service_1 = require("./notice.service");
const respones_1 = require("../../../common/respones");
const ReqNoticeFrom_dto_1 = require("./DTO/ReqNoticeFrom.dto");
const ResNoticeFrom_dto_1 = require("./DTO/ResNoticeFrom.dto");
let NoticeController = class NoticeController {
    constructor(noticeService) {
        this.noticeService = noticeService;
    }
    async find(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.noticeService.find(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.noticeService.findId(id)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.noticeService.create(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(id, data, res) {
        try {
            await this.noticeService.update(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(id, res) {
        try {
            await this.noticeService.delete(id);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: '공지사항을 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/:noticeId'),
    (0, swagger_1.ApiOperation)({ summary: '공지사항을 ID로 조회합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResNoticeFrom_dto_1.ResNoticeFromDto }),
    __param(0, (0, common_1.Param)('noticeId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: '공지사항을 저장합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResNoticeFrom_dto_1.ResNoticeFromDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqNoticeFrom_dto_1.ReqNoticeFromDto, Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:noticeId'),
    (0, swagger_1.ApiOperation)({ summary: '공지사항을 수정합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { id: '공지사항 고유 ID' } } }),
    __param(0, (0, common_1.Param)('noticeId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqNoticeFrom_dto_1.ReqNoticeFromDto, Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:noticeId'),
    (0, swagger_1.ApiOperation)({ summary: '공지사항을 삭제합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { id: '공지사항 고유 ID' } } }),
    __param(0, (0, common_1.Param)('noticeId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NoticeController.prototype, "delete", null);
NoticeController = __decorate([
    (0, common_1.Controller)('admin/notice'),
    (0, swagger_1.ApiTags)('어드민 - 고객센터 : 공지사항'),
    __metadata("design:paramtypes", [notice_service_1.NoticeService])
], NoticeController);
exports.NoticeController = NoticeController;
//# sourceMappingURL=notice.controller.js.map