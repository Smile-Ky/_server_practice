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
exports.ReqPlanEventFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqPlanEventFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이벤트/기획전 제목 검색 키워드', description: '이벤트/기획전 제목 검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFindDTO.prototype, "find_title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 사용=1 or 미사용=2', description: '전시 여부' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFindDTO.prototype, "is_display", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 이벤트=1 or 기획전=2', description: '기획전/이벤트 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFindDTO.prototype, "is_plan_event_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 사용=1 or 미사용=2', description: '댓글 사용 유무' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFindDTO.prototype, "is_use_comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: { start: "2022-01-22", end: "2022-12-22" }, description: '시작일자' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ReqPlanEventFindDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: { start: "2022-01-22", end: "2022-12-22" }, description: '종료일자' }),
    (0, class_validator_1.IsObject)(),
    __metadata("design:type", Object)
], ReqPlanEventFindDTO.prototype, "end_date", void 0);
exports.ReqPlanEventFindDTO = ReqPlanEventFindDTO;
//# sourceMappingURL=ReqPlanEventFindDTO.js.map