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
exports.ResCouponUserFindData = exports.ResCouponUserFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResCouponUserFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용자 ID', description: '사용자 아이디 값' }),
    __metadata("design:type", String)
], ResCouponUserFindDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용자 이름', description: '사용자 이름' }),
    __metadata("design:type", String)
], ResCouponUserFindDTO.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '그룹', description: '사용자가 속한 그룹' }),
    __metadata("design:type", String)
], ResCouponUserFindDTO.prototype, "user_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이메일', description: '사용자 이메일' }),
    __metadata("design:type", String)
], ResCouponUserFindDTO.prototype, "user_email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '휴대폰 번호', description: '사용자 휴대폰 번호' }),
    __metadata("design:type", String)
], ResCouponUserFindDTO.prototype, "user_phone", void 0);
exports.ResCouponUserFindDTO = ResCouponUserFindDTO;
exports.ResCouponUserFindData = {
    "user_id": "사용자 ID",
    "user_name": "사용자 이름",
    "user_group": "그룹",
    "user_email": "이메일",
    "user_phone": "휴대폰 번호"
};
//# sourceMappingURL=ResCouponUserFindDTO.js.map