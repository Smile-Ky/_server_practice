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
exports.ReqUserFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUserFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저이름', description: '이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '비밀번호', description: '유저 비밀번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '회원 그룹 : ID 값 작성 (유저 생성 시, "" 빈 문자열로)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-06-20', description: '생년월일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '남성=0 or 여성=1 or 기타=2', description: '성별' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '000-0000-0000', description: '휴대폰 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 이메일', description: '유저 이메일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: 'SMS 수신 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqUserFromDTO.prototype, "is_sms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '정보 수신' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqUserFromDTO.prototype, "is_information", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지 URL', description: '프로필 사진 이미지' }),
    __metadata("design:type", String)
], ReqUserFromDTO.prototype, "profile_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                address_id: '주소 고유 ID',
                address_number: '우편번호',
                address: '주소',
                address_detail: '상세주소'
            }], description: '주소' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqUserFromDTO.prototype, "member_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: {
            name: '강아지 이름',
            breed: '강아지 종',
            gender: '강아지 성별 (MALE=0 or FEMALE=1)',
            birth_date: '강아지 생일',
            is_neutralized: '중성화 여부 (true or false)',
            weight: '강아지 무게',
            character: '간략소개',
            image_url: '강아지 프로필 이미지'
        },
        description: '강아지 정보'
    }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ReqUserFromDTO.prototype, "member_pet", void 0);
exports.ReqUserFromDTO = ReqUserFromDTO;
//# sourceMappingURL=ReqUserFromDTO.js.map