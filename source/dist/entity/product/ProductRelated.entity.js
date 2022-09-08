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
exports.ProductRelatedEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
let ProductRelatedEntity = class ProductRelatedEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '관련 상품 고유 ID' }),
    __metadata("design:type", String)
], ProductRelatedEntity.prototype, "product_related_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id.related_product_id),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductRelatedEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '관련 상품 고유 ID' }),
    __metadata("design:type", String)
], ProductRelatedEntity.prototype, "related_product", void 0);
ProductRelatedEntity = __decorate([
    (0, typeorm_1.Entity)('product_related'),
    (0, typeorm_1.Unique)(['product_related_id'])
], ProductRelatedEntity);
exports.ProductRelatedEntity = ProductRelatedEntity;
//# sourceMappingURL=ProductRelated.entity.js.map