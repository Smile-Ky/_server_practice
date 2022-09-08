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
exports.ResCouponUserFindData = exports.ResCouponUserFindAfterDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResCouponUserFindAfterDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '뱔급 쿠폰 고유 ID', description: '발급 쿠폰 고유 ID' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "coupon_to_member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용자 ID', description: '사용자 아이디 값' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용자 이름', description: '사용자 이름' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용기간', description: '사용기간' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "use_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급일자', description: '발급일자' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '잔여기간', description: '잔여기간' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "waste_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용여부', description: '사용여부' }),
    __metadata("design:type", String)
], ResCouponUserFindAfterDTO.prototype, "is_use", void 0);
exports.ResCouponUserFindAfterDTO = ResCouponUserFindAfterDTO;
exports.ResCouponUserFindData = {
    "user_id": "사용자 ID",
    "user_name": "사용자 이름",
    "user_group": "그룹",
    "user_email": "이메일",
    "user_phone": "휴대폰 번호"
};
//# sourceMappingURL=ResCouponUserFindAfterDTO.js.map