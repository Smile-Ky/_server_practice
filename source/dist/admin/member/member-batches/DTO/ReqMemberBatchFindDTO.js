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
exports.ReqMemberBatchFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqMemberBatchFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['회원 그룹 ID'], description: '회원 그룹 ID' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqMemberBatchFindDTO.prototype, "user_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['수신=1', '수신거부=0'], description: 'sms 수신 여부 (수신=1, 수신거부=0)' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqMemberBatchFindDTO.prototype, "is_sms", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['수신=1', '수신거부=0'], description: 'email 수신 여부 (수신=1, 수신거부=0)' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqMemberBatchFindDTO.prototype, "is_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-06-11', description: '기간 검색 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberBatchFindDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-07-11', description: '기간 검색 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberBatchFindDTO.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원명=0 or 아이디=1 or 휴대폰=2', description: '조건 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberBatchFindDTO.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '조건 검색 : 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMemberBatchFindDTO.prototype, "find_text", void 0);
exports.ReqMemberBatchFindDTO = ReqMemberBatchFindDTO;
//# sourceMappingURL=ReqMemberBatchFindDTO.js.map