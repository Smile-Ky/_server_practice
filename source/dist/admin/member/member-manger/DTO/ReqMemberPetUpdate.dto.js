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
exports.ReqMemberPetUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqMemberPetUpdateDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '강아지 이름', description: '강아지 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '강아지 종', description: '강아지 종' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'MALE=0 or FEMALE=1', description: '강아지 성별 (MALE=0 or FEMALE=1)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '강아지 생일', description: '강아지 생일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "birth_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '중성화 여부 (true or false)', description: '중성화 여부 (true or false)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Boolean)
], ReqMemberPetUpdateDto.prototype, "is_neutralized", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '강아지 무게', description: '강아지 무게' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "weight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '간략소개', description: '간략소개' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "character", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '강아지 프로필 이미지', description: '강아지 프로필 이미지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberPetUpdateDto.prototype, "image_url", void 0);
exports.ReqMemberPetUpdateDto = ReqMemberPetUpdateDto;
//# sourceMappingURL=ReqMemberPetUpdate.dto.js.map