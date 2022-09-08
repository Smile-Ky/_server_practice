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
exports.ProductQueryController = void 0;
const common_1 = require("@nestjs/common");
const product_query_service_1 = require("./product-query.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ReqProductQueryFind_dto_1 = require("./DTO/ReqProductQueryFind.dto");
const ReqProductAnswerFrom_dto_1 = require("./DTO/ReqProductAnswerFrom.dto");
const ReqProductQueryUpdate_dto_1 = require("./DTO/ReqProductQueryUpdate.dto");
const ReqProductQueryFrom_dto_1 = require("./DTO/ReqProductQueryFrom.dto");
const ReqProductQueryUserUpdate_dto_1 = require("./DTO/ReqProductQueryUserUpdate.dto");
let ProductQueryController = class ProductQueryController {
    constructor(productQueryService) {
        this.productQueryService = productQueryService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productQueryService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(page, pageSize, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productQueryService.find(data, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productQueryService.findId(id)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(id, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productQueryService.query(id, data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async answer(id, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productQueryService.answer(id, data)));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async queryAdminUpdate(id, data, res) {
        try {
            await this.productQueryService.queryAdminUpdate(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async queryFrontUpdate(id, data, res) {
        try {
            await this.productQueryService.queryFrontUpdate(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(id, res) {
        try {
            await this.productQueryService.delete(id);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find/all'),
    (0, swagger_1.ApiOperation)({ summary: '상품 문의 리스트 내용을 전체 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({ summary: '상품 문의 리스트를 검색 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, ReqProductQueryFind_dto_1.ReqProductQueryFindDto, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/:queryId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 문의 내용을 ID로 조회합니다.' }),
    __param(0, (0, common_1.Param)('queryId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 문의 내용을 작성합니다.' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqProductQueryFrom_dto_1.ReqProductQueryFromDto, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/answer/:queryId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 문의 내용에 답변합니다.' }),
    __param(0, (0, common_1.Param)('queryId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqProductAnswerFrom_dto_1.ReqProductAnswerFromDto, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "answer", null);
__decorate([
    (0, common_1.Put)('/user/update/:queryId'),
    (0, swagger_1.ApiOperation)({ summary: '프론트 : 상품 문의 내용을 수정합니다.' }),
    __param(0, (0, common_1.Param)('queryId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqProductQueryUserUpdate_dto_1.ReqProductQueryUserUpdateDto, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "queryAdminUpdate", null);
__decorate([
    (0, common_1.Put)('/user/admin/update/:queryId'),
    (0, swagger_1.ApiOperation)({ summary: '어드민 : 상품 문의 내용을 수정합니다.' }),
    __param(0, (0, common_1.Param)('queryId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqProductQueryUpdate_dto_1.ReqProductQueryUpdateDto, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "queryFrontUpdate", null);
__decorate([
    (0, common_1.Delete)('/:queryId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 문의 내용을 삭제합니다.' }),
    __param(0, (0, common_1.Param)('queryId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductQueryController.prototype, "delete", null);
ProductQueryController = __decorate([
    (0, common_1.Controller)('admin/product/query'),
    (0, swagger_1.ApiTags)('어드민 - 고객센터 : 상품 문의리스트'),
    __metadata("design:paramtypes", [product_query_service_1.ProductQueryService])
], ProductQueryController);
exports.ProductQueryController = ProductQueryController;
//# sourceMappingURL=product-query.controller.js.map