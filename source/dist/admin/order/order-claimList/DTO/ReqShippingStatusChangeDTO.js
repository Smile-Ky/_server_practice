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
exports.ReqShippingStatusChangeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReqShippingStatusChangeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송준비중=0 or 배송지연=1 or 취소완료=2 or 배송준비중=3 or 구매확정=4 or 반품승인=5 or 반품거부=6 or 교환승인=7 or 교환거부=8 ', description: '주문변경 코드' }),
    __metadata("design:type", String)
], ReqShippingStatusChangeDTO.prototype, "order_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문번호 리스트' }),
    __metadata("design:type", Array)
], ReqShippingStatusChangeDTO.prototype, "order_codes", void 0);
exports.ReqShippingStatusChangeDTO = ReqShippingStatusChangeDTO;
//# sourceMappingURL=ReqShippingStatusChangeDTO.js.map