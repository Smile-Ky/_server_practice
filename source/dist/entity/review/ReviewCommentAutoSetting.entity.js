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
exports.ReviewCommentAutoSettingEntity = void 0;
const typeorm_1 = require("typeorm");
let ReviewCommentAutoSettingEntity = class ReviewCommentAutoSettingEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '자동 응답 설정 고유 ID' }),
    __metadata("design:type", String)
], ReviewCommentAutoSettingEntity.prototype, "auto_setting_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '별점(1, 2, 3, 4, 5)' }),
    __metadata("design:type", Number)
], ReviewCommentAutoSettingEntity.prototype, "star_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '답글 내용' }),
    __metadata("design:type", String)
], ReviewCommentAutoSettingEntity.prototype, "auto_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '활성화 여부' }),
    __metadata("design:type", Boolean)
], ReviewCommentAutoSettingEntity.prototype, "is_use", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], ReviewCommentAutoSettingEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], ReviewCommentAutoSettingEntity.prototype, "update_date", void 0);
ReviewCommentAutoSettingEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review_comment_auto_setting' }),
    (0, typeorm_1.Unique)(['auto_setting_id'])
], ReviewCommentAutoSettingEntity);
exports.ReviewCommentAutoSettingEntity = ReviewCommentAutoSettingEntity;
//# sourceMappingURL=ReviewCommentAutoSetting.entity.js.map