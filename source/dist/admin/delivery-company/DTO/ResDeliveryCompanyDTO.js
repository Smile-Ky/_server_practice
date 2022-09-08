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
exports.ResDeliveryCompanyListData = exports.ResDeliveryCompanyDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResDeliveryCompanyDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 회사 고유 ID', description: '택배 회사 고유 ID' }),
    __metadata("design:type", String)
], ResDeliveryCompanyDTO.prototype, "delivery_company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 회사 이름', description: '택배회사 이름' }),
    __metadata("design:type", String)
], ResDeliveryCompanyDTO.prototype, "delivery_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '생성일' }),
    __metadata("design:type", Date)
], ResDeliveryCompanyDTO.prototype, "create_date", void 0);
exports.ResDeliveryCompanyDTO = ResDeliveryCompanyDTO;
exports.ResDeliveryCompanyListData = {
    "delivery_company_id": "택배 회사 고유 ID",
    "delivery_company_name": "택배 회사 이름",
    "create_date": "2022-05-10T05:34:20.589Z"
};
//# sourceMappingURL=ResDeliveryCompanyDTO.js.map