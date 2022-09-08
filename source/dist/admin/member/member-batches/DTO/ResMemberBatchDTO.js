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
exports.ResMemberBatchData = exports.ResMemberBatchDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResMemberBatchDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 고유 키 값', description: '유저 데이터 고유 키 값' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '가입일' }),
    __metadata("design:type", Date)
], ResMemberBatchDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최근 방문일' }),
    __metadata("design:type", Date)
], ResMemberBatchDTO.prototype, "last_visit_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 ID', description: '회원 그룹 ID' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "user_group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 명', description: '회원 그굽 명' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "user_group_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 아이디', description: '유저 아아디' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 이름', description: '유저 이름' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '000-0000-0000', description: '휴대폰 번호' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "user_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 이메일', description: '유저 이메일' }),
    __metadata("design:type", String)
], ResMemberBatchDTO.prototype, "user_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: 'SMS 수신 여부' }),
    __metadata("design:type", Boolean)
], ResMemberBatchDTO.prototype, "is_sms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '정보 수신' }),
    __metadata("design:type", Boolean)
], ResMemberBatchDTO.prototype, "is_information", void 0);
exports.ResMemberBatchDTO = ResMemberBatchDTO;
exports.ResMemberBatchData = {
    "user_idx": "유저 고유 키 값",
    "create_date": "2022-05-02T04:13:16.921Z",
    "last_visit_date": "2022-05-02T04:13:16.921Z",
    "user_group_id": "회원 그룹 ID",
    "user_class": "개인회원 or 직원",
    "user_id": "유저 아이디",
    "user_phone": "000-0000-0000",
    "user_email": "유저 이메일",
    "is_sms": true,
    "is_information": true
};
//# sourceMappingURL=ResMemberBatchDTO.js.map