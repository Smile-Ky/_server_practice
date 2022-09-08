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
exports.UserOrderController = void 0;
const common_1 = require("@nestjs/common");
const user_order_service_1 = require("./user-order.service");
const swagger_1 = require("@nestjs/swagger");
const ReqUpdateAddressBook_dto_1 = require("./DTO/ReqUpdateAddressBook.dto");
const ReqUpdateAddressDefault_dto_1 = require("./DTO/ReqUpdateAddressDefault.dto");
const ReqGetOrderInput_dto_1 = require("./DTO/ReqGetOrderInput.dto");
let UserOrderController = class UserOrderController {
    constructor(userOrderService) {
        this.userOrderService = userOrderService;
    }
    async getShppingAddress(oid, req, res) {
        try {
            return res.status(200).json(await this.userOrderService.getShppingAddress(req.cookies['user_id'], oid));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateAddressBook(data, req, res) {
        try {
            return res.status(200).json(await this.userOrderService.updateAddressBook(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateAddressDefault(data, req, res) {
        try {
            return res.status(200).json(await this.userOrderService.updateAddressDefault(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getOrderInput(data, req, res) {
        try {
            return res.status(200).json(await this.userOrderService.getOrderInput(req.cookies['user_id'], data));
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async updateOrderInput(req, res) {
        try {
            return res.status(200).json(await this.userOrderService.updateOrderInput());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async paymentAction(req, res) {
        try {
            return res.status(200).json(await this.userOrderService.paymentAction());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
    async getOrderComplete(req, res) {
        try {
            return res.status(200).json(await this.userOrderService.getOrderComplete());
        }
        catch (error) {
            return res.status(500).json({ error });
        }
    }
};
__decorate([
    (0, common_1.Get)('/getShppingAddress'),
    (0, swagger_1.ApiQuery)({ name: 'oid', required: false, description: '주문 번호 고유 id(있을 경우 마이페이지 구매 배송지 정보)' }),
    (0, swagger_1.ApiOperation)({ summary: '배송지 목록 조회' }),
    __param(0, (0, common_1.Query)('oid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "getShppingAddress", null);
__decorate([
    (0, common_1.Post)('/updateAddressBook'),
    (0, swagger_1.ApiOperation)({ summary: '배송지 추가' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUpdateAddressBook_dto_1.ReqUpdateAddressBookDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "updateAddressBook", null);
__decorate([
    (0, common_1.Post)('/updateAddressDefault'),
    (0, swagger_1.ApiOperation)({ summary: '기본 배송지 변경' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqUpdateAddressDefault_dto_1.ReqUpdateAddressDefaultDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "updateAddressDefault", null);
__decorate([
    (0, common_1.Post)('/getOrderInput'),
    (0, swagger_1.ApiOperation)({ summary: '주문 시 장바구니 정보 가져오기(바로 구매 시에도 장바구니에 저장)' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetOrderInput_dto_1.ReqGetOrderInputDto, Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "getOrderInput", null);
__decorate([
    (0, common_1.Post)('/updateOrderInput'),
    (0, swagger_1.ApiOperation)({ summary: '주문 시 쿠폰, 적립금, 주소 정보 변경 시 주문 금액 재산정' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "updateOrderInput", null);
__decorate([
    (0, common_1.Post)('/paymentAction'),
    (0, swagger_1.ApiOperation)({ summary: '결제 정보 입력' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "paymentAction", null);
__decorate([
    (0, common_1.Get)('/getOrderComplete'),
    (0, swagger_1.ApiOperation)({ summary: '주문(결제) 완료 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserOrderController.prototype, "getOrderComplete", null);
UserOrderController = __decorate([
    (0, common_1.Controller)('api/order'),
    (0, swagger_1.ApiTags)('마켓 - 주문'),
    __metadata("design:paramtypes", [user_order_service_1.UserOrderService])
], UserOrderController);
exports.UserOrderController = UserOrderController;
//# sourceMappingURL=user-order.controller.js.map