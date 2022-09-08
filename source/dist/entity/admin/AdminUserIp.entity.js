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
exports.AdminUserIpEntity = void 0;
const typeorm_1 = require("typeorm");
const AdminUser_entity_1 = require("./AdminUser.entity");
const swagger_1 = require("@nestjs/swagger");
let AdminUserIpEntity = class AdminUserIpEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'ip 데이터 고유 키 값', description: '고유 키 값' }),
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: '고유 아이디' }),
    __metadata("design:type", String)
], AdminUserIpEntity.prototype, "ip_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0.0.0.0', description: '요청온 ip' }),
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '아이피' }),
    __metadata("design:type", String)
], AdminUserIpEntity.prototype, "ip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '요청자', description: '요청자' }),
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '요청자' }),
    __metadata("design:type", String)
], AdminUserIpEntity.prototype, "ip_user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, description: '승인 상태' }),
    (0, typeorm_1.Column)({ type: "boolean", nullable: false, comment: '승인 상태' }),
    __metadata("design:type", Boolean)
], AdminUserIpEntity.prototype, "approved_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '요청 온 날짜' }),
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일 / 요청 온 날짜' }),
    __metadata("design:type", Date)
], AdminUserIpEntity.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '승인한 날짜' }),
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일 / 승인 된 날짜' }),
    __metadata("design:type", Date)
], AdminUserIpEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => AdminUser_entity_1.AdminUserEntity, (AdminUser) => AdminUser.adminUserIps),
    __metadata("design:type", AdminUser_entity_1.AdminUserEntity)
], AdminUserIpEntity.prototype, "adminUser", void 0);
AdminUserIpEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "admin_user_ip" })
], AdminUserIpEntity);
exports.AdminUserIpEntity = AdminUserIpEntity;
//# sourceMappingURL=AdminUserIp.entity.js.map