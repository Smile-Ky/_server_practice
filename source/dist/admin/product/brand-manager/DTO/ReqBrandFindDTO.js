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
exports.ReqBrandFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqBrandFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드명=0 or 브랜드코드=1', description: '검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBrandFindDTO.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBrandFindDTO.prototype, "find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 노출안함=1 or 노출함=2', description: '사용 여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBrandFindDTO.prototype, "is_use_brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0000-00-00', description: '브랜드 등록일 : 검색 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBrandFindDTO.prototype, "create_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0000-00-00', description: '브랜드 등록일 : 검색 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBrandFindDTO.prototype, "create_date_end", void 0);
exports.ReqBrandFindDTO = ReqBrandFindDTO;
//# sourceMappingURL=ReqBrandFindDTO.js.map