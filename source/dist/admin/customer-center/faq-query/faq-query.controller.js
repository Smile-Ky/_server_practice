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
exports.FaqQueryController = void 0;
const common_1 = require("@nestjs/common");
const faq_query_service_1 = require("./faq-query.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResFAQ_dto_1 = require("./DTO/ResFAQ.dto");
const ReqFAQ_dto_1 = require("./DTO/ReqFAQ.dto");
let FaqQueryController = class FaqQueryController {
    constructor(faqQueryService) {
        this.faqQueryService = faqQueryService;
    }
    async find(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.faqQueryService.find(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.faqQueryService.findId(id)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.faqQueryService.create(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(id, data, res) {
        try {
            await this.faqQueryService.update(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(id, res) {
        try {
            await this.faqQueryService.delete(id);
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
    (0, swagger_1.ApiOperation)({ summary: 'FAQ 를 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], FaqQueryController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/:faqId'),
    (0, swagger_1.ApiOperation)({ summary: 'FAQ 를 ID로 조회합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResFAQ_dto_1.ResFAQDto }),
    __param(0, (0, common_1.Param)('faqId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FaqQueryController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/'),
    (0, swagger_1.ApiOperation)({ summary: 'FAQ 를 저장합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResFAQ_dto_1.ResFAQDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqFAQ_dto_1.ReqFAQDto, Object]),
    __metadata("design:returntype", Promise)
], FaqQueryController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:faqId'),
    (0, swagger_1.ApiOperation)({ summary: 'FAQ 를 수정합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { id: 'FAQ 고유 ID' } } }),
    __param(0, (0, common_1.Param)('faqId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqFAQ_dto_1.ReqFAQDto, Object]),
    __metadata("design:returntype", Promise)
], FaqQueryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:faqId'),
    (0, swagger_1.ApiOperation)({ summary: 'FAQ 를 삭제합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { id: 'FAQ 고유 ID' } } }),
    __param(0, (0, common_1.Param)('faqId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FaqQueryController.prototype, "delete", null);
FaqQueryController = __decorate([
    (0, common_1.Controller)('admin/faq/query'),
    (0, swagger_1.ApiTags)('어드민 - 고객센터 : FAQ'),
    __metadata("design:paramtypes", [faq_query_service_1.FaqQueryService])
], FaqQueryController);
exports.FaqQueryController = FaqQueryController;
//# sourceMappingURL=faq-query.controller.js.map