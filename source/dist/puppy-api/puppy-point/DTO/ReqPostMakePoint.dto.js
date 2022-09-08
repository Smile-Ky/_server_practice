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
exports.ReqPostMakePointDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqPostMakePointDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 아이디(암호화 X)', description: '회원 아이디' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostMakePointDto.prototype, "uid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립, 사용 포인트', description: '적립, 사용 포인트' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqPostMakePointDto.prototype, "point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립, 사용 내용', description: '적립, 사용 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostMakePointDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립, 사용 체크(적립:1, 사용:2)', description: '적립, 사용 체크(적립:1, 사용:2)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqPostMakePointDto.prototype, "state", void 0);
exports.ReqPostMakePointDto = ReqPostMakePointDto;
//# sourceMappingURL=ReqPostMakePoint.dto.js.map