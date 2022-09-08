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
exports.ProductDisToMemberGroupEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductDiscount_entity_1 = require("./ProductDiscount.entity");
const MemberGroup_entity_1 = require("../member/MemberGroup.entity");
let ProductDisToMemberGroupEntity = class ProductDisToMemberGroupEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '일괄할인-유저그룹 맴핑 ' }),
    __metadata("design:type", String)
], ProductDisToMemberGroupEntity.prototype, "product_dis_to_member_group_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductDiscount_entity_1.ProductDiscountEntity, product_discount_id => product_discount_id.product_dis_to_member_group),
    (0, typeorm_1.JoinColumn)({ name: 'product_discount_id' }),
    __metadata("design:type", ProductDiscount_entity_1.ProductDiscountEntity)
], ProductDisToMemberGroupEntity.prototype, "product_discount_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => MemberGroup_entity_1.MemberGroupEntity, member_group_id => member_group_id.product_dis_to_member_group),
    (0, typeorm_1.JoinColumn)({ name: 'member_group_id' }),
    __metadata("design:type", MemberGroup_entity_1.MemberGroupEntity)
], ProductDisToMemberGroupEntity.prototype, "member_group_id", void 0);
ProductDisToMemberGroupEntity = __decorate([
    (0, typeorm_1.Entity)('product_dis_to_member_group'),
    (0, typeorm_1.Unique)(['product_dis_to_member_group_id'])
], ProductDisToMemberGroupEntity);
exports.ProductDisToMemberGroupEntity = ProductDisToMemberGroupEntity;
//# sourceMappingURL=ProductDisToMemberGroup.entity.js.map