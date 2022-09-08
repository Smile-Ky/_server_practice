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
exports.ReviewCommentEntity = void 0;
const typeorm_1 = require("typeorm");
const Review_entity_1 = require("./Review.entity");
const Member_entity_1 = require("../member/Member.entity");
let ReviewCommentEntity = class ReviewCommentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '후기 댓글 고유 ID' }),
    __metadata("design:type", String)
], ReviewCommentEntity.prototype, "review_comment_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: false, comment: '어드민 작성 여부' }),
    __metadata("design:type", Boolean)
], ReviewCommentEntity.prototype, "is_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '댓글 내용' }),
    __metadata("design:type", String)
], ReviewCommentEntity.prototype, "comment_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], ReviewCommentEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], ReviewCommentEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Review_entity_1.ReviewEntity, review_id => review_id.review_comment),
    (0, typeorm_1.JoinColumn)({ name: 'review_id' }),
    __metadata("design:type", Review_entity_1.ReviewEntity)
], ReviewCommentEntity.prototype, "review_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.review_comment),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], ReviewCommentEntity.prototype, "member_id", void 0);
ReviewCommentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review_comment' }),
    (0, typeorm_1.Unique)(['review_comment_id'])
], ReviewCommentEntity);
exports.ReviewCommentEntity = ReviewCommentEntity;
//# sourceMappingURL=ReviewComment.entity.js.map