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
exports.ResDepositListDTOList = exports.ResDepositListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResDepositListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 ID', description: '주문 ID' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문번호', description: '주문번호' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 유저 ID', description: '주문 유저 ID' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 유저 ID', description: '주문 유저 ID' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 핸드폰', description: '주문자 핸드폰' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "order_user_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '결제방법', description: '결제방법' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "deposit_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '입금예정금액', description: '입금예정금액' }),
    __metadata("design:type", Number)
], ResDepositListDTO.prototype, "deposit_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '입금 은행', description: '입금은행' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "deposit_bank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '입금계좌번호', description: '입금계좌번호' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "deposit_account_num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 ', description: '주문 유저 ID' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "deposit_closing_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '입금자명', description: '입금자명' }),
    __metadata("design:type", String)
], ResDepositListDTO.prototype, "deposit_account_name", void 0);
exports.ResDepositListDTO = ResDepositListDTO;
exports.ResDepositListDTOList = {
    order_id: "주문 ID",
    order_code: "주문번호",
    order_create_date: "2022-11-11",
    user_id: "주문 유저 ID",
    user_name: "주문자명",
    order_user_phone: "전화번호",
    deposit_type: "가상계좌 or 무통장",
    deposit_bank: "신한은행",
    deposit_price: 30000,
    deposit_account_num: "111111111",
    deposit_closing_date: "2022-11-11",
    deposit_account_name: "주식회사 게임베리"
};
//# sourceMappingURL=ResDepositListDTO.js.map