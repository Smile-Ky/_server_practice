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
exports.ProductClassMangerController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const product_class_manager_service_1 = require("./product-class-manager.service");
const ResProductClassFromDTO_1 = require("./DTO/ResProductClassFromDTO");
const ReqProductClassFrom_dto_1 = require("./DTO/ReqProductClassFrom.dto");
const ReqProductClassSequenceDTO_1 = require("./DTO/ReqProductClassSequenceDTO");
const ReqProductClassSave_dto_1 = require("./DTO/ReqProductClassSave.dto");
const awsS3_1 = require("../../../common/awsS3");
const platform_express_1 = require("@nestjs/platform-express");
let ProductClassMangerController = class ProductClassMangerController {
    constructor(productClassMangerService) {
        this.productClassMangerService = productClassMangerService;
    }
    ;
    async getCategory(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.findAll()
            }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findTopClass(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.findClass("NULL")
            }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findSubClass(productClassId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.findClass(productClassId)
            }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getCategoryOne(productClassId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.findOneData(productClassId)
            }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async insertSubcategory(ReqProductClassFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.save(ReqProductClassFrom)
            }));
        }
        catch (error) {
            return "hello";
        }
    }
    async updateCategory(productClassId, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.update(productClassId, data)
            }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async updateSequence(data, res) {
        try {
            await this.productClassMangerService.updateSequence(data);
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.findAll()
            }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async DeleteCategory(productClassId, res) {
        try {
            await this.productClassMangerService.delete(productClassId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: 'success' }));
        }
        catch (error) {
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async imageUpload(images, res) {
        try {
            if (images[0] === undefined) {
                return (0, respones_1.SUCCESS)({ error: "이미지가 없습니다." });
            }
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.productClassMangerService.imageUpload(images)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('find/all'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 분류 전체 조회',
        description: '상품 분류 전체 내용을 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResProductClassFromDTO_1.ResProductClassFromDTO] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "getCategory", null);
__decorate([
    (0, common_1.Get)('find/top/class'),
    (0, swagger_1.ApiOperation)({
        summary: '최상위 상품 분류 조회',
        description: '최상이 상품 분류 만을 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResProductClassFromDTO_1.ResProductClassFromDTO] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "findTopClass", null);
__decorate([
    (0, common_1.Get)('find/sub/class/:productClassId'),
    (0, swagger_1.ApiOperation)({
        summary: '하위 상품 분류 조회',
        description: '선택한 분류에 하위 상품 분류 만을 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'productClassId', description: '상품 분류 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResProductClassFromDTO_1.ResProductClassFromDTO] }),
    __param(0, (0, common_1.Param)('productClassId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "findSubClass", null);
__decorate([
    (0, common_1.Get)('find/:productClassId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 분류 ID 조회',
        description: '선택한 ID 값으로 데이터 내용을 조회'
    }),
    (0, swagger_1.ApiParam)({ name: 'productClassId', description: '상품 분류 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResProductClassFromDTO_1.ResProductClassFromDTO }),
    __param(0, (0, common_1.Param)('productClassId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "getCategoryOne", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 분류 저장',
        description: '요청한 상품 분류 데이터를 저장합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqProductClassSave_dto_1.ReqProductClassSaveDto, description: '대분류 저장 시, top_class : "NULL"' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResProductClassFromDTO_1.ResProductClassFromDTO, description: '저장 된 값 전달' }),
    (0, common_1.HttpCode)(200),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqProductClassSave_dto_1.ReqProductClassSaveDto, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "insertSubcategory", null);
__decorate([
    (0, common_1.Put)('/update/:productClassId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 분류 수정',
        description: '선택한 상품 분류를 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'productClassId', description: '상품 분류 ID 값' }),
    (0, swagger_1.ApiBody)({ type: ReqProductClassFrom_dto_1.ReqProductClassFromDTO, description: '대분류 수정 시, top_class : null' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResProductClassFromDTO_1.ResProductClassFromDTO, description: '수정 된 값 전달' }),
    __param(0, (0, common_1.Param)('productClassId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqProductClassFrom_dto_1.ReqProductClassFromDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Put)('/update/sequence/:productClassId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 분류 순서 수정',
        description: '상품 분류에 순서를 수정합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: [ReqProductClassSequenceDTO_1.ReqProductClassSequenceDTO] }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ReqProductClassSequenceDTO_1.ReqProductClassSequenceDTO], description: '전체 카테고리 리턴' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "updateSequence", null);
__decorate([
    (0, common_1.Delete)('/delete/:productClassId'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 분류 삭제',
        description: '선택한 상품 분류를 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'productClassId', description: '상품 분류 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: 'success' } } }),
    __param(0, (0, common_1.Param)('productClassId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "DeleteCategory", null);
__decorate([
    (0, common_1.Post)('/images'),
    (0, swagger_1.ApiOperation)({
        summary: '카테고리 아이콘 업로드',
        description: '카테고리 이미지 업로드 버튼 클릭 시, 이미지 업로드 수행.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)(awsS3_1.schema),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, (0, awsS3_1.uploadS3)('product_class_icon'))),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: { image_id: '고유 ID 값', image_url: 'image_url' } } } }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductClassMangerController.prototype, "imageUpload", null);
ProductClassMangerController = __decorate([
    (0, common_1.Controller)('admin/product/class'),
    (0, swagger_1.ApiTags)('어드민 - 상품관리 : 상품 분류 설정 [ 48 페이지 ]'),
    __metadata("design:paramtypes", [product_class_manager_service_1.ProductClassMangerService])
], ProductClassMangerController);
exports.ProductClassMangerController = ProductClassMangerController;
//# sourceMappingURL=product-class-manager.controller.js.map