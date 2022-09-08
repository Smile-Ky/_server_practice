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
exports.ReqBatchesProductFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqBatchesProductFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품명=0 or 상품코드=1', description: '상품 검색 : 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductFindDTO.prototype, "product_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 검색 키워드', description: '상품 검색 : 검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductFindDTO.prototype, "product_find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품등록일=0 or 상품수정일=1', description: '날짜 검색 : 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductFindDTO.prototype, "date_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-06-21', description: '판매 등록일 : 검색 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductFindDTO.prototype, "date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-07-21', description: '판매 등록일 : 검색 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductFindDTO.prototype, "date_end", void 0);
exports.ReqBatchesProductFindDTO = ReqBatchesProductFindDTO;
//# sourceMappingURL=ReqBatchesProductFindDTO.js.map