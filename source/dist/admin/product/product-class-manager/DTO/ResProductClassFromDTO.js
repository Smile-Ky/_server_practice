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
exports.ResProductClassFromData = exports.ResProductClassFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResProductClassFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '상품분류 고유 키' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResProductClassFromDTO.prototype, "product_class_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '상품분류 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResProductClassFromDTO.prototype, "class_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '미사용=0 or 사용=1 or 숨김=2', description: '분류 사용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], ResProductClassFromDTO.prototype, "use_classification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상위 상품분류 고유 키', description: '상위 상품분류 고유 키' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResProductClassFromDTO.prototype, "top_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '동일 상품 분류 내 순서' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], ResProductClassFromDTO.prototype, "sequence", void 0);
exports.ResProductClassFromDTO = ResProductClassFromDTO;
exports.ResProductClassFromData = {
    "class_idx": "상품분류 고유 키",
    "class_name": "상품분류 명",
    "use_classification": "미사용=0 or 사용=1 or 숨김=2",
    "top_class": "상위 상품분류 고유 키",
    "sequence": 0
};
//# sourceMappingURL=ResProductClassFromDTO.js.map