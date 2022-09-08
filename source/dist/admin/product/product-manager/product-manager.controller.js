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
exports.ProductManagerController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const product_manager_service_1 = require("./product-manager.service");
const platform_express_1 = require("@nestjs/platform-express");
const awsS3_1 = require("../../../common/awsS3");
const awsS3_2 = require("../../../common/awsS3");
const ResProductFromDTO_1 = require("./DTO/ResProductFromDTO");
const ReqProductFindListDTO_1 = require("./DTO/ReqProductFindListDTO");
const ResProductListDTO_1 = require("./DTO/ResProductListDTO");
const ReqProductFromDTO_1 = require("./DTO/ReqProductFromDTO");
const ReqProductUpdateDTO_1 = require("./DTO/ReqProductUpdateDTO");
let ProductManagerController = class ProductManagerController {
    constructor(productManagerService) {
        this.productManagerService = productManagerService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productManagerService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(ReqProductFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productManagerService.find(ReqProductFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(productId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productManagerService.findId(productId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(product, req, res) {
        try {
            const data = await this.productManagerService.create(product);
            if (data.result === false) {
                return res.status(400).json((0, respones_1.SUCCESS)({ data: data.data }));
            }
            return res.status(200).json((0, respones_1.SUCCESS)({ data }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(productId, data, res) {
        try {
            await this.productManagerService.update(productId, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: productId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async deleteOption(optionId, res) {
        try {
            await this.productManagerService.optionDelete(optionId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: optionId }));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(productId, res) {
        try {
            await this.productManagerService.delete(productId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: productId }));
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
                data: await this.productManagerService.imageUpload(images)
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
        summary: '상품 리스트 전체 조회',
        description: '상품 리스트에서 모든 상품 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResProductListDTO_1.ResProductListDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 검색 조회',
        description: '상품 리스트에서 검색한 상품 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqProductFindListDTO_1.ReqProductFindListDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResProductListDTO_1.ResProductListDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqProductFindListDTO_1.ReqProductFindListDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/:productId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 ID 조회',
        description: '요청한 ID에 해당하는 상품 데이터에 모든 내용을 조회합니다. [수정 클릭 시, 사용]'
    }),
    (0, swagger_1.ApiParam)({ name: 'productId', description: '상품 고유 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResProductFromDTO_1.ResProductFromDTO }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 저장',
        description: '요청한 데이터로 상품 데이터를 생성합니다.'
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqProductFromDTO_1.ReqProductFromDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:productId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 수정',
        description: '요청한 ID 값에 해당하는 상품 데이터를 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'productId', description: '상품 고유 ID 값' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: '수정된 상품 ID 값' } } }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqProductUpdateDTO_1.ReqProductUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:productOptionId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 옵션을 제거합니다.' }),
    __param(0, (0, common_1.Param)('productOptionId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "deleteOption", null);
__decorate([
    (0, common_1.Delete)('/delete/:productId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 제거',
        description: '요청한 ID 값에 해당하는 상품 데이터를 제거합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'productId', description: '상품 고유 ID 값' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: '삭제 한 상품 ID 값' } } }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/images'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 이미지 업로드',
        description: '상품 이미지 업로드 버튼 클릭 시, 이미지 업로드 수행.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)(awsS3_2.schema),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, (0, awsS3_1.uploadS3)('product'))),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: { image_id: '고유 ID 값', image_url: 'image_url' } } } }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductManagerController.prototype, "imageUpload", null);
ProductManagerController = __decorate([
    (0, common_1.Controller)('admin/product'),
    (0, swagger_1.ApiTags)('어드민 - 상품관리 : 개별 상품 등록 / 상품 리스트 [ 54, 67 페이지 ] '),
    __metadata("design:paramtypes", [product_manager_service_1.ProductManagerService])
], ProductManagerController);
exports.ProductManagerController = ProductManagerController;
//# sourceMappingURL=product-manager.controller.js.map