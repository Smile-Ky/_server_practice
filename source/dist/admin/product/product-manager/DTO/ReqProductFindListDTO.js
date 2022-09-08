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
exports.ReqProductFindListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqProductFindListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품명=0, 상품코드=1', description: '상품 검색 : 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "find_product_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 검색 키워드', description: '상품 검색 : 검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "find_product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품등록일=0 or 상품수정일=1', description: "기간 검색" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "find_date_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-01-15', description: "시작 날짜" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "find_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-12-15', description: "종료 날짜" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "find_date_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 카테고리 ID', description: "상품 카테고리 ID" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "product_class_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["일시품절=0", "판매중=1", "판매종료=2"], description: "판매상태" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFindListDTO.prototype, "is_sales_state_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["노출함=0", "노출안함=1"], description: "노출 여부" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFindListDTO.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 ID', description: "브랜드 아이디" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사입=0 or 위탁=1', description: '제품 출처 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFindListDTO.prototype, "product_company_type", void 0);
exports.ReqProductFindListDTO = ReqProductFindListDTO;
//# sourceMappingURL=ReqProductFindListDTO.js.map