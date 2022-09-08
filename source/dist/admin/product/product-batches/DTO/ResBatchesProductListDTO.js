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
exports.ResBatchesProductListData = exports.ResBatchesProductListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResBatchesProductListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 ID', description: '상품 고유 ID' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 이미지 URL', description: '상품 이미지 URL' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1000, description: '도매가' }),
    __metadata("design:type", Number)
], ResBatchesProductListDTO.prototype, "product_wholesale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1900, description: '정가' }),
    __metadata("design:type", Number)
], ResBatchesProductListDTO.prototype, "product_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1900, description: '판매가' }),
    __metadata("design:type", Number)
], ResBatchesProductListDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일시품절 or 판매중 or 판매종료', description: '판매상태' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_sale_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품분류 고유 ID', description: '카테고리 ID' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_class_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '생활용품', description: '카테고리 내용' }),
    __metadata("design:type", String)
], ResBatchesProductListDTO.prototype, "product_class_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '노출여부' }),
    __metadata("design:type", Boolean)
], ResBatchesProductListDTO.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록일' }),
    __metadata("design:type", Date)
], ResBatchesProductListDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일' }),
    __metadata("design:type", Date)
], ResBatchesProductListDTO.prototype, "update_date", void 0);
exports.ResBatchesProductListDTO = ResBatchesProductListDTO;
exports.ResBatchesProductListData = {
    "product_id": "상품 고유 ID",
    "product_url_id": "상품 이미지 고유 ID 값",
    "product_url": "상품 이미지 URL",
    "product_name": "상품 명",
    "product_code": "상품 코드",
    "product_wholesale_price": 1000,
    "product_price": 1900,
    "product_sale_price": 1900,
    "product_sale_state": "일시품절 or 판매중 or 판매종료",
    "product_class_id": "상품분류 고유 ID",
    "product_class_description": "간식>생활용품",
    "is_show": true,
    "create_date": "2022-05-06T02:55:00.466Z",
    "update_date": "2022-05-06T02:55:00.466Z"
};
//# sourceMappingURL=ResBatchesProductListDTO.js.map