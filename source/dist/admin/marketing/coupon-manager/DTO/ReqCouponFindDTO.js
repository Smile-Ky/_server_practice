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
exports.ReqCouponFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqCouponFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰이름=0 or 쿠폰설명=1 or 쿠폰번호=2', description: '검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCouponFindDTO.prototype, "coupon_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '출석체크 1000원 쿠폰', description: '검색 텍스트' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCouponFindDTO.prototype, "coupon_find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록 기간 : 시작' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCouponFindDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록 기간 : 종료' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCouponFindDTO.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["전체(0)", "PC(1)", "Mobile(2)", "App(3)"], description: '쿠폰 사용 범위' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCouponFindDTO.prototype, "coupon_use_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["정률할인(0)", "정액할인(1)"], description: '할인 타입' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCouponFindDTO.prototype, "discount_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["관리자_수동_발급(0)", "특정_조건_자동_발급(1)", "시리얼_넘버_등록(2)"], description: '발급 방식' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCouponFindDTO.prototype, "issued_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["전체회원(0)", "회원그룹(1)"], description: '발급 대상' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCouponFindDTO.prototype, "issued_user_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["사용(0)", "사용_발급불가(1)", "사용불가(2)"], description: '쿠폰 사용여부' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCouponFindDTO.prototype, "coupon_is_use", void 0);
exports.ReqCouponFindDTO = ReqCouponFindDTO;
//# sourceMappingURL=ReqCouponFindDTO.js.map