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
exports.OfflineCouponInstanceEntity = void 0;
const typeorm_1 = require("typeorm");
const OfflineCoupon_entity_1 = require("./OfflineCoupon.entity");
const Member_entity_1 = require("../member/Member.entity");
let OfflineCouponInstanceEntity = class OfflineCouponInstanceEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '생성 한 오프라인 쿠폰' }),
    __metadata("design:type", String)
], OfflineCouponInstanceEntity.prototype, "offline_coupon_instance_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => OfflineCoupon_entity_1.OfflineCouponEntity, offline_coupon => offline_coupon.offline_coupon_instance, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'offline_coupon_id' }),
    __metadata("design:type", OfflineCoupon_entity_1.OfflineCouponEntity)
], OfflineCouponInstanceEntity.prototype, "offline_coupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, comment: '쿠폰 별 시리얼 번호' }),
    __metadata("design:type", String)
], OfflineCouponInstanceEntity.prototype, "instance_serial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, comment: '쿠폰 별 번호' }),
    __metadata("design:type", Number)
], OfflineCouponInstanceEntity.prototype, "instance_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '발급 상태 (미발급=0, 발급=1, 사용=2, 취소=3)' }),
    __metadata("design:type", Number)
], OfflineCouponInstanceEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member => member.offline_coupon_instance, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], OfflineCouponInstanceEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: true, comment: '쿠폰 발급일' }),
    __metadata("design:type", Date)
], OfflineCouponInstanceEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, comment: '쿠폰 사용일' }),
    __metadata("design:type", Date)
], OfflineCouponInstanceEntity.prototype, "use_date", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], OfflineCouponInstanceEntity.prototype, "cancel_date", void 0);
OfflineCouponInstanceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'offline_coupon_instance' }),
    (0, typeorm_1.Unique)(['offline_coupon_instance_id'])
], OfflineCouponInstanceEntity);
exports.OfflineCouponInstanceEntity = OfflineCouponInstanceEntity;
//# sourceMappingURL=OfflineCouponInstance.entity.js.map