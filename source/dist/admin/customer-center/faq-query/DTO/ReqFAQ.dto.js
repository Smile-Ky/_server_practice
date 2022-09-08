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
exports.ReqFAQDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqFAQDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'FAQ 제목', description: 'FAQ 제목' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFAQDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '작성자', description: '작성자' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFAQDto.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'FAQ 질문', description: 'FAQ 질문' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFAQDto.prototype, "faq_q", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'FAQ 답변', description: 'FAQ 답변' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqFAQDto.prototype, "faq_a", void 0);
exports.ReqFAQDto = ReqFAQDto;
//# sourceMappingURL=ReqFAQ.dto.js.map