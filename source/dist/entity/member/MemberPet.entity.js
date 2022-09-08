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
exports.MemberPetEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("./Member.entity");
let MemberPetEntity = class MemberPetEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '맴버 강아지 고유 ID' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "member_pet_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Member_entity_1.MemberEntity, member_id => member_id.member_pet),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], MemberPetEntity.prototype, "member_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '반려견 이름' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '반려견 종' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "breed", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '반려견 성별' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '강아지 생일' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "birth_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, comment: '중성화 여부' }),
    __metadata("design:type", Boolean)
], MemberPetEntity.prototype, "is_neutralized", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, comment: '강아지 무게' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1000, nullable: true, comment: '한 줄 소개' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "pet_character", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '반려견 프로필 이미지 (강아지 서버 이미지)' }),
    __metadata("design:type", String)
], MemberPetEntity.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], MemberPetEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MemberPetEntity.prototype, "update_date", void 0);
MemberPetEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member_pet' }),
    (0, typeorm_1.Unique)(['member_pet_id'])
], MemberPetEntity);
exports.MemberPetEntity = MemberPetEntity;
//# sourceMappingURL=MemberPet.entity.js.map