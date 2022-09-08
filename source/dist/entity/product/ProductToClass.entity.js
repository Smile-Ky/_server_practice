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
exports.ProductToClassEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
const ProductClass_entity_1 = require("./ProductClass.entity");
let ProductToClassEntity = class ProductToClassEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상품-카테고리 맴핑 고유 ID' }),
    __metadata("design:type", String)
], ProductToClassEntity.prototype, "product_to_class_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '메인 카테고리 여부' }),
    __metadata("design:type", Boolean)
], ProductToClassEntity.prototype, "is_main", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id.product_class_mapped),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductToClassEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductClass_entity_1.ProductClassEntity, product_class_id => product_class_id.product_mapped),
    (0, typeorm_1.JoinColumn)({ name: 'product_class_id' }),
    __metadata("design:type", ProductClass_entity_1.ProductClassEntity)
], ProductToClassEntity.prototype, "product_class_id", void 0);
ProductToClassEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_to_class' })
], ProductToClassEntity);
exports.ProductToClassEntity = ProductToClassEntity;
//# sourceMappingURL=ProductToClass.entity.js.map