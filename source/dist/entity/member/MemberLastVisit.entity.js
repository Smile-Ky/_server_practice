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
exports.MemberLastVisitEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("./Member.entity");
let MemberLastVisitEntity = class MemberLastVisitEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '최근 방문 시간 고유 ID' }),
    __metadata("design:type", String)
], MemberLastVisitEntity.prototype, "member_last_visit_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.member_last_visit),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], MemberLastVisitEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '최근 방문 시간' }),
    __metadata("design:type", Date)
], MemberLastVisitEntity.prototype, "last_visit", void 0);
MemberLastVisitEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member_last_visit' })
], MemberLastVisitEntity);
exports.MemberLastVisitEntity = MemberLastVisitEntity;
//# sourceMappingURL=MemberLastVisit.entity.js.map