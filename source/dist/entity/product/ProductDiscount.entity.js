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
exports.ProductDiscountEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductDisToMemberGroup_entity_1 = require("./ProductDisToMemberGroup.entity");
const ProductDisToProduct_entity_1 = require("./ProductDisToProduct.entity");
let ProductDiscountEntity = class ProductDiscountEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '일괄 할인 고유 ID' }),
    __metadata("design:type", String)
], ProductDiscountEntity.prototype, "batch_discount_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '일괄 할인명' }),
    __metadata("design:type", String)
], ProductDiscountEntity.prototype, "batch_discount_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false, comment: '시작일' }),
    __metadata("design:type", Date)
], ProductDiscountEntity.prototype, "batch_discount_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: false, comment: '종료일' }),
    __metadata("design:type", Date)
], ProductDiscountEntity.prototype, "batch_discount_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '사용 여부' }),
    __metadata("design:type", Boolean)
], ProductDiscountEntity.prototype, "is_use", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '회원 조건 (전체=0 or 회원_그룹별=1)' }),
    __metadata("design:type", Number)
], ProductDiscountEntity.prototype, "use_member_group_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '할인 타입 (정률할인=0 or 정액할일=1 or 개별할인 = 3)' }),
    __metadata("design:type", Number)
], ProductDiscountEntity.prototype, "discount_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '할인율 설정' }),
    __metadata("design:type", Number)
], ProductDiscountEntity.prototype, "discount_setting_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductDiscountEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductDiscountEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductDisToMemberGroup_entity_1.ProductDisToMemberGroupEntity, product_dis_to_member_group => product_dis_to_member_group.product_discount_id),
    __metadata("design:type", Array)
], ProductDiscountEntity.prototype, "product_dis_to_member_group", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductDisToProduct_entity_1.ProductDisToProductEntity, product_dis_to_product => product_dis_to_product.product_discount_id),
    __metadata("design:type", Array)
], ProductDiscountEntity.prototype, "product_dis_to_product", void 0);
ProductDiscountEntity = __decorate([
    (0, typeorm_1.Entity)('product_discount'),
    (0, typeorm_1.Unique)(['batch_discount_id'])
], ProductDiscountEntity);
exports.ProductDiscountEntity = ProductDiscountEntity;
//# sourceMappingURL=ProductDiscount.entity.js.map