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
exports.OrderRefundEntity = void 0;
const typeorm_1 = require("typeorm");
const OrderMain_entity_1 = require("./OrderMain.entity");
let OrderRefundEntity = class OrderRefundEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], OrderRefundEntity.prototype, "order_refund_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderMain_entity_1.OrderMainEntity, (OrderMainEntity) => OrderMainEntity.order_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], OrderRefundEntity.prototype, "OrderMain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '환불 예정 금액' }),
    __metadata("design:type", Number)
], OrderRefundEntity.prototype, "refund_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', comment: '반품에 필요한 배송비' }),
    __metadata("design:type", Number)
], OrderRefundEntity.prototype, "refund_deliver_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], OrderRefundEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: '환불일' }),
    __metadata("design:type", Date)
], OrderRefundEntity.prototype, "refund_date", void 0);
OrderRefundEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_refund' }),
    (0, typeorm_1.Unique)(['order_refund_id'])
], OrderRefundEntity);
exports.OrderRefundEntity = OrderRefundEntity;
//# sourceMappingURL=OrderRefund.entity.js.map