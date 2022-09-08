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
exports.OfflineCouponToCouponEntity = void 0;
const typeorm_1 = require("typeorm");
const Coupon_entity_1 = require("../coupon/Coupon.entity");
const OfflineCoupon_entity_1 = require("./OfflineCoupon.entity");
let OfflineCouponToCouponEntity = class OfflineCouponToCouponEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '오프라인 쿠폰-쿠폰 맴핑 고유 ID' }),
    __metadata("design:type", String)
], OfflineCouponToCouponEntity.prototype, "offline_coupon_to_coupon_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Coupon_entity_1.CouponEntity, coupon => coupon.offline_coupon_to_coupon),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", Coupon_entity_1.CouponEntity)
], OfflineCouponToCouponEntity.prototype, "coupon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => OfflineCoupon_entity_1.OfflineCouponEntity, offline_coupon => offline_coupon.offline_coupon_to_coupon),
    (0, typeorm_1.JoinColumn)({ name: 'offline_coupon_id' }),
    __metadata("design:type", OfflineCoupon_entity_1.OfflineCouponEntity)
], OfflineCouponToCouponEntity.prototype, "offline_coupon", void 0);
OfflineCouponToCouponEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'offline_coupon_to_coupon' }),
    (0, typeorm_1.Unique)(['offline_coupon_to_coupon_id'])
], OfflineCouponToCouponEntity);
exports.OfflineCouponToCouponEntity = OfflineCouponToCouponEntity;
//# sourceMappingURL=OfflineCouponToCoupon.entity.js.map