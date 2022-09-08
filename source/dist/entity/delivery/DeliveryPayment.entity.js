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
exports.DeliveryPaymentEntity = void 0;
const typeorm_1 = require("typeorm");
let DeliveryPaymentEntity = class DeliveryPaymentEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '택배 비용 ID' }),
    __metadata("design:type", Number)
], DeliveryPaymentEntity.prototype, "delivery_payment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, comment: '우편번호' }),
    __metadata("design:type", String)
], DeliveryPaymentEntity.prototype, "address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, comment: '상세 주소' }),
    __metadata("design:type", String)
], DeliveryPaymentEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], DeliveryPaymentEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], DeliveryPaymentEntity.prototype, "update_date", void 0);
DeliveryPaymentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'delivery_payment' }),
    (0, typeorm_1.Unique)(['delivery_payment_id'])
], DeliveryPaymentEntity);
exports.DeliveryPaymentEntity = DeliveryPaymentEntity;
//# sourceMappingURL=DeliveryPayment.entity.js.map