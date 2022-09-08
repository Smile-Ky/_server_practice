"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRepository = void 0;
const typeorm_1 = require("typeorm");
const member_entity_1 = require("../entity/member.entity");
const common_1 = require("@nestjs/common");
let MemberRepository = class MemberRepository extends typeorm_1.Repository {
    async g_findByName(name) {
        try {
            return await this.createQueryBuilder('m')
                .select('*')
                .andWhere('m.name like :name', { name: `%${name}%` })
                .execute();
        }
        catch (error) {
            common_1.Logger.error('memberRepository [g_findByName] : ', error);
            throw error;
        }
    }
};
MemberRepository = __decorate([
    (0, typeorm_1.EntityRepository)(member_entity_1.MemberEntity)
], MemberRepository);
exports.MemberRepository = MemberRepository;
//# sourceMappingURL=member.repository.js.map