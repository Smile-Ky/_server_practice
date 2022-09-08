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
exports.OneToOneQueryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const QueryOneToOne_repository_1 = require("../../../repository/query/QueryOneToOne.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const respones_1 = require("../../../common/respones");
const QueryOneToOne_entity_1 = require("../../../entity/query/QueryOneToOne.entity");
let OneToOneQueryService = class OneToOneQueryService {
    constructor(queryOneToOneRepository, memberRepository) {
        this.queryOneToOneRepository = queryOneToOneRepository;
        this.memberRepository = memberRepository;
    }
    async find(page, pageSize) {
        try {
            const result = await this.queryOneToOneRepository
                .createQueryBuilder('query_one')
                .innerJoin('member', 'm', 'm.member_id = query_one.member_id');
            const totalData = (await result.select('COUNT(1) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'query_one_to_one_id',
                `CASE
        WHEN query_one.state = 1 THEN '완료'
        WHEN query_one.state = 0 THEN '미완료'
        END as state`,
                'title',
                'm.name as member_name',
                `writer`,
                'query_one.create_date as date'
            ]);
            return {
                data: await result
                    .orderBy('query_one.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async findId(id) {
        try {
            const result = await this.queryOneToOneRepository
                .createQueryBuilder('query_one')
                .innerJoin('member', 'm', 'm.member_id = query_one.member_id')
                .select([
                'query_one_to_one_id',
                `CASE
          WHEN query_one.state = 1 THEN '완료'
          WHEN query_one.state = 0 THEN '미완료'
          END as state`,
                'order_code',
                'title',
                `writer`,
                'one_to_one_q',
                'one_to_one_a',
                'm.member_id as member_id',
                'm.name as member_name',
                'query_one.create_date as create_date',
                'query_one.update_date as update_date'
            ])
                .andWhere('query_one.query_one_to_one_id = :id', { id });
            return (await result.execute())[0];
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async query(memberId, data) {
        try {
            const member = await this.memberRepository.findOne({ member_id: memberId });
            const queryData = new QueryOneToOne_entity_1.QueryOneToOneEntity();
            queryData.state = 0;
            queryData.order_code = data.order_code;
            queryData.title = data.title;
            queryData.one_to_one_q = data.one_to_one_q;
            queryData.member_id = member;
            return await this.queryOneToOneRepository.save(queryData);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async answer(id, data) {
        try {
            return await this.queryOneToOneRepository.update({ query_one_to_one_id: id }, Object.assign(Object.assign({}, data), { state: 1, update_date: (() => 'NOW()') }));
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async queryUpdate(id, data) {
        try {
            await this.queryOneToOneRepository.update({ query_one_to_one_id: id }, Object.assign(Object.assign({}, data), { update_date: (() => 'NOW()') }));
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.queryOneToOneRepository.delete({ query_one_to_one_id: id });
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
OneToOneQueryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(QueryOneToOne_repository_1.QueryOneToOneRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __metadata("design:paramtypes", [QueryOneToOne_repository_1.QueryOneToOneRepository,
        Member_repository_1.MemberRepository])
], OneToOneQueryService);
exports.OneToOneQueryService = OneToOneQueryService;
//# sourceMappingURL=one-to-one-query.service.js.map