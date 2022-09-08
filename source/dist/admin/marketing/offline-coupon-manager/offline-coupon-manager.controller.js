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
exports.OfflineCouponManagerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResOfflineCouponListDTO_1 = require("./DTO/ResOfflineCouponListDTO");
const ReqFindOfflineCouponDTO_1 = require("./DTO/ReqFindOfflineCouponDTO");
const ResOfflineCouponDTO_1 = require("./DTO/ResOfflineCouponDTO");
const ResPaymentCouponListDTO_1 = require("./DTO/ResPaymentCouponListDTO");
const ResIssuanceListDTO_1 = require("./DTO/ResIssuanceListDTO");
const ReqIssuanceFindDTO_1 = require("../coupon-manager/DTO/ReqIssuanceFindDTO");
const ReqCouponIdFindDTO_1 = require("../coupon-manager/DTO/ReqCouponIdFindDTO");
const ReqOfflineCouponDTO_1 = require("./DTO/ReqOfflineCouponDTO");
const offline_coupon_manager_service_1 = require("./offline-coupon-manager.service");
let OfflineCouponManagerController = class OfflineCouponManagerController {
    constructor(offlineCouponManagerService) {
        this.offlineCouponManagerService = offlineCouponManagerService;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.findAll(page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(reqFindOfflineCoupon, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.find(reqFindOfflineCoupon, page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findSimpleId(offlineCouponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.findSimpleId(offlineCouponId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findFullId(offlineCouponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.findFullId(offlineCouponId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findPaymentCouponList(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.findPaymentCouponList()
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(resOfflineCoupon, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.save(resOfflineCoupon)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(resOfflineCoupon, offlineCouponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.update(resOfflineCoupon, offlineCouponId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(offlineCouponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.delete(offlineCouponId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findIssuanceAll(offlineCouponId, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.findIssuanceAll(offlineCouponId, page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findIssuance(offlineCouponId, page, pageSize, req, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.findIssuance(req, offlineCouponId, page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async cancelIssuance(couponIdList, offlineCouponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.offlineCouponManagerService.cancelIssuance(couponIdList, offlineCouponId)
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
        summary: '오프라인 쿠폰 전체 조회',
        description: '오프리안 쿠폰 모두를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResOfflineCouponListDTO_1.ResOfflineCouponListDTO], description: '오프라인 쿠폰 목록 내용 입니다.' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '오프라인 쿠폰 전체 조회',
        description: '오프리안 쿠폰 모두를 조회합니다.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqFindOfflineCouponDTO_1.ReqFindOfflineCouponDTO }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResOfflineCouponListDTO_1.ResOfflineCouponListDTO], description: '오프라인 쿠폰 목록 내용 입니다.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqFindOfflineCouponDTO_1.ReqFindOfflineCouponDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/simple/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '오프라인 쿠폰 ID 조회',
        description: '오프리인 쿠폰 ID 값으로 단일 쿠폰에 목록 퀄럼에 해당하는 정보를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: '오프라인 쿠폰 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResOfflineCouponListDTO_1.ResOfflineCouponListDTO }),
    __param(0, (0, common_1.Param)('offlineCouponId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "findSimpleId", null);
__decorate([
    (0, common_1.Get)('/find/full/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '수정/복사 시, 오프라인 쿠폰 ID 조회',
        description: '수정/복사 시, 오프리인 쿠폰 ID 값으로 단일 쿠폰에 모든 정보를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: '오프라인 쿠폰 ID 값' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResOfflineCouponDTO_1.ResOfflineCouponDTO }),
    __param(0, (0, common_1.Param)('offlineCouponId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "findFullId", null);
__decorate([
    (0, common_1.Get)('/find/payment/coupon/list'),
    (0, swagger_1.ApiOperation)({
        summary: '지급 쿠폰에서 오프라인 쿠폰 목록 조회',
        description: '지급 쿠폰에서 오프라인 쿠폰 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResPaymentCouponListDTO_1.ResPaymentCouponListDTO] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "findPaymentCouponList", null);
__decorate([
    (0, common_1.Post)('save'),
    (0, swagger_1.ApiOperation)({
        summary: '오프라인 쿠폰 저장',
        description: '오프라인 쿠폰을 저장합니다. (쿠폰 생성 / 복사 기능)'
    }),
    (0, swagger_1.ApiBody)({ type: ReqOfflineCouponDTO_1.ReqOfflineCouponDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOfflineCouponDTO_1.ReqOfflineCouponDTO, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "save", null);
__decorate([
    (0, common_1.Put)('update/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '오프라인 쿠폰 업데이트',
        description: '오프라인 쿠폰을 수장합니다. (수정 기능)'
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: '수정 할 오프라인 쿠폰 Id 값' }),
    (0, swagger_1.ApiBody)({ type: ReqOfflineCouponDTO_1.ReqOfflineCouponDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('offlineCouponId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOfflineCouponDTO_1.ReqOfflineCouponDTO, String, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('delete/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '오프라인 쿠폰 삭제',
        description: '오프라인 쿠폰을 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: '삭제 할 오프라인 쿠폰 Id 값' }),
    __param(0, (0, common_1.Param)('offlineCouponId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('find/issuance/all/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 쿠폰 발급 목록 전체 조회',
        description: '선택 한 쿠폰의 발급 목록 전체를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: '조회 할 오프라인 쿠폰 Id 값' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResIssuanceListDTO_1.ResIssuanceListDTO] }),
    __param(0, (0, common_1.Param)('offlineCouponId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "findIssuanceAll", null);
__decorate([
    (0, common_1.Post)('find/issuance/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 쿠폰 발급 목록 조건 조회',
        description: '선택 한 쿠폰의 발급 목록 중 조건에 맞는 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: '조회 할 오프라인 쿠폰 Id 값' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResIssuanceListDTO_1.ResIssuanceListDTO] }),
    __param(0, (0, common_1.Param)('offlineCouponId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Body)()),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, ReqIssuanceFindDTO_1.ReqIssuanceFindDTO, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "findIssuance", null);
__decorate([
    (0, common_1.Post)('/cancel/issuance/:offlineCouponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 발급 취소',
        description: `발급한 쿠폰을 취소합니다.`
    }),
    (0, swagger_1.ApiParam)({ name: 'offlineCouponId', description: "선택한 쿠폰에 ID" }),
    (0, swagger_1.ApiBody)({ type: ReqCouponIdFindDTO_1.ReqCouponIdFindDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('offlineCouponId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponIdFindDTO_1.ReqCouponIdFindDTO, String, Object]),
    __metadata("design:returntype", Promise)
], OfflineCouponManagerController.prototype, "cancelIssuance", null);
OfflineCouponManagerController = __decorate([
    (0, common_1.Controller)('admin/offline/coupon'),
    (0, swagger_1.ApiTags)('어드민 - 마케팅 : 오프라인 쿠폰 관리 [ 148 페이지 ]'),
    __metadata("design:paramtypes", [offline_coupon_manager_service_1.OfflineCouponManagerService])
], OfflineCouponManagerController);
exports.OfflineCouponManagerController = OfflineCouponManagerController;
//# sourceMappingURL=offline-coupon-manager.controller.js.map