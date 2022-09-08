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
exports.resSimpleCouponData = exports.ResSimpleCouponDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResSimpleCouponDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 ID', description: '쿠폰 ID' }),
    __metadata("design:type", String)
], ResSimpleCouponDTO.prototype, "coupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 이름', description: '쿠폰 이름' }),
    __metadata("design:type", String)
], ResSimpleCouponDTO.prototype, "coupon_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 넘버', description: '쿠폰 넘버' }),
    __metadata("design:type", String)
], ResSimpleCouponDTO.prototype, "coupon_number", void 0);
exports.ResSimpleCouponDTO = ResSimpleCouponDTO;
exports.resSimpleCouponData = new ResSimpleCouponDTO();
exports.resSimpleCouponData.coupon_id = '3232';
exports.resSimpleCouponData.coupon_name = '출석체크 1000원 쿠폰';
exports.resSimpleCouponData.coupon_number = 'MSCP32432423423';
//# sourceMappingURL=ResSimpleCouponDTO.js.map