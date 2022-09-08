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
exports.ProductBrandEntity = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("./Product.entity");
let ProductBrandEntity = class ProductBrandEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '브랜드 ID' }),
    __metadata("design:type", String)
], ProductBrandEntity.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', nullable: false, comment: '브랜드 명' }),
    __metadata("design:type", String)
], ProductBrandEntity.prototype, "brand_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', nullable: false, comment: '브랜드 코드' }),
    __metadata("design:type", String)
], ProductBrandEntity.prototype, "brand_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '사용여부' }),
    __metadata("design:type", Boolean)
], ProductBrandEntity.prototype, "is_use_brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', nullable: false, comment: '환불 배송지 : 우편번호' }),
    __metadata("design:type", String)
], ProductBrandEntity.prototype, "refund_address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', nullable: false, comment: '환불 배송지 : 주소' }),
    __metadata("design:type", String)
], ProductBrandEntity.prototype, "refund_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductBrandEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductBrandEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Product_entity_1.ProductEntity, product => product.brand),
    __metadata("design:type", Array)
], ProductBrandEntity.prototype, "product", void 0);
ProductBrandEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_brand' }),
    (0, typeorm_1.Unique)(['brand_id'])
], ProductBrandEntity);
exports.ProductBrandEntity = ProductBrandEntity;
//# sourceMappingURL=ProductBrand.entity.js.map