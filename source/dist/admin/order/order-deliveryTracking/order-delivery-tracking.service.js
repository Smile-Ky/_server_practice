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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDeliveryTrackingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderDetail_repository_1 = require("../../../repository/order/OrderDetail.repository");
const axios_1 = __importDefault(require("axios"));
let OrderDeliveryTrackingService = class OrderDeliveryTrackingService {
    constructor(orderManagerRepository) {
        this.orderManagerRepository = orderManagerRepository;
    }
    async postTrackingNumber(reqTrackerRegistDTO) {
        try {
            const data = await axios_1.default.post(process.env.SWEET_TRACKER_HOST_DEV + "/add_invoice", {
                num: reqTrackerRegistDTO.num,
                code: reqTrackerRegistDTO.code,
                fid: reqTrackerRegistDTO.fid,
                callback_url: "https://qa-api.pirimarket.kr/admin/order/tracking",
                callback_type: "json",
                tier: process.env.SWEET_TRACKER_TIER,
                key: process.env.SWEET_TRACKER_KEY,
                type: "json"
            });
            return data;
        }
        catch (error) {
            common_1.Logger.log(`post Tracking Error ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async postTrackingStatus(resTrackerResultDTO) {
        try {
            const data = await this.orderManagerRepository.findOne({ order_detail_id: Number(resTrackerResultDTO.fid) });
            const level = resTrackerResultDTO.level;
            let status = "";
            switch (resTrackerResultDTO.level) {
                case 1:
                    status = "배송준비중";
                    break;
                case 2:
                case 3:
                case 4:
                    status = "배송중";
                    break;
                case 5:
                    status = "배송출발";
                    break;
                case 6:
                    status = "배송완료";
                    break;
            }
            if (level != null && level != 99) {
                await this.orderManagerRepository.update({ delivery_invoice_code: resTrackerResultDTO.num }, {
                    order_state: status,
                    delivery_preparing_date: level == 1 && data.delivery_preparing_date == null ? new Date().toDateString() : data.delivery_preparing_date,
                    delivery_start_date: (level == 2 || level == 3 || level == 4) && data.delivery_start_date == null ? new Date().toDateString() : data.delivery_start_date,
                    delivery_end_date: level == 6 && data.delivery_end_date == null ? new Date().toDateString() : data.delivery_end_date
                });
            }
        }
        catch (error) {
            common_1.Logger.log(`postTrackingStatus ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OrderDeliveryTrackingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __metadata("design:paramtypes", [OrderDetail_repository_1.OrderDetailRepository])
], OrderDeliveryTrackingService);
exports.OrderDeliveryTrackingService = OrderDeliveryTrackingService;
//# sourceMappingURL=order-delivery-tracking.service.js.map