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
exports.ResBrandFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResBrandFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 고유 ID', description: '브랜드 고유 ID' }),
    __metadata("design:type", String)
], ResBrandFromDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 명', description: '브랜드 명' }),
    __metadata("design:type", String)
], ResBrandFromDTO.prototype, "brand_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 코드', description: '브렌드 코드' }),
    __metadata("design:type", String)
], ResBrandFromDTO.prototype, "brand_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '브랜드 사용여부' }),
    __metadata("design:type", Boolean)
], ResBrandFromDTO.prototype, "is_use_brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '환불 배송지 : 우편번호', description: '환불 배송지 : 우편번호' }),
    __metadata("design:type", String)
], ResBrandFromDTO.prototype, "refund_address_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '환불 배송지 : 주소', description: '환불 배송지 : 주소' }),
    __metadata("design:type", String)
], ResBrandFromDTO.prototype, "refund_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '브랜드 등록일' }),
    __metadata("design:type", Date)
], ResBrandFromDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '브랜드 수정일' }),
    __metadata("design:type", Date)
], ResBrandFromDTO.prototype, "update_date", void 0);
exports.ResBrandFromDTO = ResBrandFromDTO;
//# sourceMappingURL=ResBrandFromDTO.js.map