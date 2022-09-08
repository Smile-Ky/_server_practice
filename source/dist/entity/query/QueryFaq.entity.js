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
exports.QueryFaqEntity = void 0;
const typeorm_1 = require("typeorm");
let QueryFaqEntity = class QueryFaqEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: 'FAQ 고유 ID' }),
    __metadata("design:type", String)
], QueryFaqEntity.prototype, "query_faq_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: 'FAQ 제목' }),
    __metadata("design:type", String)
], QueryFaqEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '작성자' }),
    __metadata("design:type", String)
], QueryFaqEntity.prototype, "writer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: 'FAQ 질문' }),
    __metadata("design:type", String)
], QueryFaqEntity.prototype, "faq_q", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: 'FAQ 답변' }),
    __metadata("design:type", String)
], QueryFaqEntity.prototype, "faq_a", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], QueryFaqEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], QueryFaqEntity.prototype, "update_date", void 0);
QueryFaqEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'query_faq' }),
    (0, typeorm_1.Unique)(['query_faq_id'])
], QueryFaqEntity);
exports.QueryFaqEntity = QueryFaqEntity;
//# sourceMappingURL=QueryFaq.entity.js.map