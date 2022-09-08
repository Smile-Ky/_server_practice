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
exports.ResOrderManagerData = exports.ResOrderManagerDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const ResMemoDTO_1 = require("../../order-memo/DTO/ResMemoDTO");
const ResOrderRroductListDTO_1 = require("./ResOrderRroductListDTO");
class ResOrderManagerDTO {
    constructor(partial) {
        Object.assign(this, partial);
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문번호', description: '주문번호' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '주문일자' }),
    __metadata("design:type", Date)
], ResOrderManagerDTO.prototype, "order_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 이름', description: '주문자 이름' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_member_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 고유 아이디', description: '주문자 고유 아이디' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '신규 회원', description: '주문자 회원 그룹' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_member_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문자 이메일', description: '주문자 이메일' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_member_mail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '000-0000-0000', description: '주문자 핸드폰' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_member_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송 주소', description: '배송 주소' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "order_adress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [ResOrderRroductListDTO_1.ResOrderRroductListData], description: '상품 리스트' }),
    __metadata("design:type", Array)
], ResOrderManagerDTO.prototype, "product_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [ResMemoDTO_1.ResMemoData], description: '' }),
    __metadata("design:type", Array)
], ResOrderManagerDTO.prototype, "memo_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '30,400', description: '결제금액' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "payment_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: Date(), description: '입금일자' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "payment_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '3,400', description: '마일리지' }),
    __metadata("design:type", String)
], ResOrderManagerDTO.prototype, "payment_mileage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: {
            amount: '총 금액',
            planning_discount: '기확할인 금액',
            coupon_discount: '쿠폰할인 금액',
            member_discount: '회원할인 금액',
            special_discount: '특별할인 금액'
        },
        description: '할인금액'
    }),
    __metadata("design:type", Object)
], ResOrderManagerDTO.prototype, "payment_discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                method_name: '결제방법',
                payment_amount: '결제금액',
                refund_amount: '환블금액',
                remaining: '잔여금액',
                etc: '기타'
            }],
        description: '결재 방법' }),
    __metadata("design:type", Array)
], ResOrderManagerDTO.prototype, "payment_method", void 0);
exports.ResOrderManagerDTO = ResOrderManagerDTO;
exports.ResOrderManagerData = {};
//# sourceMappingURL=ResOrderMamgerDTO.js.map