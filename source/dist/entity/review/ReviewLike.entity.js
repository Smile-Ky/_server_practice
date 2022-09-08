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
exports.ReviewLikeEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("../member/Member.entity");
const Review_entity_1 = require("./Review.entity");
let ReviewLikeEntity = class ReviewLikeEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '리뷰 좋아요 고유 ID' }),
    __metadata("design:type", String)
], ReviewLikeEntity.prototype, "review_like_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], ReviewLikeEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Review_entity_1.ReviewEntity, review_id => review_id),
    (0, typeorm_1.JoinColumn)({ name: 'review_id' }),
    __metadata("design:type", Review_entity_1.ReviewEntity)
], ReviewLikeEntity.prototype, "review_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], ReviewLikeEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], ReviewLikeEntity.prototype, "update_date", void 0);
ReviewLikeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review_like' }),
    (0, typeorm_1.Unique)(['review_like_id'])
], ReviewLikeEntity);
exports.ReviewLikeEntity = ReviewLikeEntity;
//# sourceMappingURL=ReviewLike.entity.js.map