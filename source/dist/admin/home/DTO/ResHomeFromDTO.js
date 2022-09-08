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
exports.ResHomeFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const ResHomeOrderDTO_1 = require("./ResHomeOrderDTO");
const ResHomeClaimInquiryDTO_1 = require("./ResHomeClaimInquiryDTO");
const ResHomeProductDTO_1 = require("./ResHomeProductDTO");
const ResSellingGraphDTO_1 = require("./ResSellingGraphDTO");
class ResHomeFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문 관리' }),
    __metadata("design:type", ResHomeOrderDTO_1.ResHomeOrderDTO)
], ResHomeFromDTO.prototype, "order", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '클래임 관리' }),
    __metadata("design:type", ResHomeClaimInquiryDTO_1.ResHomeClaimInquiryDTO)
], ResHomeFromDTO.prototype, "claim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '상품 관리' }),
    __metadata("design:type", ResHomeProductDTO_1.ResHomeProductDTO)
], ResHomeFromDTO.prototype, "product", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '매출 그래프' }),
    __metadata("design:type", ResSellingGraphDTO_1.ResSellingGraphDTO)
], ResHomeFromDTO.prototype, "selling_graph", void 0);
exports.ResHomeFromDTO = ResHomeFromDTO;
//# sourceMappingURL=ResHomeFromDTO.js.map