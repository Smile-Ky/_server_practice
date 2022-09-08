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
exports.MemberAddressEntity = void 0;
const typeorm_1 = require("typeorm");
const Member_entity_1 = require("./Member.entity");
const OrderMain_entity_1 = require("../order/OrderMain.entity");
let MemberAddressEntity = class MemberAddressEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '회원 등록 주소 고유 ID' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "address_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", default: 0, comment: '기본 배송지 여부(1=기본 배송지, 0=기본 배송지 아님)' }),
    __metadata("design:type", Number)
], MemberAddressEntity.prototype, "default_delivery", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '배송지 이름' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "delivery_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null, nullable: false, comment: '수령자명' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "address_user_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", default: null, nullable: false, comment: '수령자 휴대폰' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', default: null, nullable: false, comment: '수령자 집번호' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "home_tel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: true, comment: '우편번호' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '주소' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, default: null, nullable: true, comment: '상세 주소' }),
    __metadata("design:type", String)
], MemberAddressEntity.prototype, "address_detail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => Member_entity_1.MemberEntity, (member) => member.member_address, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'member_id' }),
    __metadata("design:type", Member_entity_1.MemberEntity)
], MemberAddressEntity.prototype, "member", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => OrderMain_entity_1.OrderMainEntity, order_main => order_main.member_address_id),
    (0, typeorm_1.JoinColumn)({ name: 'order_main' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], MemberAddressEntity.prototype, "order_main", void 0);
MemberAddressEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'member_address' }),
    (0, typeorm_1.Unique)(['address_id'])
], MemberAddressEntity);
exports.MemberAddressEntity = MemberAddressEntity;
//# sourceMappingURL=MemberAddress.entity.js.map