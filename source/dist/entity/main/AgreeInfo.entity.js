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
exports.AgreeInfoEntity = void 0;
const typeorm_1 = require("typeorm");
let AgreeInfoEntity = class AgreeInfoEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '이용약관 고유 아이디' }),
    __metadata("design:type", String)
], AgreeInfoEntity.prototype, "agree_info_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '이용약관 타입 (use, collection, consign, third, marketing)' }),
    __metadata("design:type", String)
], AgreeInfoEntity.prototype, "agree_info_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '이용약관 내용' }),
    __metadata("design:type", String)
], AgreeInfoEntity.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], AgreeInfoEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], AgreeInfoEntity.prototype, "update_date", void 0);
AgreeInfoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'agree_info' }),
    (0, typeorm_1.Unique)(['agree_info_id'])
], AgreeInfoEntity);
exports.AgreeInfoEntity = AgreeInfoEntity;
//# sourceMappingURL=AgreeInfo.entity.js.map