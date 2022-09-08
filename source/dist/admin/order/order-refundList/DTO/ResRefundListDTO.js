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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResReListData = exports.ResRefundListDTO = void 0;
const ResRefundListItemDTO_1 = require("./ResRefundListItemDTO");
const swagger_1 = require("@nestjs/swagger");
class ResRefundListDTO {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문 ID", description: "주문 ID" }),
    __metadata("design:type", String)
], ResRefundListDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문번호", description: "주문번호" }),
    __metadata("design:type", String)
], ResRefundListDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "주문 유저 ID", description: "주문 유저 ID" }),
    __metadata("design:type", String)
], ResRefundListDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [ResRefundListItemDTO_1.ResRefundListItemData], description: "주문 아이템" }),
    __metadata("design:type", Array)
], ResRefundListDTO.prototype, "order_refund_list_item", void 0);
exports.ResRefundListDTO = ResRefundListDTO;
exports.ResReListData = {
    "order_id": "주문 ID",
    "order_code": "주문번호",
    "user_id": "주문 유저 ID",
    "order_item": [ResRefundListItemDTO_1.ResRefundListItemData]
};
//# sourceMappingURL=ResRefundListDTO.js.map