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
exports.OrderDeliveryEntity = void 0;
const typeorm_1 = require("typeorm");
let OrderDeliveryEntity = class OrderDeliveryEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: '주문 배송비 번호 고유 ID' }),
    __metadata("design:type", Number)
], OrderDeliveryEntity.prototype, "order_delivery_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "배송비코드" }),
    __metadata("design:type", String)
], OrderDeliveryEntity.prototype, "delivery_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "배송비" }),
    __metadata("design:type", String)
], OrderDeliveryEntity.prototype, "delivery_price", void 0);
OrderDeliveryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "order_delivery" }),
    (0, typeorm_1.Unique)(["order_delivery_id"])
], OrderDeliveryEntity);
exports.OrderDeliveryEntity = OrderDeliveryEntity;
//# sourceMappingURL=OrderDelivery.Entity.js.map