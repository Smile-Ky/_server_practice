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
exports.BannerItemEntity = void 0;
const typeorm_1 = require("typeorm");
const BannerImage_entity_1 = require("./BannerImage.entity");
const Banner_entity_1 = require("./Banner.entity");
let BannerItemEntity = class BannerItemEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: '배너 아이템 고유 ID' }),
    __metadata("design:type", String)
], BannerItemEntity.prototype, "banner_item_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '베너 타이틀' }),
    __metadata("design:type", String)
], BannerItemEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '배너 이미지 링크 (배너 클릭시 이동 해야하는 링크)' }),
    __metadata("design:type", String)
], BannerItemEntity.prototype, "link_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '순서' }),
    __metadata("design:type", Number)
], BannerItemEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '날짜 사용 여부' }),
    __metadata("design:type", Boolean)
], BannerItemEntity.prototype, "is_use_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, comment: '시작일' }),
    __metadata("design:type", Date)
], BannerItemEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true, comment: '수정일' }),
    __metadata("design:type", Date)
], BannerItemEntity.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Banner_entity_1.BannerEntity, banner_id => banner_id.banner_item),
    (0, typeorm_1.JoinColumn)({ name: 'banner_id' }),
    __metadata("design:type", Banner_entity_1.BannerEntity)
], BannerItemEntity.prototype, "banner_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => BannerImage_entity_1.BannerImageEntity, banner_image_id => banner_image_id.banner_item),
    (0, typeorm_1.JoinColumn)({ name: 'banner_image_id' }),
    __metadata("design:type", BannerImage_entity_1.BannerImageEntity)
], BannerItemEntity.prototype, "banner_image_id", void 0);
BannerItemEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'banner_item' }),
    (0, typeorm_1.Unique)(['banner_item_id'])
], BannerItemEntity);
exports.BannerItemEntity = BannerItemEntity;
//# sourceMappingURL=BannerItem.entity.js.map