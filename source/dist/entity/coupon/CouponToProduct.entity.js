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
exports.CouponToProductEntity = void 0;
const typeorm_1 = require("typeorm");
const Coupon_entity_1 = require("./Coupon.entity");
const Product_entity_1 = require("../product/Product.entity");
let CouponToProductEntity = class CouponToProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '쿠폰-상품 고유 ID' }),
    __metadata("design:type", String)
], CouponToProductEntity.prototype, "coupon_to_product_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Coupon_entity_1.CouponEntity, coupon => coupon.coupon_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", Coupon_entity_1.CouponEntity)
], CouponToProductEntity.prototype, "coupon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id.coupon_to_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], CouponToProductEntity.prototype, "product_id", void 0);
CouponToProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon_to_product' }),
    (0, typeorm_1.Unique)(['coupon_to_product_id'])
], CouponToProductEntity);
exports.CouponToProductEntity = CouponToProductEntity;
//# sourceMappingURL=CouponToProduct.entity.js.map