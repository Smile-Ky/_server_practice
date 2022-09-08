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
exports.ReviewImageEntity = void 0;
const typeorm_1 = require("typeorm");
const Review_entity_1 = require("./Review.entity");
let ReviewImageEntity = class ReviewImageEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '리뷰 이미지 고유 ID' }),
    __metadata("design:type", String)
], ReviewImageEntity.prototype, "review_image_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '이미지 URL' }),
    __metadata("design:type", String)
], ReviewImageEntity.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '메인 이미지 여부' }),
    __metadata("design:type", Boolean)
], ReviewImageEntity.prototype, "is_main", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Review_entity_1.ReviewEntity, review_id => review_id),
    (0, typeorm_1.JoinColumn)({ name: 'review_id' }),
    __metadata("design:type", Review_entity_1.ReviewEntity)
], ReviewImageEntity.prototype, "review_id", void 0);
ReviewImageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review_image' }),
    (0, typeorm_1.Unique)(['review_image_id'])
], ReviewImageEntity);
exports.ReviewImageEntity = ReviewImageEntity;
//# sourceMappingURL=ReviewImage.entity.js.map