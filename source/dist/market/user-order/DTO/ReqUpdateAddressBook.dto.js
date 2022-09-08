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
exports.ReqUpdateAddressBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUpdateAddressBookDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송지 명(별칭)', description: '배송지 명(별칭)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "shipping_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '수령자 명', description: '수령자 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "recipient", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '핸드폰 번호', description: '핸드폰 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "pcs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '우편 번호', description: '우편 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "zipcode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '기본 주소', description: '기본 주소' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "address1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상세 주소', description: '상세 주소' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "address2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'insert (고정)', description: 'insert (고정)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateAddressBookDto.prototype, "mode", void 0);
exports.ReqUpdateAddressBookDto = ReqUpdateAddressBookDto;
//# sourceMappingURL=ReqUpdateAddressBook.dto.js.map