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
exports.ReqGetTopDisplayProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqGetTopDisplayProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상단 탭 고유 ID', description: '상단 탭 고유 ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetTopDisplayProductDto.prototype, "topDisplayId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '현재 페이지', description: '현재 페이지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetTopDisplayProductDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'sale(인기순), low(최저가순), high (최고가순), regdate(최신순)', description: '정렬 기준 [sale(인기순), low(최저가순), high (최고가순), regdate(최신순)]' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetTopDisplayProductDto.prototype, "sort", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '한 페이지에 나올 최대 목록 개수', description: '한 페이지에 나올 최대 목록 개수' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetTopDisplayProductDto.prototype, "max", void 0);
exports.ReqGetTopDisplayProductDto = ReqGetTopDisplayProductDto;
//# sourceMappingURL=ReqGetTopDisplayProduct.dto.js.map