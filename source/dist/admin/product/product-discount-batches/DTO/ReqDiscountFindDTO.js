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
exports.ReqDiscountFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqDiscountFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄 할인 검색 키워드', description: '일괄 할인 검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "discount_find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 진행중=1 or 진행완료=2', description: '진행 여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "is_progress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 사용=1 or 미사용=2', description: '사용 여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "is_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['전체=0', '회원_그룹별=1'], description: '회원 조건' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqDiscountFindDTO.prototype, "is_use_member_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '시작 일자 : 시작' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "start_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '시작 일자 : 종료' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "start_date_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '종료 일자 : 시작' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "end_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '종료 일자 : 종료' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDiscountFindDTO.prototype, "end_date_end", void 0);
exports.ReqDiscountFindDTO = ReqDiscountFindDTO;
//# sourceMappingURL=ReqDiscountFindDTO.js.map