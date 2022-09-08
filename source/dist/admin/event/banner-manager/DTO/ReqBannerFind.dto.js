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
exports.ReqBannerFindDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqBannerFindDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배너 명 검색 키워드', description: '배너 명 검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBannerFindDto.prototype, "find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 노출함=1 or 노출안함=2', description: '전시 여부 (전체=0 or 노출함=1 or 노출안함=2)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBannerFindDto.prototype, "is_display", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-01-15', description: '등록일자 검색 : 시직일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBannerFindDto.prototype, "find_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-12-15', description: '등록일자 검색 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBannerFindDto.prototype, "find_end_date", void 0);
exports.ReqBannerFindDto = ReqBannerFindDto;
//# sourceMappingURL=ReqBannerFind.dto.js.map