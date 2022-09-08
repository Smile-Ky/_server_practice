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
exports.MemberEntity = void 0;
const typeorm_1 = require("typeorm");
let MemberEntity = class MemberEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '고유 ID' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: null, comment: '사용자 이름' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, default: null, comment: '사용자 휴대폰' }),
    __metadata("design:type", String)
], MemberEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', comment: '생성일' }),
    __metadata("design:type", Date)
], MemberEntity.prototype, "create_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', comment: '수정일' }),
    __metadata("design:type", Date)
], MemberEntity.prototype, "update_at", void 0);
MemberEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member' }),
    (0, typeorm_1.Unique)(['member_id'])
], MemberEntity);
exports.MemberEntity = MemberEntity;
//# sourceMappingURL=member.entity.js.map