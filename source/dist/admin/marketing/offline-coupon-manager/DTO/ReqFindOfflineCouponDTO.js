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
exports.ReqFindOfflineCouponDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqFindOfflineCouponDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰이름=0 or 쿠폰설명=1', description: '검색 유형' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 텍스트' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 마일리지_지급_상품권=1 or 쿠폰_지급_상품권_랜덤=2 or 쿠폰_지급_상품권_동일=3', description: '발급 유형' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "issued_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용가능 기간 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "is_use_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용가능 기간 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "is_use_date_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록 기간 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "registration_range_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록 기간 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFindOfflineCouponDTO.prototype, "registration_range_end", void 0);
exports.ReqFindOfflineCouponDTO = ReqFindOfflineCouponDTO;
//# sourceMappingURL=ReqFindOfflineCouponDTO.js.map