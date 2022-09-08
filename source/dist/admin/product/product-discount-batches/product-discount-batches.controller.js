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
exports.ProductDiscountBatchesController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const product_discount_batches_service_1 = require("./product-discount-batches.service");
const ReqDiscountFindDTO_1 = require("./DTO/ReqDiscountFindDTO");
const ResDiscountListDTO_1 = require("./DTO/ResDiscountListDTO");
const ResDiscountFromDTO_1 = require("./DTO/ResDiscountFromDTO");
const ReqDiscountFromDTO_1 = require("./DTO/ReqDiscountFromDTO");
let ProductDiscountBatchesController = class ProductDiscountBatchesController {
    constructor(productDiscountBatchService) {
        this.productDiscountBatchService = productDiscountBatchService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productDiscountBatchService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(productDiscountFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productDiscountBatchService.find(productDiscountFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findOne(batchDiscountId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productDiscountBatchService.findId(batchDiscountId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(ReqDiscountFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productDiscountBatchService.create(ReqDiscountFrom)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(batchDiscountId, ReqDiscountFrom, res) {
        try {
            await this.productDiscountBatchService.update(batchDiscountId, ReqDiscountFrom);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: batchDiscountId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(batchDiscountId, res) {
        try {
            await this.productDiscountBatchService.delete(batchDiscountId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: batchDiscountId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async check(product_option_Id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productDiscountBatchService.checkProduct(product_option_Id)));
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
        summary: '일괄 할인 데이터 전체 조회',
        description: '설정 된 일괄 할인 데이터를 전체 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResDiscountListDTO_1.ResDiscountListDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '일괄 할인 데이터 검색 조회',
        description: '설정 된 일괄 할인 데이터를 검색 조건에 맞게 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResDiscountListDTO_1.ResDiscountListDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDiscountFindDTO_1.ReqDiscountFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/:batchDiscountId'),
    (0, swagger_1.ApiOperation)({
        summary: '일괄 할인 데이터 ID 조회',
        description: '일괄 할인 데이터를 ID로 단일 데이터를 조회합니다. [ 수정 시, 사용 권장 ]'
    }),
    (0, swagger_1.ApiParam)({ name: 'batchDiscountId', description: '일괄 할인 고유 ID' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResDiscountFromDTO_1.ResDiscountFromDTO }),
    __param(0, (0, common_1.Param)('batchDiscountId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '일괄 할인 데이터 저장',
        description: '신규 일괄 할인 데이터를 저장합니다. </br> 상품 검색 버튼은 "상품 검색 탭 API"를 참고'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: '일괄 할인 고유 ID 값' } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDiscountFromDTO_1.ReqDiscountFromDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "save", null);
__decorate([
    (0, common_1.Put)('/update/:batchDiscountId'),
    (0, swagger_1.ApiOperation)({
        summary: '일괄 할인 데이터 수정',
        description: '기존 일괄 할인 데이터를 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'batchDiscountId', description: '일괄 할인 고유 ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: '일괄 할인 고유 ID 값' } } }),
    __param(0, (0, common_1.Param)('batchDiscountId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqDiscountFromDTO_1.ReqDiscountFromDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:batchDiscountId'),
    (0, swagger_1.ApiOperation)({
        summary: '일괄 할인 데이터 삭제',
        description: '기존 일괄 할인 데이터를 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'batchDiscountId', description: '일괄 할인 고유 ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: '일괄 할인 고유 ID 값' } } }),
    __param(0, (0, common_1.Param)('batchDiscountId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('product/check'),
    (0, swagger_1.ApiOperation)({
        summary: '이미 등록 된 할인 상품 검색',
        description: '이미 등록 된 할인 상품을 검색합니다.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductDiscountBatchesController.prototype, "check", null);
ProductDiscountBatchesController = __decorate([
    (0, common_1.Controller)('admin/product/discount/batch'),
    (0, swagger_1.ApiTags)('어드민 - 상품관리 : 상품할인관리_일괄 할인 설정 [ 72 페이지 ]'),
    __metadata("design:paramtypes", [product_discount_batches_service_1.ProductDiscountBatchesService])
], ProductDiscountBatchesController);
exports.ProductDiscountBatchesController = ProductDiscountBatchesController;
//# sourceMappingURL=product-discount-batches.controller.js.map