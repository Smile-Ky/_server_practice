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
exports.NoticeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Notice_repository_1 = require("../../../repository/main/Notice.repository");
const Notice_entity_1 = require("../../../entity/main/Notice.entity");
const respones_1 = require("../../../common/respones");
let NoticeService = class NoticeService {
    constructor(noticeRepository) {
        this.noticeRepository = noticeRepository;
    }
    async find(page, pageSize) {
        try {
            const result = await this.noticeRepository
                .createQueryBuilder('notice');
            const totalData = (await result.select('COUNT(1) AS `cnt`').execute())[0]['cnt'];
            result.select([
                'notice_id',
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
            return await this.noticeRepository.findOne({ notice_id: id });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async create(data) {
        try {
            const notice = new Notice_entity_1.NoticeEntity();
            notice.title = data.title;
            notice.writer = data.writer;
            notice.notice_doc = data.notice_doc;
            return await this.noticeRepository.save(notice);
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            await this.noticeRepository.update({ notice_id: id }, Object.assign(Object.assign({}, data), { update_date: (() => 'NOW()') }));
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.noticeRepository
                .query(`DELETE FROM notice WHERE notice_id = ${id}`);
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
NoticeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Notice_repository_1.NoticeRepository)),
    __metadata("design:paramtypes", [Notice_repository_1.NoticeRepository])
], NoticeService);
exports.NoticeService = NoticeService;
//# sourceMappingURL=notice.service.js.map