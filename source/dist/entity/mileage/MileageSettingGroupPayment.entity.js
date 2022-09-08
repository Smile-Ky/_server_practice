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
exports.MileageSettingGroupPaymentEntity = void 0;
const typeorm_1 = require("typeorm");
const MemberGroup_entity_1 = require("../member/MemberGroup.entity");
const MileageSetting_entity_1 = require("./MileageSetting.entity");
let MileageSettingGroupPaymentEntity = class MileageSettingGroupPaymentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '맴버 그룹 별 적립 비율 ID' }),
    __metadata("design:type", String)
], MileageSettingGroupPaymentEntity.prototype, "mileage_group_payment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => MileageSetting_entity_1.MileageSettingEntity, mileage_setting => mileage_setting.mileage_setting_group_payment, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'mileage_setting' }),
    __metadata("design:type", MileageSetting_entity_1.MileageSettingEntity)
], MileageSettingGroupPaymentEntity.prototype, "mileage_setting", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => MemberGroup_entity_1.MemberGroupEntity, member_group => member_group.mileage_setting_group_payment),
    (0, typeorm_1.JoinColumn)({ name: 'member_group_id' }),
    __metadata("design:type", MemberGroup_entity_1.MemberGroupEntity)
], MileageSettingGroupPaymentEntity.prototype, "member_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'double', nullable: false, comment: '마일리지 적립 비율' }),
    __metadata("design:type", Number)
], MileageSettingGroupPaymentEntity.prototype, "payment_rate", void 0);
MileageSettingGroupPaymentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'mileage_setting_group_payment' }),
    (0, typeorm_1.Unique)(['mileage_group_payment_id'])
], MileageSettingGroupPaymentEntity);
exports.MileageSettingGroupPaymentEntity = MileageSettingGroupPaymentEntity;
//# sourceMappingURL=MileageSettingGroupPayment.entity.js.map