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
exports.CouponToMemberEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("../member/Member.entity");
const Coupon_entity_1 = require("./Coupon.entity");
const OrderDetail_Entity_1 = require("../order/OrderDetail.Entity");
let CouponToMemberEntity = class CouponToMemberEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '쿠폰-맴버 맴핑 고유 ID' }),
    __metadata("design:type", String)
], CouponToMemberEntity.prototype, "coupon_to_member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], CouponToMemberEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Coupon_entity_1.CouponEntity, coupon_id => coupon_id),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", Coupon_entity_1.CouponEntity)
], CouponToMemberEntity.prototype, "coupon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: true, comment: '쿠폰 생성일' }),
    __metadata("design:type", Date)
], CouponToMemberEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: '쿠폰 사용일' }),
    __metadata("design:type", Date)
], CouponToMemberEntity.prototype, "use_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '사용 여부 (미사용=0 or 사용=1 or 취소=2)' }),
    __metadata("design:type", Number)
], CouponToMemberEntity.prototype, "is_use", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], CouponToMemberEntity.prototype, "cancel_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderDetail_Entity_1.OrderDetailEntity, (OrderDetailEntity) => OrderDetailEntity.order_detail_id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'order_detail_id' }),
    __metadata("design:type", OrderDetail_Entity_1.OrderDetailEntity)
], CouponToMemberEntity.prototype, "order_detail", void 0);
CouponToMemberEntity = __decorate([
    (0, typeorm_1.Entity)('coupon_to_member'),
    (0, typeorm_1.Unique)(['coupon_to_member_id'])
], CouponToMemberEntity);
exports.CouponToMemberEntity = CouponToMemberEntity;
//# sourceMappingURL=CouponToMember.entity.js.map