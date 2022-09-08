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
exports.ReqDoGoodsSearchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqDoGoodsSearchDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색할 단어', description: '검색할 단어' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDoGoodsSearchDto.prototype, "keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'sale(인기순(기본값)),low(최저가순), high(최고가순), regdate(최신순)',
        description: '정렬기준 [ sale(인기순(기본값)),low(최저가순), high(최고가순), regdate(최신순) ]' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqDoGoodsSearchDto.prototype, "sort", void 0);
exports.ReqDoGoodsSearchDto = ReqDoGoodsSearchDto;
//# sourceMappingURL=ReqDoGoodsSearch.dto.js.map