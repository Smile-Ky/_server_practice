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
exports.OrderMemoController = void 0;
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const swagger_1 = require("@nestjs/swagger");
const ResMemoDTO_1 = require("./DTO/ResMemoDTO");
const order_memo_service_1 = require("./order-memo.service");
const ReqMemoDTO_1 = require("./DTO/ReqMemoDTO");
let OrderMemoController = class OrderMemoController {
    constructor(orderMemoService) {
        this.orderMemoService = orderMemoService;
    }
    async getAllMemo(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderMemoService.getAllMemo() }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async getMemoBySearchOption(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderMemoService.getAllMemo() }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findMemoId(memoId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: ResMemoDTO_1.ResMemoData }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async save(order_code, ReqMemo, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.orderMemoService.postOrderMemo(order_code, ReqMemo) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(memoId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ memo_id: "생성한 메모 ID 값" }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async delete(memoId, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ memo_id: "" }));
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
        summary: "메모 전체 조회",
        description: "주문 넘버에 해당하는 메모 내역 전체를 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemoDTO_1.ResMemoDTO] }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderMemoController.prototype, "getAllMemo", null);
__decorate([
    (0, common_1.Post)("/"),
    (0, swagger_1.ApiOperation)({
        summary: "메모 검색조건 검색",
        description: "주문 넘버에 해당하는 메모 내역 전체를 조회합니다."
    }),
    (0, swagger_1.ApiQuery)({ name: "page", description: "조회 하려는 페이지" }),
    (0, swagger_1.ApiQuery)({ name: "pageSize", description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiCreatedResponse)({ type: [ResMemoDTO_1.ResMemoDTO] }),
    __param(0, (0, common_1.Query)("page")),
    __param(1, (0, common_1.Query)("pageSize")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], OrderMemoController.prototype, "getMemoBySearchOption", null);
__decorate([
    (0, common_1.Get)("/find/:memoId"),
    (0, swagger_1.ApiOperation)({
        summary: "메모 ID 조회",
        description: "메모 ID로 메모 내용을 조회합니다."
    }),
    (0, swagger_1.ApiParam)({ name: "memoId", description: "메모 고유 ID" }),
    (0, swagger_1.ApiCreatedResponse)({ type: ResMemoDTO_1.ResMemoDTO }),
    __param(0, (0, common_1.Param)("memoId")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderMemoController.prototype, "findMemoId", null);
__decorate([
    (0, common_1.Post)("/save/:orderId"),
    (0, swagger_1.ApiOperation)({
        summary: "메모 생성",
        description: "주문에 메모를 생성합니다."
    }),
    (0, swagger_1.ApiParam)({ name: "orderId", description: "주문 번호" }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { memo_id: "생성한 메모 ID 값" } } }),
    __param(0, (0, common_1.Param)("orderCode")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ReqMemoDTO_1.ReqMemoDTO, Object]),
    __metadata("design:returntype", Promise)
], OrderMemoController.prototype, "save", null);
__decorate([
    (0, common_1.Post)("/update/:memoId"),
    (0, swagger_1.ApiOperation)({
        summary: "메모 내용 수정",
        description: "메모 내용을 수정합니다."
    }),
    (0, swagger_1.ApiParam)({ name: "memoId", description: "메모 고유 ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { memo_id: "수정한 메모 ID 값" } } }),
    __param(0, (0, common_1.Param)("memoId")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderMemoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete/:orderMemoId"),
    (0, swagger_1.ApiOperation)({
        summary: "메모 내용 삭제",
        description: "메모 내용을 삭제합니다."
    }),
    (0, swagger_1.ApiParam)({ name: "memoId", description: "메모 고유 ID" }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: { memo_id: "" } } }),
    __param(0, (0, common_1.Param)("memoId")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], OrderMemoController.prototype, "delete", null);
OrderMemoController = __decorate([
    (0, common_1.Controller)("admin/order/memo"),
    (0, swagger_1.ApiTags)("어드민 - 주문관리 : 주문관리 / 주문 메모 [ 77페이지 ]"),
    __metadata("design:paramtypes", [order_memo_service_1.OrderMemoService])
], OrderMemoController);
exports.OrderMemoController = OrderMemoController;
//# sourceMappingURL=order-memo.controller.js.map