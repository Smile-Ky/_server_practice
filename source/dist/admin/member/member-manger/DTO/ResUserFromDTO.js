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
exports.ResUserFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResUserFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 고유 키 값', description: '유저 데이터 고유 키 값' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록일' }),
    __metadata("design:type", Date)
], ResUserFromDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최근 방문일' }),
    __metadata("design:type", Date)
], ResUserFromDTO.prototype, "last_visit_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저이름', description: '이름' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 아이디', description: '유저 아아디' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "member_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '비밀번호', description: '유저 비밀번호' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 ID', description: '회원 그룹 : ID 값 작성' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 이름', description: '회원 그룹 : 이름' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "group_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0000-00-00', description: '생년월일' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '남성=0 or 여성=1 or 기타=2', description: '성별' }),
    __metadata("design:type", Number)
], ResUserFromDTO.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '000-0000-0000', description: '휴대폰 번호' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 이메일', description: '유저 이메일' }),
    __metadata("design:type", String)
], ResUserFromDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1, description: 'SMS 수신 여부' }),
    __metadata("design:type", Boolean)
], ResUserFromDTO.prototype, "is_sms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1, description: '정보 수신' }),
    __metadata("design:type", Boolean)
], ResUserFromDTO.prototype, "is_information", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                address_id: '주소 고유 ID',
                address_number: '우편번호',
                address: '주소',
                address_detail: '상세주소'
            }], description: '주소' }),
    __metadata("design:type", Array)
], ResUserFromDTO.prototype, "member_address", void 0);
exports.ResUserFromDTO = ResUserFromDTO;
//# sourceMappingURL=ResUserFromDTO.js.map