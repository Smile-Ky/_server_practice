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
exports.ReqBatchesProductUpdateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqBatchesProductUpdateDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["상품 ID"], description: '일괄 변경 할 상품 리스트' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqBatchesProductUpdateDTO.prototype, "product_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일시품절=0 or 판매중=1 or 판매종료=2', description: '판매상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductUpdateDTO.prototype, "product_sale_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '노출=1 or 노출안함=0', description: '노출여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductUpdateDTO.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '대표카테고리=0 or 중복 카테고리=1', description: '변경 할 카테고리 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBatchesProductUpdateDTO.prototype, "product_class_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["상품 카타고리 ID"], description: '중복 상품 카타고리' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqBatchesProductUpdateDTO.prototype, "product_class_id", void 0);
exports.ReqBatchesProductUpdateDTO = ReqBatchesProductUpdateDTO;
//# sourceMappingURL=ReqBatchesProductUpdateDTO.js.map