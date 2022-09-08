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
exports.ReqCouponFindUserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqCouponFindUserDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아아디=0 or 이름=1 or 이메일=2 or 전화번호=3', description: '회원검색 선택 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCouponFindUserDTO.prototype, "searchType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 검색 키워드', description: "회원 검색 키워드" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCouponFindUserDTO.prototype, "searchText", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['신규 회원(1)', '낌찍한 발자국(2)', '브론즈 발자국(3)', '실버 발자국(4)', '골드 발자국(5)', '다이아 발자국(6)'], description: '회원 그룹' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCouponFindUserDTO.prototype, "memberClass", void 0);
exports.ReqCouponFindUserDTO = ReqCouponFindUserDTO;
//# sourceMappingURL=ReqCouponFindUserDTO.js.map