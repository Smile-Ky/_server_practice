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
exports.ReviewEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("../member/Member.entity");
const ProductOption_entity_1 = require("../product/ProductOption.entity");
const ReviewImage_entity_1 = require("./ReviewImage.entity");
const ReviewComment_entity_1 = require("./ReviewComment.entity");
const ReviewLike_entity_1 = require("./ReviewLike.entity");
const OrderDetail_Entity_1 = require("../order/OrderDetail.Entity");
let ReviewEntity = class ReviewEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '리뷰 고유 ID' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "review_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '분류' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "review_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '리뷰 별점' }),
    __metadata("design:type", Number)
], ReviewEntity.prototype, "review_star_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '리뷰 제목' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "review_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '리뷰 내용' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "review_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '공개 여부' }),
    __metadata("design:type", Boolean)
], ReviewEntity.prototype, "is_open", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '어드민 작성 여부' }),
    __metadata("design:type", Boolean)
], ReviewEntity.prototype, "is_admin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '어드민 : 작성자' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "admin_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '어드민 : 강아지 이름' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "admin_puppy_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '어드민 : 강아지 나이' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "admin_puppy_age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '어드민 : 강아지 무게' }),
    __metadata("design:type", String)
], ReviewEntity.prototype, "admin_puppy_weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '어드민 댓글 작성 여부' }),
    __metadata("design:type", Boolean)
], ReviewEntity.prototype, "is_write_admin_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], ReviewEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], ReviewEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.review),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], ReviewEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductOption_entity_1.ProductOptionEntity, product_option_id => product_option_id.review),
    (0, typeorm_1.JoinColumn)({ name: 'product_option_id' }),
    __metadata("design:type", ProductOption_entity_1.ProductOptionEntity)
], ReviewEntity.prototype, "product_option_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => OrderDetail_Entity_1.OrderDetailEntity, order_etail_id => order_etail_id.order_detail_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_detail_id' }),
    __metadata("design:type", OrderDetail_Entity_1.OrderDetailEntity)
], ReviewEntity.prototype, "order_etail_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ReviewComment_entity_1.ReviewCommentEntity, review_comment => review_comment.review_id),
    __metadata("design:type", Array)
], ReviewEntity.prototype, "review_comment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ReviewImage_entity_1.ReviewImageEntity, review_image => review_image.review_id),
    __metadata("design:type", Array)
], ReviewEntity.prototype, "review_image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ReviewLike_entity_1.ReviewLikeEntity, review_like => review_like.review_id),
    __metadata("design:type", Array)
], ReviewEntity.prototype, "review_like", void 0);
ReviewEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'review' }),
    (0, typeorm_1.Unique)(['review_id'])
], ReviewEntity);
exports.ReviewEntity = ReviewEntity;
//# sourceMappingURL=Review.entity.js.map