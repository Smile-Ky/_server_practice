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
exports.ResDiscountFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResDiscountFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄 할인 고유 ID', description: '일괄 할인 고유 ID' }),
    __metadata("design:type", String)
], ResDiscountFromDTO.prototype, "batch_discount_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄 할인명', description: '일괄 할인명' }),
    __metadata("design:type", String)
], ResDiscountFromDTO.prototype, "batch_discount_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '시작일' }),
    __metadata("design:type", Date)
], ResDiscountFromDTO.prototype, "batch_discount_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '종료일' }),
    __metadata("design:type", Date)
], ResDiscountFromDTO.prototype, "batch_discount_end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '사용 여부' }),
    __metadata("design:type", Boolean)
], ResDiscountFromDTO.prototype, "is_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 회원_그룹별=1', description: '회원 조건' }),
    __metadata("design:type", String)
], ResDiscountFromDTO.prototype, "use_member_group_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['회원그룹 고유 ID'], description: '회원 그룹 설정' }),
    __metadata("design:type", Array)
], ResDiscountFromDTO.prototype, "member_group_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '정률할인=0 or 정액할일=1', description: '할인 타입' }),
    __metadata("design:type", String)
], ResDiscountFromDTO.prototype, "discount_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '할인 설졍' }),
    __metadata("design:type", Number)
], ResDiscountFromDTO.prototype, "discount_setting_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                sequence: "상품 순서",
                product_option_id: "상품 고유 ID",
                product_price: '정가',
                product_sale_price: '할인 가격'
            }] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ResDiscountFromDTO.prototype, "product_list", void 0);
exports.ResDiscountFromDTO = ResDiscountFromDTO;
//# sourceMappingURL=ResDiscountFromDTO.js.map