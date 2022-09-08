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
exports.DeliveryCompanyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const delivery_company_service_1 = require("./delivery-company.service");
const respones_1 = require("../../common/respones");
const DeliveryCompany_entity_1 = require("../../entity/delivery/DeliveryCompany.entity");
let DeliveryCompanyController = class DeliveryCompanyController {
    constructor(DeliveryCompanyService) {
        this.DeliveryCompanyService = DeliveryCompanyService;
    }
    async deliveryFindAll(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.DeliveryCompanyService.findAll()
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async deliveryFindId(deliveryCompanyId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.DeliveryCompanyService.findId(deliveryCompanyId)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async deliveryFindName(deliveryCompanyName, res) {
        try {
            console.log("hello");
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.DeliveryCompanyService.findName(deliveryCompanyName)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async create(deliveryCompanyName, res) {
        try {
            console.log(deliveryCompanyName);
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.DeliveryCompanyService.save(deliveryCompanyName)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(deliveryCompanyId, deliveryCompanyName, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({
                data: await this.DeliveryCompanyService.update(deliveryCompanyId, deliveryCompanyName)
            }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(deliveryCompanyId, res) {
        try {
            console.log(deliveryCompanyId);
            await this.DeliveryCompanyService.delete(deliveryCompanyId);
            return res.status(200).json((0, respones_1.SUCCESS)({ data: { massage: "success" } }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find/all'),
    (0, swagger_1.ApiOperation)({
        summary: '택배 회사 전체 조회',
        description: '등록 된 택배 회사를 전체 조회합니다.'
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [DeliveryCompany_entity_1.DeliveryCompanyEntity] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeliveryCompanyController.prototype, "deliveryFindAll", null);
__decorate([
    (0, common_1.Get)('/find/id/:deliveryCompanyId'),
    (0, swagger_1.ApiOperation)({
        summary: '택배 회사 ID 조회',
        description: '등록 된 택배 회사를 전달 된 ID 값으로 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'deliveryCompanyId', description: '택배 회사 ID 조회' }),
    (0, swagger_1.ApiCreatedResponse)({ type: DeliveryCompany_entity_1.DeliveryCompanyEntity }),
    __param(0, (0, common_1.Param)('deliveryCompanyId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DeliveryCompanyController.prototype, "deliveryFindId", null);
__decorate([
    (0, common_1.Get)('/find/name/:deliveryCompanyName'),
    (0, swagger_1.ApiOperation)({
        summary: '택배 회사 이름 조회',
        description: '등록 된 택배 회사를 전달 된 이름 값으로 조회합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'deliveryCompanyName', description: '택배 회사 이름 조회' }),
    (0, swagger_1.ApiCreatedResponse)({ type: [DeliveryCompany_entity_1.DeliveryCompanyEntity] }),
    __param(0, (0, common_1.Param)('deliveryCompanyName')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DeliveryCompanyController.prototype, "deliveryFindName", null);
__decorate([
    (0, common_1.Post)('/save/:deliveryCompanyName'),
    (0, swagger_1.ApiOperation)({
        summary: '택배 회사 저장',
        description: '신규 택배 회사를 등록합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'deliveryCompanyName', description: '저장 할 택배 회사 이름' }),
    (0, swagger_1.ApiCreatedResponse)({ type: DeliveryCompany_entity_1.DeliveryCompanyEntity }),
    __param(0, (0, common_1.Param)('deliveryCompanyName')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DeliveryCompanyController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/save/:deliveryCompanyId/:deliveryCompanyName'),
    (0, swagger_1.ApiOperation)({
        summary: '택배 회사 수정',
        description: '신규 택배 회사를 수정합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'deliveryCompanyId', description: '저장 할 택배 회사 고유 ID' }),
    (0, swagger_1.ApiParam)({ name: 'deliveryCompanyName', description: '저장 할 택배 회사 이름' }),
    (0, swagger_1.ApiCreatedResponse)({ type: DeliveryCompany_entity_1.DeliveryCompanyEntity }),
    __param(0, (0, common_1.Param)('deliveryCompanyId')),
    __param(1, (0, common_1.Param)('deliveryCompanyName')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], DeliveryCompanyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/delete/:deliveryCompanyId'),
    (0, swagger_1.ApiOperation)({
        summary: '택배 회사 삭제',
        description: '요청 온 택배 회사를 삭제합니다.'
    }),
    (0, swagger_1.ApiParam)({ name: 'deliveryCompanyId', description: '삭제 할 택배회사 ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { data: { massage: "success" } } } }),
    __param(0, (0, common_1.Param)('deliveryCompanyId')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DeliveryCompanyController.prototype, "delete", null);
DeliveryCompanyController = __decorate([
    (0, common_1.Controller)('delivery/company'),
    (0, swagger_1.ApiTags)('어드민 - 택배회사 관리'),
    __metadata("design:paramtypes", [delivery_company_service_1.DeliveryCompanyService])
], DeliveryCompanyController);
exports.DeliveryCompanyController = DeliveryCompanyController;
//# sourceMappingURL=delivery-company.controller.js.map