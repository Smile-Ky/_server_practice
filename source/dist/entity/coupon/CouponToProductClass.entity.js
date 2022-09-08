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
exports.CouponToProductClassEntity = void 0;
const typeorm_1 = require("typeorm");
const Coupon_entity_1 = require("./Coupon.entity");
const ProductClass_entity_1 = require("../product/ProductClass.entity");
let CouponToProductClassEntity = class CouponToProductClassEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '쿠폰-상품카테고리 맴핑 ID' }),
    __metadata("design:type", String)
], CouponToProductClassEntity.prototype, "coupon_to_product_class_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Coupon_entity_1.CouponEntity, coupon => coupon.coupon_to_product_class),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_id' }),
    __metadata("design:type", Coupon_entity_1.CouponEntity)
], CouponToProductClassEntity.prototype, "coupon", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductClass_entity_1.ProductClassEntity, product_class => product_class.coupon_to_product_class),
    (0, typeorm_1.JoinColumn)({ name: 'product_class_id' }),
    __metadata("design:type", ProductClass_entity_1.ProductClassEntity)
], CouponToProductClassEntity.prototype, "product_class", void 0);
CouponToProductClassEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon_to_product_class' }),
    (0, typeorm_1.Unique)(['coupon_to_product_class_id'])
], CouponToProductClassEntity);
exports.CouponToProductClassEntity = CouponToProductClassEntity;
//# sourceMappingURL=CouponToProductClass.entity.js.map