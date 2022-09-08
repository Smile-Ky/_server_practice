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
exports.MarketingKeywordController = void 0;
const common_1 = require("@nestjs/common");
const marketing_keyword_service_1 = require("./marketing-keyword.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResSearchDTO_1 = require("./DTO/ResSearchDTO");
const ResKeywordDTO_1 = require("./DTO/ResKeywordDTO");
const ReqKeywordSaveOrderDTO_1 = require("./DTO/ReqKeywordSaveOrderDTO");
let MarketingKeywordController = class MarketingKeywordController {
    constructor(marketingKeywordService) {
        this.marketingKeywordService = marketingKeywordService;
    }
    async searchFind(startDate, endDate, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.marketingKeywordService.find(startDate, endDate, page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async keywordFind(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.marketingKeywordService.keywordFind() }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async keywordSave(keyword, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.marketingKeywordService.keywordSave(keyword) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async keywordSaveOrder(req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.marketingKeywordService.keywordSaveOrder(req) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async keywordUpdate(keywordId, keyword, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.marketingKeywordService.keywordUpdate(keywordId, keyword) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async keywordDelete(keywordId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.marketingKeywordService.keywordDelete(keywordId) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('search/find'),
    (0, swagger_1.ApiOperation)({
        summary: '검색어 전체 조회',
        description: '검색어 전체를 조회수와 함께 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'startDate', description: '조회 하려는 기간 : 시작일' }),
    (0, swagger_1.ApiQuery)({ name: 'endDate', description: '조회 하려는 기간 : 종료일' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResSearchDTO_1.ResSearchDTO] }),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date,
        Date, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MarketingKeywordController.prototype, "searchFind", null);
__decorate([
    (0, common_1.Get)('/find/all'),
    (0, swagger_1.ApiOperation)({
        summary: '인기 검색어 전체 조회',
        description: '인기 검색어 전체를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResKeywordDTO_1.ResKeywordDTO] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MarketingKeywordController.prototype, "keywordFind", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '인기 검색어 신규 저장',
        description: '신규 인기 검색어를 저장합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'keyword', description: "신규 키워드 명 (순서는 마지막에 배치 됨)" }),
    __param(0, (0, common_1.Query)('keyword')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MarketingKeywordController.prototype, "keywordSave", null);
__decorate([
    (0, common_1.Post)('/update/order'),
    (0, swagger_1.ApiOperation)({
        summary: '인기 검색어 순서를 변경합니다.',
        description: '인기 검색어 순서를 변경합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqKeywordSaveOrderDTO_1.ReqKeywordSaveOrderDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResKeywordDTO_1.ResKeywordDTO], description: '변경 적용 이후 키워드 전체 내용' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqKeywordSaveOrderDTO_1.ReqKeywordSaveOrderDTO, Object]),
    __metadata("design:returntype", Promise)
], MarketingKeywordController.prototype, "keywordSaveOrder", null);
__decorate([
    (0, common_1.Put)('/update/:keywordId'),
    (0, swagger_1.ApiOperation)({
        summary: '인기 검색어 수정',
        description: '인기 검색어의 키워드를 변경합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'keywordId', description: '키워드 고유 키 값' }),
    (0, swagger_1.ApiQuery)({ name: 'keyword', description: '키워드 ' }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResKeywordDTO_1.ResKeywordDTO], description: '변경 적용 이후 키워드 전체 내용' }),
    __param(0, (0, common_1.Param)('keywordId')),
    __param(1, (0, common_1.Query)('keyword')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MarketingKeywordController.prototype, "keywordUpdate", null);
__decorate([
    (0, common_1.Delete)('/delete/:keywordId'),
    (0, swagger_1.ApiOperation)({
        summary: '인기 검색어 삭제',
        description: '선택 한 키워드를 인기 검색어 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'keywordId', description: '키워드 고유 키 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResKeywordDTO_1.ResKeywordDTO], description: '변경 적용 이후 키워드 전체 내용' }),
    __param(0, (0, common_1.Param)('keywordId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MarketingKeywordController.prototype, "keywordDelete", null);
MarketingKeywordController = __decorate([
    (0, common_1.Controller)('admin/marketing/keyword'),
    (0, swagger_1.ApiTags)('어드민 - 마케팅 : 검색어 관리 [ 150 페이지 ] '),
    __metadata("design:paramtypes", [marketing_keyword_service_1.MarketingKeywordService])
], MarketingKeywordController);
exports.MarketingKeywordController = MarketingKeywordController;
//# sourceMappingURL=marketing-keyword.controller.js.map