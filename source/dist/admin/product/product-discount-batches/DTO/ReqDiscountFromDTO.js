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
exports.ReqDiscountFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqDiscountFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄 할인명', description: '일괄 할인명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFromDTO.prototype, "batch_discount_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFromDTO.prototype, "batch_discount_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFromDTO.prototype, "batch_discount_end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqDiscountFromDTO.prototype, "is_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 회원_그룹별=1', description: '회원 조건' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFromDTO.prototype, "use_member_group_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['회원그룹 고유 ID'], description: '회원 그룹 설정' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqDiscountFromDTO.prototype, "member_group_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '정률할인=0 or 정액할일=1 or 개별할인=3', description: '할인 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFromDTO.prototype, "discount_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '할인 설졍' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqDiscountFromDTO.prototype, "discount_setting_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                sequence: "상품 순서",
                product_option_id: "상품 고유 ID",
                product_price: '정가',
                product_sale_price: '할인 가격',
                is_show: '노출 여부'
            }] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqDiscountFromDTO.prototype, "product_list", void 0);
exports.ReqDiscountFromDTO = ReqDiscountFromDTO;
//# sourceMappingURL=ReqDiscountFromDTO.js.map