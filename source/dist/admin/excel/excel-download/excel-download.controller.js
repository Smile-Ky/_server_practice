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
exports.ExcelDownloadController = void 0;
const common_1 = require("@nestjs/common");
const excel_download_service_1 = require("./excel-download.service");
const respones_1 = require("../../../common/respones");
const swagger_1 = require("@nestjs/swagger");
const awsS3_1 = require("../../../common/awsS3");
const platform_express_1 = require("@nestjs/platform-express");
let ExcelDownloadController = class ExcelDownloadController {
    constructor(excelDownloadService) {
        this.excelDownloadService = excelDownloadService;
    }
    async excelDownload(res) {
        try {
            return this.excelDownloadService.excelDownload();
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/download"),
    (0, swagger_1.ApiOperation)({
        summary: "엑셀 다운로드",
        description: "정해진 포맷대로 엑셀을 다운로드 합니다."
    }),
    (0, swagger_1.ApiBody)(awsS3_1.schema),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('excelFile', 20, (0, awsS3_1.uploadS3)('excel'))),
    (0, swagger_1.ApiCreatedResponse)({ schema: { example: { data: { file_url: 'file_url' } } } }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExcelDownloadController.prototype, "excelDownload", null);
ExcelDownloadController = __decorate([
    (0, common_1.Controller)("admin/excel"),
    (0, swagger_1.ApiTags)("어드민 - 엑셀다운로드"),
    __metadata("design:paramtypes", [excel_download_service_1.ExcelDownloadService])
], ExcelDownloadController);
exports.ExcelDownloadController = ExcelDownloadController;
//# sourceMappingURL=excel-download.controller.js.map