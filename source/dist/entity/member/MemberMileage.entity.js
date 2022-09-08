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
exports.MemberMileageEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("./Member.entity");
let MemberMileageEntity = class MemberMileageEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '유저 마일리지 고유 ID' }),
    __metadata("design:type", String)
], MemberMileageEntity.prototype, "member_mileage_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => Member_entity_1.MemberEntity, (member) => member.member_mileage),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], MemberMileageEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '유저가 현재 보유한 총 마일리지' }),
    __metadata("design:type", Number)
], MemberMileageEntity.prototype, "mileage", void 0);
MemberMileageEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member_mileage' }),
    (0, typeorm_1.Unique)(['member_mileage_id'])
], MemberMileageEntity);
exports.MemberMileageEntity = MemberMileageEntity;
//# sourceMappingURL=MemberMileage.entity.js.map