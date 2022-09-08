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
exports.ReqGroupFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqGroupFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 이름', description: '회원 그룹 이름' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ReqGroupFromDTO.prototype, "group_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2, description: '그룹 등급' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ReqGroupFromDTO.prototype, "group_level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '회원 가입 시 기본 회원 그룹' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ReqGroupFromDTO.prototype, "is_default_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '쿠폰 사용 가능 여부' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ReqGroupFromDTO.prototype, "is_use_coupon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '마일리지 사용/적립 가능 여부' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ReqGroupFromDTO.prototype, "is_use_mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '회원 그룹 할일율 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ReqGroupFromDTO.prototype, "is_use_group_discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 5, description: '회원 그룹 할인율 (단위 : %)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ReqGroupFromDTO.prototype, "group_discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '자동 그룹 변경 여부' }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Boolean)
], ReqGroupFromDTO.prototype, "is_auto_change_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 4, description: '산정기간 (단위 : 개월)' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ReqGroupFromDTO.prototype, "change_group_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10000, description: '산정 주문금액 시작' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ReqGroupFromDTO.prototype, "change_group_start_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 49999, description: '산정 주문 금액 끝' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ReqGroupFromDTO.prototype, "change_group_end_price", void 0);
exports.ReqGroupFromDTO = ReqGroupFromDTO;
//# sourceMappingURL=ReqGroupFromDTO.js.map