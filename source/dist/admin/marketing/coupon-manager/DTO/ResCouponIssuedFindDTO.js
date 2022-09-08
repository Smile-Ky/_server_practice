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
exports.ResCouponIssuedFindData = exports.ResCouponIssuedFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResCouponIssuedFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급 아이디', description: '발급 아이디' }),
    __metadata("design:type", String)
], ResCouponIssuedFindDTO.prototype, "issued_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 아아디', description: '유저 아이디' }),
    __metadata("design:type", String)
], ResCouponIssuedFindDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 이름', description: '유저 이름' }),
    __metadata("design:type", String)
], ResCouponIssuedFindDTO.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용기간 시작일' }),
    __metadata("design:type", Date)
], ResCouponIssuedFindDTO.prototype, "use_range_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용기간 종료일' }),
    __metadata("design:type", Date)
], ResCouponIssuedFindDTO.prototype, "use_range_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '발급일자' }),
    __metadata("design:type", Date)
], ResCouponIssuedFindDTO.prototype, "issued_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '잔여 기간', description: '잔여 기간' }),
    __metadata("design:type", Number)
], ResCouponIssuedFindDTO.prototype, "remaining_period", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용여부' }),
    __metadata("design:type", Boolean)
], ResCouponIssuedFindDTO.prototype, "Is_use", void 0);
exports.ResCouponIssuedFindDTO = ResCouponIssuedFindDTO;
exports.ResCouponIssuedFindData = {
    "issued_id": "발급 아이디",
    "user_id": "유저 아아디",
    "user_name": "유저 이름",
    "use_range_start": "2022-04-28T14:04:00.786Z",
    "use_range_end": "2022-04-28T14:04:00.786Z",
    "issued_date": "2022-04-28T14:04:00.786Z",
    "remaining_period": "잔여 기간",
    "Is_use": true
};
//# sourceMappingURL=ResCouponIssuedFindDTO.js.map