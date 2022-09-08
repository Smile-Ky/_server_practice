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
exports.ResIconData = exports.ResIconDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResIconDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아이콘 ID 값', description: '아이콘 고유 ID 값' }),
    __metadata("design:type", String)
], ResIconDTO.prototype, "icon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아이콘 이름', description: '아이콘 이름' }),
    __metadata("design:type", String)
], ResIconDTO.prototype, "icon_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아이콘 텍스트', description: '아이콘 텍스트 내용' }),
    __metadata("design:type", String)
], ResIconDTO.prototype, "icon_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '글자 색', description: '글자 색' }),
    __metadata("design:type", String)
], ResIconDTO.prototype, "font_color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '바탕화면 색', description: '바탕화면 색' }),
    __metadata("design:type", String)
], ResIconDTO.prototype, "background_color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '아이콘 사용 유무' }),
    __metadata("design:type", Boolean)
], ResIconDTO.prototype, "is_use_icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록일시' }),
    __metadata("design:type", Date)
], ResIconDTO.prototype, "create_date", void 0);
exports.ResIconDTO = ResIconDTO;
exports.ResIconData = {
    "icon_id": "아이콘 ID 값",
    "icon_name": "아이콘 이름",
    "icon_type": "텍스트=0 or 이미지=1",
    "icon_text": "아이콘 텍스트",
    "image_id": "이미지 id 값",
    "image_url": "이미지 url",
    "is_use_icon": true
};
//# sourceMappingURL=ResIconDTO.js.map