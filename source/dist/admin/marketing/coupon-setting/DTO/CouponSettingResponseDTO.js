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
exports.couponSettingData = exports.CouponSettingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CouponSettingDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '쿠폰 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CouponSettingDTO.prototype, "is_use_coupon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '쿠폰 적용 기준 금액' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CouponSettingDTO.prototype, "is_use_bargain_prices", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '입금 전 취소' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CouponSettingDTO.prototype, "is_restore_cancel_before_deposit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '취소' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CouponSettingDTO.prototype, "is_restore_cancel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '반품' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CouponSettingDTO.prototype, "is_restore_product_return", void 0);
exports.CouponSettingDTO = CouponSettingDTO;
exports.couponSettingData = {
    "is_use_coupon": true,
    "is_use_bargain_prices": true,
    "is_restore_cancel_before_deposit": true,
    "is_restore_cancel": true,
    "is_restore_product_return": true
};
//# sourceMappingURL=CouponSettingResponseDTO.js.map