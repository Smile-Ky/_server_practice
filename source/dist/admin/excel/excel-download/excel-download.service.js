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
exports.ExcelDownloadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderMain_repository_1 = require("../../../repository/order/OrderMain.repository");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const OrderDeposit_repository_1 = require("../../../repository/order/OrderDeposit.repository");
let ExcelDownloadService = class ExcelDownloadService {
    constructor(orderMainRepository, orderDetailRepository, memberRepository, orderDepositRepository) {
        this.orderMainRepository = orderMainRepository;
        this.orderDetailRepository = orderDetailRepository;
        this.memberRepository = memberRepository;
        this.orderDepositRepository = orderDepositRepository;
    }
    async excelDownload() {
        try {
            const result = await this.orderDetailRepository
                .createQueryBuilder("od")
                .select(`od.*,
        om.*,
        p.product_code,
        pb.brand_name,
        p.product_name
        `)
                .leftJoin("member", "m", "m.member_id = member_id")
                .leftJoin("order_main", "om", "om.order_id = od.order_id")
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .leftJoin("product_brand", "pb", "p.brand_id = pb.brand_id");
            const data = await result
                .orderBy("od.order_id", "DESC")
                .execute();
            const xlsx = require("xlsx");
            const book = xlsx.utils.book_new();
            const real_data = xlsx.utils.aoa_to_sheet(data);
            xlsx.utils.book_append_sheet(book, real_data, "order");
            const excel = xlsx.writeFile(book, "order_excel.xlsx");
            const v = Array();
            v.push(excel);
            return { file_url: v[0].location };
        }
        catch (error) {
            common_1.Logger.log(`admin/order/list ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
ExcelDownloadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(OrderDeposit_repository_1.OrderDepositRepository)),
    __metadata("design:paramtypes", [OrderMain_repository_1.OrderMainRepository,
        OrderDetail_repository_1.OrderDetailRepository,
        Member_repository_1.MemberRepository,
        OrderDeposit_repository_1.OrderDepositRepository])
], ExcelDownloadService);
exports.ExcelDownloadService = ExcelDownloadService;
//# sourceMappingURL=excel-download.service.js.map