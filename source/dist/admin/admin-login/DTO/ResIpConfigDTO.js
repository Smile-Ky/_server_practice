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
exports.ResIpConfigData = exports.ResIpConfigDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResIpConfigDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'ip 데이터 고유 키 값', description: '고유 키 값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIpConfigDTO.prototype, "ip_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0.0.0.0', description: '요청온 ip' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIpConfigDTO.prototype, "ip_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'ip 설명', description: 'ip 설명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResIpConfigDTO.prototype, "ip_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, description: '승인 상태' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ResIpConfigDTO.prototype, "approved_states", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '요청 보낸 날짜' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResIpConfigDTO.prototype, "request_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '승인한 날짜' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResIpConfigDTO.prototype, "approved_date", void 0);
exports.ResIpConfigDTO = ResIpConfigDTO;
exports.ResIpConfigData = {
    "ip_id": "ip 데이터 고유 키 값",
    "ip_name": "0.0.0.0",
    "ip_description": "ip 설명",
    "approved_states": false,
    "request_date": "2022-05-30T06:34:25.996Z",
    "approved_date": "2022-05-30T06:34:25.996Z"
};
//# sourceMappingURL=ResIpConfigDTO.js.map