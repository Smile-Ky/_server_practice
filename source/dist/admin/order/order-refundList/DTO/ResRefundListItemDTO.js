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
exports.ResRefundListItemData = exports.ResRefundListItemDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResRefundListItemDTO {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "관리", description: "관리" }),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "payment_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "클레임번호", description: "클레임번호" }),
    __metadata("design:type", Number)
], ResRefundListItemDTO.prototype, "claim_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "환불상태", description: "환불상태" }),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "refund_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "처리상태", description: "처리상태" }),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "order_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "상품 이미지 url", description: "상품 이미지 url" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "product_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "상품 명", description: "상품 명" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "옵션 명", description: "옵션 명" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "option_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: "상품 판매 단가" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundListItemDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3, description: "구매 수량" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundListItemDTO.prototype, "order_product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: "상품 결제 금액" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundListItemDTO.prototype, "payment_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "3000", description: "배송비" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문자 이름", description: "주문자 이름" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "order_user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문자 휴대폰 번호", description: "주문자 휴대폰 번호" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "order_user_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "입금 일자" }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResRefundListItemDTO.prototype, "deposit_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "취소사유", description: "취소사유" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundListItemDTO.prototype, "refund_reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "주문일자" }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResRefundListItemDTO.prototype, "order_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "환불 요청 일자" }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResRefundListItemDTO.prototype, "refund_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "환불 완료 일자" }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResRefundListItemDTO.prototype, "refund_end_date", void 0);
exports.ResRefundListItemDTO = ResRefundListItemDTO;
exports.ResRefundListItemData = {
    order_id: "주문 ID",
    order_code: "주문번호",
    claim_code: 1,
    refund_state: "환불요청",
    order_state: "취소완료",
    product_image_url: "",
    product_name: "상품명",
    option_name: "옵션명",
    product_sale_price: 30000,
    order_product_count: 3,
    order_price: 90000,
    order_delivery: 0,
    user_name: "주문자",
    order_user_phone: "전화번호",
    deposit_date: "2022-05-13T08:53:34.444Z",
    claim_reason: "취소 사유",
    order_create_date: "2022-05-13T08:53:34.444Z",
    refund_start_date: "2022-05-13T08:53:34.444Z",
    refund_end_date: "2022-05-13T08:53:34.444Z"
};
//# sourceMappingURL=ResRefundListItemDTO.js.map