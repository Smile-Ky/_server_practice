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
exports.ReqPlanEventFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqPlanEventFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이벤트=1 or 기획전=2', description: '이벤트/기획전 구분(이벤트=1 or 기획전=2)' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqPlanEventFromDTO.prototype, "from_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용=true or 미사용=false', description: '전시 여부(사용=true or 미사용=false)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqPlanEventFromDTO.prototype, "is_display", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이벤트/기확전 타이틀', description: '이벤트/기확전 타이틀' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFromDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용=true or 미사용=false', description: '댓글 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqPlanEventFromDTO.prototype, "is_use_comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-01-11', description: '이벤트 기간 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFromDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-12-11', description: '이벤트 기간 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFromDTO.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '표사=true or 미표시=false', description: '날짜 표시 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqPlanEventFromDTO.prototype, "is_show_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지 고유 ID', description: 'OG_Tag 이미지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFromDTO.prototype, "OG_tag_image_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지 고유 ID', description: '리스트 이미지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFromDTO.prototype, "list_image_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이벤트 상세 내용', description: '이벤트 상세 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPlanEventFromDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ product_id: '9', sequence: 1 }], description: '상품 그룹' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqPlanEventFromDTO.prototype, "product_group", void 0);
exports.ReqPlanEventFromDTO = ReqPlanEventFromDTO;
//# sourceMappingURL=ReqPlanEventFromDTO.js.map