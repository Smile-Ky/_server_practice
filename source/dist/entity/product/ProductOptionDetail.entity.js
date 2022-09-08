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
exports.ProductOptionDetailEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductOption_entity_1 = require("./ProductOption.entity");
let ProductOptionDetailEntity = class ProductOptionDetailEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: "상세 옵션 ID" }),
    __metadata("design:type", String)
], ProductOptionDetailEntity.prototype, "product_option_detail_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '상세 옵션 명' }),
    __metadata("design:type", String)
], ProductOptionDetailEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '상세 옵션 값' }),
    __metadata("design:type", String)
], ProductOptionDetailEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductOption_entity_1.ProductOptionEntity, product_option => product_option.option_detail),
    (0, typeorm_1.JoinColumn)({ name: 'option_id' }),
    __metadata("design:type", ProductOption_entity_1.ProductOptionEntity)
], ProductOptionDetailEntity.prototype, "product_option", void 0);
ProductOptionDetailEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_option_detail' }),
    (0, typeorm_1.Unique)(['product_option_detail_id'])
], ProductOptionDetailEntity);
exports.ProductOptionDetailEntity = ProductOptionDetailEntity;
//# sourceMappingURL=ProductOptionDetail.entity.js.map