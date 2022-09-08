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
exports.OfflineCouponListData = exports.ResOfflineCouponListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResOfflineCouponListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '오프라인 쿠폰 ID', description: '오프라인 쿠폰 ID' }),
    __metadata("design:type", String)
], ResOfflineCouponListDTO.prototype, "offlineCoupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 이름', description: '쿠폰 이름' }),
    __metadata("design:type", String)
], ResOfflineCouponListDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 설명', description: '쿠폰 설명' }),
    __metadata("design:type", String)
], ResOfflineCouponListDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용기간_시작일' }),
    __metadata("design:type", Date)
], ResOfflineCouponListDTO.prototype, "coupon_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용가긴_종료일' }),
    __metadata("design:type", Date)
], ResOfflineCouponListDTO.prototype, "coupon_end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 마일리지_지급_상품권=1 or 쿠폰_지급_상품권_랜덤=2 or 쿠폰_지급_상품권_동일=3', description: '발급 방식' }),
    __metadata("design:type", String)
], ResOfflineCouponListDTO.prototype, "issued_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '3', description: '발행 수' }),
    __metadata("design:type", Number)
], ResOfflineCouponListDTO.prototype, "issued_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '3', description: '사용 수' }),
    __metadata("design:type", Number)
], ResOfflineCouponListDTO.prototype, "issued_use_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일' }),
    __metadata("design:type", Date)
], ResOfflineCouponListDTO.prototype, "create_date", void 0);
exports.ResOfflineCouponListDTO = ResOfflineCouponListDTO;
exports.OfflineCouponListData = {
    "offlineCoupon_id": "오프라인 쿠폰 ID",
    "name": "쿠폰 이름",
    "description": "쿠폰 설명",
    "coupon_start_date": "2022-04-29T06:04:34.342Z",
    "coupon_end_date": "2022-04-29T06:04:34.342Z",
    "issued_method": "전체=0 or 마일리지_지급_상품권=1 or 쿠폰_지급_상품권_랜덤=2 or 쿠폰_지급_상품권_동일=3",
    "issued_count": 3,
    "issued_use_count": 3
};
//# sourceMappingURL=ResOfflineCouponListDTO.js.map