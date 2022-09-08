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
exports.ResPaymentDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResPaymentDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 걔별 ID', description: '주문 걔별 ID' }),
    __metadata("design:type", String)
], ResPaymentDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '결제방법', description: '결제 방법' }),
    __metadata("design:type", String)
], ResPaymentDTO.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'bigint', description: '결제 금액' }),
    __metadata("design:type", Number)
], ResPaymentDTO.prototype, "payment_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'bigint', description: '환불 금액' }),
    __metadata("design:type", Number)
], ResPaymentDTO.prototype, "refund_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'bigint', description: '잔여 금액' }),
    __metadata("design:type", Number)
], ResPaymentDTO.prototype, "waste_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'varchar', description: '기타' }),
    __metadata("design:type", Number)
], ResPaymentDTO.prototype, "payment_memo", void 0);
exports.ResPaymentDTO = ResPaymentDTO;
//# sourceMappingURL=ResPaymentDTO.js.map