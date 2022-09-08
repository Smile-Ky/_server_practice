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
exports.OrderMemoEntity = void 0;
const typeorm_1 = require("typeorm");
const OrderMain_entity_1 = require("./OrderMain.entity");
let OrderMemoEntity = class OrderMemoEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], OrderMemoEntity.prototype, "order_memo_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderMain_entity_1.OrderMainEntity, (OrderMainEntity) => OrderMainEntity.order_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], OrderMemoEntity.prototype, "OrderMain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '분류' }),
    __metadata("design:type", String)
], OrderMemoEntity.prototype, "memo_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '50', nullable: false, comment: '메모 내용' }),
    __metadata("design:type", String)
], OrderMemoEntity.prototype, "order_memo_context", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '처리 상태' }),
    __metadata("design:type", String)
], OrderMemoEntity.prototype, "order_memo_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '50', comment: '메모 작성자' }),
    __metadata("design:type", String)
], OrderMemoEntity.prototype, "memo_writer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', comment: '메모 작성일' }),
    __metadata("design:type", String)
], OrderMemoEntity.prototype, "memo_write_date", void 0);
OrderMemoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_memo' }),
    (0, typeorm_1.Unique)(['order_memo_id'])
], OrderMemoEntity);
exports.OrderMemoEntity = OrderMemoEntity;
//# sourceMappingURL=OrderMemo.entity.js.map