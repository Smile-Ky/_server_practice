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
exports.ProductLikeEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
const Member_entity_1 = require("../member/Member.entity");
let ProductLikeEntity = class ProductLikeEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상품 찜 고유 ID' }),
    __metadata("design:type", String)
], ProductLikeEntity.prototype, "product_like_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id.product_like),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductLikeEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.product_like),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], ProductLikeEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductLikeEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductLikeEntity.prototype, "update_date", void 0);
ProductLikeEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_like' }),
    (0, typeorm_1.Unique)(['product_like_id'])
], ProductLikeEntity);
exports.ProductLikeEntity = ProductLikeEntity;
//# sourceMappingURL=ProductLike.entity.js.map