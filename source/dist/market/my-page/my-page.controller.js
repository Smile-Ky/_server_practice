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
exports.MyPageController = void 0;
const common_1 = require("@nestjs/common");
const my_page_info_service_1 = require("./my-page-info.service");
const my_page_service_1 = require("./my-page.service");
const swagger_1 = require("@nestjs/swagger");
const ReqUpdateCancelStatus_dto_1 = require("./DTO/ReqUpdateCancelStatus.dto");
const ReqGetCancelInfo_dto_1 = require("./DTO/ReqGetCancelInfo.dto");
const ReqUpdateOrderClaim_dto_1 = require("./DTO/ReqUpdateOrderClaim.dto");
const ReqGetReturnInfo_dto_1 = require("./DTO/ReqGetReturnInfo.dto");
const ReqInsertCoupon_dto_1 = require("./DTO/ReqInsertCoupon.dto");
const ReqGetMyReviewInfo_dto_1 = require("./DTO/ReqGetMyReviewInfo.dto");
const ReqPostInsertReview_dto_1 = require("./DTO/ReqPostInsertReview.dto");
const ReqGetDeleveryTracking_dto_1 = require("./DTO/ReqGetDeleveryTracking.dto");
const ReqPostUpdatePetInfo_dto_1 = require("./DTO/ReqPostUpdatePetInfo.dto");
const ReqUpdateMyInfo_dto_1 = require("./DTO/ReqUpdateMyInfo.dto");
const ReqDeleteWish_dto_1 = require("./DTO/ReqDeleteWish.dto");
const ReqMyWishList_dto_1 = require("./DTO/ReqMyWishList.dto");
const ReqMyPoints_dto_1 = require("./DTO/ReqMyPoints.dto");
let MyPageController = class MyPageController {
    constructor(myPageService, myPageInfoService) {
        this.myPageService = myPageService;
        this.myPageInfoService = myPageInfoService;
    }
    async getMain(req, res) {
        try {
            return res.status(200).json(await this.myPageService.getMain());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getOrderList(req, res) {
        try {
            return res.status(200).json(await this.myPageService.getOrderList());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getReturnList(req, res) {
        try {
            return res.status(200).json(await this.myPageService.getReturnList());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getOrderDetail(req, res) {
        try {
            return res.status(200).json(await this.myPageService.getOrderDetail());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getMyReviewInfo(data, req, res) {
        try {
            return res.status(200).json(await this.myPageService.getMyReviewInfo(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getMyReviewList(req, res) {
        try {
            return res.status(200).json(await this.myPageService.getMyReviewList(req.cookies['user_id']));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async insertReview(data, req, res) {
        try {
            return res.status(200).json(await this.myPageService.insertReview(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateOrderStatus(req, res) {
        try {
            return res.status(200).json(await this.myPageService.updateOrderStatus());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async myPoints(data, req, res) {
        try {
            return res.status(200).json(await this.myPageService.myPoints(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async myCoupons(req, res) {
        try {
            return res.status(200).json(await this.myPageService.myCoupons(req.cookies['user_id']));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async insertCoupon(data, req, res) {
        try {
            return res.status(200).json(await this.myPageService.insertCoupon(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getCancelInfo(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.getCancelInfo(data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateCancelStatus(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.updateCancelStatus(data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateOrderClaim(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.updateOrderClaim(data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getReturnInfo(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.getReturnInfo(data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateMyinfo(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.updateMyinfo(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async myWishList(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.myWishList(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async deleteWish(data, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.deleteWish(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getDeleveryTracking(body, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.getDeleveryTracking(req.cookies['user_id'], body));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getMyInfo(req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.getMyInfo(req.cookies['user_id']));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updatePetInfo(body, req, res) {
        try {
            return res.status(200).json(await this.myPageInfoService.updatePetInfo(req.cookies['user_id'], body));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
};
__decorate([
    (0, common_1.Get)('/getMain'),
    (0, swagger_1.ApiOperation)({ summary: '마이 쇼핑 데이터 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getMain", null);
__decorate([
    (0, common_1.Post)('/getOrderList'),
    (0, swagger_1.ApiOperation)({ summary: '주문 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getOrderList", null);
__decorate([
    (0, common_1.Post)('/getReturnList'),
    (0, swagger_1.ApiOperation)({ summary: '교환/환불 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getReturnList", null);
__decorate([
    (0, common_1.Post)('/getOrderDetail'),
    (0, swagger_1.ApiOperation)({ summary: '주문 상세 내역 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getOrderDetail", null);
__decorate([
    (0, common_1.Post)('/getMyReviewInfo'),
    (0, swagger_1.ApiOperation)({ summary: '내가 작성한 리뷰 상세 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetMyReviewInfo_dto_1.ReqGetMyReviewInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getMyReviewInfo", null);
__decorate([
    (0, common_1.Get)('/getMyReviewList'),
    (0, swagger_1.ApiOperation)({ summary: '내가 작성한 리뷰 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getMyReviewList", null);
__decorate([
    (0, common_1.Post)('/insertReview'),
    (0, swagger_1.ApiOperation)({ summary: '리뷰 작성/수정' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPostInsertReview_dto_1.ReqPostInsertReviewDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "insertReview", null);
__decorate([
    (0, common_1.Post)('/updateOrderStatus'),
    (0, swagger_1.ApiOperation)({ summary: '주문 상태 업데이트' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "updateOrderStatus", null);
__decorate([
    (0, common_1.Post)('/myPoints'),
    (0, swagger_1.ApiOperation)({ summary: '내 포인트 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMyPoints_dto_1.ReqMyPointsDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "myPoints", null);
__decorate([
    (0, common_1.Get)('/myCoupons'),
    (0, swagger_1.ApiOperation)({ summary: '쿠폰 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "myCoupons", null);
__decorate([
    (0, common_1.Post)('/insertCoupon'),
    (0, swagger_1.ApiOperation)({ summary: '쿠폰 등록' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqInsertCoupon_dto_1.ReqInsertCouponDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "insertCoupon", null);
__decorate([
    (0, common_1.Post)('/getCancelInfo'),
    (0, swagger_1.ApiOperation)({ summary: '주문 취소 정보' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetCancelInfo_dto_1.ReqGetCancelInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getCancelInfo", null);
__decorate([
    (0, common_1.Post)('/updateCancelStatus'),
    (0, swagger_1.ApiOperation)({ summary: '주문 취소 요청' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUpdateCancelStatus_dto_1.ReqUpdateCancelStatusDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "updateCancelStatus", null);
__decorate([
    (0, common_1.Post)('/updateOrderClaim'),
    (0, swagger_1.ApiOperation)({ summary: '교환/환불 요청' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUpdateOrderClaim_dto_1.ReqUpdateOrderClaimDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "updateOrderClaim", null);
__decorate([
    (0, common_1.Post)('/getReturnInfo'),
    (0, swagger_1.ApiOperation)({ summary: '환불 상세 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetReturnInfo_dto_1.ReqGetReturnInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getReturnInfo", null);
__decorate([
    (0, common_1.Post)('/updateMyinfo'),
    (0, swagger_1.ApiOperation)({ summary: '내 정보 수정' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUpdateMyInfo_dto_1.ReqUpdateMyInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "updateMyinfo", null);
__decorate([
    (0, common_1.Post)('/myWishList'),
    (0, swagger_1.ApiOperation)({ summary: '내 위시리스트 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqMyWishList_dto_1.ReqMyWishListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "myWishList", null);
__decorate([
    (0, common_1.Post)('/deleteWish'),
    (0, swagger_1.ApiOperation)({ summary: '내 위시리스트 삭제' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDeleteWish_dto_1.ReqDeleteWishDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "deleteWish", null);
__decorate([
    (0, common_1.Post)('/getDeleveryTracking'),
    (0, swagger_1.ApiOperation)({ summary: '실시간 배송 정보' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetDeleveryTracking_dto_1.ReqGetDeleveryTrackingDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getDeleveryTracking", null);
__decorate([
    (0, common_1.Get)('/getMyInfo'),
    (0, swagger_1.ApiOperation)({ summary: '내 반려견 정보 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "getMyInfo", null);
__decorate([
    (0, common_1.Post)('/updatePetInfo'),
    (0, swagger_1.ApiOperation)({ summary: '내 반려견 등록' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPostUpdatePetInfo_dto_1.ReqPostUpdatePetInfoDto, Object, Object]),
    __metadata("design:returntype", Promise)
], MyPageController.prototype, "updatePetInfo", null);
MyPageController = __decorate([
    (0, common_1.Controller)('api/mypage'),
    (0, swagger_1.ApiTags)('마켓 - 마이페이지'),
    __metadata("design:paramtypes", [my_page_service_1.MyPageService,
        my_page_info_service_1.MyPageInfoService])
], MyPageController);
exports.MyPageController = MyPageController;
//# sourceMappingURL=my-page.controller.js.map