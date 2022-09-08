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
exports.ReviewSettingEntity = void 0;
const typeorm_1 = require("typeorm");
const ReviewSettingToMemberGroup_entity_1 = require("./ReviewSettingToMemberGroup.entity");
let ReviewSettingEntity = class ReviewSettingEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '리뷰 후기 셋팅 고유 ID' }),
    __metadata("design:type", String)
], ReviewSettingEntity.prototype, "review_setting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '상품 평점 사용 여부' }),
    __metadata("design:type", Boolean)
], ReviewSettingEntity.prototype, "is_use_rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '후기 작성 가능 시점 (구매와 상관 없음=1, 구매 확정 이후=0)' }),
    __metadata("design:type", Number)
], ReviewSettingEntity.prototype, "is_use_write_review", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '쓰기권한(관리자)' }),
    __metadata("design:type", Boolean)
], ReviewSettingEntity.prototype, "is_write_authority", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '글 수정 여부(사용자)' }),
    __metadata("design:type", Boolean)
], ReviewSettingEntity.prototype, "is_use_review_update", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '글 삭제 여부(사용자)' }),
    __metadata("design:type", Boolean)
], ReviewSettingEntity.prototype, "is_use_review_delete", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '마일리지 적립 여부' }),
    __metadata("design:type", Boolean)
], ReviewSettingEntity.prototype, "is_use_acc_mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '마일리지 적립 형태 (일괄적립=0, 분류별적립=1, 회원그립별적립=3)' }),
    __metadata("design:type", Number)
], ReviewSettingEntity.prototype, "is_acc_mileage_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '일괄적립 마일리지 적립 량' }),
    __metadata("design:type", Number)
], ReviewSettingEntity.prototype, "bath_mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '일반후기 마일리지 적립 량' }),
    __metadata("design:type", Number)
], ReviewSettingEntity.prototype, "class_mileage_normal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '프리미엄후기 마일리지 적립 량' }),
    __metadata("design:type", Number)
], ReviewSettingEntity.prototype, "class_mileage_premium", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ReviewSettingToMemberGroup_entity_1.ReviewSettingToMemberGroupEntity, member_mileage => member_mileage.review_setting_id),
    __metadata("design:type", Array)
], ReviewSettingEntity.prototype, "member_mileage", void 0);
ReviewSettingEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review_setting' }),
    (0, typeorm_1.Unique)(['review_setting_id'])
], ReviewSettingEntity);
exports.ReviewSettingEntity = ReviewSettingEntity;
//# sourceMappingURL=ReviewSetting.entity.js.map