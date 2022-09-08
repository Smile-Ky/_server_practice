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
exports.QueryOneToOneEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("../member/Member.entity");
let QueryOneToOneEntity = class QueryOneToOneEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '1대1 문의 고유 ID' }),
    __metadata("design:type", String)
], QueryOneToOneEntity.prototype, "query_one_to_one_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '질문상태(미완료=0, 완료=1)' }),
    __metadata("design:type", Number)
], QueryOneToOneEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '주문번호' }),
    __metadata("design:type", String)
], QueryOneToOneEntity.prototype, "order_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '1대1 제목' }),
    __metadata("design:type", String)
], QueryOneToOneEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '작성자' }),
    __metadata("design:type", String)
], QueryOneToOneEntity.prototype, "writer", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '1대1 질문' }),
    __metadata("design:type", String)
], QueryOneToOneEntity.prototype, "one_to_one_q", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true, comment: '1대1 답변' }),
    __metadata("design:type", String)
], QueryOneToOneEntity.prototype, "one_to_one_a", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '작성일' }),
    __metadata("design:type", Date)
], QueryOneToOneEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], QueryOneToOneEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.query_one_to_one),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], QueryOneToOneEntity.prototype, "member_id", void 0);
QueryOneToOneEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'query_one_to_one' }),
    (0, typeorm_1.Unique)(['query_one_to_one_id'])
], QueryOneToOneEntity);
exports.QueryOneToOneEntity = QueryOneToOneEntity;
//# sourceMappingURL=QueryOneToOne.entity.js.map