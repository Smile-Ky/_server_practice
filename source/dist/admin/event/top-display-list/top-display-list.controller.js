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
exports.TopDisplayListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const top_display_list_service_1 = require("./top-display-list.service");
const respones_1 = require("../../../common/respones");
const ReqTopDisplaySequence_dto_1 = require("./DTO/ReqTopDisplaySequence.dto");
const ReqTopDisplaySave_dto_1 = require("./DTO/ReqTopDisplaySave.dto");
const top_display_list_response_1 = require("./Response/top-display-list-response");
let TopDisplayListController = class TopDisplayListController {
    constructor(topDisplayListService) {
        this.topDisplayListService = topDisplayListService;
    }
    async FindAll(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.topDisplayListService.findAll()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async FindId(displayId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.topDisplayListService.findId(displayId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async saveSequence(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.topDisplayListService.updateList(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.topDisplayListService.create(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(displayId, data, res) {
        try {
            await this.topDisplayListService.update(displayId, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: displayId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(displayId, res) {
        try {
            await this.topDisplayListService.delete(displayId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: displayId }));
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
        summary: '상단 탭 전시 리스트 전체 조회',
        description: '정렬 순서 대로 상단 탭 전시 리스트를 조회합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: top_display_list_response_1.resFindAll } }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TopDisplayListController.prototype, "FindAll", null);
__decorate([
    (0, common_1.Get)('/find/:displayId'),
    (0, swagger_1.ApiOperation)({
        summary: '상단 탭 전시 ID 조회',
        description: '정렬 순서 대로 상단 탭 전시를 조회합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: top_display_list_response_1.resFindId } }),
    __param(0, (0, common_1.Param)('displayId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TopDisplayListController.prototype, "FindId", null);
__decorate([
    (0, common_1.Post)('/sequence'),
    (0, swagger_1.ApiOperation)({
        summary: '상단 탭 전시 리스트 순서 수정',
        description: '상단 탭 전시 리스트에 순서를 변경합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: top_display_list_response_1.resSaveSequence } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqTopDisplaySequence_dto_1.ReqTopDisplaySequenceDto, Object]),
    __metadata("design:returntype", Promise)
], TopDisplayListController.prototype, "saveSequence", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({
        summary: '상단 탭 전시 저장',
        description: '상단 탭 전시를 저장합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: top_display_list_response_1.resCreate } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqTopDisplaySave_dto_1.ReqTopDisplaySaveDto, Object]),
    __metadata("design:returntype", Promise)
], TopDisplayListController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:displayId'),
    (0, swagger_1.ApiOperation)({
        summary: '상단 탭 전시 수정',
        description: '상단 탭 전시를 수정합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: top_display_list_response_1.resUpdate } }),
    __param(0, (0, common_1.Param)('displayId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqTopDisplaySave_dto_1.ReqTopDisplaySaveDto, Object]),
    __metadata("design:returntype", Promise)
], TopDisplayListController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:displayId'),
    (0, swagger_1.ApiOperation)({
        summary: '상단 탭 전시 삭제',
        description: '상단 탭 전시를 삭제합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: top_display_list_response_1.resDelete } }),
    __param(0, (0, common_1.Param)('displayId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TopDisplayListController.prototype, "delete", null);
TopDisplayListController = __decorate([
    (0, common_1.Controller)('admin/top/display'),
    (0, swagger_1.ApiTags)('어드민 - 이벤트 : 상단 탭 전시 리스트'),
    __metadata("design:paramtypes", [top_display_list_service_1.TopDisplayListService])
], TopDisplayListController);
exports.TopDisplayListController = TopDisplayListController;
//# sourceMappingURL=top-display-list.controller.js.map