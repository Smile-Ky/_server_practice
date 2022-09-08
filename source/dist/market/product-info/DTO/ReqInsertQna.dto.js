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
exports.ReqInsertQnaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqInsertQnaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 id', description: '상품 고유 id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertQnaDto.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '문의 유형의 고유 번호(ix)', description: '문의 유형의 고유 번호(ix)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertQnaDto.prototype, "div", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '문의 제목', description: '문의 제목' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertQnaDto.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '문의 내용', description: '문의 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertQnaDto.prototype, "contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0, 1(숨김 처리)', description: '0, 1(숨김 처리)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertQnaDto.prototype, "isHidden", void 0);
exports.ReqInsertQnaDto = ReqInsertQnaDto;
//# sourceMappingURL=ReqInsertQna.dto.js.map