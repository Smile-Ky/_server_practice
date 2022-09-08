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
exports.FaqQueryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const QueryFaq_repository_1 = require("../../../repository/query/QueryFaq.repository");
const QueryFaq_entity_1 = require("../../../entity/query/QueryFaq.entity");
const respones_1 = require("../../../common/respones");
let FaqQueryService = class FaqQueryService {
    constructor(queryFaqRepository) {
        this.queryFaqRepository = queryFaqRepository;
    }
    async find(page, pageSize) {
        try {
            const result = await this.queryFaqRepository
                .createQueryBuilder('queryFaq');
            const totalData = (await result.select('COUNT(1) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'query_faq_id',
                'title',
                'writer',
                'update_date as date'
            ]);
            return {
                data: await result
                    .orderBy('create_date', 'DESC')
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
            return await this.queryFaqRepository.findOne({ query_faq_id: id });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async create(data) {
        try {
            const FAQData = new QueryFaq_entity_1.QueryFaqEntity();
            FAQData.title = data.title;
            FAQData.writer = data.writer;
            FAQData.faq_q = data.faq_q;
            FAQData.faq_a = data.faq_a;
            return await this.queryFaqRepository.save(FAQData);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            await this.queryFaqRepository.update({ query_faq_id: id }, Object.assign(Object.assign({}, data), { update_date: (() => 'NOW()') }));
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.queryFaqRepository.delete({ query_faq_id: id });
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
FaqQueryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(QueryFaq_repository_1.QueryFaqRepository)),
    __metadata("design:paramtypes", [QueryFaq_repository_1.QueryFaqRepository])
], FaqQueryService);
exports.FaqQueryService = FaqQueryService;
//# sourceMappingURL=faq-query.service.js.map