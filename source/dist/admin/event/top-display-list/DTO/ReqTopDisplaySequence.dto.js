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
exports.ReqTopDisplaySequenceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqTopDisplaySequenceDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ display_id: "1", sequence: '1' }], description: '전시 상품 리스트 순서 데이터' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqTopDisplaySequenceDto.prototype, "main_display_list_sequence", void 0);
exports.ReqTopDisplaySequenceDto = ReqTopDisplaySequenceDto;
//# sourceMappingURL=ReqTopDisplaySequence.dto.js.map