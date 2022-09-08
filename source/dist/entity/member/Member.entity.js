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
exports.MemberEntity = void 0;
const typeorm_1 = require("typeorm");
const MemberAddress_entity_1 = require("./MemberAddress.entity");
const MemberGroup_entity_1 = require("./MemberGroup.entity");
const MemberMileageLog_entity_1 = require("./MemberMileageLog.entity");
const MemberMileage_entity_1 = require("./MemberMileage.entity");
const CouponToMember_entity_1 = require("../coupon/CouponToMember.entity");
const OfflineCouponInstance_entity_1 = require("../offline-coupon/OfflineCouponInstance.entity");
const MemberLastVisit_entity_1 = require("./MemberLastVisit.entity");
const MemberPet_entity_1 = require("./MemberPet.entity");
const PlanEventComment_entity_1 = require("../plan/PlanEventComment.entity");
const QueryOneToOne_entity_1 = require("../query/QueryOneToOne.entity");
const QueryProduct_entity_1 = require("../query/QueryProduct.entity");
const Review_entity_1 = require("../review/Review.entity");
const ProductLike_entity_1 = require("../product/ProductLike.entity");
const ReviewComment_entity_1 = require("../review/ReviewComment.entity");
let MemberEntity = class MemberEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '회원 고유 ID' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: false, comment: '강아지 유저 여부' }),
    __metadata("design:type", Boolean)
], MemberEntity.prototype, "is_puppy_member", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'member_code', length: 255, nullable: true, comment: '강아지 유저 ID or 마켓 회원 고유 코드' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "member_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '비빌번호 (강아지 유저에 경우 없음)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '이름 (강아지)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '생년월일 (강아지)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, comment: '성별 (강아지)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '휴대폰 (강아지)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: true, comment: '이메일 (강아지)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true, comment: 'SMS 수신 여부 (강아지 기준 : pushDisabled)' }),
    __metadata("design:type", Boolean)
], MemberEntity.prototype, "is_sms", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true, comment: '정보 수신 여부 (강아지 기준 : pushServiceEnabled)' }),
    __metadata("design:type", Boolean)
], MemberEntity.prototype, "is_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: '프로필 이미지 (강아지 서버 이미지)' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "profile_image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], MemberEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MemberEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '삭제 여부' }),
    __metadata("design:type", Boolean)
], MemberEntity.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true, comment: '탈퇴 및 삭제 날짜' }),
    __metadata("design:type", Date)
], MemberEntity.prototype, "delete_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => MemberGroup_entity_1.MemberGroupEntity, (member_group) => member_group.member, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'member_group_id' }),
    __metadata("design:type", MemberGroup_entity_1.MemberGroupEntity)
], MemberEntity.prototype, "member_group", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => MemberLastVisit_entity_1.MemberLastVisitEntity, member_last_visit => member_last_visit.member_id),
    __metadata("design:type", MemberLastVisit_entity_1.MemberLastVisitEntity)
], MemberEntity.prototype, "member_last_visit", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => MemberMileage_entity_1.MemberMileageEntity, (member_mileage) => member_mileage.member),
    __metadata("design:type", MemberMileage_entity_1.MemberMileageEntity)
], MemberEntity.prototype, "member_mileage", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => MemberAddress_entity_1.MemberAddressEntity, (member_address) => member_address.member),
    __metadata("design:type", Array)
], MemberEntity.prototype, "member_address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => MemberMileageLog_entity_1.MemberMileageLogEntity, (member_mileage_log_id) => member_mileage_log_id.member),
    __metadata("design:type", Array)
], MemberEntity.prototype, "member_mileage_log_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToMember_entity_1.CouponToMemberEntity, coupon_to_member => coupon_to_member.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "coupon_to_member", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => OfflineCouponInstance_entity_1.OfflineCouponInstanceEntity, offline_coupon_instance => offline_coupon_instance.member),
    __metadata("design:type", Array)
], MemberEntity.prototype, "offline_coupon_instance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => MemberPet_entity_1.MemberPetEntity, member_pet => member_pet.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "member_pet", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => PlanEventComment_entity_1.PlanEventCommentEntity, plan_event_comment => plan_event_comment.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "plan_event_comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => QueryOneToOne_entity_1.QueryOneToOneEntity, query_one_to_one => query_one_to_one.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "query_one_to_one", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => QueryProduct_entity_1.QueryProductEntity, query_product => query_product.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "query_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Review_entity_1.ReviewEntity, review => review.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ReviewComment_entity_1.ReviewCommentEntity, review_comment => review_comment.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "review_comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductLike_entity_1.ProductLikeEntity, product_like => product_like.member_id),
    __metadata("design:type", Array)
], MemberEntity.prototype, "product_like", void 0);
MemberEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member' }),
    (0, typeorm_1.Unique)(['member_id'])
], MemberEntity);
exports.MemberEntity = MemberEntity;
//# sourceMappingURL=Member.entity.js.map