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
exports.CouponToMemberGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const Coupon_entity_1 = require("./Coupon.entity");
const MemberGroup_entity_1 = require("../member/MemberGroup.entity");
let CouponToMemberGroupEntity = class CouponToMemberGroupEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '쿠폰-맴버 그룹 맵핑 고유 ID' }),
    __metadata("design:type", String)
], CouponToMemberGroupEntity.prototype, "coupon_to_member_group_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => MemberGroup_entity_1.MemberGroupEntity, member_group_id => member_group_id),
    (0, typeorm_1.JoinColumn)({ name: 'member_group_id' }),
    __metadata("design:type", MemberGroup_entity_1.MemberGroupEntity)
], CouponToMemberGroupEntity.prototype, "member_group_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Coupon_entity_1.CouponEntity, coupon_id => coupon_id),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", Coupon_entity_1.CouponEntity)
], CouponToMemberGroupEntity.prototype, "coupon_id", void 0);
CouponToMemberGroupEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon_to_member_group' }),
    (0, typeorm_1.Unique)(['coupon_to_member_group_id'])
], CouponToMemberGroupEntity);
exports.CouponToMemberGroupEntity = CouponToMemberGroupEntity;
//# sourceMappingURL=CouponToMemberGroup.entity.js.map