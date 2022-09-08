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
exports.ReqSignUpDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqSignUpDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'sup@gameberry.co.kr', description: '어드민 계정 아아디' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqSignUpDto.prototype, "login_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'password', description: '어드민 계정 패스워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqSignUpDto.prototype, "login_pw", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '피리마켓 관리자', description: '계정 사용자 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqSignUpDto.prototype, "user_name", void 0);
exports.ReqSignUpDto = ReqSignUpDto;
//# sourceMappingURL=ReqSignUp.dto.js.map