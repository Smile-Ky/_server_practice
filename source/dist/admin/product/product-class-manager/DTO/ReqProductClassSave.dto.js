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
exports.ReqProductClassSaveDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqProductClassSaveDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '상품분류 명' }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", String)
], ReqProductClassSaveDto.prototype, "class_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '미사용=0 or 사용=1 or 숨김=2', description: '분류 사용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], ReqProductClassSaveDto.prototype, "use_classification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '상위 상품분류 고유 ID', description: '상위 상품분류 고유 ID' }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", String)
], ReqProductClassSaveDto.prototype, "top_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '카테고리 이미지 URL', description: '카테고리 이미지 URL' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReqProductClassSaveDto.prototype, "image_url", void 0);
exports.ReqProductClassSaveDto = ReqProductClassSaveDto;
//# sourceMappingURL=ReqProductClassSave.dto.js.map