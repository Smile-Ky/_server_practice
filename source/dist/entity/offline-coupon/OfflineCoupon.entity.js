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
exports.OfflineCouponEntity = void 0;
const typeorm_1 = require("typeorm");
const OfflineCouponInstance_entity_1 = require("./OfflineCouponInstance.entity");
const OfflineCouponToCoupon_entity_1 = require("./OfflineCouponToCoupon.entity");
let OfflineCouponEntity = class OfflineCouponEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '오프라인 쿠폰 고유 ID' }),
    __metadata("design:type", String)
], OfflineCouponEntity.prototype, "offline_coupon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '쿠폰 이름' }),
    __metadata("design:type", String)
], OfflineCouponEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true, default: '', comment: '쿠폰 설명' }),
    __metadata("design:type", String)
], OfflineCouponEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '발급 유형 (마일리지_지급_상품권=0 or 쿠폰_지급_상품권_랜덤=1 or 쿠폰_지급_상품권_동일=2)' }),
    __metadata("design:type", String)
], OfflineCouponEntity.prototype, "issued_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: '수동 쿠폰 지급 상품권(랜덤 시리얼 넘버)' }),
    __metadata("design:type", String)
], OfflineCouponEntity.prototype, "coupon_serial", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: 1, comment: '시리얼 생성 방법(수동=0 or 자동=1)' }),
    __metadata("design:type", Number)
], OfflineCouponEntity.prototype, "serial_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, comment: '오프라인 쿠폰 생성 개수' }),
    __metadata("design:type", Number)
], OfflineCouponEntity.prototype, "coupon_generation_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: true, comment: '마일리지 지급 금액\'' }),
    __metadata("design:type", Number)
], OfflineCouponEntity.prototype, "mileage_amount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => OfflineCouponToCoupon_entity_1.OfflineCouponToCouponEntity, offline_coupon_to_coupon => offline_coupon_to_coupon.offline_coupon),
    __metadata("design:type", Array)
], OfflineCouponEntity.prototype, "offline_coupon_to_coupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: false, comment: '사용기간_시작일' }),
    __metadata("design:type", Date)
], OfflineCouponEntity.prototype, "coupon_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: false, comment: '사용가긴_종료일' }),
    __metadata("design:type", Date)
], OfflineCouponEntity.prototype, "coupon_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], OfflineCouponEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], OfflineCouponEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => OfflineCouponInstance_entity_1.OfflineCouponInstanceEntity, offline_coupon_instance => offline_coupon_instance.offline_coupon),
    __metadata("design:type", Array)
], OfflineCouponEntity.prototype, "offline_coupon_instance", void 0);
OfflineCouponEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'offline_coupon' }),
    (0, typeorm_1.Unique)(['offline_coupon_id'])
], OfflineCouponEntity);
exports.OfflineCouponEntity = OfflineCouponEntity;
//# sourceMappingURL=OfflineCoupon.entity.js.map