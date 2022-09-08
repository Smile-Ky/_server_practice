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
exports.ReqReviewSettingDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqReviewSettingDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '상품 평점 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqReviewSettingDto.prototype, "is_use_rating", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '구매와 상관 없음=1, 구매 확정 이후=0', description: '후기 작성 가능 시점 (구매와 상관 없음=1, 구매 확정 이후=0)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqReviewSettingDto.prototype, "is_use_write_review", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '쓰기권한(관리자)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqReviewSettingDto.prototype, "is_write_authority", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '글 수정 여부(사용자)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqReviewSettingDto.prototype, "is_use_review_update", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '글 삭제 여부(사용자)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqReviewSettingDto.prototype, "is_use_review_delete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '마일리지 적립 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqReviewSettingDto.prototype, "is_use_acc_mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄적립=0, 분류별적립=1, 회원그립별적립=3', description: '마일리지 적립 형태 (일괄적립=0, 분류별적립=1, 회원그립별적립=3)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqReviewSettingDto.prototype, "is_acc_mileage_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '일괄적립 마일리지 적립 량' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqReviewSettingDto.prototype, "bath_mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '일반후기 마일리지 적립 량' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqReviewSettingDto.prototype, "class_mileage_normal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '프리미엄후기 마일리지 적립 량' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqReviewSettingDto.prototype, "class_mileage_premium", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ member_group_id: '회원 그룹 고유 ID', acc_mileage: 0 }], description: '회원 그룹 별 마일리지 적립 량' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqReviewSettingDto.prototype, "member_mileage", void 0);
exports.ReqReviewSettingDto = ReqReviewSettingDto;
//# sourceMappingURL=ReqReviewSetting.dto.js.map