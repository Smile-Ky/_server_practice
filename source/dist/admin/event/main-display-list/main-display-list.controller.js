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
exports.MainDisplayListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const main_display_list_service_1 = require("./main-display-list.service");
const respones_1 = require("../../../common/respones");
const ReqDisplaySequence_dto_1 = require("./DTO/ReqDisplaySequence.dto");
const ReqDisplaySave_dto_1 = require("./DTO/ReqDisplaySave.dto");
const main_display_list_response_1 = require("./Response/main-display-list-response");
let MainDisplayListController = class MainDisplayListController {
    constructor(mainDisplayListService) {
        this.mainDisplayListService = mainDisplayListService;
    }
    async FindAll(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.mainDisplayListService.findAll()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async FindId(displayId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.mainDisplayListService.findId(displayId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async saveSequence(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.mainDisplayListService.updateList(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.mainDisplayListService.create(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(displayId, data, res) {
        try {
            await this.mainDisplayListService.update(displayId, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: displayId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(displayId, res) {
        try {
            await this.mainDisplayListService.delete(displayId);
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
        summary: '메인 전시 리스트 전체 조회',
        description: '정렬 순서 대로 메인 전시 리스트를 조회합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: main_display_list_response_1.resFindAll } }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MainDisplayListController.prototype, "FindAll", null);
__decorate([
    (0, common_1.Get)('/find/:displayId'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 전시 ID 조회',
        description: '정렬 순서 대로 메인 전시를 조회합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: main_display_list_response_1.resFindId } }),
    __param(0, (0, common_1.Param)('displayId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MainDisplayListController.prototype, "FindId", null);
__decorate([
    (0, common_1.Post)('/sequence'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 전시 리스트 순서 수정',
        description: '메인 전시 리스트에 순서를 변경합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: main_display_list_response_1.resSaveSequence } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDisplaySequence_dto_1.ReqDisplaySequenceDto, Object]),
    __metadata("design:returntype", Promise)
], MainDisplayListController.prototype, "saveSequence", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 전시 저장',
        description: '메인 전시를 저장합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: main_display_list_response_1.resCreate } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDisplaySave_dto_1.ReqDisplaySaveDto, Object]),
    __metadata("design:returntype", Promise)
], MainDisplayListController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:displayId'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 전시 수정',
        description: '메인 전시를 수정합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: main_display_list_response_1.resUpdate } }),
    __param(0, (0, common_1.Param)('displayId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqDisplaySave_dto_1.ReqDisplaySaveDto, Object]),
    __metadata("design:returntype", Promise)
], MainDisplayListController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:displayId'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 전시 삭제',
        description: '메인 전시를 삭제합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: main_display_list_response_1.resDelete } }),
    __param(0, (0, common_1.Param)('displayId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MainDisplayListController.prototype, "delete", null);
MainDisplayListController = __decorate([
    (0, common_1.Controller)('admin/main/display'),
    (0, swagger_1.ApiTags)('어드민 - 이벤트 : 메인전시 리스트'),
    __metadata("design:paramtypes", [main_display_list_service_1.MainDisplayListService])
], MainDisplayListController);
exports.MainDisplayListController = MainDisplayListController;
//# sourceMappingURL=main-display-list.controller.js.map