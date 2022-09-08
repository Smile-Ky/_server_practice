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
exports.ResCouponData = exports.ResCouponDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResCouponDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 ID', description: '쿠폰 ID' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 이름', description: '쿠폰 이름' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 번호', description: '쿠폰 번호' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 설명', description: '쿠폰 설명' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용 기간', description: '사용 기간' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 사용여부', description: '쿠폰 사용여부' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_is_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 사용범위', description: '쿠폰 사용범위' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "coupon_use_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급 방식', description: '발급 방식' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "issued_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급 대상', description: '발급 대상' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "issued_user_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '할인 정보', description: '할인 정보' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "discount_info", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '할인 타입', description: '할인 타입' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "discount_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급 기간', description: '발급 기간' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "issued_period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급 개수', description: '발급 개수' }),
    __metadata("design:type", String)
], ResCouponDTO.prototype, "issued_count", void 0);
exports.ResCouponDTO = ResCouponDTO;
exports.ResCouponData = {
    "coupon_id": "쿠폰 ID",
    "coupon_name": "쿠폰 이름",
    "coupon_number": "쿠폰 번호",
    "coupon_description": "쿠폰 설명",
    "coupon_period": "사용 기간",
    "coupon_is_use": "쿠폰 사용여부",
    "coupon_use_range": "쿠폰 사용범위",
    "issued_method": "발급 방식",
    "issued_user_class": "발급 대상",
    "discount_info": "할인 정보",
    "discount_type": "할인 타입",
    "issued_period": "발급 기간",
    "issued_count": "발급 개수"
};
//# sourceMappingURL=ResCouponDTO.js.map