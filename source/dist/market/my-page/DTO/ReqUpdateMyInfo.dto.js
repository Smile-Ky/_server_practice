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
exports.ReqUpdateMyInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUpdateMyInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '변경할 이름(닉네임)', description: '변경할 이름(닉네임)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateMyInfoDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '핸드폰 번호', description: '핸드폰 번호(- 제외)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateMyInfoDto.prototype, "pcs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이메일 주소', description: '이메일 주소' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateMyInfoDto.prototype, "email", void 0);
exports.ReqUpdateMyInfoDto = ReqUpdateMyInfoDto;
//# sourceMappingURL=ReqUpdateMyInfo.dto.js.map