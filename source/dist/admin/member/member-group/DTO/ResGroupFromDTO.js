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
exports.ResGroupFromData = exports.ResGroupFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResGroupFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '고유 키 값', description: '회원 그룹 고유 키 값' }),
    __metadata("design:type", String)
], ResGroupFromDTO.prototype, "group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 이름', description: '회원 그룹 이름' }),
    __metadata("design:type", String)
], ResGroupFromDTO.prototype, "group_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2, description: '그룹 등급' }),
    __metadata("design:type", Number)
], ResGroupFromDTO.prototype, "group_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '회원 가입 시 기본 회원 그룹' }),
    __metadata("design:type", Boolean)
], ResGroupFromDTO.prototype, "is_default_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '쿠폰 사용 가능 여부' }),
    __metadata("design:type", Boolean)
], ResGroupFromDTO.prototype, "is_use_coupon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '마일리지 사용/적립 가능 여부' }),
    __metadata("design:type", Boolean)
], ResGroupFromDTO.prototype, "is_use_mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '회원 그룹 할일율 사용 여부' }),
    __metadata("design:type", Boolean)
], ResGroupFromDTO.prototype, "is_use_group_discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 5, description: '회원 그룹 할인율 (단위 : %)' }),
    __metadata("design:type", Number)
], ResGroupFromDTO.prototype, "group_discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '자동 그룹 변경 여부' }),
    __metadata("design:type", Boolean)
], ResGroupFromDTO.prototype, "is_auto_change_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 4, description: '산정기간 (단위 : 개월)' }),
    __metadata("design:type", Number)
], ResGroupFromDTO.prototype, "change_group_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10000, description: '산정 주문금액 시작' }),
    __metadata("design:type", Number)
], ResGroupFromDTO.prototype, "change_group_start_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 49999, description: '산정 주문 금액 끝' }),
    __metadata("design:type", Number)
], ResGroupFromDTO.prototype, "change_group_end_price", void 0);
exports.ResGroupFromDTO = ResGroupFromDTO;
exports.ResGroupFromData = {
    "group_idx": "고유 키 값",
    "group_name": "회원 그룹 이름",
    "group_level": 2,
    "is_default_group": true,
    "is_use_coupon": true,
    "is_use_mileage": true,
    "is_use_group_discount": true,
    "group_discount": 5,
    "is_auto_change_group": true,
    "change_group_range": 4,
    "change_group_start_price": 10000,
    "change_group_end_price": 49999
};
//# sourceMappingURL=ResGroupFromDTO.js.map