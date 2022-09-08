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
exports.QueryProductEntity = void 0;
const typeorm_1 = require("typeorm");
const ProductOption_entity_1 = require("../product/ProductOption.entity");
const Member_entity_1 = require("../member/Member.entity");
let QueryProductEntity = class QueryProductEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '상품 문의 고유 ID' }),
    __metadata("design:type", String)
], QueryProductEntity.prototype, "query_product_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '문의 타입(상품문의=0 배송문의=1 기타=2)' }),
    __metadata("design:type", Number)
], QueryProductEntity.prototype, "query_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '공개여부 (공개=1 숨김=0)' }),
    __metadata("design:type", Boolean)
], QueryProductEntity.prototype, "is_open", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '답변여부 (답변완료=1 답변대기=0)' }),
    __metadata("design:type", Boolean)
], QueryProductEntity.prototype, "is_answer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '제목' }),
    __metadata("design:type", String)
], QueryProductEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '질문' }),
    __metadata("design:type", String)
], QueryProductEntity.prototype, "query_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '답변 작성자' }),
    __metadata("design:type", String)
], QueryProductEntity.prototype, "answer_writer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '답변' }),
    __metadata("design:type", String)
], QueryProductEntity.prototype, "answer_content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], QueryProductEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], QueryProductEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.query_product),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], QueryProductEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => ProductOption_entity_1.ProductOptionEntity, product_option_id => product_option_id.query_product),
    (0, typeorm_1.JoinColumn)({ name: 'product_option_id' }),
    __metadata("design:type", ProductOption_entity_1.ProductOptionEntity)
], QueryProductEntity.prototype, "product_option_id", void 0);
QueryProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'query_product' }),
    (0, typeorm_1.Unique)(['query_product_id'])
], QueryProductEntity);
exports.QueryProductEntity = QueryProductEntity;
//# sourceMappingURL=QueryProduct.entity.js.map