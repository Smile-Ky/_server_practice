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
exports.MainDisplayToProductEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("../product/Product.entity");
const MainDisplayList_entity_1 = require("./MainDisplayList.entity");
let MainDisplayToProductEntity = class MainDisplayToProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '메인전시-상품 맴핑 고유 ID' }),
    __metadata("design:type", String)
], MainDisplayToProductEntity.prototype, "main_display_to_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '상품 전시 순서' }),
    __metadata("design:type", Number)
], MainDisplayToProductEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product => product.main_display_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], MainDisplayToProductEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => MainDisplayList_entity_1.MainDisplayListEntity, MainDisplayList => MainDisplayList.main_display_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'main_display_list_id' }),
    __metadata("design:type", MainDisplayList_entity_1.MainDisplayListEntity)
], MainDisplayToProductEntity.prototype, "main_display_list", void 0);
MainDisplayToProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'main_display_to_product' }),
    (0, typeorm_1.Unique)(['main_display_to_product_id'])
], MainDisplayToProductEntity);
exports.MainDisplayToProductEntity = MainDisplayToProductEntity;
//# sourceMappingURL=MainDisplayToProduct.entity.js.map