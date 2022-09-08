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
exports.IconManagerController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const icon_manager_service_1 = require("./icon-manager.service");
const ReqIconFromDTO_1 = require("./DTO/ReqIconFromDTO");
const ResIconDTO_1 = require("./DTO/ResIconDTO");
let IconManagerController = class IconManagerController {
    constructor(iconManagerService) {
        this.iconManagerService = iconManagerService;
    }
    async findAllIcon(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.iconManagerService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOneIcon(iconId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.iconManagerService.findId(iconId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.iconManagerService.create(data)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(iconId, data, res) {
        try {
            await this.iconManagerService.update(iconId, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: iconId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async Delete(iconId, res) {
        try {
            await this.iconManagerService.delete(iconId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: 'success' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '아이콘 목록 전체 조회',
        description: '저장 된 아이콘 목록 전체를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResIconDTO_1.ResIconDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], IconManagerController.prototype, "findAllIcon", null);
__decorate([
    (0, common_1.Get)('/find/:iconId'),
    (0, swagger_1.ApiOperation)({
        summary: '아이콘 ID 조회',
        description: '요청 온 아이콘 ID 값에 해당하는 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'iconId', description: '아이콘 고유 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResIconDTO_1.ResIconDTO }),
    __param(0, (0, common_1.Param)('iconId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IconManagerController.prototype, "findOneIcon", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '아이콘 저장',
        description: '요청한 아이콘을 저장합니다.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqIconFromDTO_1.ReqIconFromDTO, Object]),
    __metadata("design:returntype", Promise)
], IconManagerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:iconId'),
    (0, swagger_1.ApiOperation)({
        summary: '아이콘 수정',
        description: '선택한 아이콘을 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'iconId', description: '아이콘 고유 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: '수정한 아이콘 ID 값' } } }),
    __param(0, (0, common_1.Param)('iconId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqIconFromDTO_1.ReqIconFromDTO, Object]),
    __metadata("design:returntype", Promise)
], IconManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:iconId'),
    (0, swagger_1.ApiOperation)({
        summary: '아이콘 삭제',
        description: '선택한 아이콘을 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'iconId', description: '아이콘 고유 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: 'success' } } }),
    __param(0, (0, common_1.Param)('iconId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IconManagerController.prototype, "Delete", null);
IconManagerController = __decorate([
    (0, common_1.Controller)('admin/icon'),
    (0, swagger_1.ApiTags)('어드민 - 상품관리 : 아이콘 관리 [ 53페이지 ]'),
    __metadata("design:paramtypes", [icon_manager_service_1.IconManagerService])
], IconManagerController);
exports.IconManagerController = IconManagerController;
//# sourceMappingURL=icon-manager.controller.js.map