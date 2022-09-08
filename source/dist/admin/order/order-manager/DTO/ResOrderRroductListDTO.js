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
exports.ResOrderRroductListData = exports.ResOrderRroductListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResOrderRroductListDTO {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 걔별 ID', description: '주문 걔별 ID' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '처리상태', description: '처리상태' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "order_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문일자' }),
    __metadata("design:type", Date)
], ResOrderRroductListDTO.prototype, "order_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문상세번호', description: '주문상세번호' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "order_item_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 이미지 url', description: '상품 이미지 url' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "product_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션 명', description: '옵션 명' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "option_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 ID', description: '브랜드 ID' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 명', description: '브랜드 명' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "brand_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: '상품 판매 단가' }),
    __metadata("design:type", Number)
], ResOrderRroductListDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3, description: '구매 수량' }),
    __metadata("design:type", Number)
], ResOrderRroductListDTO.prototype, "order_product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: '상품 결제 금액' }),
    __metadata("design:type", Number)
], ResOrderRroductListDTO.prototype, "payment_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 휴대폰 번호', description: '주문자 휴대폰 번호' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "order_user_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수취인 명', description: '수취인 명' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "recipient_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수취인 휴대폰 번호', description: '수취인 휴대폰 번호' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "recipient_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "결제방법", description: '결제방법' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "order_payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "걸재 형태", description: '걸재 형태' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "order_payment_platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '입금 일자' }),
    __metadata("design:type", Date)
], ResOrderRroductListDTO.prototype, "deposit_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '3000', description: '배송비' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 업체 ID', description: '택배 업체 ID' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "delivery_company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배업체 이름', description: '택배업체 이름' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "delivery_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '송장번호', description: '송장번호' }),
    __metadata("design:type", String)
], ResOrderRroductListDTO.prototype, "delivery_invoice_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '배송 중비중 일자' }),
    __metadata("design:type", Date)
], ResOrderRroductListDTO.prototype, "delivery_preparing_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '배송 일자' }),
    __metadata("design:type", Date)
], ResOrderRroductListDTO.prototype, "delivery_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '배송 완료 일자' }),
    __metadata("design:type", Date)
], ResOrderRroductListDTO.prototype, "delivery_end_date", void 0);
exports.ResOrderRroductListDTO = ResOrderRroductListDTO;
exports.ResOrderRroductListData = {};
//# sourceMappingURL=ResOrderRroductListDTO.js.map