"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExcelDownloadModule = void 0;
const common_1 = require("@nestjs/common");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const typeorm_1 = require("@nestjs/typeorm");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const excel_download_service_1 = require("./excel-download.service");
const OrderDeposit_repository_1 = require("../../../repository/order/OrderDeposit.repository");
const excel_download_controller_1 = require("./excel-download.controller");
let ExcelDownloadModule = class ExcelDownloadModule {
};
ExcelDownloadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                OrderMain_repository_1.OrderMainRepository,
                OrderDetail_repository_1.OrderDetailRepository,
                Member_repository_1.MemberRepository,
                OrderDeposit_repository_1.OrderDepositRepository
            ])],
        controllers: [excel_download_controller_1.ExcelDownloadController],
        providers: [excel_download_service_1.ExcelDownloadService]
    })
], ExcelDownloadModule);
exports.ExcelDownloadModule = ExcelDownloadModule;
//# sourceMappingURL=excel-download.module.js.map