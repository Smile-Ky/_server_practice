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
exports.ReqReviewUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqReviewUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '리뷰 별점', description: '리뷰 별점' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqReviewUpdateDto.prototype, "review_star_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '리뷰 제목', description: '리뷰 제목' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewUpdateDto.prototype, "review_title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '리뷰 내용', description: '리뷰 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqReviewUpdateDto.prototype, "review_content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '공개 여부', description: '공개 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqReviewUpdateDto.prototype, "is_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['이미지 고유 ID'], description: '이미지 고유 ID 리스트' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqReviewUpdateDto.prototype, "image_list", void 0);
exports.ReqReviewUpdateDto = ReqReviewUpdateDto;
//# sourceMappingURL=ReqReviewUpdate.dto.js.map