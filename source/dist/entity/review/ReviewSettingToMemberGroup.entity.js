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
exports.ReviewSettingToMemberGroupEntity = void 0;
const MemberGroup_entity_1 = require("../member/MemberGroup.entity");
const ReviewSetting_entity_1 = require("./ReviewSetting.entity");
const typeorm_1 = require("typeorm");
let ReviewSettingToMemberGroupEntity = class ReviewSettingToMemberGroupEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '리뷰 후기 셋팅 고유 ID' }),
    __metadata("design:type", String)
], ReviewSettingToMemberGroupEntity.prototype, "review_setting_to_member_group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '적립 마일리지 내용' }),
    __metadata("design:type", Number)
], ReviewSettingToMemberGroupEntity.prototype, "acc_mileage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ReviewSetting_entity_1.ReviewSettingEntity, review_setting_id => review_setting_id.member_mileage),
    (0, typeorm_1.JoinColumn)({ name: 'review_setting_id' }),
    __metadata("design:type", ReviewSetting_entity_1.ReviewSettingEntity)
], ReviewSettingToMemberGroupEntity.prototype, "review_setting_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => MemberGroup_entity_1.MemberGroupEntity, member_group_id => member_group_id.review_setting_to_member_group),
    (0, typeorm_1.JoinColumn)({ name: 'member_group_id' }),
    __metadata("design:type", MemberGroup_entity_1.MemberGroupEntity)
], ReviewSettingToMemberGroupEntity.prototype, "member_group_id", void 0);
ReviewSettingToMemberGroupEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review_setting_to_member_group' }),
    (0, typeorm_1.Unique)(['review_setting_to_member_group_id'])
], ReviewSettingToMemberGroupEntity);
exports.ReviewSettingToMemberGroupEntity = ReviewSettingToMemberGroupEntity;
//# sourceMappingURL=ReviewSettingToMemberGroup.entity.js.map