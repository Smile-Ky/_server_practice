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
exports.AdminUserEntity = void 0;
const typeorm_1 = require("typeorm");
const AdminUserIp_entity_1 = require("./AdminUserIp.entity");
let AdminUserEntity = class AdminUserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '고유 ID' }),
    __metadata("design:type", String)
], AdminUserEntity.prototype, "admin_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '아이디' }),
    __metadata("design:type", String)
], AdminUserEntity.prototype, "login_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '패스워드' }),
    __metadata("design:type", String)
], AdminUserEntity.prototype, "login_pw", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255, nullable: false, comment: '어드민 사용자 이름' }),
    __metadata("design:type", String)
], AdminUserEntity.prototype, "admin_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], AdminUserEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], AdminUserEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => AdminUserIp_entity_1.AdminUserIpEntity, (AdminUserIp) => AdminUserIp.adminUser),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], AdminUserEntity.prototype, "adminUserIps", void 0);
AdminUserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "admin_user" }),
    (0, typeorm_1.Unique)(['admin_user_id'])
], AdminUserEntity);
exports.AdminUserEntity = AdminUserEntity;
//# sourceMappingURL=AdminUser.entity.js.map