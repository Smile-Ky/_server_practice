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
exports.ProductClassEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductToClass_entity_1 = require("./ProductToClass.entity");
const CouponToProductClass_entity_1 = require("../coupon/CouponToProductClass.entity");
const MainDisplayToProductClass_entity_1 = require("../main-display/MainDisplayToProductClass.entity");
const TopDisplayToProductClass_entity_1 = require("../top-display/TopDisplayToProductClass.entity");
let ProductClassEntity = class ProductClassEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], ProductClassEntity.prototype, "product_class_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', nullable: false, comment: '상품 분류 명' }),
    __metadata("design:type", String)
], ProductClassEntity.prototype, "class_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: '0', comment: '분류 사용' }),
    __metadata("design:type", Number)
], ProductClassEntity.prototype, "use_classification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', default: 'NULL', comment: '상위 상품 분류 고유 키' }),
    __metadata("design:type", String)
], ProductClassEntity.prototype, "top_class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', default: 'NULL', comment: '최상위 상품 분류 고유 키' }),
    __metadata("design:type", String)
], ProductClassEntity.prototype, "top_end_class", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0, comment: '카테고리 깊이' }),
    __metadata("design:type", Number)
], ProductClassEntity.prototype, "depth", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '동일 상품 분류 내 순서' }),
    __metadata("design:type", Number)
], ProductClassEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, default: null, comment: '카테고리 이미지 URL' }),
    __metadata("design:type", String)
], ProductClassEntity.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductClassEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductClassEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductToClass_entity_1.ProductToClassEntity, product => product.product_class_id),
    __metadata("design:type", Array)
], ProductClassEntity.prototype, "product_mapped", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToProductClass_entity_1.CouponToProductClassEntity, coupon_to_product_class => coupon_to_product_class.product_class),
    __metadata("design:type", Array)
], ProductClassEntity.prototype, "coupon_to_product_class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => MainDisplayToProductClass_entity_1.MainDisplayToProductClassEntity, main_display_to_product_class => main_display_to_product_class.product_class),
    __metadata("design:type", Array)
], ProductClassEntity.prototype, "main_display_to_product_class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => TopDisplayToProductClass_entity_1.TopDisplayToProductClassEntity, top_display_to_product_class => top_display_to_product_class.product_class),
    __metadata("design:type", Array)
], ProductClassEntity.prototype, "top_display_to_product_class", void 0);
ProductClassEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_class' }),
    (0, typeorm_1.Unique)(['product_class_id'])
], ProductClassEntity);
exports.ProductClassEntity = ProductClassEntity;
//# sourceMappingURL=ProductClass.entity.js.map