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
exports.ReqMileageFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqMileageFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 적립=1 or 사용=2', description: '적립 상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMileageFindDTO.prototype, "mileage_payment_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-06-10', description: '기간(처리일자) : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMileageFindDTO.prototype, "range_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-07-10', description: '기간(처리일자) : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMileageFindDTO.prototype, "range_end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원명=0 or 주문번호=1 or 아이디=2 or 적립내용=3', description: '조건 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMileageFindDTO.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqMileageFindDTO.prototype, "find_text", void 0);
exports.ReqMileageFindDTO = ReqMileageFindDTO;
//# sourceMappingURL=ReqMileageFindDTO.js.map