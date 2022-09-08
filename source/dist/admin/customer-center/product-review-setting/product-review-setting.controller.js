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
exports.ProductReviewSettingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ReqReviewSetting_dto_1 = require("./DTO/ReqReviewSetting.dto");
const product_review_setting_service_1 = require("./product-review-setting.service");
const ReqAutoCommentFrom_dto_1 = require("./DTO/ReqAutoCommentFrom.dto");
let ProductReviewSettingController = class ProductReviewSettingController {
    constructor(productReviewSettingService) {
        this.productReviewSettingService = productReviewSettingService;
    }
    async findSetting(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewSettingService.reviewSettingFind()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(data, id, res) {
        try {
            await this.productReviewSettingService.reviewSettingUpdate(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async autoCommentFind(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewSettingService.autoCommentFind()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async autoCommentCreate(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewSettingService.autoCommentCreate(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async autoCommentUpdate(id, data, res) {
        try {
            await this.productReviewSettingService.autoCommentUpdate(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async autoCommentDelete(id, res) {
        try {
            await this.productReviewSettingService.autoCommentDelete(id);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async autoChaneIsUse(data, res) {
        try {
            await this.productReviewSettingService.autoChaneIsUse(data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find'),
    (0, swagger_1.ApiOperation)({ summary: '상품 후기 게시판 설정을 조회합니다.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "findSetting", null);
__decorate([
    (0, common_1.Post)('/update/:settingId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 후기 게시판 설정을 수정합니다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('settingId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqReviewSetting_dto_1.ReqReviewSettingDto, String, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/auto/comment/find'),
    (0, swagger_1.ApiOperation)({ summary: '자동 답변 설정을 조회합니다.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "autoCommentFind", null);
__decorate([
    (0, common_1.Post)('/auto/comment/update'),
    (0, swagger_1.ApiOperation)({ summary: '자동 답변 설정을 저장합니다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqAutoCommentFrom_dto_1.ReqAutoCommentFromDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "autoCommentCreate", null);
__decorate([
    (0, common_1.Put)('/auto/comment/update/:id'),
    (0, swagger_1.ApiOperation)({ summary: '자동 답변 설정을 수정합니다.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqAutoCommentFrom_dto_1.ReqAutoCommentFromDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "autoCommentUpdate", null);
__decorate([
    (0, common_1.Delete)('/auto/comment/update/:id'),
    (0, swagger_1.ApiOperation)({ summary: '자동 답변 설정을 삭제합니다.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "autoCommentDelete", null);
__decorate([
    (0, common_1.Get)('/change/auto/comment'),
    (0, swagger_1.ApiOperation)({ summary: '자동 답변 설정 활성화 여부를 수정합니다.' }),
    __param(0, (0, common_1.Query)('is_use')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewSettingController.prototype, "autoChaneIsUse", null);
ProductReviewSettingController = __decorate([
    (0, common_1.Controller)('admin/review/setting'),
    (0, swagger_1.ApiTags)('어드민 - 고객센터 : 상품 후기 셋팅'),
    __metadata("design:paramtypes", [product_review_setting_service_1.ProductReviewSettingService])
], ProductReviewSettingController);
exports.ProductReviewSettingController = ProductReviewSettingController;
//# sourceMappingURL=product-review-setting.controller.js.map