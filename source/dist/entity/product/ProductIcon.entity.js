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
exports.ProductIconEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductIconToProduct_entity_1 = require("./ProductIconToProduct.entity");
let ProductIconEntity = class ProductIconEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상품 아이콘 고유 ID' }),
    __metadata("design:type", String)
], ProductIconEntity.prototype, "icon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '아이콘 이름' }),
    __metadata("design:type", String)
], ProductIconEntity.prototype, "icon_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '아이콘 텍스트 내용' }),
    __metadata("design:type", String)
], ProductIconEntity.prototype, "icon_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '글자 색' }),
    __metadata("design:type", String)
], ProductIconEntity.prototype, "font_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '바탕화면 색' }),
    __metadata("design:type", String)
], ProductIconEntity.prototype, "background_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: true, comment: '아이콘 사용 유무' }),
    __metadata("design:type", Boolean)
], ProductIconEntity.prototype, "is_use_icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], ProductIconEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], ProductIconEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ProductIconToProduct_entity_1.ProductIconToProductEntity, product_icon_to_product => product_icon_to_product.product_icon),
    __metadata("design:type", Array)
], ProductIconEntity.prototype, "product_icon_to_product", void 0);
ProductIconEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'product_icon' }),
    (0, typeorm_1.Unique)(['icon_id'])
], ProductIconEntity);
exports.ProductIconEntity = ProductIconEntity;
//# sourceMappingURL=ProductIcon.entity.js.map