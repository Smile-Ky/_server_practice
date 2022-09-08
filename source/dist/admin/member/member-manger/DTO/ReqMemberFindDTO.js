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
exports.ReqMemberFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqMemberFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '고객명=0 or 아이디=1 or 휴대전화=2 or 이메일=3', description: '검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberFindDTO.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberFindDTO.prototype, "find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 ID', description: '회원 그룹 ID 값 작성' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberFindDTO.prototype, "user_group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '가입일자=0 or 최근방문일=1', description: '날짜 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberFindDTO.prototype, "find_date_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '날짜 조회 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], ReqMemberFindDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '날짜 조회 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], ReqMemberFindDTO.prototype, "end_date", void 0);
exports.ReqMemberFindDTO = ReqMemberFindDTO;
//# sourceMappingURL=ReqMemberFindDTO.js.map