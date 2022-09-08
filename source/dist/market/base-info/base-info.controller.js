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
exports.BaseInfoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const base_info_service_1 = require("./base-info.service");
const ReqGetTopDisplayProduct_dto_1 = require("./DTO/ReqGetTopDisplayProduct.dto");
let BaseInfoController = class BaseInfoController {
    constructor(baseInfoService) {
        this.baseInfoService = baseInfoService;
    }
    async base(res) {
        try {
            res.status(200).json(await this.baseInfoService.base());
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getCartInfo(req, res) {
        try {
            res.status(200).json(await this.baseInfoService.getCartInfo(req.cookies['user_id']));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getMainInfo(req, res) {
        try {
            res.status(200).json(await this.baseInfoService.getMainInfo(req.cookies['user_id']));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getSpecialList(tab, code, req, res) {
        try {
            res.status(200).json(await this.baseInfoService.getSpecialList(req.cookies['user_id'], tab, code));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getSpecialInfo(eventId, req, res) {
        try {
            res.status(200).json(await this.baseInfoService.getSpecialInfo(req.cookies['user_id'], eventId));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getBestList(data, req, res) {
        try {
            res.status(200).json(await this.baseInfoService.getBestList(req.cookies['user_id'], data, 1));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getAgreeInfo(res) {
        try {
            res.status(200).json(await this.baseInfoService.getAgreeInfo());
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getTopDisplayProduct(data, req, res) {
        try {
            res.status(200).json(await this.baseInfoService.getTopDisplayProduct(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
};
__decorate([
    (0, common_1.Get)('/base'),
    (0, swagger_1.ApiOperation)({ summary: '대표 카테고리 목록 조회' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "base", null);
__decorate([
    (0, common_1.Get)('/getCartInfo'),
    (0, swagger_1.ApiOperation)({ summary: '홈 상단 장바구니 정보 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getCartInfo", null);
__decorate([
    (0, common_1.Get)('/getMainInfo'),
    (0, swagger_1.ApiOperation)({ summary: '홈 기본 데이터 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getMainInfo", null);
__decorate([
    (0, common_1.Get)('/getSpecialList'),
    (0, swagger_1.ApiOperation)({ summary: '기획전, 이벤트 목록 조회' }),
    (0, swagger_1.ApiQuery)({ name: 'tab', required: false, description: `진행 중(ing)/종료(done)` }),
    (0, swagger_1.ApiQuery)({ name: 'code', required: false, description: `기획전('')/이벤트(event)` }),
    __param(0, (0, common_1.Query)('tab')),
    __param(1, (0, common_1.Query)('code')),
    __param(2, (0, common_1.Req)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getSpecialList", null);
__decorate([
    (0, common_1.Get)('/getSpecialInfo'),
    (0, swagger_1.ApiOperation)({ summary: '기획전, 이벤트 상세 페이지 조회' }),
    (0, swagger_1.ApiQuery)({ name: 'event_ix', description: '이벤트 고유 Id' }),
    __param(0, (0, common_1.Query)('event_ix')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getSpecialInfo", null);
__decorate([
    (0, common_1.Get)('/getBestList'),
    (0, swagger_1.ApiOperation)({ summary: 'BEST 상품 목록 조회' }),
    (0, swagger_1.ApiQuery)({ name: 'sort', required: false, description: 'BEST 상품 정렬기준' }),
    __param(0, (0, common_1.Query)('sort')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getBestList", null);
__decorate([
    (0, common_1.Get)('/getAgreeInfo'),
    (0, swagger_1.ApiOperation)({ summary: '이용약관 조회' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getAgreeInfo", null);
__decorate([
    (0, common_1.Post)('/getTopDisplayProduct'),
    (0, swagger_1.ApiOperation)({ summary: '상단 탭 상품 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetTopDisplayProduct_dto_1.ReqGetTopDisplayProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseInfoController.prototype, "getTopDisplayProduct", null);
BaseInfoController = __decorate([
    (0, common_1.Controller)('api/setting'),
    (0, swagger_1.ApiTags)('마켓 - 기본 설정 정보'),
    __metadata("design:paramtypes", [base_info_service_1.BaseInfoService])
], BaseInfoController);
exports.BaseInfoController = BaseInfoController;
//# sourceMappingURL=base-info.controller.js.map