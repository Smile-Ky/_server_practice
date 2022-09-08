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
exports.CartEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductOption_entity_1 = require("../product/ProductOption.entity");
const Member_entity_1 = require("../member/Member.entity");
const Product_entity_1 = require("../product/Product.entity");
let CartEntity = class CartEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: "카트 ID" }),
    __metadata("design:type", String)
], CartEntity.prototype, "cart_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, MemberEntity => MemberEntity.member_id),
    (0, typeorm_1.JoinColumn)({ name: "member_id" }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], CartEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, ProductEntity => ProductEntity.product_id),
    (0, typeorm_1.JoinColumn)({ name: "product_id" }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], CartEntity.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductOption_entity_1.ProductOptionEntity, ProductOptionEntity => ProductOptionEntity.product_option_id),
    (0, typeorm_1.JoinColumn)({ name: "product_option_id" }),
    __metadata("design:type", ProductOption_entity_1.ProductOptionEntity)
], CartEntity.prototype, "product_option", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, comment: '위시리스트 여부(1=Y , 0=N)' }),
    __metadata("design:type", Boolean)
], CartEntity.prototype, "wish_list_yn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], CartEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, comment: '주문수량' }),
    __metadata("design:type", Number)
], CartEntity.prototype, "count", void 0);
CartEntity = __decorate([
    (0, typeorm_1.Entity)("cart"),
    (0, typeorm_1.Unique)(["cart_id"])
], CartEntity);
exports.CartEntity = CartEntity;
//# sourceMappingURL=Cart.entity.js.map