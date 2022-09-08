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
exports.ResIssuanceListData = exports.ResIssuanceListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResIssuanceListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '발급 아이디', description: '발급 아이디' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIssuanceListDTO.prototype, "issued_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '시리얼 넘버', description: '시리얼 넘버' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIssuanceListDTO.prototype, "serial_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용기간 시작일' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResIssuanceListDTO.prototype, "use_range_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용기간 종료일' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResIssuanceListDTO.prototype, "use_range_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체 or 등록전 or 등록완료', description: '상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIssuanceListDTO.prototype, "use_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 고유 키', description: '유저 고유 키' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIssuanceListDTO.prototype, "user_idx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 이름', description: '유저 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIssuanceListDTO.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '유저 아이디', description: '유저 아아디' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIssuanceListDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '쿠폰 생성일' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResIssuanceListDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '쿠폰 사용일' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResIssuanceListDTO.prototype, "use_date", void 0);
exports.ResIssuanceListDTO = ResIssuanceListDTO;
exports.ResIssuanceListData = {
    "issued_idx": "발급 아이디",
    "serial_number": "시리얼 넘버",
    "use_range_start": "2022-04-30T11:57:13.032Z",
    "use_range_end": "2022-04-30T11:57:13.032Z",
    "use_state": "전체 or 등록전 or 등록완료",
    "user_idx": "유저 고유 키",
    "user_name": "유저 이름",
    "user_id": "유저 아이디",
    "create_date": "2022-04-30T11:57:13.032Z",
    "use_date": "2022-04-30T11:57:13.032Z"
};
//# sourceMappingURL=ResIssuanceListDTO.js.map