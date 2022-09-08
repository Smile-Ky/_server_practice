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
exports.ProductBestEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
const ProductClass_entity_1 = require("./ProductClass.entity");
let ProductBestEntity = class ProductBestEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '베스트 상품 고유 ID' }),
    __metadata("design:type", String)
], ProductBestEntity.prototype, "product_best_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '노출 순서' }),
    __metadata("design:type", Number)
], ProductBestEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '판매 개수' }),
    __metadata("design:type", Number)
], ProductBestEntity.prototype, "sale_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '한달 = 1, 일주일 = 2' }),
    __metadata("design:type", Number)
], ProductBestEntity.prototype, "best_period", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductClass_entity_1.ProductClassEntity, product_class_id => product_class_id.product_class_id),
    (0, typeorm_1.JoinColumn)({ name: 'product_class_id' }),
    __metadata("design:type", ProductClass_entity_1.ProductClassEntity)
], ProductBestEntity.prototype, "product_class_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id.product_id),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductBestEntity.prototype, "product_id", void 0);
ProductBestEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_best' }),
    (0, typeorm_1.Unique)(['product_best_id'])
], ProductBestEntity);
exports.ProductBestEntity = ProductBestEntity;
//# sourceMappingURL=ProductBest.entity.js.map