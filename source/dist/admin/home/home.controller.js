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
exports.HomeController = void 0;
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const respones_1 = require("../../common/respones");
const home_service_1 = require("./home.service");
const ResHomeFromDTO_1 = require("./DTO/ResHomeFromDTO");
const ResHomeOrderDTO_1 = require("./DTO/ResHomeOrderDTO");
const ResHomeClaimInquiryDTO_1 = require("./DTO/ResHomeClaimInquiryDTO");
const ResHomeProductDTO_1 = require("./DTO/ResHomeProductDTO");
const ResSellingGraphDTO_1 = require("./DTO/ResSellingGraphDTO");
let HomeController = class HomeController {
    constructor(homeService) {
        this.homeService = homeService;
    }
    async FindAll(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.homeService.findHome()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getOrder(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.homeService.order()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getClaim(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.homeService.claim()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getProduct(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.homeService.getProduct()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getSalesGraph(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.homeService.salesGraph()));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 페이지 전체 조회',
        description: '메인 페이지에 표시 되는 모든 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResHomeFromDTO_1.ResHomeFromDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "FindAll", null);
__decorate([
    (0, common_1.Get)('/order'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 페이지 : 주문 관리 조회',
        description: '메인 페이지에 표시 된는 주문 관리 탭에 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResHomeOrderDTO_1.ResHomeOrderDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Get)('/claim/inquiry'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 페이지 : 클래임 관리 조회',
        description: '메인 페이지에 표시 된는 클래임 관리 탭에 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResHomeClaimInquiryDTO_1.ResHomeClaimInquiryDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getClaim", null);
__decorate([
    (0, common_1.Get)('/product'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 페이지 : 상품 현황 조회',
        description: '메인 페이지에 표시 된는 상품 현황 탭에 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResHomeProductDTO_1.ResHomeProductDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getProduct", null);
__decorate([
    (0, common_1.Get)('/sellingGraph'),
    (0, swagger_1.ApiOperation)({
        summary: '메인 페이지 : 당월 매출 그래프 조회',
        description: '메인 페이지에 표시 된는 매출 그래프 탭에 당월 데이터를 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResSellingGraphDTO_1.ResSellingGraphDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "getSalesGraph", null);
HomeController = __decorate([
    (0, common_1.Controller)('/admin/home'),
    (0, swagger_1.ApiTags)('어드민 - 메인 페이지 [ 3 페이지 ]'),
    __metadata("design:paramtypes", [home_service_1.HomeService])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map