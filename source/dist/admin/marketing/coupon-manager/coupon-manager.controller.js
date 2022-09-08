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
exports.CouponManagerController = void 0;
const common_1 = require("@nestjs/common");
const coupon_manager_service_1 = require("./coupon-manager.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResCouponSaveDTO_1 = require("./DTO/ResCouponSaveDTO");
const ResSimpleCouponDTO_1 = require("./DTO/ResSimpleCouponDTO");
const ReqCouponFindDTO_1 = require("./DTO/ReqCouponFindDTO");
const ReqUserFindDTO_1 = require("./DTO/ReqUserFindDTO");
const ResCouponDTO_1 = require("./DTO/ResCouponDTO");
const ResCouponIssuedFindDTO_1 = require("./DTO/ResCouponIssuedFindDTO");
const ReqCouponFindUserDTO_1 = require("./DTO/ReqCouponFindUserDTO");
const ReqCouponIdFindDTO_1 = require("./DTO/ReqCouponIdFindDTO");
const ResCouponUserFindDTO_1 = require("./DTO/ResCouponUserFindDTO");
const ReqCouponSaveDTO_1 = require("./DTO/ReqCouponSaveDTO");
const ResCouponUserFindAfterDTO_1 = require("./DTO/ResCouponUserFindAfterDTO");
let CouponManagerController = class CouponManagerController {
    constructor(couponManagerService) {
        this.couponManagerService = couponManagerService;
    }
    async findSimple(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.couponManagerService.findSimple(page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.couponManagerService.findAll(page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(couponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.couponManagerService.findId(couponId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(find, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.couponManagerService.find(find, page, pageSize)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(CouponSaveDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.save(CouponSaveDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async updateFindId(couponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.updateFindId(couponId) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(couponId, CouponSaveDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.update(couponId, CouponSaveDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async Delete(couponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.delete(couponId) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findIssuanceCouponUserAll(couponId, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.findIssuanceCouponUserAll(couponId, page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.log(error);
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findIssuanceCouponUser(reqCouponFindUserDTO, couponId, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.findIssuanceCouponUser(reqCouponFindUserDTO, couponId, page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async cancelIssuanceCoupon(memberIdList, couponId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.cancelIssuanceCoupon(couponId, memberIdList) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async preIssuanceCouponAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.preIssuanceCoupIssuanceCouponAllonAll(page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async preIssuanceCoupon(reqCouponFindUserDTO, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.preIssuanceCoupon(reqCouponFindUserDTO, page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async IssuanceCouponAll(couponId, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.IssuanceCoupIssuanceCouponAllonAll(couponId, page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async IssuanceCoupon(reqCouponFindUserDTO, couponId, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.IssuanceCoupon(reqCouponFindUserDTO, couponId, page, pageSize) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findIssuanceCoupon(couponId, useridList, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponManagerService.findIssuanceCoupon(useridList, couponId) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('find/simple/all'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 간략 데이터 조회',
        description: '쿠폰 등록 시, 중복 쿠폰 사용 때 전체 쿠폰을 간략히 조회 할 때 사용'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ description: "쿠폰 간략 조회 결과 ", type: [ResSimpleCouponDTO_1.ResSimpleCouponDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "findSimple", null);
__decorate([
    (0, common_1.Get)('find/all'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 전체 조회',
        description: '등록 된 쿠폰 전체를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ description: "쿠폰 리스트 조회 결과", type: [ResCouponDTO_1.ResCouponDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 ID 값으로 단일 쿠폰 조회',
        description: '쿠폰에 ID 값으로 특정 쿠폰 데이터 하나만을 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ description: '쿠폰 ID 값으로 단일 쿠폰 조회 결과', type: ResCouponDTO_1.ResCouponDTO }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('find'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 리스트 조회',
        description: '검색 조건에 맞는 쿠폰 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiBody)({ type: ReqCouponFindDTO_1.ReqCouponFindDTO }),
    (0, swagger_1.ApiCreatedResponse)({ description: '검색 조건에 맞는 쿠폰 데이터를 조회결과', type: [ResCouponDTO_1.ResCouponDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponFindDTO_1.ReqCouponFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "find", null);
__decorate([
    (0, common_1.Post)('/save'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 저장',
        description: '쿠폰 수정을 수행합니다. </br> 상품 검색 : 상품 검색 버튼은 "상품 검색 탭 API"를 참고'
    }),
    (0, swagger_1.ApiBody)({ type: ReqCouponSaveDTO_1.ReqCouponSaveDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponSaveDTO_1.ReqCouponSaveDTO, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "save", null);
__decorate([
    (0, common_1.Get)('find/update/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '복사,수정을 희망하는 쿠폰 내용 조회',
        description: '복사,수정을 희망하는 쿠폰에 모든 데이터를 조회합니다. </br> 상품 검색 : 상품 검색 버튼은 "상품 검색 탭 API"를 참고'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResCouponSaveDTO_1.ResCouponSaveDTO }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "updateFindId", null);
__decorate([
    (0, common_1.Put)('/update/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 수정',
        description: '쿠폰 수정을 수행합니다. </br> 상품 검색 : product API를 참고해주세요. </br>  카테고리 검색 : product-class API를 참고해주세요.'
    }),
    (0, swagger_1.ApiBody)({ type: ReqCouponSaveDTO_1.ReqCouponSaveDTO }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqCouponSaveDTO_1.ReqCouponSaveDTO, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 삭제',
        description: `선택한 쿠폰을 삭제합니다.`
    }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "Delete", null);
__decorate([
    (0, common_1.Get)('/find/issuance/all/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 발급 기록 전체 조회',
        description: '특정 쿠폰을 발급 받은 모든 유저 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'couponId', description: "선택한 쿠폰에 ID" }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResCouponIssuedFindDTO_1.ResCouponIssuedFindDTO] }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "findIssuanceCouponUserAll", null);
__decorate([
    (0, common_1.Post)('/find/issuance/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 발급 기록 조회',
        description: '특정 쿠폰을 발급 받은 유저 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'couponId', description: "선택한 쿠폰에 ID" }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiBody)({ type: ReqCouponFindUserDTO_1.ReqCouponFindUserDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResCouponIssuedFindDTO_1.ResCouponIssuedFindDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponId')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponFindUserDTO_1.ReqCouponFindUserDTO, String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "findIssuanceCouponUser", null);
__decorate([
    (0, common_1.Post)('/cancel/issuance/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '쿠폰 발급 개별 취소',
        description: `발급한 쿠폰에 대해 개별취소합니다.`
    }),
    (0, swagger_1.ApiParam)({ name: 'couponId', description: "선택한 쿠폰에 ID" }),
    (0, swagger_1.ApiBody)({ type: ReqCouponIdFindDTO_1.ReqCouponIdFindDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponId')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponIdFindDTO_1.ReqCouponIdFindDTO, String, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "cancelIssuanceCoupon", null);
__decorate([
    (0, common_1.Get)('find/issuance/user/all'),
    (0, swagger_1.ApiOperation)({
        summary: '발급 버튼 클릭 시, 유저 조회(발급 전 모든 대상)',
        description: '발급 버튼을 클릭하였을 때 불어올 유저 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResCouponUserFindDTO_1.ResCouponUserFindDTO] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "preIssuanceCouponAll", null);
__decorate([
    (0, common_1.Post)('find/issuance/user/search'),
    (0, swagger_1.ApiOperation)({
        summary: '발급 버튼 클릭 시, 유저 조회(발급전 모든 대상)',
        description: '발급 버튼을 클릭하였을 때 불어올 유저 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiBody)({ type: ReqCouponFindUserDTO_1.ReqCouponFindUserDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResCouponUserFindDTO_1.ResCouponUserFindDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponFindUserDTO_1.ReqCouponFindUserDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "preIssuanceCoupon", null);
__decorate([
    (0, common_1.Get)('find/issuance/user/all/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '발급 버튼 클릭 시, 유저 조회',
        description: '발급 버튼을 클릭하였을 때 불어올 유저 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'couponId', description: "선택한 쿠폰에 ID" }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResCouponUserFindAfterDTO_1.ResCouponUserFindAfterDTO] }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "IssuanceCouponAll", null);
__decorate([
    (0, common_1.Post)('find/issuance/user/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '발급 버튼 클릭 시, 유저 조회',
        description: '발급 버튼을 클릭하였을 때 불어올 유저 목록을 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'couponId', description: "선택한 쿠폰에 ID" }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiBody)({ type: ReqCouponFindUserDTO_1.ReqCouponFindUserDTO }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResCouponUserFindAfterDTO_1.ResCouponUserFindAfterDTO] }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('couponId')),
    __param(2, (0, common_1.Query)('page')),
    __param(3, (0, common_1.Query)('pageSize')),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCouponFindUserDTO_1.ReqCouponFindUserDTO, String, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "IssuanceCoupon", null);
__decorate([
    (0, common_1.Post)('/issuance/:couponId'),
    (0, swagger_1.ApiOperation)({
        summary: '유저 쿠폰 발급',
        description: '선택 된 유저에게 쿠폰을 발급합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'couponId', description: '발급하려하는 쿠폰 아이디 값' }),
    (0, swagger_1.ApiBody)({ type: ReqUserFindDTO_1.ReqUserFindDTO }),
    __param(0, (0, common_1.Param)('couponId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqUserFindDTO_1.ReqUserFindDTO, Object]),
    __metadata("design:returntype", Promise)
], CouponManagerController.prototype, "findIssuanceCoupon", null);
CouponManagerController = __decorate([
    (0, common_1.Controller)('admin/coupon'),
    (0, swagger_1.ApiTags)('어드민 - 마케팅 : 쿠폰 관리 [ 144 페이지 ]'),
    __metadata("design:paramtypes", [coupon_manager_service_1.CouponManagerService])
], CouponManagerController);
exports.CouponManagerController = CouponManagerController;
//# sourceMappingURL=coupon-manager.controller.js.map