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
exports.PlanEventManagerController = void 0;
const common_1 = require("@nestjs/common");
const plan_event_manager_service_1 = require("./plan-event-manager.service");
const respones_1 = require("../../../common/respones");
const swagger_1 = require("@nestjs/swagger");
const ReqPlanEventFromDTO_1 = require("./DTO/ReqPlanEventFromDTO");
const ReqPlanEventFindDTO_1 = require("./DTO/ReqPlanEventFindDTO");
const awsS3_1 = require("../../../common/awsS3");
const platform_express_1 = require("@nestjs/platform-express");
const ResPlanEventFrom_dto_1 = require("./DTO/ResPlanEventFrom.dto");
let PlanEventManagerController = class PlanEventManagerController {
    constructor(planEventManager) {
        this.planEventManager = planEventManager;
    }
    async findAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.planEventManager.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async find(page, pageSize, planEventFind, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.planEventManager.find(planEventFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findId(planEventId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.planEventManager.findId(planEventId)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(planEventFrom, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.planEventManager.create(planEventFrom)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(planEventId, planEventFrom, res) {
        try {
            await this.planEventManager.update(planEventId, planEventFrom);
            return res.status(200).json((0, respones_1.SUCCESS)({ id: planEventId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(planEventId, res) {
        try {
            await this.planEventManager.delete(planEventId);
            return res.status(200).json((0, respones_1.SUCCESS)({ id: planEventId }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async imageUpload(images, res) {
        try {
            if (images[0] === undefined) {
                return (0, respones_1.SUCCESS)({ error: "이미지가 없습니다." });
            }
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.planEventManager.imageUpload(images)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find/all'),
    (0, swagger_1.ApiOperation)({ summary: '이벤트/기획전 내용을 전체 조회합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({ summary: '이벤트/기획전 내용을 검색합니다.' }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, ReqPlanEventFindDTO_1.ReqPlanEventFindDTO, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "find", null);
__decorate([
    (0, common_1.Get)('/find/:planEventId'),
    (0, swagger_1.ApiOperation)({ summary: '이벤트/기획전 내용을 ID로 조회합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResPlanEventFrom_dto_1.ResPlanEventFromDto }),
    __param(0, (0, common_1.Param)('planEventId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "findId", null);
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiOperation)({ summary: '이벤트/기획전을 저장합니다.' }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResPlanEventFrom_dto_1.ResPlanEventFromDto }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPlanEventFromDTO_1.ReqPlanEventFromDTO, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/update/:planEventId'),
    (0, swagger_1.ApiOperation)({ summary: '이벤트/기획전을 업데이트합니다.' }),
    __param(0, (0, common_1.Param)('planEventId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqPlanEventFromDTO_1.ReqPlanEventFromDTO, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:planEventId'),
    (0, swagger_1.ApiOperation)({ summary: '이벤트/기확전을 삭제합니다.' }),
    __param(0, (0, common_1.Param)('planEventId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('/images'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 이미지 업로드',
        description: '상품 이미지 업로드 버튼 클릭 시, 이미지 업로드 수행.'
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)(awsS3_1.schema),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('images', 20, (0, awsS3_1.uploadS3)('plan_event'))),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: { image_id: '고유 ID 값', image_url: 'image_url' } } } }),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], PlanEventManagerController.prototype, "imageUpload", null);
PlanEventManagerController = __decorate([
    (0, common_1.Controller)('admin/plan/event'),
    (0, swagger_1.ApiTags)('어드민 - 이벤트 : 이벤트/기확전 관리'),
    __metadata("design:paramtypes", [plan_event_manager_service_1.PlanEventManagerService])
], PlanEventManagerController);
exports.PlanEventManagerController = PlanEventManagerController;
//# sourceMappingURL=plan-event-manager.controller.js.map