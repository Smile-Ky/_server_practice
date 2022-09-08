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
exports.CouponOverlapEntity = void 0;
const typeorm_1 = require("typeorm");
const Coupon_entity_1 = require("./Coupon.entity");
let CouponOverlapEntity = class CouponOverlapEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '중복 쿠폰 고유 ID' }),
    __metadata("design:type", String)
], CouponOverlapEntity.prototype, "coupon_overlap_id", void 0);
__decorate([
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", Coupon_entity_1.CouponEntity)
], CouponOverlapEntity.prototype, "coupon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, comment: '중복 사용 가능 구폰 ID' }),
    __metadata("design:type", String)
], CouponOverlapEntity.prototype, "overlap_coupon", void 0);
CouponOverlapEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon_overlap' }),
    (0, typeorm_1.Unique)(['coupon_overlap_id'])
], CouponOverlapEntity);
exports.CouponOverlapEntity = CouponOverlapEntity;
//# sourceMappingURL=CouponOverlap.entity.js.map