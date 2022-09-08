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
exports.ReqPostInsertReviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqPostInsertReviewDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려동물 이름', description: '반려동물 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "petName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려동물 생일', description: '반려동물 생일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "petBirthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려동물 무게 ', description: '반려동물 무게' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "petWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려동물 id 키', description: '반려동물 id 키' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "petId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 id 키 값', description: '상품 id 키 값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문번호(order_main) id 키 값', description: '주문번호(order_main) id 키 값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "oid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송정보(order_detail) 키값', description: '배송정보(order_detail) 키값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "od_ix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 옵션  키값', description: '상품 옵션  키값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "option_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '별점', description: '별점' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "valuation_goods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '리뷰 내용', description: '리뷰 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "bbs_contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '문서 번호 키값', description: '문서 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostInsertReviewDto.prototype, "bbs_ix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['이미지 id'], description: '우선 이미지 업로드를 태운 뒤 나온 아이디 배열을 등록 / 첫번째 배열은 대표이미지가 됨' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqPostInsertReviewDto.prototype, "bbsFile", void 0);
exports.ReqPostInsertReviewDto = ReqPostInsertReviewDto;
//# sourceMappingURL=ReqPostInsertReview.dto.js.map