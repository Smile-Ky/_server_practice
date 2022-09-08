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
exports.TopDisplayListEntity = void 0;
const typeorm_1 = require("typeorm");
const TopDisplayToProduct_entity_1 = require("./TopDisplayToProduct.entity");
const TopDisplayToProductClass_entity_1 = require("./TopDisplayToProductClass.entity");
let TopDisplayListEntity = class TopDisplayListEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상단 탭 전시 리스트 고유 Id' }),
    __metadata("design:type", String)
], TopDisplayListEntity.prototype, "top_display_list_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '전시 순서' }),
    __metadata("design:type", Number)
], TopDisplayListEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '메인화면 이름 ( 노출 타이틀 )' }),
    __metadata("design:type", String)
], TopDisplayListEntity.prototype, "display_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, nullable: false, comment: '노출여부' }),
    __metadata("design:type", Boolean)
], TopDisplayListEntity.prototype, "is_show", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: false, comment: '노출 기간 사용 여부' }),
    __metadata("design:type", Boolean)
], TopDisplayListEntity.prototype, "is_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false, comment: '노출시간 : 시작일' }),
    __metadata("design:type", Date)
], TopDisplayListEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false, comment: '노출기간 : 종료일' }),
    __metadata("design:type", Date)
], TopDisplayListEntity.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], TopDisplayListEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], TopDisplayListEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => TopDisplayToProduct_entity_1.TopDisplayToProductEntity, top_display_to_product => top_display_to_product),
    __metadata("design:type", Array)
], TopDisplayListEntity.prototype, "top_display_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => TopDisplayToProductClass_entity_1.TopDisplayToProductClassEntity, top_display_to_product_class => top_display_to_product_class.top_display_list),
    __metadata("design:type", Array)
], TopDisplayListEntity.prototype, "top_display_to_product_class", void 0);
TopDisplayListEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'top_display_list' }),
    (0, typeorm_1.Unique)(['top_display_list_id'])
], TopDisplayListEntity);
exports.TopDisplayListEntity = TopDisplayListEntity;
//# sourceMappingURL=TopDisplayList.entity.js.map