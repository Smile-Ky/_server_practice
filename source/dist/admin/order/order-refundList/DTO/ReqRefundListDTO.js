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
exports.ResMemoData = exports.ReqRefundListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqRefundListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ["신용카드", "가상계좌", "계좌이체", "삼성페이", "카카오페이", "페이코"],
        description: '결제방법'
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqRefundListDTO.prototype, "order_payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ["주문자_수취인명", "주문자_수취인_핸드폰번호", "주문번호", "주문자 ID", "송장번호", "상품명", "품목코드"],
        description: '검색 타입'
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqRefundListDTO.prototype, "order_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '검색 키워드', description: '검색 키워드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqRefundListDTO.prototype, "order_find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: ["환불요청일자", "환불완료일자"],
        description: '기간 검색 타입'
    }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqRefundListDTO.prototype, "refund_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '기간 검색 : 시작일' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ReqRefundListDTO.prototype, "date_find_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '기간 검색 : 종료일' }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], ReqRefundListDTO.prototype, "date_find_end", void 0);
exports.ReqRefundListDTO = ReqRefundListDTO;
exports.ResMemoData = {
    "order_memo_id": "메모 ID",
    "order_id": "주문 ID",
    "order_memo_class": "메모 분류",
    "order_memo_context": "메모 내용",
    "order_memo_state": "처리 상태"
};
//# sourceMappingURL=ReqRefundListDTO.js.map