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
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductBrand_entity_1 = require("./ProductBrand.entity");
const ProductImage_entity_1 = require("./ProductImage.entity");
const ProductOption_entity_1 = require("./ProductOption.entity");
const ProductRelated_entity_1 = require("./ProductRelated.entity");
const ProductToClass_entity_1 = require("./ProductToClass.entity");
const CouponToProduct_entity_1 = require("../coupon/CouponToProduct.entity");
const ProductIconToProduct_entity_1 = require("./ProductIconToProduct.entity");
const ProductSearchKeyword_entity_1 = require("./ProductSearchKeyword.entity");
const MainDisplayToProduct_entity_1 = require("../main-display/MainDisplayToProduct.entity");
const TopDisplayToProduct_entity_1 = require("../top-display/TopDisplayToProduct.entity");
const PlanEventToProduct_entity_1 = require("../plan/PlanEventToProduct.entity");
const ProductStarPoint_entity_1 = require("./ProductStarPoint.entity");
const ProductLike_entity_1 = require("./ProductLike.entity");
let ProductEntity = class ProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', zerofill: true, comment: '상품 고유 ID' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '상품 고유 코드' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "product_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, default: 0, comment: '제품 출처 타입 (사입=0, 위탁=1)' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "product_company_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '제품 출처 명 (업체 명)' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "product_company_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, default: true, comment: '상품 노출 여부' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "is_show", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '판매상태 (일시품절=0 or 판매중=1 or 판매종료=2)' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "product_sale_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '상품 명' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '면세 제품 [ 과세 = false / 면세 = true ]' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "use_tax_free", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '기본 시작 수량' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "sale_basie_volume", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: 'ID 당 구매 수량' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "sale_max_volume_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '옵션 명 개수' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "option_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '상품 상세 정보' }),
    __metadata("design:type", String)
], ProductEntity.prototype, "product_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '상품정보고시 여부' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "is_show_product_information", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '개별 적립금 사용 유무 : 사용 여부' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "use_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '개별 적립금 사용 유무 : 텍스트' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "use_point_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '적립금 적용 가능 비율 : 사용 여부' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "use_point_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '적립금 적용 가능 비율 : 텍스트' }),
    __metadata("design:type", Number)
], ProductEntity.prototype, "use_point_range_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '뱃지 노출 : 여부' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "is_use_icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: false, comment: '삭제여부' }),
    __metadata("design:type", Boolean)
], ProductEntity.prototype, "is_delete", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductBrand_entity_1.ProductBrandEntity, brand => brand.product),
    (0, typeorm_1.JoinColumn)({ name: 'brand_id' }),
    __metadata("design:type", ProductBrand_entity_1.ProductBrandEntity)
], ProductEntity.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductToClass_entity_1.ProductToClassEntity, product_class_mapped => product_class_mapped.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "product_class_mapped", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductSearchKeyword_entity_1.ProductSearchKeywordEntity, product_search_keyword => product_search_keyword.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "product_search_keyword", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductImage_entity_1.ProductImageEntity, add_image_id => add_image_id.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "product_image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductOption_entity_1.ProductOptionEntity, product_description => product_description.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "option", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductIconToProduct_entity_1.ProductIconToProductEntity, product_icon_to_product => product_icon_to_product.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "product_icon_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductRelated_entity_1.ProductRelatedEntity, related_product_id => related_product_id.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "related_product_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToProduct_entity_1.CouponToProductEntity, coupon_to_product => coupon_to_product.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "coupon_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => MainDisplayToProduct_entity_1.MainDisplayToProductEntity, main_display_to_product => main_display_to_product.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "main_display_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => TopDisplayToProduct_entity_1.TopDisplayToProductEntity, top_display_to_product => top_display_to_product.product),
    __metadata("design:type", Array)
], ProductEntity.prototype, "top_display_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => PlanEventToProduct_entity_1.PlanEventToProductEntity, plan_event_to_product_id => plan_event_to_product_id.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "plan_event_to_product_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductStarPoint_entity_1.ProductStarPointEntity, product_star_point => product_star_point.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "product_star_point", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductLike_entity_1.ProductLikeEntity, product_like => product_like.product_id),
    __metadata("design:type", Array)
], ProductEntity.prototype, "product_like", void 0);
ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product' }),
    (0, typeorm_1.Unique)(['product_id', 'product_code'])
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=Product.entity.js.map