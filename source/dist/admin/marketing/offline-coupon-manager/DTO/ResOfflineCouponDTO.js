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
exports.ResOfflineCouponData = exports.ResOfflineCouponDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResOfflineCouponDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '오프라인 쿠폰 ID', description: '오프라인 쿠폰 ID' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "offlineCoupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 이름', description: '쿠폰 이름' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 설명', description: '쿠폰 설명' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 마일리지_지급_상품권=1 or 쿠폰_지급_상품권_랜덤=2 or 쿠폰_지급_상품권_동일=3', description: '발급 유형' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "issued_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '마일리지 시라얼 넘버', description: '수동 마일리지 시라얼 넘버' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "mileage_serial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수동=0 or 자동=1', description: '시리얼 생성 방법' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "mileage_serial_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '300', description: '마일리지 생성 개수' }),
    __metadata("design:type", Number)
], ResOfflineCouponDTO.prototype, "mileage_generation_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '500', description: '마일리지 지급 금액' }),
    __metadata("design:type", Number)
], ResOfflineCouponDTO.prototype, "mileage_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 지급 상품권(랜덤 시리얼 넘버)', description: '수동 쿠폰 지급 상품권(랜덤 시리얼 넘버)' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "random_coupon_serial", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수동=0 or 자동=1', description: '시리얼 생성 방법' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "random_coupon_serial_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '300', description: '랜텀 시리얼 넘버 생성 개수' }),
    __metadata("design:type", Number)
], ResOfflineCouponDTO.prototype, "random_coupon_generation_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["오프라인 쿠폰 ID"], description: '지급 쿠폰 목록 : 랜덤 시리얼 용 오프라인 상품권 ID' }),
    __metadata("design:type", Array)
], ResOfflineCouponDTO.prototype, "random_coupon_List", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수동=0 or 자동=1', description: '시리얼 생성 방법' }),
    __metadata("design:type", String)
], ResOfflineCouponDTO.prototype, "same_coupon_serial_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["오프라인 쿠폰 ID"], description: '지급 쿠폰 목록 : 동일 시리얼 용 오프라인 상품권 ID' }),
    __metadata("design:type", Array)
], ResOfflineCouponDTO.prototype, "same_coupon_List", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용기간_시작일' }),
    __metadata("design:type", Date)
], ResOfflineCouponDTO.prototype, "coupon_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용가긴_종료일' }),
    __metadata("design:type", Date)
], ResOfflineCouponDTO.prototype, "coupon_end_date", void 0);
exports.ResOfflineCouponDTO = ResOfflineCouponDTO;
exports.ResOfflineCouponData = {
    "office_coupon_id": "오프라인 쿠폰 ID",
    "name": "쿠폰 이름",
    "description": "쿠폰 설명",
    "issued_method": "전체=0 or 마일리지_지급_상품권=1 or 쿠폰_지급_상품권_랜덤=2 or 쿠폰_지급_상품권_동일=3",
    "mileage_serial": "마일리지 시라얼 넘버",
    "mileage_serial_method": "수동=0 or 자동=1",
    "mileage_generation_count": 300,
    "mileage_amount": 500,
    "random_coupon_serial": "쿠폰 지급 상품권(랜덤 시리얼 넘버)",
    "random_coupon_serial_method": "수동=0 or 자동=1",
    "random_coupon_generation_count": 300,
    "random_coupon_list": [
        "오프라인 상품권 ID"
    ],
    "same_coupon_serial_method": "수동=0 or 자동=1",
    "same_coupon_list": [
        "오프라인 상품권 ID"
    ],
    "coupon_start_date": "2022-04-29T10:58:24.352Z",
    "coupon_end_date": "2022-04-29T10:58:24.352Z"
};
//# sourceMappingURL=ResOfflineCouponDTO.js.map