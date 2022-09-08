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
exports.OneToOneQueryController = void 0;
const common_1 = require("@nestjs/common");
const one_to_one_query_service_1 = require("./one-to-one-query.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ResFAQ_dto_1 = require("../faq-query/DTO/ResFAQ.dto");
const ReqAnswerFrom_dto_1 = require("./DTO/ReqAnswerFrom.dto");
const ReqQueryFrom_dto_1 = require("./DTO/ReqQueryFrom.dto");
let OneToOneQueryController = class OneToOneQueryController {
    constructor(oneToOneQueryService) {
        this.oneToOneQueryService = oneToOneQueryService;
    }
    async find(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.oneToOneQueryService.find(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(id, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.oneToOneQueryService.findId(id)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async query(id, data, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.oneToOneQueryService.query(id, data)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async answer(id, data, res) {
        try {
            await this.oneToOneQueryService.answer(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async queryUpdate(id, data, res) {
        try {
            await this.oneToOneQueryService.queryUpdate(id, data);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(id, res) {
        try {
            await this.oneToOneQueryService.delete(id);
            return res.status(200).json((0, respones_1.SUCCESS)({ id }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/'),
    (0, swagger_1.ApiOperation)({ summary: '1대1 문의를 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OneToOneQueryController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/:oneToOneId'),
    (0, swagger_1.ApiOperation)({ summary: '1대1 문의를 ID로 조회합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResFAQ_dto_1.ResFAQDto }),
    __param(0, (0, common_1.Param)('oneToOneId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OneToOneQueryController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/query/:memberId'),
    (0, swagger_1.ApiOperation)({ summary: '1대1 질문합니다.' }),
    __param(0, (0, common_1.Param)('memberId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqQueryFrom_dto_1.ReqQueryFromDto, Object]),
    __metadata("design:returntype", Promise)
], OneToOneQueryController.prototype, "query", null);
__decorate([
    (0, common_1.Post)('/answer/:oneToOneId'),
    (0, swagger_1.ApiOperation)({ summary: '1대1 답변합니다.' }),
    __param(0, (0, common_1.Param)('oneToOneId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqAnswerFrom_dto_1.ReqAnswerFromDto, Object]),
    __metadata("design:returntype", Promise)
], OneToOneQueryController.prototype, "answer", null);
__decorate([
    (0, common_1.Put)('/query/:oneToOneId'),
    (0, swagger_1.ApiOperation)({ summary: '1대1 질문을 수정합니다.' }),
    __param(0, (0, common_1.Param)('oneToOneId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqQueryFrom_dto_1.ReqQueryFromDto, Object]),
    __metadata("design:returntype", Promise)
], OneToOneQueryController.prototype, "queryUpdate", null);
__decorate([
    (0, common_1.Delete)('/:oneToOneId'),
    (0, swagger_1.ApiOperation)({ summary: '1대1 질문을 삭제합니다.' }),
    __param(0, (0, common_1.Param)('oneToOneId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OneToOneQueryController.prototype, "delete", null);
OneToOneQueryController = __decorate([
    (0, common_1.Controller)('admin/one-to-one'),
    (0, swagger_1.ApiTags)('어드민 - 고객센터 : 1 대 1 문의'),
    __metadata("design:paramtypes", [one_to_one_query_service_1.OneToOneQueryService])
], OneToOneQueryController);
exports.OneToOneQueryController = OneToOneQueryController;
//# sourceMappingURL=one-to-one-query.controller.js.map