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
exports.ResReListData = exports.ResRefundRequestDTO = void 0;
const ResRefundListItemDTO_1 = require("./ResRefundListItemDTO");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResRefundRequestDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문 ID", description: "주문 ID" }),
    __metadata("design:type", String)
], ResRefundRequestDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문번호", description: "주문번호" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문 유저 ID", description: "주문 유저 ID" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [ResRefundListItemDTO_1.ResRefundListItemData], description: "요청 정보" }),
    __metadata("design:type", Array)
], ResRefundRequestDTO.prototype, "order_refund_list_item", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "환불 상품금액", description: "환불 상품금액" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "refund_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "배송비 차감", description: "배송비 차감" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "offset_delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "장바구니 쿠폰", description: "장바구니 쿠폰" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "coupon_discount_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "합계", description: "합계" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "final_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "결제방법", description: "결제방법" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResRefundRequestDTO.prototype, "pay_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "잔여 금액", description: "잔여 금액" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "waste_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "환불 금액(과세)", description: "환불 금액(과세)" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "tax_on_refund_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "환불 금액(비과세)", description: "환불 금액(비과세)" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "untax_on_refund_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "총 환불 금액", description: "총 환불 금액" }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ResRefundRequestDTO.prototype, "final_refund_price", void 0);
exports.ResRefundRequestDTO = ResRefundRequestDTO;
exports.ResReListData = {
    "order_id": "주문 ID",
    "order_code": "주문번호",
    "user_id": "주문 유저 ID",
    "order_item": [ResRefundListItemDTO_1.ResRefundListItemData]
};
//# sourceMappingURL=ResRefundRequestDTO.js.map