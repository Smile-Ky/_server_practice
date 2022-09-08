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
exports.ReqUpdateOrderClaimDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUpdateOrderClaimDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문번호 id키 값', description: '주문번호 id키 값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "oid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '환불 포인트', description: '환불 포인트' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "returnPoint", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '최종 환불 가격', description: '최종 환불 가격' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "resultPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '환불 쿠폰번호', description: '환불 쿠폰번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "returnCouponIx", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문상태(0=입금예정, 1=입금예정, 2=배송준비중, 4=배송중, 5=배송완료, 6=구매확정)', description: '주문상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '40=환불요청, 30=교환요청', description: '클레임 상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "claimStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 상세 번호(order_detail_id) / ,로 여러 개 확인가능', description: '주문 상세 번호(order_detail_id) / ,로 여러 개 확인가능' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "odIxs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지 파일', description: '이미지 파일' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지 개수', description: '이미지 개수' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "imgTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송 방식(a=업체 수거 / b=직접 배송 완료 / c=직접 배송 예정)', description: '배송 방식' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "returnMethodCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송 방식(return = 환불 / change = 교환)', description: '배송 방식(return = 환불 / change = 교환)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "claimType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '교환/환불 배송비', description: '교환/환불 배송비' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "delivery_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '판매업체 고유 키', description: '판매업체 고유 키' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateOrderClaimDto.prototype, "company_id", void 0);
exports.ReqUpdateOrderClaimDto = ReqUpdateOrderClaimDto;
//# sourceMappingURL=ReqUpdateOrderClaim.dto.js.map