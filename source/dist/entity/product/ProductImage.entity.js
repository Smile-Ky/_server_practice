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
exports.ProductImageEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
let ProductImageEntity = class ProductImageEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '이미지 고유 ID' }),
    __metadata("design:type", String)
], ProductImageEntity.prototype, "image_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, comment: '이미지 모드 (대표 : 0, 추가 : 1, 상세 : 2)' }),
    __metadata("design:type", Number)
], ProductImageEntity.prototype, "image_mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, comment: "이미지 순서" }),
    __metadata("design:type", Number)
], ProductImageEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '이미지 URL' }),
    __metadata("design:type", String)
], ProductImageEntity.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id.product_image),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], ProductImageEntity.prototype, "product_id", void 0);
ProductImageEntity = __decorate([
    (0, typeorm_1.Entity)('product_image'),
    (0, typeorm_1.Unique)(['image_id'])
], ProductImageEntity);
exports.ProductImageEntity = ProductImageEntity;
//# sourceMappingURL=ProductImage.entity.js.map