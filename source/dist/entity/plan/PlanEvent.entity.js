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
exports.PlanEventEntity = void 0;
const typeorm_1 = require("typeorm");
const PlanEventImage_entity_1 = require("./PlanEventImage.entity");
const PlanEventToProduct_entity_1 = require("./PlanEventToProduct.entity");
const PlanEventComment_entity_1 = require("./PlanEventComment.entity");
let PlanEventEntity = class PlanEventEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '이벤트 기획전 고유 ID' }),
    __metadata("design:type", String)
], PlanEventEntity.prototype, "plan_event_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '이벤트/기획전 구분(이벤트=1 or 기획전=2)' }),
    __metadata("design:type", Number)
], PlanEventEntity.prototype, "from_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '전시 여부(사용=true or 미사용=false)' }),
    __metadata("design:type", Boolean)
], PlanEventEntity.prototype, "is_display", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '이벤트/기확전 타이틀' }),
    __metadata("design:type", String)
], PlanEventEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '댓글 사용 여부' }),
    __metadata("design:type", Boolean)
], PlanEventEntity.prototype, "is_use_comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '이벤트 기간 시작일' }),
    __metadata("design:type", String)
], PlanEventEntity.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '이벤트 기간 종료일' }),
    __metadata("design:type", String)
], PlanEventEntity.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '날짜 표시 여부' }),
    __metadata("design:type", Boolean)
], PlanEventEntity.prototype, "is_show_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '이벤트 상세 내용' }),
    __metadata("design:type", String)
], PlanEventEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], PlanEventEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], PlanEventEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => PlanEventImage_entity_1.PlanEventImageEntity, plan_event_image_id => plan_event_image_id.plan_event_id),
    __metadata("design:type", Array)
], PlanEventEntity.prototype, "plan_event_image_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => PlanEventToProduct_entity_1.PlanEventToProductEntity, plan_event_to_product_id => plan_event_to_product_id.plan_event_id),
    __metadata("design:type", Array)
], PlanEventEntity.prototype, "plan_event_to_product_id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => PlanEventComment_entity_1.PlanEventCommentEntity, plan_event_comment => plan_event_comment.plan_event_id),
    __metadata("design:type", Array)
], PlanEventEntity.prototype, "plan_event_comment", void 0);
PlanEventEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'plan_event' }),
    (0, typeorm_1.Unique)(['plan_event_id'])
], PlanEventEntity);
exports.PlanEventEntity = PlanEventEntity;
//# sourceMappingURL=PlanEvent.entity.js.map