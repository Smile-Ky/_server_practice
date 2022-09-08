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
exports.ProductOptionEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductOptionDetail_entity_1 = require("./ProductOptionDetail.entity");
const Product_entity_1 = require("./Product.entity");
const ProductDisToProduct_entity_1 = require("./ProductDisToProduct.entity");
const QueryProduct_entity_1 = require("../query/QueryProduct.entity");
const Review_entity_1 = require("../review/Review.entity");
let ProductOptionEntity = class ProductOptionEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: "옵션 ID" }),
    __metadata("design:type", String)
], ProductOptionEntity.prototype, "product_option_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false, comment: '옵션 코드' }),
    __metadata("design:type", String)
], ProductOptionEntity.prototype, "product_option_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '도매가' }),
    __metadata("design:type", Number)
], ProductOptionEntity.prototype, "product_wholesale_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '정가' }),
    __metadata("design:type", Number)
], ProductOptionEntity.prototype, "product_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '판매가' }),
    __metadata("design:type", Number)
], ProductOptionEntity.prototype, "product_sale_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '품절 여부' }),
    __metadata("design:type", Boolean)
], ProductOptionEntity.prototype, "is_out_of_stock", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '실재고' }),
    __metadata("design:type", Number)
], ProductOptionEntity.prototype, "stock_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '판매 진행 재고' }),
    __metadata("design:type", Number)
], ProductOptionEntity.prototype, "sale_stock_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '메인옵션 여부' }),
    __metadata("design:type", Boolean)
], ProductOptionEntity.prototype, "is_main", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductOptionEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductOptionEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: false, comment: '삭제 여부' }),
    __metadata("design:type", Boolean)
], ProductOptionEntity.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product => product.option),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductOptionEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductOptionDetail_entity_1.ProductOptionDetailEntity, option_detail => option_detail.product_option),
    __metadata("design:type", Array)
], ProductOptionEntity.prototype, "option_detail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductDisToProduct_entity_1.ProductDisToProductEntity, product_dis_to_product => product_dis_to_product.product_option),
    __metadata("design:type", Array)
], ProductOptionEntity.prototype, "product_dis_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => QueryProduct_entity_1.QueryProductEntity, query_product => query_product.product_option_id),
    __metadata("design:type", Array)
], ProductOptionEntity.prototype, "query_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Review_entity_1.ReviewEntity, review => review.product_option_id),
    __metadata("design:type", Array)
], ProductOptionEntity.prototype, "review", void 0);
ProductOptionEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_option' }),
    (0, typeorm_1.Unique)(['product_option_id', 'product_option_code'])
], ProductOptionEntity);
exports.ProductOptionEntity = ProductOptionEntity;
//# sourceMappingURL=ProductOption.entity.js.map