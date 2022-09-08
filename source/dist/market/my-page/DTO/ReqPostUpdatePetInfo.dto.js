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
exports.ReqPostUpdatePetInfoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqPostUpdatePetInfoDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려견 이름', description: '반려견 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostUpdatePetInfoDto.prototype, "petName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려견', description: '반려견' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostUpdatePetInfoDto.prototype, "petType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려견 생일', description: '반려견 생일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostUpdatePetInfoDto.prototype, "petBirth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반려견 무게', description: '반려견 무게' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqPostUpdatePetInfoDto.prototype, "petWeight", void 0);
exports.ReqPostUpdatePetInfoDto = ReqPostUpdatePetInfoDto;
//# sourceMappingURL=ReqPostUpdatePetInfo.dto.js.map