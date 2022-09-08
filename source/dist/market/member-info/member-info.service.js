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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../repository/member/Member.repository");
let MemberInfoService = class MemberInfoService {
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
    }
    async getApiMemberInfo(memberId, memberCode) {
        try {
            const member = await this.memberRepository.createQueryBuilder('member')
                .select([
                `member_id as id`,
                `birth as birthday`,
                `gender as sex_div`,
                `profile_image_url as profile_img`,
                `name as name`,
                `email as mail`,
                `phone as pcs`,
            ])
                .andWhere('member_id = :id', { id: memberId });
            if ((await member.getCount()) === 0) {
                throw '유저가 존재하지 않습니다.';
            }
            return { data: {
                    result: 'success',
                    info: {
                        userInfo: Object.assign(Object.assign({}, (await member.execute())[0]), { code: memberCode })
                    }
                } };
        }
        catch (error) {
            common_1.Logger.error("/api/member : " + error);
            throw error;
        }
    }
};
MemberInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __metadata("design:paramtypes", [Member_repository_1.MemberRepository])
], MemberInfoService);
exports.MemberInfoService = MemberInfoService;
//# sourceMappingURL=member-info.service.js.map