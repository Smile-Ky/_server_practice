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
exports.OrderMemoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const order_memo_repository_1 = require("./order-memo.repository");
const OrderMemo_entity_1 = require("../../../entity/order/OrderMemo.entity");
let OrderMemoService = class OrderMemoService {
    constructor(orderMemoRepository) {
        this.orderMemoRepository = orderMemoRepository;
    }
    async getAllMemo() {
        try {
            return await this.orderMemoRepository.query(`select * from order_memo`);
        }
        catch (error) {
            common_1.Logger.log(`admin/order/memo(get) ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async postOrderMemo(orderId, data) {
        try {
            const ret = new OrderMemo_entity_1.OrderMemoEntity();
            ret.memo_type = data.order_memo_class;
            ret.order_memo_state = data.order_memo_state;
            ret.order_memo_context = data.order_memo_context;
            return await this.orderMemoRepository.save(ret);
        }
        catch (error) {
            common_1.Logger.log(`admin/order/memo(get) ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
OrderMemoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_memo_repository_1.OrderMemoRepository)),
    __metadata("design:paramtypes", [order_memo_repository_1.OrderMemoRepository])
], OrderMemoService);
exports.OrderMemoService = OrderMemoService;
//# sourceMappingURL=order-memo.service.js.map