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
exports.OrderHistoryEntity = void 0;
const typeorm_1 = require("typeorm");
const OrderMain_entity_1 = require("./OrderMain.entity");
const OrderDetail_Entity_1 = require("./OrderDetail.Entity");
let OrderHistoryEntity = class OrderHistoryEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], OrderHistoryEntity.prototype, "order_history_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderMain_entity_1.OrderMainEntity, (OrderMainEntity) => OrderMainEntity.order_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], OrderHistoryEntity.prototype, "order_main", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderDetail_Entity_1.OrderDetailEntity, (OrderDetailEntity) => OrderDetailEntity.order_detail_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_detail_id' }),
    __metadata("design:type", OrderDetail_Entity_1.OrderDetailEntity)
], OrderHistoryEntity.prototype, "order_detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '변경상태' }),
    __metadata("design:type", String)
], OrderHistoryEntity.prototype, "changed_status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '내용' }),
    __metadata("design:type", String)
], OrderHistoryEntity.prototype, "changed_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '변경자정보' }),
    __metadata("design:type", String)
], OrderHistoryEntity.prototype, "changed_user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', comment: '변경일자' }),
    __metadata("design:type", Date)
], OrderHistoryEntity.prototype, "changed_date", void 0);
OrderHistoryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_history' }),
    (0, typeorm_1.Unique)(['order_history_id'])
], OrderHistoryEntity);
exports.OrderHistoryEntity = OrderHistoryEntity;
//# sourceMappingURL=OrderHistory.Entity.js.map