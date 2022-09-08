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
exports.PlanEventToProductEntity = void 0;
const typeorm_1 = require("typeorm");
const PlanEvent_entity_1 = require("./PlanEvent.entity");
const Product_entity_1 = require("../product/Product.entity");
let PlanEventToProductEntity = class PlanEventToProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '기확전/이벤트-상품 고유 ID' }),
    __metadata("design:type", String)
], PlanEventToProductEntity.prototype, "plan_event_to_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '상품 순서' }),
    __metadata("design:type", Number)
], PlanEventToProductEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => PlanEvent_entity_1.PlanEventEntity, plan_event_id => plan_event_id.plan_event_to_product_id),
    (0, typeorm_1.JoinColumn)({ name: 'plan_event_id' }),
    __metadata("design:type", PlanEvent_entity_1.PlanEventEntity)
], PlanEventToProductEntity.prototype, "plan_event_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Product_entity_1.ProductEntity, product_id => product_id),
    (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
    __metadata("design:type", Product_entity_1.ProductEntity)
], PlanEventToProductEntity.prototype, "product_id", void 0);
PlanEventToProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'plan_event_to_product' }),
    (0, typeorm_1.Unique)(['plan_event_to_product_id'])
], PlanEventToProductEntity);
exports.PlanEventToProductEntity = PlanEventToProductEntity;
//# sourceMappingURL=PlanEventToProduct.entity.js.map