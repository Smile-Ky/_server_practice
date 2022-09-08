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
exports.BannerManagerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const banner_manager_service_1 = require("./banner-manager.service");
const awsS3_1 = require("../../../common/awsS3");
const platform_express_1 = require("@nestjs/platform-express");
const ReqBannerFind_dto_1 = require("./DTO/ReqBannerFind.dto");
const ReqBannerFrom_dto_1 = require("./DTO/ReqBannerFrom.dto");
let BannerManagerController = class BannerManagerController {
    constructor(bannerManager) {
        this.bannerManager = bannerManager;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.bannerManager.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(page, pageSize, bannerFindDto, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.bannerManager.find(bannerFindDto, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(bannerId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.bannerManager.findId(bannerId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(bannerFromDto, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.bannerManager.create(bannerFromDto)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(bannerId, bannerFromDto, res) {
        try {
            await this.bannerManager.update(bannerId, bannerFromDto);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: bannerId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(bannerId, res) {
        try {
            await this.bannerManager.delete(bannerId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: bannerId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async imageUpload(images, res) {
        try {
            if (images[0] === undefined) {
                return (0, respones_1.SUCCESS)({ error: "이미지가 없습니다." });
            }
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.bannerManager.imageUpload(images)
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
        summary: '통합배너 리스트 전체 조회',
        description: '통합배너 리스트를 전체 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: {} } }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '통합배너 리스트 검색 조회',
        description: '통합배너 리스트를 검색합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: {} } }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, ReqBannerFind_dto_1.ReqBannerFindDto, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/:bannerId'),
    (0, swagger_1.ApiOperation)({
        summary: '통합배너 ID 조회',
        description: '통합배너 ID로 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'bannerId', description: '배너 고유 ID' }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: {} } }),
    __param(0, (0, common_1.Param)('bannerId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({
        summary: '배너 저장',
        description: '배너를 저장합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: {} } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqBannerFrom_dto_1.ReqBannerFromDto, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:bannerId'),
    (0, swagger_1.ApiOperation)({
        summary: '배너 수정',
        description: '배너를 수정합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: { data: "배너 고유 ID" } } }),
    __param(0, (0, common_1.Param)('bannerId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqBannerFrom_dto_1.ReqBannerFromDto, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:bannerId'),
    (0, swagger_1.ApiOperation)({
        summary: '배너 삭제',
        description: '배너를 삭제합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ status: 200, schema: { example: { data: "배너 고유 ID" } } }),
    __param(0, (0, common_1.Param)('bannerId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/images'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 이미지 업로드',
        description: '상품 이미지 업로드 버튼 클릭 시, 이미지 업로드 수행.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)(awsS3_1.schema),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, (0, awsS3_1.uploadS3)('banner'))),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: { image_id: '고유 ID 값', image_url: 'image_url' } } } }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], BannerManagerController.prototype, "imageUpload", null);
BannerManagerController = __decorate([
    (0, common_1.Controller)('admin/banner/manager'),
    (0, swagger_1.ApiTags)('어드민 - 이벤트 : 배너 리스트'),
    __metadata("design:paramtypes", [banner_manager_service_1.BannerManagerService])
], BannerManagerController);
exports.BannerManagerController = BannerManagerController;
//# sourceMappingURL=banner-manager.controller.js.map