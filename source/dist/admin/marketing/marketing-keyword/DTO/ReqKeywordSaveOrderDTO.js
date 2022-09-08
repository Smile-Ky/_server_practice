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
exports.ReqKeywordSaveOrderDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const ResKeywordDTO_1 = require("./ResKeywordDTO");
const class_validator_1 = require("class-validator");
class ReqKeywordSaveOrderDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: [ResKeywordDTO_1.ResKeywordData], description: '재 정렬 된 키워드에 속성 값 배열' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqKeywordSaveOrderDTO.prototype, "keyword_list", void 0);
exports.ReqKeywordSaveOrderDTO = ReqKeywordSaveOrderDTO;
//# sourceMappingURL=ReqKeywordSaveOrderDTO.js.map