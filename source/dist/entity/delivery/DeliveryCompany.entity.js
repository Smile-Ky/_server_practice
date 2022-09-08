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
exports.DeliveryCompanyEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let DeliveryCompanyEntity = class DeliveryCompanyEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 회사 고유 ID', description: '택배 회사 고유 ID' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: "택배회사 ID" }),
    __metadata("design:type", String)
], DeliveryCompanyEntity.prototype, "delivery_company_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 회사 이름', description: '택배회사 고유 코드' }),
    (0, typeorm_1.Column)({ type: 'varchar', default: null, length: 255, comment: "택배 회사 고유 코드" }),
    __metadata("design:type", String)
], DeliveryCompanyEntity.prototype, "delivery_company_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '택배 회사 이름', description: '택배회사 이름' }),
    (0, typeorm_1.Column)({ type: 'varchar', default: null, length: 255, comment: "택배 회사 이름" }),
    __metadata("design:type", String)
], DeliveryCompanyEntity.prototype, "delivery_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date(), description: '생성일' }),
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'NOW()', nullable: false, comment: '생성날짜' }),
    __metadata("design:type", Date)
], DeliveryCompanyEntity.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: new Date(), description: '수정일' }),
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'NOW()', nullable: false, comment: '수정날짜' }),
    __metadata("design:type", Date)
], DeliveryCompanyEntity.prototype, "update_date", void 0);
DeliveryCompanyEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "delivery_company" }),
    (0, typeorm_1.Unique)(['delivery_company_id'])
], DeliveryCompanyEntity);
exports.DeliveryCompanyEntity = DeliveryCompanyEntity;
//# sourceMappingURL=DeliveryCompany.entity.js.map