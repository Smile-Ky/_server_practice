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
exports.OrderPaymentEntity = void 0;
const typeorm_1 = require("typeorm");
const OrderMain_entity_1 = require("./OrderMain.entity");
let OrderPaymentEntity = class OrderPaymentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], OrderPaymentEntity.prototype, "order_payment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderMain_entity_1.OrderMainEntity, (OrderMainEntity) => OrderMainEntity.order_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], OrderPaymentEntity.prototype, "order_main", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '결제방법' }),
    __metadata("design:type", String)
], OrderPaymentEntity.prototype, "payment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '결제 금액' }),
    __metadata("design:type", Number)
], OrderPaymentEntity.prototype, "payment_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '환불 금액' }),
    __metadata("design:type", Number)
], OrderPaymentEntity.prototype, "refund_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '잔여 금액' }),
    __metadata("design:type", Number)
], OrderPaymentEntity.prototype, "waste_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '기타' }),
    __metadata("design:type", Number)
], OrderPaymentEntity.prototype, "payment_memo", void 0);
OrderPaymentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_payment' }),
    (0, typeorm_1.Unique)(['order_payment_id'])
], OrderPaymentEntity);
exports.OrderPaymentEntity = OrderPaymentEntity;
//# sourceMappingURL=OrderPayment.Entity.js.map