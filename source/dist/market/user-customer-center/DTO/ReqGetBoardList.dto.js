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
exports.ReqGetBoardListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqGetBoardListDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '현재 페이지', description: '현재 페이지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetBoardListDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'notice : 공지사항, faq : 자주 묻는 질문', description: '게시글 타입 (notice : 공지사항, faq : 자주 묻는 질문)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqGetBoardListDto.prototype, "bType", void 0);
exports.ReqGetBoardListDto = ReqGetBoardListDto;
//# sourceMappingURL=ReqGetBoardList.dto.js.map