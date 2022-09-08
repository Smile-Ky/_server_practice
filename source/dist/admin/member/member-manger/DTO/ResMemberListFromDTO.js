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
exports.ResMemberListFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResMemberListFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 고유 키 값', description: '유저 데이터 고유 키 값' }),
    __metadata("design:type", String)
], ResMemberListFromDTO.prototype, "member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '신규회원', description: '유저 그룹' }),
    __metadata("design:type", String)
], ResMemberListFromDTO.prototype, "member_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저이름', description: '이름' }),
    __metadata("design:type", String)
], ResMemberListFromDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 아이디', description: '유저 아아디' }),
    __metadata("design:type", String)
], ResMemberListFromDTO.prototype, "user_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이메일', description: '이메일' }),
    __metadata("design:type", String)
], ResMemberListFromDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '000-0000-0000', description: '휴대전화' }),
    __metadata("design:type", String)
], ResMemberListFromDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최근 방문일' }),
    __metadata("design:type", Date)
], ResMemberListFromDTO.prototype, "last_visit_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '300', description: '마일리지' }),
    __metadata("design:type", Number)
], ResMemberListFromDTO.prototype, "mileage", void 0);
exports.ResMemberListFromDTO = ResMemberListFromDTO;
//# sourceMappingURL=ResMemberListFromDTO.js.map