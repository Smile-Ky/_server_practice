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
exports.ProductDisToProductEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductDiscount_entity_1 = require("./ProductDiscount.entity");
const ProductOption_entity_1 = require("./ProductOption.entity");
let ProductDisToProductEntity = class ProductDisToProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '일괄할인 상품 그룹 고유 ID' }),
    __metadata("design:type", String)
], ProductDisToProductEntity.prototype, "product_dis_to_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '상품 순서' }),
    __metadata("design:type", Number)
], ProductDisToProductEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '정가' }),
    __metadata("design:type", Number)
], ProductDisToProductEntity.prototype, "discount_product_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '할인 가격' }),
    __metadata("design:type", Number)
], ProductDisToProductEntity.prototype, "discount_price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductDiscount_entity_1.ProductDiscountEntity, product_discount_id => product_discount_id.product_dis_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_discount_id' }),
    __metadata("design:type", ProductDiscount_entity_1.ProductDiscountEntity)
], ProductDisToProductEntity.prototype, "product_discount_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductOption_entity_1.ProductOptionEntity, product_option => product_option.product_dis_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_option_id' }),
    __metadata("design:type", ProductOption_entity_1.ProductOptionEntity)
], ProductDisToProductEntity.prototype, "product_option", void 0);
ProductDisToProductEntity = __decorate([
    (0, typeorm_1.Entity)('product_dis_to_product'),
    (0, typeorm_1.Unique)(['product_dis_to_product_id'])
], ProductDisToProductEntity);
exports.ProductDisToProductEntity = ProductDisToProductEntity;
//# sourceMappingURL=ProductDisToProduct.entity.js.map