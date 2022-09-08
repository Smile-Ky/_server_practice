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
exports.ReqAutoCommentFromDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqAutoCommentFromDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '별점(1 / 2 / 3 / 4 / 5)', description: '별점별점(1 / 2 / 3 / 4 / 5)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], ReqAutoCommentFromDto.prototype, "star_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '답글 내용', description: '답글 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqAutoCommentFromDto.prototype, "auto_comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '활성화 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqAutoCommentFromDto.prototype, "is_use", void 0);
exports.ReqAutoCommentFromDto = ReqAutoCommentFromDto;
//# sourceMappingURL=ReqAutoCommentFrom.dto.js.map