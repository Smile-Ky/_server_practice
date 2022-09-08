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
exports.MileageSettingEntity = void 0;
const typeorm_1 = require("typeorm");
const MileageSettingGroupPayment_entity_1 = require("./MileageSettingGroupPayment.entity");
let MileageSettingEntity = class MileageSettingEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '마일리지 셋팅 고유 ID' }),
    __metadata("design:type", String)
], MileageSettingEntity.prototype, "mileage_setting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true, comment: '마일리지 사용 여부' }),
    __metadata("design:type", Boolean)
], MileageSettingEntity.prototype, "is_mileage_use", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '마일리지 노출 명칭' }),
    __metadata("design:type", String)
], MileageSettingEntity.prototype, "mileage_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '마일리지 노출 단위' }),
    __metadata("design:type", String)
], MileageSettingEntity.prototype, "mileage_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true, comment: '적립일 : 구매확정일 사용 여부' }),
    __metadata("design:type", Boolean)
], MileageSettingEntity.prototype, "is_use_purchase_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: 1, comment: '사용 단위 ( 1, 10, 100)' }),
    __metadata("design:type", Number)
], MileageSettingEntity.prototype, "mileage_use_unit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: 0, comment: '보유 마일리지 제한' }),
    __metadata("design:type", Number)
], MileageSettingEntity.prototype, "mileage_limit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true, comment: '배송비 사용 제한 ( 결제 불가 or 결제 가능 )' }),
    __metadata("design:type", Boolean)
], MileageSettingEntity.prototype, "is_delivery_charge", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '상품 최대 구매금액 제한' }),
    __metadata("design:type", Number)
], MileageSettingEntity.prototype, "purchase_amount_limit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, default: 0, comment: '최대 사용한도 제한 : 방식 선택 (없음=0 or 원=1 or 퍼센트=2)' }),
    __metadata("design:type", Number)
], MileageSettingEntity.prototype, "mileage_max_use_limit_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, default: 0, comment: '최대 사용한도 제한 텍스트 ( 원 or % )' }),
    __metadata("design:type", Number)
], MileageSettingEntity.prototype, "mileage_max_use_limit_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MileageSettingEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => MileageSettingGroupPayment_entity_1.MileageSettingGroupPaymentEntity, mileage_setting_group_payment => mileage_setting_group_payment.mileage_setting),
    __metadata("design:type", Array)
], MileageSettingEntity.prototype, "mileage_setting_group_payment", void 0);
MileageSettingEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'mileage_setting' }),
    (0, typeorm_1.Unique)(['mileage_setting_id'])
], MileageSettingEntity);
exports.MileageSettingEntity = MileageSettingEntity;
//# sourceMappingURL=MileageSetting.entity.js.map