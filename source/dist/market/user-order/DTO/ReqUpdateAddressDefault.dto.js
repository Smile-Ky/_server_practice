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
exports.ReqUpdateAddressDefaultDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUpdateAddressDefaultDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송지 고유 id(ix 키 값)', description: '배송지 고유 id(ix 키 값)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressDefaultDto.prototype, "ix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 번호(있을 경우 마이페이지 구매 배송지 변경)', description: '주문 번호(있을 경우 마이페이지 구매 배송지 변경)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressDefaultDto.prototype, "oid", void 0);
exports.ReqUpdateAddressDefaultDto = ReqUpdateAddressDefaultDto;
//# sourceMappingURL=ReqUpdateAddressDefault.dto.js.map