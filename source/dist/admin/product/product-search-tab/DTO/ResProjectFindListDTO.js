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
exports.ResProjectFindListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResProjectFindListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 ID', description: '상품 고유 ID' }),
    __metadata("design:type", String)
], ResProjectFindListDTO.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 이미지 URL', description: '상품 이미지 URL' }),
    __metadata("design:type", String)
], ResProjectFindListDTO.prototype, "product_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    __metadata("design:type", String)
], ResProjectFindListDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 명', description: '브랜드 명' }),
    __metadata("design:type", String)
], ResProjectFindListDTO.prototype, "product_brand_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    __metadata("design:type", String)
], ResProjectFindListDTO.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1900, description: '상품가격 / 판매가' }),
    __metadata("design:type", Number)
], ResProjectFindListDTO.prototype, "product_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일시품절 or 판매중 or 판매종료', description: '판매상태' }),
    __metadata("design:type", String)
], ResProjectFindListDTO.prototype, "product_sale_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '노출여부' }),
    __metadata("design:type", Boolean)
], ResProjectFindListDTO.prototype, "is_show", void 0);
exports.ResProjectFindListDTO = ResProjectFindListDTO;
//# sourceMappingURL=ResProjectFindListDTO.js.map