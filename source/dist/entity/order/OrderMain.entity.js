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
exports.OrderMainEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("../member/Member.entity");
const MemberAddress_entity_1 = require("../member/MemberAddress.entity");
let OrderMainEntity = class OrderMainEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: "50", nullable: false, comment: "주문 개별 ID" }),
    __metadata("design:type", String)
], OrderMainEntity.prototype, "order_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', comment: "주문 일자" }),
    __metadata("design:type", String)
], OrderMainEntity.prototype, "order_create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: "100", nullable: false, comment: "주문자 핸드폰" }),
    __metadata("design:type", String)
], OrderMainEntity.prototype, "order_user_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", comment: "주문자 메일", length: "100" }),
    __metadata("design:type", String)
], OrderMainEntity.prototype, "order_email_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", comment: "결제 일자" }),
    __metadata("design:type", String)
], OrderMainEntity.prototype, "deposit_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "결제 금액" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "order_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "결제 마일리지" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "order_use_mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "결제 배송비" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "order_delivery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "기획할인" }),
    __metadata("design:type", String)
], OrderMainEntity.prototype, "planning_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "쿠폰할인" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "coupon_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "회원할인" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "member_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "특별할인" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "special_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", default: 0, comment: "실제 오더 체크 (1=실제오더 / 0=실제오더 아님)" }),
    __metadata("design:type", Number)
], OrderMainEntity.prototype, "order_check_yn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Member_entity_1.MemberEntity, (MemberEntity) => MemberEntity.member_id),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], OrderMainEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => MemberAddress_entity_1.MemberAddressEntity, member_address_id => member_address_id.address_id, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'member_address_id' }),
    __metadata("design:type", MemberAddress_entity_1.MemberAddressEntity)
], OrderMainEntity.prototype, "member_address_id", void 0);
OrderMainEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "order_main" }),
    (0, typeorm_1.Unique)(["order_id"])
], OrderMainEntity);
exports.OrderMainEntity = OrderMainEntity;
//# sourceMappingURL=OrderMain.entity.js.map