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
exports.ResOneToOneDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResOneToOneDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1대1 고유 ID', description: '1대1 고유 ID' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "query_one_to_one_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문번호', description: '주문번호' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'FAQ 제목', description: '1대1 제목' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '답변 작성자', description: '답변 작성자' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1대1 질문', description: '1대1 질문' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "one_to_one_q", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '1대1 답변', description: '1대1 답변' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "one_to_one_a", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '맴버 이름', description: '맴버 이름' }),
    __metadata("design:type", String)
], ResOneToOneDto.prototype, "member_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-10-10', description: '작성일' }),
    __metadata("design:type", Date)
], ResOneToOneDto.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-10-10', description: '수정일' }),
    __metadata("design:type", Date)
], ResOneToOneDto.prototype, "update_date", void 0);
exports.ResOneToOneDto = ResOneToOneDto;
//# sourceMappingURL=ResOneToOne.dto.js.map