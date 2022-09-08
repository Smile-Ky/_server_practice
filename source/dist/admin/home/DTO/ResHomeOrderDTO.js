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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResHomeOrderData = exports.ResHomeOrderDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResHomeOrderDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '8', description: '주문 관리 : 입금 확인' }),
    __metadata("design:type", Number)
], ResHomeOrderDTO.prototype, "order_payment_confirm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2', description: '주문 관리 : 배송 준비 중' }),
    __metadata("design:type", Number)
], ResHomeOrderDTO.prototype, "order_delivery_preparing", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2', description: '주문 관리 : 배송 완료' }),
    __metadata("design:type", Number)
], ResHomeOrderDTO.prototype, "order_delivery_complete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '주문 관리 : 배송지연' }),
    __metadata("design:type", Number)
], ResHomeOrderDTO.prototype, "order_delivery_delay", void 0);
exports.ResHomeOrderDTO = ResHomeOrderDTO;
exports.ResHomeOrderData = {
    "order_delivery_complete": 2,
    "order_payment_confirm": 8,
    "order_delivery_preparing": 2,
    "order_delivery_delay": 0
};
//# sourceMappingURL=ResHomeOrderDTO.js.map