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
exports.KeywordSearchEntity = void 0;
const typeorm_1 = require("typeorm");
let KeywordSearchEntity = class KeywordSearchEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '검색어 키워드 고유 ID' }),
    __metadata("design:type", String)
], KeywordSearchEntity.prototype, "search_keyword_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '검색 유저 고유 ID' }),
    __metadata("design:type", String)
], KeywordSearchEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '검색 키워드' }),
    __metadata("design:type", String)
], KeywordSearchEntity.prototype, "search_keyword", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], KeywordSearchEntity.prototype, "create_date", void 0);
KeywordSearchEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'keyword_search' }),
    (0, typeorm_1.Unique)(['search_keyword_id'])
], KeywordSearchEntity);
exports.KeywordSearchEntity = KeywordSearchEntity;
//# sourceMappingURL=keywordSearch.entity.js.map