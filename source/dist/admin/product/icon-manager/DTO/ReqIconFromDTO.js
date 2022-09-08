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
exports.ReqIconFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqIconFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아이콘 이름', description: '아이콘 이름' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], ReqIconFromDTO.prototype, "icon_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '아이콘 텍스트', description: '아이콘 텍스트 내용' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], ReqIconFromDTO.prototype, "icon_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '글자 색', description: '글자 색' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], ReqIconFromDTO.prototype, "font_color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '바탕화면 색', description: '바탕화면 색' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], ReqIconFromDTO.prototype, "background_color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '아이콘 사용 유무' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqIconFromDTO.prototype, "is_use_icon", void 0);
exports.ReqIconFromDTO = ReqIconFromDTO;
//# sourceMappingURL=ReqIconFromDTO.js.map