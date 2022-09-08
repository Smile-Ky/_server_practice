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
exports.OrderExcelFormController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const order_excel_form_service_1 = require("./order-excel-form.service");
const respones_1 = require("../../../common/respones");
const ReqOrderExcelFormSaveDTO_1 = require("./DTO/ReqOrderExcelFormSaveDTO");
const ResOrderExcelForm_1 = require("./DTO/ResOrderExcelForm");
let OrderExcelFormController = class OrderExcelFormController {
    constructor(orderExcelFormService) {
        this.orderExcelFormService = orderExcelFormService;
    }
    async getExcelFormList(res) {
        try {
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async postExcelForm(OrderExcelForm, res) {
        try {
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async putExcelForm(OrderExcelForm, formId, res) {
        try {
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 엑셀 양식 리스트 조회",
        description: "모든 엑셀 리스트를 조회합니다."
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResOrderExcelForm_1.ResOrderExcelForm] }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderExcelFormController.prototype, "getExcelFormList", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 엑셀 양식 추가",
        description: "검색 조건에 따라 주문 내역 리스트를 추가합니다."
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderExcelFormSaveDTO_1.ReqOrderExcelFormSaveDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderExcelFormController.prototype, "postExcelForm", null);
__decorate([
    (0, common_1.Put)("/:formId"),
    (0, swagger_1.ApiOperation)({
        summary: "주문 엑셀 양식 변경",
        description: "검색 조건에 따라 주문 내역 리스트를 변경합니다."
    }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("formId")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqOrderExcelFormSaveDTO_1.ReqOrderExcelFormSaveDTO, String, Object]),
    __metadata("design:returntype", Promise)
], OrderExcelFormController.prototype, "putExcelForm", null);
OrderExcelFormController = __decorate([
    (0, common_1.Controller)("order/excelForm"),
    (0, swagger_1.ApiTags)("어드민 - 주문관리 : 주문엑셀양식관리 [ 94 페이지 ]"),
    __metadata("design:paramtypes", [order_excel_form_service_1.OrderExcelFormService])
], OrderExcelFormController);
exports.OrderExcelFormController = OrderExcelFormController;
//# sourceMappingURL=order-excel-form.controller.js.map