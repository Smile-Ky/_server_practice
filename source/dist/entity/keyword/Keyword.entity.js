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
exports.KeywordEntity = void 0;
const typeorm_1 = require("typeorm");
let KeywordEntity = class KeywordEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '키워드 고유 ID 값' }),
    __metadata("design:type", String)
], KeywordEntity.prototype, "keyword_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200, nullable: false, comment: '키워드 명' }),
    __metadata("design:type", String)
], KeywordEntity.prototype, "keyword_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '키워드 진열 순서' }),
    __metadata("design:type", Number)
], KeywordEntity.prototype, "sequence", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], KeywordEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], KeywordEntity.prototype, "update_date", void 0);
KeywordEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'keyword' }),
    (0, typeorm_1.Unique)(['keyword_id'])
], KeywordEntity);
exports.KeywordEntity = KeywordEntity;
//# sourceMappingURL=Keyword.entity.js.map