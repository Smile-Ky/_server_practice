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
exports.MainDisplayListEntity = void 0;
const typeorm_1 = require("typeorm");
const MainDisplayToProduct_entity_1 = require("./MainDisplayToProduct.entity");
const MainDisplayToProductClass_entity_1 = require("./MainDisplayToProductClass.entity");
let MainDisplayListEntity = class MainDisplayListEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '메인 전시 리스트 고유 ID' }),
    __metadata("design:type", String)
], MainDisplayListEntity.prototype, "main_display_list_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '전시 순서' }),
    __metadata("design:type", Number)
], MainDisplayListEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '메인화면 이름 ( 노출 타이틀 )' }),
    __metadata("design:type", String)
], MainDisplayListEntity.prototype, "display_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: true, nullable: false, comment: '노출여부' }),
    __metadata("design:type", Boolean)
], MainDisplayListEntity.prototype, "is_show", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, nullable: false, comment: '노출 기간 사용 여부' }),
    __metadata("design:type", Boolean)
], MainDisplayListEntity.prototype, "is_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false, comment: '노출시간 : 시작일' }),
    __metadata("design:type", Date)
], MainDisplayListEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false, comment: '노출기간 : 종료일' }),
    __metadata("design:type", Date)
], MainDisplayListEntity.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], MainDisplayListEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MainDisplayListEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => MainDisplayToProduct_entity_1.MainDisplayToProductEntity, main_display_to_product => main_display_to_product.main_display_list),
    __metadata("design:type", Array)
], MainDisplayListEntity.prototype, "main_display_to_product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => MainDisplayToProductClass_entity_1.MainDisplayToProductClassEntity, main_display_to_product_class => main_display_to_product_class.main_display_list),
    __metadata("design:type", MainDisplayToProductClass_entity_1.MainDisplayToProductClassEntity)
], MainDisplayListEntity.prototype, "main_display_to_product_class", void 0);
MainDisplayListEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'main_display_list' }),
    (0, typeorm_1.Unique)(['main_display_list_id'])
], MainDisplayListEntity);
exports.MainDisplayListEntity = MainDisplayListEntity;
//# sourceMappingURL=MainDisplayList.entity.js.map