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
exports.ResHomeClaimData = exports.ResHomeClaimInquiryDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResHomeClaimInquiryDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '클래임 관리 : 취소 요청' }),
    __metadata("design:type", Number)
], ResHomeClaimInquiryDTO.prototype, "claim_cancel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '클래임 관리 : 반품 요청' }),
    __metadata("design:type", Number)
], ResHomeClaimInquiryDTO.prototype, "claim_product_return", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '클래임 관리 : 교환 요청' }),
    __metadata("design:type", Number)
], ResHomeClaimInquiryDTO.prototype, "claim_exchange", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '문의 현황 : 상품 문의' }),
    __metadata("design:type", Number)
], ResHomeClaimInquiryDTO.prototype, "inquiry_product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '문의 현황 : 1:1문의' }),
    __metadata("design:type", Number)
], ResHomeClaimInquiryDTO.prototype, "inquiry_individual", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2850', description: '문의 현황 : 상품 리뷰' }),
    __metadata("design:type", Number)
], ResHomeClaimInquiryDTO.prototype, "inquiry_product_review", void 0);
exports.ResHomeClaimInquiryDTO = ResHomeClaimInquiryDTO;
exports.ResHomeClaimData = {
    "claim_cancel": 0,
    "claim_product_return": 0,
    "claim_exchange": 0
};
//# sourceMappingURL=ResHomeClaimInquiryDTO.js.map