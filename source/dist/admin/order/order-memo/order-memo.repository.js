"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMemoRepository = void 0;
const typeorm_1 = require("typeorm");
const OrderMemo_entity_1 = require("../../../entity/order/OrderMemo.entity");
let OrderMemoRepository = class OrderMemoRepository extends typeorm_1.Repository {
};
OrderMemoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(OrderMemo_entity_1.OrderMemoEntity)
], OrderMemoRepository);
exports.OrderMemoRepository = OrderMemoRepository;
//# sourceMappingURL=order-memo.repository.js.map