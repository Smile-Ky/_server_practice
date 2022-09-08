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
exports.ReqOrderSeparateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderSeparateDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "분리 갯수", description: "분리 갯수" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], ReqOrderSeparateDTO.prototype, "separation_value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문상세번호', description: '주문상세번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션', description: '옵션' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "product_option_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션 상세', description: '옵션 상새' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "product_option_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드', description: '브랜드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발송사', description: '발송사' }),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "delivery_company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주소', description: '주소' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "member_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문상세번호', description: '주문상세번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderSeparateDTO.prototype, "order_id", void 0);
exports.ReqOrderSeparateDTO = ReqOrderSeparateDTO;
//# sourceMappingURL=ReqOrderSeparateDTO.js.map