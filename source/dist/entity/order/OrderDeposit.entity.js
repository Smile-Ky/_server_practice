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
exports.OrderDepositEntity = void 0;
const typeorm_1 = require("typeorm");
const OrderMain_entity_1 = require("./OrderMain.entity");
let OrderDepositEntity = class OrderDepositEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", Number)
], OrderDepositEntity.prototype, "order_deposit_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderMain_entity_1.OrderMainEntity, (OrderMainEntity) => OrderMainEntity.order_id, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], OrderDepositEntity.prototype, "OrderMain", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: "50", nullable: false, comment: "주문 개별 ID" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "order_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "결제방법" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "deposit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "입금은행" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "deposit_bank", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "입금계좌번호" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "deposit_account_num", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "입금기한" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "deposit_closing_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "입금자명" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "deposit_account", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "입금 상태(0=입금전, 1=입금완료, 2=취소" }),
    __metadata("design:type", String)
], OrderDepositEntity.prototype, "deposit_status", void 0);
OrderDepositEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "order_deposit" }),
    (0, typeorm_1.Unique)(["order_deposit_id"])
], OrderDepositEntity);
exports.OrderDepositEntity = OrderDepositEntity;
//# sourceMappingURL=OrderDeposit.entity.js.map