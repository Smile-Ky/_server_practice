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
exports.ResRefundRequestItemData = exports.ResRefundRequestItemDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResRefundRequestItemDTO {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "클레임번호", description: "클레임번호" }),
    __metadata("design:type", Number)
], ResRefundRequestItemDTO.prototype, "claim_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "환불상태", description: "환불상태" }),
    __metadata("design:type", String)
], ResRefundRequestItemDTO.prototype, "refund_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "상품 이미지 url", description: "상품 이미지 url" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestItemDTO.prototype, "product_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "상품 명", description: "상품 명" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestItemDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "옵션 명", description: "옵션 명" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestItemDTO.prototype, "option_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: "상품 판매 단가" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestItemDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3, description: "구매 수량" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestItemDTO.prototype, "order_product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: "상품 결제 금액" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestItemDTO.prototype, "payment_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: "배송비 번호" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestItemDTO.prototype, "delivery_charge_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: "배송비" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestItemDTO.prototype, "delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "클레임 사유", description: "클레임 사유" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestItemDTO.prototype, "claim_reason", void 0);
exports.ResRefundRequestItemDTO = ResRefundRequestItemDTO;
exports.ResRefundRequestItemData = {
    "payment_state": "환불",
    "claim_state": "1",
    "refund_state": "환불요청",
    "order_state": "취소완료",
    "product_image_url": "",
    "product_name": "상품명",
    "option_name": "옵션명",
    "product_sale_price": 3000,
    "order_product_count": 3,
    "payment_price": 9000,
    "delivery_price": 3000,
    "order_user_name": "주문자 이름",
    "order_user_phone": "01033333333",
    "deposit_date": "2022-05-13T08:53:34.444Z",
    "refund_reason": "취소사유",
    "order_date": "2022-05-13T08:53:34.444Z",
    "refund_start_date": "2022-05-13T08:53:34.444Z",
    "refund_end_date": "2022-05-13T08:53:34.444Z"
};
//# sourceMappingURL=ResRefundRequestItemDTO.js.map