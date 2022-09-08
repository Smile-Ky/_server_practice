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
exports.ProductSearchKeywordEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
let ProductSearchKeywordEntity = class ProductSearchKeywordEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상품 키워드 ID' }),
    __metadata("design:type", String)
], ProductSearchKeywordEntity.prototype, "product_search_keyword_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '검색 키워드' }),
    __metadata("design:type", String)
], ProductSearchKeywordEntity.prototype, "search_keyword", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product => product.product_search_keyword),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductSearchKeywordEntity.prototype, "product", void 0);
ProductSearchKeywordEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_search_keyword' }),
    (0, typeorm_1.Unique)(['product_search_keyword_id'])
], ProductSearchKeywordEntity);
exports.ProductSearchKeywordEntity = ProductSearchKeywordEntity;
//# sourceMappingURL=ProductSearchKeyword.entity.js.map