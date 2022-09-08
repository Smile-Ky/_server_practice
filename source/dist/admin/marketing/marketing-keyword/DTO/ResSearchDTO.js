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
exports.ResSearchData = exports.ResSearchDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResSearchDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색어 내용', description: '검색어 내용' }),
    __metadata("design:type", String)
], ResSearchDTO.prototype, "search_keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 30, description: '검색어 조회 수' }),
    __metadata("design:type", Number)
], ResSearchDTO.prototype, "search_keyword_view", void 0);
exports.ResSearchDTO = ResSearchDTO;
exports.ResSearchData = {
    "search_keyword": "검색어 내용",
    "search_keyword_view": 30
};
//# sourceMappingURL=ResSearchDTO.js.map