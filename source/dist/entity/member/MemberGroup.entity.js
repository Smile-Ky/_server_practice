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
exports.MemberGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("./Member.entity");
const MileageSettingGroupPayment_entity_1 = require("../mileage/MileageSettingGroupPayment.entity");
const ProductDisToMemberGroup_entity_1 = require("../product/ProductDisToMemberGroup.entity");
const CouponToMemberGroup_entity_1 = require("../coupon/CouponToMemberGroup.entity");
const ReviewSettingToMemberGroup_entity_1 = require("../review/ReviewSettingToMemberGroup.entity");
let MemberGroupEntity = class MemberGroupEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '회원 그룹 고유 키 값' }),
    __metadata("design:type", String)
], MemberGroupEntity.prototype, "group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '회원 그룹 이름' }),
    __metadata("design:type", String)
], MemberGroupEntity.prototype, "group_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '그룹 등급' }),
    __metadata("design:type", Number)
], MemberGroupEntity.prototype, "group_level", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '회원 가입 시 기본 회원 그룹' }),
    __metadata("design:type", Boolean)
], MemberGroupEntity.prototype, "is_default_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '쿠폰 사용 가능 여부' }),
    __metadata("design:type", Boolean)
], MemberGroupEntity.prototype, "is_use_coupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '마일리지 사용/적립 가능 여부' }),
    __metadata("design:type", Boolean)
], MemberGroupEntity.prototype, "is_use_mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '회원 그룹 할일율 사용 여부' }),
    __metadata("design:type", Boolean)
], MemberGroupEntity.prototype, "is_use_group_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '회원 그룹 할인율 (단위 : %)' }),
    __metadata("design:type", Number)
], MemberGroupEntity.prototype, "group_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '자동 그룹 변경 여부' }),
    __metadata("design:type", Boolean)
], MemberGroupEntity.prototype, "is_auto_change_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '산정기간 (단위 : 개월)' }),
    __metadata("design:type", Number)
], MemberGroupEntity.prototype, "change_group_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '산정 주문금액 시작' }),
    __metadata("design:type", Number)
], MemberGroupEntity.prototype, "change_group_start_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '산정 주문 금액 끝' }),
    __metadata("design:type", Number)
], MemberGroupEntity.prototype, "change_group_end_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], MemberGroupEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MemberGroupEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => Member_entity_1.MemberEntity, (member) => member.member_group),
    __metadata("design:type", Array)
], MemberGroupEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => MileageSettingGroupPayment_entity_1.MileageSettingGroupPaymentEntity, mileage_setting_group_payment => mileage_setting_group_payment.member_group),
    __metadata("design:type", Array)
], MemberGroupEntity.prototype, "mileage_setting_group_payment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductDisToMemberGroup_entity_1.ProductDisToMemberGroupEntity, product_dis_to_member_group => product_dis_to_member_group.member_group_id),
    __metadata("design:type", Array)
], MemberGroupEntity.prototype, "product_dis_to_member_group", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToMemberGroup_entity_1.CouponToMemberGroupEntity, coupon_to_member_group => coupon_to_member_group.member_group_id),
    __metadata("design:type", Array)
], MemberGroupEntity.prototype, "coupon_to_member_group", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ReviewSettingToMemberGroup_entity_1.ReviewSettingToMemberGroupEntity, review_setting_to_member_group => review_setting_to_member_group.member_group_id),
    __metadata("design:type", Array)
], MemberGroupEntity.prototype, "review_setting_to_member_group", void 0);
MemberGroupEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member_group' }),
    (0, typeorm_1.Unique)(['group_id'])
], MemberGroupEntity);
exports.MemberGroupEntity = MemberGroupEntity;
//# sourceMappingURL=MemberGroup.entity.js.map