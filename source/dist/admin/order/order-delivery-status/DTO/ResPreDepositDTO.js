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
exports.ResPreDepositDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResPreDepositDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 pk', description: '주문 pk' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 걔별 ID', description: '주문 걔별 ID' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문일자' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ResPreDepositDTO.prototype, "order_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 세부 id', description: '주문 세부 id' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 ID', description: '주문자 ID' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "order_user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 이름', description: '주문자 이름' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "order_user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 전화번호', description: '주문자 전화번호' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "order_user_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '입금 방법', description: '입금 방법' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "deposit_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 3000, description: '입금 예정 금액' }),
    __metadata("design:type", Number)
], ResPreDepositDTO.prototype, "deposit_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '입금 은행', description: '옵션 명' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "deposit_bank", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '입금 기한' }),
    __metadata("design:type", Date)
], ResPreDepositDTO.prototype, "deposit_closing_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: `입금자명`, description: '입금자명' }),
    __metadata("design:type", String)
], ResPreDepositDTO.prototype, "deposit_account", void 0);
exports.ResPreDepositDTO = ResPreDepositDTO;
//# sourceMappingURL=ResPreDepositDTO.js.map