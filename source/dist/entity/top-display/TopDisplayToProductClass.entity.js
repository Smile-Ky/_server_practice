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
exports.TopDisplayToProductClassEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductClass_entity_1 = require("../product/ProductClass.entity");
const TopDisplayList_entity_1 = require("./TopDisplayList.entity");
let TopDisplayToProductClassEntity = class TopDisplayToProductClassEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상단 탭 전시 - 카테고리 맴핑 고유 ID' }),
    __metadata("design:type", String)
], TopDisplayToProductClassEntity.prototype, "top_display_to_product_class_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductClass_entity_1.ProductClassEntity, product_class => product_class.top_display_to_product_class),
    (0, typeorm_1.JoinColumn)({ name: 'product_class_id' }),
    __metadata("design:type", ProductClass_entity_1.ProductClassEntity)
], TopDisplayToProductClassEntity.prototype, "product_class", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => TopDisplayList_entity_1.TopDisplayListEntity, top_display_list => top_display_list.top_display_to_product_class),
    (0, typeorm_1.JoinColumn)({ name: 'top_display_list_id' }),
    __metadata("design:type", TopDisplayList_entity_1.TopDisplayListEntity)
], TopDisplayToProductClassEntity.prototype, "top_display_list", void 0);
TopDisplayToProductClassEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'top_display_to_product_class' }),
    (0, typeorm_1.Unique)(['top_display_to_product_class_id'])
], TopDisplayToProductClassEntity);
exports.TopDisplayToProductClassEntity = TopDisplayToProductClassEntity;
//# sourceMappingURL=TopDisplayToProductClass.entity.js.map