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
exports.ResProductListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResProductListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 ID', description: '상품 고유 ID' }),
    __metadata("design:type", String)
], ResProductListDTO.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'image url', description: '상품 이미지 url' }),
    __metadata("design:type", String)
], ResProductListDTO.prototype, "image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 명', description: '브랜드 명' }),
    __metadata("design:type", String)
], ResProductListDTO.prototype, "brand_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    __metadata("design:type", String)
], ResProductListDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1000, description: '도매가' }),
    __metadata("design:type", Number)
], ResProductListDTO.prototype, "product_wholesale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1900, description: '정가' }),
    __metadata("design:type", Number)
], ResProductListDTO.prototype, "product_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1900, description: '판매가' }),
    __metadata("design:type", Number)
], ResProductListDTO.prototype, "product_sale_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일시품절=0 or 판매중=1 or 판매종료=2', description: '판매상태' }),
    __metadata("design:type", String)
], ResProductListDTO.prototype, "product_sale_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: "상품 노출 여부" }),
    __metadata("design:type", Boolean)
], ResProductListDTO.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록일' }),
    __metadata("design:type", Date)
], ResProductListDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일' }),
    __metadata("design:type", Date)
], ResProductListDTO.prototype, "update_date", void 0);
exports.ResProductListDTO = ResProductListDTO;
//# sourceMappingURL=ResProductListDTO.js.map