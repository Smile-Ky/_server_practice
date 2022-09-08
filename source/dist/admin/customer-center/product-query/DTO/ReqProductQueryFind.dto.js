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
exports.ReqProductQueryFindDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqProductQueryFindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0, 완료=1, 대기=2', description: '답변 여부(전체=0, 완료=1, 대기=2)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "is_answer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-01-01', description: '작성일자 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "write_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-10-10', description: '작성일자 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "write_date_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품명=0 제목=1 내용=2 작성자=3', description: '검색 타입 (상품명=0 제목=1 내용=2 작성자=3)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품문의=0 배송문의=1 기타=2', description: '문의 분류 (상품문의=0 배송문의=1 기타=2)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "query_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '셀러업체', description: '셀러업체' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryFindDto.prototype, "product_company_name", void 0);
exports.ReqProductQueryFindDto = ReqProductQueryFindDto;
//# sourceMappingURL=ReqProductQueryFind.dto.js.map