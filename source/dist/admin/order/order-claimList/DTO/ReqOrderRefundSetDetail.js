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
exports.ReqOrderRefundSetDetail = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderRefundSetDetail {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "적립금 반환액", description: "적립금 반환액" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderRefundSetDetail.prototype, "return_mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "반품 배송비", description: "반품 배송비" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderRefundSetDetail.prototype, "return_delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "총 환불 예정금액", description: "반품 배송비" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderRefundSetDetail.prototype, "return_price", void 0);
exports.ReqOrderRefundSetDetail = ReqOrderRefundSetDetail;
//# sourceMappingURL=ReqOrderRefundSetDetail.js.map