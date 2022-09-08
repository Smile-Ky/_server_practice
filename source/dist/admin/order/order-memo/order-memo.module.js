"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMemoModule = void 0;
const common_1 = require("@nestjs/common");
const order_memo_controller_1 = require("./order-memo.controller");
const order_memo_service_1 = require("./order-memo.service");
const typeorm_1 = require("@nestjs/typeorm");
const order_memo_repository_1 = require("./order-memo.repository");
let OrderMemoModule = class OrderMemoModule {
};
OrderMemoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([order_memo_repository_1.OrderMemoRepository])],
        controllers: [order_memo_controller_1.OrderMemoController],
        providers: [order_memo_service_1.OrderMemoService]
    })
], OrderMemoModule);
exports.OrderMemoModule = OrderMemoModule;
//# sourceMappingURL=order-memo.module.js.map