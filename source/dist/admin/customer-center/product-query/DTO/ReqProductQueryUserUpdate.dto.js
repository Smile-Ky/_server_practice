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
exports.ReqProductQueryUserUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqProductQueryUserUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품문의=0 배송문의=1 기타=2', description: '문의 타입 (상품문의=0 배송문의=1 기타=2)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryUserUpdateDto.prototype, "query_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '공개=1 숨김=0', description: '공개여부 (공개=1 숨김=0)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqProductQueryUserUpdateDto.prototype, "is_open", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '제목', description: '제목' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryUserUpdateDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '질문', description: '질문' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductQueryUserUpdateDto.prototype, "query_content", void 0);
exports.ReqProductQueryUserUpdateDto = ReqProductQueryUserUpdateDto;
//# sourceMappingURL=ReqProductQueryUserUpdate.dto.js.map