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
exports.CouponSettingEntity = void 0;
const typeorm_1 = require("typeorm");
let CouponSettingEntity = class CouponSettingEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '쿠폰 셋팅 고유 ID' }),
    __metadata("design:type", String)
], CouponSettingEntity.prototype, "coupon_setting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '쿠폰 사용 여부' }),
    __metadata("design:type", Boolean)
], CouponSettingEntity.prototype, "is_use_coupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '쿠폰 적용 기준 금액' }),
    __metadata("design:type", Boolean)
], CouponSettingEntity.prototype, "is_use_bargain_prices", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '입금 전 취소(시, 복원 여부)' }),
    __metadata("design:type", Boolean)
], CouponSettingEntity.prototype, "is_restore_cancel_before_deposit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '취소(시, 복원 여부)' }),
    __metadata("design:type", Boolean)
], CouponSettingEntity.prototype, "is_restore_cancel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '반품(시, 복원 여부)' }),
    __metadata("design:type", Boolean)
], CouponSettingEntity.prototype, "is_restore_product_return", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], CouponSettingEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], CouponSettingEntity.prototype, "update_date", void 0);
CouponSettingEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon_setting' }),
    (0, typeorm_1.Unique)(['coupon_setting_id'])
], CouponSettingEntity);
exports.CouponSettingEntity = CouponSettingEntity;
//# sourceMappingURL=CouponSetting.entity.js.map