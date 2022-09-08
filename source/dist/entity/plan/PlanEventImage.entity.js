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
exports.PlanEventImageEntity = void 0;
const typeorm_1 = require("typeorm");
const PlanEvent_entity_1 = require("./PlanEvent.entity");
let PlanEventImageEntity = class PlanEventImageEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '이벤트/기획전 이미지 고유 ID' }),
    __metadata("design:type", String)
], PlanEventImageEntity.prototype, "plan_event_image_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '이미지 URL' }),
    __metadata("design:type", String)
], PlanEventImageEntity.prototype, "plan_event_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: true, comment: 'OG_tag 여부 (true = OG_tag, false = list_image)' }),
    __metadata("design:type", Boolean)
], PlanEventImageEntity.prototype, "is_OG_tag", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => PlanEvent_entity_1.PlanEventEntity, plan_event_id => plan_event_id.plan_event_image_id),
    (0, typeorm_1.JoinColumn)({ name: 'plan_event_id' }),
    __metadata("design:type", PlanEvent_entity_1.PlanEventEntity)
], PlanEventImageEntity.prototype, "plan_event_id", void 0);
PlanEventImageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'plan_event_image' }),
    (0, typeorm_1.Unique)(['plan_event_image_id'])
], PlanEventImageEntity);
exports.PlanEventImageEntity = PlanEventImageEntity;
//# sourceMappingURL=PlanEventImage.entity.js.map