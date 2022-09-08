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
exports.ReqCartAddDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqCartAddDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 ID', description: '상품 고유 ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCartAddDTO.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ amt: '수량', option_id: '상품 옵션 고유 id' }], description: '상품 옵션 정보 ID' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqCartAddDTO.prototype, "optionData", void 0);
exports.ReqCartAddDTO = ReqCartAddDTO;
//# sourceMappingURL=ReqCartAddDTO.js.map