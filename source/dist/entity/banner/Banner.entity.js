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
exports.BannerEntity = void 0;
const typeorm_1 = require("typeorm");
const BannerItem_entity_1 = require("./BannerItem.entity");
let BannerEntity = class BannerEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: '배너 고유 ID' }),
    __metadata("design:type", String)
], BannerEntity.prototype, "banner_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false,
        comment: '배너 위치(메인베너=0 or 기획전상단=1 or 쿠폰함배너=2 or 서브배너=3)' }),
    __metadata("design:type", Number)
], BannerEntity.prototype, "banner_point", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '배너 명' }),
    __metadata("design:type", String)
], BannerEntity.prototype, "banner_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '노출 여부' }),
    __metadata("design:type", Boolean)
], BannerEntity.prototype, "is_show", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], BannerEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], BannerEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => BannerItem_entity_1.BannerItemEntity, banner_item => banner_item.banner_id),
    __metadata("design:type", Array)
], BannerEntity.prototype, "banner_item", void 0);
BannerEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'banner' }),
    (0, typeorm_1.Unique)(['banner_id'])
], BannerEntity);
exports.BannerEntity = BannerEntity;
//# sourceMappingURL=Banner.entity.js.map