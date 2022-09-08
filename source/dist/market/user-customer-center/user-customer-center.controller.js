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
exports.UserCustomerCenterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_customer_center_service_1 = require("./user-customer-center.service");
const ReqGetBoardList_dto_1 = require("./DTO/ReqGetBoardList.dto");
const ReqGetReviewList_dto_1 = require("./DTO/ReqGetReviewList.dto");
const ReqGetReviewInfo_dto_1 = require("./DTO/ReqGetReviewInfo.dto");
const ReqInsertReviewComment_dto_1 = require("./DTO/ReqInsertReviewComment.dto");
const ReqUpdateReviewLike_dto_1 = require("./DTO/ReqUpdateReviewLike.dto");
const ReqGetAllReviewList_1 = require("./DTO/ReqGetAllReviewList");
let UserCustomerCenterController = class UserCustomerCenterController {
    constructor(userCustomerCenterService) {
        this.userCustomerCenterService = userCustomerCenterService;
    }
    async getBoardList(data, req, res) {
        try {
            res.status(200).json(await this.userCustomerCenterService.getBoardList(data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getAllReviewList(data, req, res) {
        try {
            res.status(200).json(await this.userCustomerCenterService.getAllReviewList(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getReviewList(data, req, res) {
        try {
            res.status(200).json(await this.userCustomerCenterService.getReviewList(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getReviewInfo(data, req, res) {
        try {
            res.status(200).json(await this.userCustomerCenterService.getReviewInfo(data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async insertReviewComment(data, req, res) {
        try {
            res.status(200).json(await this.userCustomerCenterService.insertReviewComment(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async updateReviewLike(data, req, res) {
        try {
            res.status(200).json(await this.userCustomerCenterService.updateReviewLike(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
};
__decorate([
    (0, common_1.Post)('/getBoardList'),
    (0, swagger_1.ApiOperation)({ summary: '공지사항/자주 묻는 질문 게시글 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetBoardList_dto_1.ReqGetBoardListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCustomerCenterController.prototype, "getBoardList", null);
__decorate([
    (0, common_1.Post)('/getAllReviewList'),
    (0, swagger_1.ApiOperation)({ summary: '전체 리뷰 목록 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetAllReviewList_1.ReqGetAllReviewList, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCustomerCenterController.prototype, "getAllReviewList", null);
__decorate([
    (0, common_1.Post)('/getReviewList'),
    (0, swagger_1.ApiOperation)({ summary: '리뷰 목록 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetReviewList_dto_1.ReqGetReviewListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCustomerCenterController.prototype, "getReviewList", null);
__decorate([
    (0, common_1.Post)('/getReviewInfo'),
    (0, swagger_1.ApiOperation)({ summary: '리뷰 상세보기 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetReviewInfo_dto_1.ReqGetReviewInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCustomerCenterController.prototype, "getReviewInfo", null);
__decorate([
    (0, common_1.Post)('/insertReviewComment'),
    (0, swagger_1.ApiOperation)({ summary: '리뷰 댓글 남기기' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqInsertReviewComment_dto_1.ReqInsertReviewCommentDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCustomerCenterController.prototype, "insertReviewComment", null);
__decorate([
    (0, common_1.Post)('/updateReviewLike'),
    (0, swagger_1.ApiOperation)({ summary: '리뷰 좋아요/좋아요 취소' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUpdateReviewLike_dto_1.ReqUpdateReviewLikeDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserCustomerCenterController.prototype, "updateReviewLike", null);
UserCustomerCenterController = __decorate([
    (0, common_1.Controller)('api/customer'),
    (0, swagger_1.ApiTags)('마켓 - 고객센터'),
    __metadata("design:paramtypes", [user_customer_center_service_1.UserCustomerCenterService])
], UserCustomerCenterController);
exports.UserCustomerCenterController = UserCustomerCenterController;
//# sourceMappingURL=user-customer-center.controller.js.map