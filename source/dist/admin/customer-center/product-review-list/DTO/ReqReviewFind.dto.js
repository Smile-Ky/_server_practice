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
exports.ReqReviewFindDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqReviewFindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0, 일반=1, 프리미엄=2, 관리자=3', description: '후기 분류(전체=0, 일반=1, 프리미엄=2, 관리자=3)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "review_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0, 답변완료=1, 답변대기=2', description: '관리자 댓글 여부(전체=0, 답변완료=1, 답변대기=2)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "is_admin_comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-01-11', description: '작성일자 : 시작' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "write_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-10-11', description: '작성일자 : 종료' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "write_date_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '평균 별점 : 시작' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "star_point_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '5', description: '평군 별점 : 종료' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "start_point_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품명=0, 작성자=1, 내용=2', description: '검색 조건(상품명=0, 작성자=1, 내용=2)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewFindDto.prototype, "find_text", void 0);
exports.ReqReviewFindDto = ReqReviewFindDto;
//# sourceMappingURL=ReqReviewFind.dto.js.map