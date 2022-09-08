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
exports.ReqGetReviewListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqGetReviewListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '현재 페이지', description: '현재 페이지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetReviewListDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '한 페이지에 나올 최대 목록 개수', description: '한 페이지에 나올 최대 목록 개수' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetReviewListDto.prototype, "max", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 ID 값', description: '상품 고유 ID 값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetReviewListDto.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'totalInfo (고정값, 상품 상세 페이지에서만 사용)', description: 'totalInfo (고정값, 상품 상세 페이지에서만 사용)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetReviewListDto.prototype, "reviewTotalInfo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1 : 포토리뷰만, 2 : 전체리뷰 보기', description: '1 : 포토리뷰만, 2 : 전체리뷰 보기' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetReviewListDto.prototype, "photo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: `star : 평점순(기본 값), desc : 최신순`, description: 'star : 평점순(기본 값), desc : 최신순' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetReviewListDto.prototype, "sort", void 0);
exports.ReqGetReviewListDto = ReqGetReviewListDto;
//# sourceMappingURL=ReqGetReviewList.dto.js.map