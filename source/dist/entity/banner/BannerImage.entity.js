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
exports.BannerImageEntity = void 0;
const typeorm_1 = require("typeorm");
const BannerItem_entity_1 = require("./BannerItem.entity");
let BannerImageEntity = class BannerImageEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '배너 이미지 고유 ID' }),
    __metadata("design:type", String)
], BannerImageEntity.prototype, "banner_image_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '이미지 URL' }),
    __metadata("design:type", String)
], BannerImageEntity.prototype, "banner_image_url", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => BannerItem_entity_1.BannerItemEntity, banner_item => banner_item.banner_image_id),
    __metadata("design:type", Array)
], BannerImageEntity.prototype, "banner_item", void 0);
BannerImageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'banner_image' }),
    (0, typeorm_1.Unique)(['banner_image_id'])
], BannerImageEntity);
exports.BannerImageEntity = BannerImageEntity;
//# sourceMappingURL=BannerImage.entity.js.map