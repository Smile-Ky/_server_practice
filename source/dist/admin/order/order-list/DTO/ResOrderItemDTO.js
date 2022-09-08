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
exports.ResOrderItemData = exports.ResOrderItemDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResOrderItemDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 걔별 ID', description: '주문 걔별 ID' }),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '처리상태', description: '처리상태' }),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "order_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResOrderItemDTO.prototype, "order_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문상세번호', description: '주문상세번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 이미지 url', description: '상품 이미지 url' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "product_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션 명', description: '옵션 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "option_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 ID', description: '브랜드 ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 명', description: '브랜드 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "brand_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: '상품 판매 단가' }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", Number)
], ResOrderItemDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3, description: '구매 수량' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResOrderItemDTO.prototype, "order_product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: '상품 결제 금액' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResOrderItemDTO.prototype, "payment_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 휴대폰 번호', description: '주문자 휴대폰 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "order_user_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수취인 명', description: '수취인 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "recipient_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수취인 휴대폰 번호', description: '수취인 휴대폰 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "recipient_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "결제방법", description: '결제방법' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "order_payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "걸재 형태", description: '걸재 형태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "order_payment_platform", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '입금 일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResOrderItemDTO.prototype, "deposit_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '3000', description: '배송비' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 업체 ID', description: '택배 업체 ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "delivery_company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배업체 이름', description: '택배업체 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "delivery_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '송장번호', description: '송장번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResOrderItemDTO.prototype, "delivery_invoice_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '배송 준비중 일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResOrderItemDTO.prototype, "delivery_preparing_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '배송 일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResOrderItemDTO.prototype, "delivery_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '배송 완료 일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResOrderItemDTO.prototype, "delivery_end_date", void 0);
exports.ResOrderItemDTO = ResOrderItemDTO;
exports.ResOrderItemData = {
    "order_detail_id": "10",
    "order_state": "",
    "product_code": "",
    "product_image_url": "",
    "order_product_count": null,
    "order_user_phone": "",
    "recipient_name": null,
    "recipient_phone": null,
    "order_payment_method": null,
    "order_payment_platform": null,
    "delivery_price": null,
    "delivery_company_id": null,
    "delivery_invoice_code": null,
    "delivery_preparing_date": null,
    "delivery_start_date": null,
    "delivery_end_date": null,
    "confirm_date": null,
    "claim_reason": null,
    "claim_date": null,
    "claim_method": null,
    "return_delivery_company_name": null,
    "return_delivery_invoice_code": null,
    "order_id": "1",
    "product_option_id": "1",
    "brand_id": "1",
    "product_sale_price": null,
    "order_code": "222-22",
    "order_create_date": null,
    "order_email_address": "",
    "deposit_date": null,
    "order_price": "0",
    "order_mileage": "0",
    "order_delivery": "0",
    "planning_discount": "0",
    "coupon_discount": "0",
    "member_discount": "0",
    "special_discount": "0",
    "member_id": "4",
    "image_url": "ㅍㅍ",
    "brand_name": "브랜드",
    "product_name": ""
};
//# sourceMappingURL=ResOrderItemDTO.js.map