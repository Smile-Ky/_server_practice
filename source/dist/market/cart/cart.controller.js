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
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../common/respones");
const ReqCartAddDTO_1 = require("./DTO/ReqCartAddDTO");
const ReqCartCountDTO_1 = require("./DTO/ReqCartCountDTO");
const ReqCartIdxDTO_1 = require("./DTO/ReqCartIdxDTO");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    async cartAdd(body, req, res) {
        try {
            return res.status(200).json(await this.cartService.cartAdd(req.cookies['user_id'], body));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getCart(req, res) {
        try {
            return res.status(200).json(await this.cartService.getCart(req.cookies['user_id']));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async updateCount(body, req, res) {
        try {
            return res.status(200).json(await this.cartService.updateCount(req.cookies['user_id'], body));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async deleteCart(body, req, res) {
        try {
            return res.status(200).json(await this.cartService.deleteCart(req.cookies['user_id'], body));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getCartSummary(body, req, res) {
        try {
            return res.status(200).json(await this.cartService.getCartSummary(req.cookies['user_id'], body));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Post)("/add"),
    (0, swagger_1.ApiOperation)({
        summary: "장바구니 상품 추가",
        description: "장바구니에 상품을 추가합니다."
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCartAddDTO_1.ReqCartAddDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "cartAdd", null);
__decorate([
    (0, common_1.Get)("/getCart"),
    (0, swagger_1.ApiOperation)({
        summary: "장바구니 상품 목록 조회",
        description: "장바구나 상품 목록을 조회합니다."
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCart", null);
__decorate([
    (0, common_1.Post)("/updateCount"),
    (0, swagger_1.ApiOperation)({
        summary: "장바구니 상품 수량 변경",
        description: "장바구니 안의 상품 수량을 변경합니다."
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCartCountDTO_1.ReqCartCountDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "updateCount", null);
__decorate([
    (0, common_1.Post)("deleteCart"),
    (0, swagger_1.ApiOperation)({
        summary: "장바구니 상품 삭제",
        description: "장바구니안의 상품을 삭제합니다."
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCartIdxDTO_1.ReqCartIdxDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "deleteCart", null);
__decorate([
    (0, common_1.Post)("getCartSummary"),
    (0, swagger_1.ApiOperation)({
        summary: "장바구니 요약",
        description: "장바구니 요약 (할인/배송비 적용된 최종 결제 금액, 예정 적립금)"
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqCartIdxDTO_1.ReqCartIdxDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], CartController.prototype, "getCartSummary", null);
CartController = __decorate([
    (0, common_1.Controller)("api/cart"),
    (0, swagger_1.ApiTags)('마켓 - 장바구니'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=cart.controller.js.map