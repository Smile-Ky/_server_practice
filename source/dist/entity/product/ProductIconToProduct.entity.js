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
exports.ProductIconToProductEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
const ProductIcon_entity_1 = require("./ProductIcon.entity");
let ProductIconToProductEntity = class ProductIconToProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상품 아이콘 - 상품 맴핑 고유 ID' }),
    __metadata("design:type", String)
], ProductIconToProductEntity.prototype, "product_icon_to_product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product => product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductIconToProductEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductIcon_entity_1.ProductIconEntity, product_icon => product_icon.product_icon_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_icon_id' }),
    __metadata("design:type", ProductIcon_entity_1.ProductIconEntity)
], ProductIconToProductEntity.prototype, "product_icon", void 0);
ProductIconToProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_icon_to_product' }),
    (0, typeorm_1.Unique)(['product_icon_to_product_id'])
], ProductIconToProductEntity);
exports.ProductIconToProductEntity = ProductIconToProductEntity;
//# sourceMappingURL=ProductIconToProduct.entity.js.map