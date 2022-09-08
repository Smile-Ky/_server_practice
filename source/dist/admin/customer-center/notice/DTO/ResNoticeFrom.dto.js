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
exports.ResNoticeFromDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResNoticeFromDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '공지 고유 ID', description: '공지 고유 ID' }),
    __metadata("design:type", String)
], ResNoticeFromDto.prototype, "notice_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '공지 제목', description: '공지 제목' }),
    __metadata("design:type", String)
], ResNoticeFromDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '작성자', description: '작성자' }),
    __metadata("design:type", String)
], ResNoticeFromDto.prototype, "writer", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '공지 내용', description: '공지 내용' }),
    __metadata("design:type", String)
], ResNoticeFromDto.prototype, "notice_doc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-10-11', description: '작성일' }),
    __metadata("design:type", Date)
], ResNoticeFromDto.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2022-10-11', description: '수정일' }),
    __metadata("design:type", Date)
], ResNoticeFromDto.prototype, "update_date", void 0);
exports.ResNoticeFromDto = ResNoticeFromDto;
//# sourceMappingURL=ResNoticeFrom.dto.js.map