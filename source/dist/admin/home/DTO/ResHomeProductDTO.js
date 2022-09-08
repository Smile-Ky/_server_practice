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
exports.ResHomeProductData = exports.ResHomeProductDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResHomeProductDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '323', description: '상품 현황 : 판매 중' }),
    __metadata("design:type", Number)
], ResHomeProductDTO.prototype, "product_selling", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '4', description: '상품 현황 : 일시품절' }),
    __metadata("design:type", Number)
], ResHomeProductDTO.prototype, "product_sold_out", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '상품 현황 : 미안전재고' }),
    __metadata("design:type", Number)
], ResHomeProductDTO.prototype, "product_lacks", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '상품 현황 : 판매종료' }),
    __metadata("design:type", Number)
], ResHomeProductDTO.prototype, "product_end", void 0);
exports.ResHomeProductDTO = ResHomeProductDTO;
exports.ResHomeProductData = {
    "product_selling": 323,
    "product_sold_out": 4,
    "product_lacks": 0,
    "product_end": 0
};
//# sourceMappingURL=ResHomeProductDTO.js.map