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
exports.ReqUserFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUserFindDTO {
}
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ default: ['유저 ID'], description: '특정 쿠폰을 발급 되기를 희망하는 유저 목룍' }),
    __metadata("design:type", Array)
], ReqUserFindDTO.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0=중복발급 미허용 or 1=중복발급 허용', description: '중복 발급 가능 여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFindDTO.prototype, "duplicate_yn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0=전체발급 미허용 or 1=전체발급 허용', description: '전체 발급 가능 여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFindDTO.prototype, "all_yn", void 0);
exports.ReqUserFindDTO = ReqUserFindDTO;
//# sourceMappingURL=ReqUserFindDTO.js.map