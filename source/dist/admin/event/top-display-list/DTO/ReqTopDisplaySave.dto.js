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
exports.ReqTopDisplaySaveDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqTopDisplaySaveDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '메인 전시 이름', description: '메인 전시 타이틀 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqTopDisplaySaveDto.prototype, "display_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '노출 여부 (노출=1, 미노출=0)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqTopDisplaySaveDto.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '노출 기간 사용 여부 (사용=1, 미사용=0)' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqTopDisplaySaveDto.prototype, "is_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-06-11', description: '노출 기간 : 시작일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqTopDisplaySaveDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-12-11', description: '노출 기간 : 종료일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqTopDisplaySaveDto.prototype, "end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ product_id: "상품 ID", sequence: "순서" }], description: '상품 고유 ID 리스트 ( product_id )' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqTopDisplaySaveDto.prototype, "product_id_list", void 0);
exports.ReqTopDisplaySaveDto = ReqTopDisplaySaveDto;
//# sourceMappingURL=ReqTopDisplaySave.dto.js.map