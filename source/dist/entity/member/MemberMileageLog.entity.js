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
exports.MemberMileageLogEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("./Member.entity");
let MemberMileageLogEntity = class MemberMileageLogEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '마일리지 고유 ID' }),
    __metadata("design:type", String)
], MemberMileageLogEntity.prototype, "member_mileage_log_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '주문 아이디' }),
    __metadata("design:type", String)
], MemberMileageLogEntity.prototype, "order_detail_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Member_entity_1.MemberEntity, (member) => member.member_mileage_log_id),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], MemberMileageLogEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '적립 내용' }),
    __metadata("design:type", String)
], MemberMileageLogEntity.prototype, "mileage_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, comment: '적립 마일리지' }),
    __metadata("design:type", Number)
], MemberMileageLogEntity.prototype, "mileage_payment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '적립(사용) 상태 (적립완료(+)=true or 사용(-)=false)' }),
    __metadata("design:type", Boolean)
], MemberMileageLogEntity.prototype, "mileage_payment_use_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜 (처리 일자)' }),
    __metadata("design:type", Date)
], MemberMileageLogEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MemberMileageLogEntity.prototype, "update_date", void 0);
MemberMileageLogEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member_mileage_log' }),
    (0, typeorm_1.Unique)(['member_mileage_log_id'])
], MemberMileageLogEntity);
exports.MemberMileageLogEntity = MemberMileageLogEntity;
//# sourceMappingURL=MemberMileageLog.entity.js.map