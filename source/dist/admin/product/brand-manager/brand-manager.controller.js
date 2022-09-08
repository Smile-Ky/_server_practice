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
exports.BrandManagerController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const brand_manager_service_1 = require("./brand-manager.service");
const ResBrandFromDTO_1 = require("./DTO/ResBrandFromDTO");
const ReqBrandFromDTO_1 = require("./DTO/ReqBrandFromDTO");
const ReqBrandFindDTO_1 = require("./DTO/ReqBrandFindDTO");
let BrandManagerController = class BrandManagerController {
    constructor(brandManagerService) {
        this.brandManagerService = brandManagerService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.brandManagerService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(brandId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.brandManagerService.findId(brandId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(ReqBrandFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.brandManagerService.find(ReqBrandFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(ReqBrandFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.brandManagerService.save(ReqBrandFrom)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(brandId, ReqBrandFrom, res) {
        try {
            await this.brandManagerService.update(brandId, ReqBrandFrom);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: brandId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(brandId, res) {
        try {
            await this.brandManagerService.delete(brandId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: 'success' }));
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
        summary: '브랜드 목록 전체 조회',
        description: '저장 된 브랜드 목록 전체를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResBrandFromDTO_1.ResBrandFromDTO], status: 200 }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], BrandManagerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/find/:brandId'),
    (0, swagger_1.ApiOperation)({
        summary: '브랜드 ID 조회',
        description: '저장 된 브랜드 데이터를 ID 값으로 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'brandId', description: '브랜드 데이터 고유 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResBrandFromDTO_1.ResBrandFromDTO }),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandManagerController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '브랜드 목록 검색 조회',
        description: '저장 된 브랜드 목록 데이터를 검색 조건에 따라 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResBrandFromDTO_1.ResBrandFromDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqBrandFindDTO_1.ReqBrandFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], BrandManagerController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '브랜드 생성',
        description: '요청 온 데이터로 브랜드 데이터를 신규 생성합니다.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqBrandFromDTO_1.ReqBrandFromDTO, Object]),
    __metadata("design:returntype", Promise)
], BrandManagerController.prototype, "save", null);
__decorate([
    (0, common_1.Put)('/update/:brandId'),
    (0, swagger_1.ApiOperation)({
        summary: '브랜드 수정',
        description: '요청 온 ID 값에 해당하는 브랜드 데이터를 요청 정보에 따라 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'brandId', description: '브랜드 데이터 고유 ID 값' }),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqBrandFromDTO_1.ReqBrandFromDTO, Object]),
    __metadata("design:returntype", Promise)
], BrandManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:brandId'),
    (0, swagger_1.ApiOperation)({
        summary: '브랜드 삭제',
        description: '요청 온 ID 값에 해당하는 브랜드 데이터를 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'brandId', description: '브랜드 데이터 고유 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: 'success' } } }),
    __param(0, (0, common_1.Param)('brandId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandManagerController.prototype, "delete", null);
BrandManagerController = __decorate([
    (0, common_1.Controller)('admin/brand'),
    (0, swagger_1.ApiTags)('어드민 - 상품관리 : 브랜드 관리 [ 50 페이지 ]'),
    __metadata("design:paramtypes", [brand_manager_service_1.BrandManagerService])
], BrandManagerController);
exports.BrandManagerController = BrandManagerController;
//# sourceMappingURL=brand-manager.controller.js.map