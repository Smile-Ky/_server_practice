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
exports.ResPaymentCouponListData = exports.ResPaymentCouponListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResPaymentCouponListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 아이디', description: '쿠폰 아이디 값' }),
    __metadata("design:type", String)
], ResPaymentCouponListDTO.prototype, "coupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 이름', description: '쿠폰 이름' }),
    __metadata("design:type", String)
], ResPaymentCouponListDTO.prototype, "coupon_name", void 0);
exports.ResPaymentCouponListDTO = ResPaymentCouponListDTO;
exports.ResPaymentCouponListData = {
    coupon_id: '쿠폰 ID',
    coupon_name: '쿠폰 이름'
};
//# sourceMappingURL=ResPaymentCouponListDTO.js.map