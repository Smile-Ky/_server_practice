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
exports.ProductBatchesController = void 0;
const common_1 = require("@nestjs/common");
const product_batches_service_1 = require("./product-batches.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResBatchesProductListDTO_1 = require("./DTO/ResBatchesProductListDTO");
const ReqBatchesProductFindDTO_1 = require("./DTO/ReqBatchesProductFindDTO");
const ReqBatchesProductUpdateDTO_1 = require("./DTO/ReqBatchesProductUpdateDTO");
let ProductBatchesController = class ProductBatchesController {
    constructor(productBatchesService) {
        this.productBatchesService = productBatchesService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productBatchesService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(ReqBatchesProductFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productBatchesService.find(ReqBatchesProductFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(ReqBatchesProduct, res) {
        try {
            await this.productBatchesService.update(ReqBatchesProduct);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: ReqBatchesProduct.product_list }));
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
        summary: '상품 목록 전체 조회',
        description: '모든 상품 목록을 저장합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResBatchesProductListDTO_1.ResBatchesProductListDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductBatchesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 목록 검색 조회',
        description: '검색 조건에 맞는 상품 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResBatchesProductListDTO_1.ResBatchesProductListDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqBatchesProductFindDTO_1.ReqBatchesProductFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductBatchesController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('/update'),
    (0, swagger_1.ApiOperation)({
        summary: '일괄 상품 내용 업데이트',
        description: '요청한 상품들에 변경 내역을 업데이트 합니다.'
    }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: ["변경 된 상품 ID 값"] } } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqBatchesProductUpdateDTO_1.ReqBatchesProductUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductBatchesController.prototype, "update", null);
ProductBatchesController = __decorate([
    (0, common_1.Controller)('admin/product/batches'),
    (0, swagger_1.ApiTags)('어드민 - 상품관리 : 일괄변경 [ 70 페이지 ]'),
    __metadata("design:paramtypes", [product_batches_service_1.ProductBatchesService])
], ProductBatchesController);
exports.ProductBatchesController = ProductBatchesController;
//# sourceMappingURL=product-batches.controller.js.map