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
exports.ReqOrderStatusChangeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderStatusChangeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["주문 걔별 ID(order_detail_id)"], description: "변경할 order_detail 항목" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqOrderStatusChangeDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2=배송준비중 / 4=배송중 / 5=배송완료", description: '2=배송준비중 / 4=배송중 / 5=배송완료' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderStatusChangeDTO.prototype, "order_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "택배회사 코드", description: '택배회사 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderStatusChangeDTO.prototype, "delivery_company_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "송장번호", description: '송장번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderStatusChangeDTO.prototype, "delivery_invoice_code", void 0);
exports.ReqOrderStatusChangeDTO = ReqOrderStatusChangeDTO;
//# sourceMappingURL=ReqOrderStatusChangeDTO.js.map