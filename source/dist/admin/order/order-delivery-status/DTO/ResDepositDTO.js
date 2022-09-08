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
exports.ResDepositDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResDepositDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 걔별 ID', description: '주문 걔별 ID' }),
    __metadata("design:type", String)
], ResDepositDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '처리상태', description: '처리상태' }),
    __metadata("design:type", String)
], ResDepositDTO.prototype, "order_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResDepositDTO.prototype, "order_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 세부 id', description: '주문 세부 id' }),
    __metadata("design:type", String)
], ResDepositDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 이미지 url', description: '상품 이미지 url' }),
    __metadata("design:type", String)
], ResDepositDTO.prototype, "product_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품명', description: '상품명' }),
    __metadata("design:type", String)
], ResDepositDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션 명', description: '옵션 명' }),
    __metadata("design:type", String)
], ResDepositDTO.prototype, "option_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: '상품 판매 단가' }),
    __metadata("design:type", Number)
], ResDepositDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3, description: '구매 수량' }),
    __metadata("design:type", Number)
], ResDepositDTO.prototype, "order_product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '입금 일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResDepositDTO.prototype, "deposit_date", void 0);
exports.ResDepositDTO = ResDepositDTO;
//# sourceMappingURL=ResDepositDTO.js.map