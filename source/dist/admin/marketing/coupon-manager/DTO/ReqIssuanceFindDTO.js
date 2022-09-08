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
exports.ReqIssuanceFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqIssuanceFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아이디=0 or 이름=1 or 시리얼넘버=2', description: '조건 검색 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqIssuanceFindDTO.prototype, "find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '조건 검택 테스트' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqIssuanceFindDTO.prototype, "find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 등록전=1 or 등록완료=2', description: '상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqIssuanceFindDTO.prototype, "state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 일자 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], ReqIssuanceFindDTO.prototype, "use_date_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 일자 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Date)
], ReqIssuanceFindDTO.prototype, "use_date_end", void 0);
exports.ReqIssuanceFindDTO = ReqIssuanceFindDTO;
//# sourceMappingURL=ReqIssuanceFindDTO.js.map