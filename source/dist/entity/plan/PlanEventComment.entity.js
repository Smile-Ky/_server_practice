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
exports.PlanEventCommentEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("../member/Member.entity");
const PlanEvent_entity_1 = require("./PlanEvent.entity");
let PlanEventCommentEntity = class PlanEventCommentEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '이벤트 댓글 고유 ID' }),
    __metadata("design:type", String)
], PlanEventCommentEntity.prototype, "plan_event_comment_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.plan_event_comment),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], PlanEventCommentEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => PlanEvent_entity_1.PlanEventEntity, plan_event_id => plan_event_id.plan_event_comment),
    (0, typeorm_1.JoinColumn)({ name: 'plan_event_id' }),
    __metadata("design:type", PlanEvent_entity_1.PlanEventEntity)
], PlanEventCommentEntity.prototype, "plan_event_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: false, comment: '댓글 내용' }),
    __metadata("design:type", String)
], PlanEventCommentEntity.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], PlanEventCommentEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], PlanEventCommentEntity.prototype, "update_date", void 0);
PlanEventCommentEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'plan_event_comment' }),
    (0, typeorm_1.Unique)(['plan_event_comment_id'])
], PlanEventCommentEntity);
exports.PlanEventCommentEntity = PlanEventCommentEntity;
//# sourceMappingURL=PlanEventComment.entity.js.map