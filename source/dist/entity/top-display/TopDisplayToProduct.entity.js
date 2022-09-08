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
exports.TopDisplayToProductEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("../product/Product.entity");
const TopDisplayList_entity_1 = require("./TopDisplayList.entity");
let TopDisplayToProductEntity = class TopDisplayToProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상단 탭 전시-상품 맴핑 고유 ID' }),
    __metadata("design:type", String)
], TopDisplayToProductEntity.prototype, "top_display_to_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '상품 전시 순서' }),
    __metadata("design:type", Number)
], TopDisplayToProductEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product => product.top_display_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], TopDisplayToProductEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => TopDisplayList_entity_1.TopDisplayListEntity, top_display_list => top_display_list.top_display_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'top_display_list_id' }),
    __metadata("design:type", TopDisplayList_entity_1.TopDisplayListEntity)
], TopDisplayToProductEntity.prototype, "top_display_list", void 0);
TopDisplayToProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'top_display_to_product' }),
    (0, typeorm_1.Unique)(['top_display_to_product_id'])
], TopDisplayToProductEntity);
exports.TopDisplayToProductEntity = TopDisplayToProductEntity;
//# sourceMappingURL=TopDisplayToProduct.entity.js.map