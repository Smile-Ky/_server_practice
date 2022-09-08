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
exports.MarketingKeywordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Keyword_repository_1 = require("../../../repository/keyword/Keyword.repository");
const KeywordSearch_repository_1 = require("../../../repository/keyword/KeywordSearch.repository");
const respones_1 = require("../../../common/respones");
const Keyword_entity_1 = require("../../../entity/keyword/Keyword.entity");
let MarketingKeywordService = class MarketingKeywordService {
    constructor(keywordRepository, keywordSearchRepository) {
        this.keywordRepository = keywordRepository;
        this.keywordSearchRepository = keywordSearchRepository;
    }
    async find(startDate, endDate, page, pageSize) {
        try {
            const result = await this.keywordSearchRepository
                .createQueryBuilder("ks")
                .select([`ks.search_keyword`,
                `count(ks.search_keyword) as search_keyword_view`
            ]);
            if (startDate != null && endDate != null) {
                result.andWhere("DATE(ks.create_date) BETWEEN :start AND :end", {
                    start: new Date(startDate),
                    end: new Date(endDate)
                });
            }
            result.groupBy(`ks.search_keyword`);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("search_keyword_view", "DESC").limit(pageSize).offset(respones_1.Paging.getOffset(totalData, page, pageSize)).execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async keywordFind() {
        try {
            const result = await this.keywordRepository
                .createQueryBuilder("k")
                .select([`*`]);
            const totalData = await result.getCount();
            return {
                data: await result.orderBy("k.sequence", "ASC").execute()
            };
        }
        catch (error) {
            common_1.Logger.error(`admin/member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async keywordSave(keyword) {
        try {
            const max_sequence = await this.keywordRepository
                .createQueryBuilder("k")
                .select([`max(k.sequence)+1 as max`
            ]).getRawOne();
            const keywords = new Keyword_entity_1.KeywordEntity();
            keywords.keyword_name = keyword;
            keywords.create_date = new Date();
            keywords.sequence = Number(max_sequence.max) != null ? Number(max_sequence.max) : 1;
            const s = await this.keywordRepository.save({
                keyword_name: keyword,
                sequence: Number(max_sequence.max) != null ? Number(max_sequence.max) : 1
            });
            return {
                id: s.keyword_id,
                keyword: s.keyword_name,
                createAt: s.create_date
            };
        }
        catch (error) {
            common_1.Logger.error(`admin / member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async keywordSaveOrder(req) {
        try {
            for (const keyword_listItem of req.keyword_list) {
                common_1.Logger.error(keyword_listItem.sequence);
                await this.keywordRepository.update({ keyword_id: keyword_listItem.keyword_id }, {
                    update_date: () => "NOW()",
                    sequence: keyword_listItem.sequence,
                    keyword_name: keyword_listItem.keyword_name
                });
            }
            return "저장이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin / member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async keywordUpdate(keywordId, keyword) {
        try {
            await this.keywordRepository.update({ keyword_id: keywordId }, { keyword_name: keyword });
            return "변경이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin / member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async keywordDelete(keywordId) {
        try {
            await this.keywordRepository.delete({ keyword_id: keywordId });
            return "변경이 완료되었습니다.";
        }
        catch (error) {
            common_1.Logger.error(`admin / member ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
MarketingKeywordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Keyword_repository_1.KeywordRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(KeywordSearch_repository_1.KeywordSearchRepository)),
    __metadata("design:paramtypes", [Keyword_repository_1.KeywordRepository,
        KeywordSearch_repository_1.KeywordSearchRepository])
], MarketingKeywordService);
exports.MarketingKeywordService = MarketingKeywordService;
//# sourceMappingURL=marketing-keyword.service.js.map