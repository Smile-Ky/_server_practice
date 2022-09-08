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
exports.ProductReviewListController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const product_review_list_service_1 = require("./product-review-list.service");
const ReqReviewCreateMember_dto_1 = require("./DTO/ReqReviewCreateMember.dto");
const awsS3_1 = require("../../../common/awsS3");
const platform_express_1 = require("@nestjs/platform-express");
const ReqReviewCreateAdmin_dto_1 = require("./DTO/ReqReviewCreateAdmin.dto");
const ReqReviewComment_dto_1 = require("./DTO/ReqReviewComment.dto");
const ReqReviewUpdate_dto_1 = require("./DTO/ReqReviewUpdate.dto");
const ReqReviewFind_dto_1 = require("./DTO/ReqReviewFind.dto");
let ProductReviewListController = class ProductReviewListController {
    constructor(productReviewService) {
        this.productReviewService = productReviewService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(data, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.find(data, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.findId(id)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async createUser(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.createUser(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async createAdmin(data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.createAdmin(data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async createComment(id, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.createComment(id, data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async updateOpen(id, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productReviewService.updateOpen(id, data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async updateReview(id, data, res) {
        try {
            await this.productReviewService.updateReview(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async updateComment(id, data, res) {
        try {
            await this.productReviewService.updateComment(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(id, res) {
        try {
            await this.productReviewService.delete(id);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async deleteComment(id, res) {
        try {
            await this.productReviewService.deleteComment(id);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: '성공' }));
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
                data: await this.productReviewService.imageUpload(images)
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
    (0, swagger_1.ApiOperation)({ summary: '상품 후기 리스트 내용을 전체 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({ summary: '상품 후기 리스트를 검색합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqReviewFind_dto_1.ReqReviewFindDto, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/:reviewId'),
    (0, swagger_1.ApiOperation)({ summary: '상품 후기 ID로 조회합니다.' }),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/create/user'),
    (0, swagger_1.ApiOperation)({ summary: '[테스트 용] 유저가 상품 후기를 생성합니다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqReviewCreateMember_dto_1.ReqReviewCreateMemberDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/create/admin'),
    (0, swagger_1.ApiOperation)({ summary: '어드민에서 상품 후기를 생성합니다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqReviewCreateAdmin_dto_1.ReqReviewCreateAdminDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Post)('/create/:reviewId'),
    (0, swagger_1.ApiOperation)({ summary: '관리자가 후기 댓글을 생성합니다.' }),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqReviewComment_dto_1.ReqReviewCommentDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "createComment", null);
__decorate([
    (0, common_1.Put)('/update/is/open/:reviewId'),
    (0, swagger_1.ApiOperation)({ summary: '어드민 공개 여부를 수정합니다.' }),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Query)('is_open')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "updateOpen", null);
__decorate([
    (0, common_1.Put)('/update/:reviewId'),
    (0, swagger_1.ApiOperation)({ summary: '유저 후기를 수정합니다.' }),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqReviewUpdate_dto_1.ReqReviewUpdateDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "updateReview", null);
__decorate([
    (0, common_1.Put)('/update/comment/:commentId'),
    (0, swagger_1.ApiOperation)({ summary: '관리자가 후기 댓글을 수정합니다.' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqReviewComment_dto_1.ReqReviewCommentDto, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "updateComment", null);
__decorate([
    (0, common_1.Delete)('/delete/review/:reviewId'),
    (0, swagger_1.ApiOperation)({ summary: '후기를 삭제합니다.' }),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)('/delete/comment/:commentId'),
    (0, swagger_1.ApiOperation)({ summary: '후기 답변을 삭제합니다.' }),
    __param(0, (0, common_1.Param)('commentId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "deleteComment", null);
__decorate([
    (0, common_1.Post)('/images'),
    (0, swagger_1.ApiOperation)({
        summary: '리뷰 이미지 업로드',
        description: '이미지 업로드 수행.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)(awsS3_1.schema),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, (0, awsS3_1.uploadS3)('review'))),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: { image_id: '고유 ID 값', image_url: 'image_url' } } } }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductReviewListController.prototype, "imageUpload", null);
ProductReviewListController = __decorate([
    (0, common_1.Controller)('admin/product/review'),
    (0, swagger_1.ApiTags)('어드민 - 고객센터 : 후기 문의리스트'),
    __metadata("design:paramtypes", [product_review_list_service_1.ProductReviewListService])
], ProductReviewListController);
exports.ProductReviewListController = ProductReviewListController;
//# sourceMappingURL=product-review-list.controller.js.map