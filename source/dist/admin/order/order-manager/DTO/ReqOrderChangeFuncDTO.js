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
exports.ReqOrderChangeFuncDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderChangeFuncDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ order_detail_id: "주문상세번호", separation_value: "분할 갯수(number)" }], description: "변경할 order_detail 및 분할 항목" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqOrderChangeFuncDTO.prototype, "order_detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ order_product_count: "주문 갯수", product_code: "상품 코드", product_option_id: "옵션 id", product_option_detail_id: "옵션 디테일 id" }], description: "교환할 order_detail 및 분할 항목" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqOrderChangeFuncDTO.prototype, "change_order_detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "다른 상품 구매", description: "사유" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "order_changed_reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "11=취소요청, 12=취소완료, 20=반품요청, 21=반품승인, 30=교환요청, 31=교환승인", description: "신청 상태" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "order_changed_status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "다른 상품 구매", description: "상세사유" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "order_detail_changed_reason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: "환불금액" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "refund_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "반품 수령자" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "return_delivery_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "반품자 폰번호" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "return_delivery_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "반품자 우편주소" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "return_delivery_address_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "반품자 주소" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "return_delivery_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "반품자 상세주소" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "return_delivery_address_detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "반품자 리턴 메시지" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "return_delivery_message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "교환 수령자" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "re_delivery_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "교환 폰번호" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "re_delivery_phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "교환 우편주소" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "re_delivery_address_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "교환 주소" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "re_delivery_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "교환 상세주소" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "re_delivery_address_detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "교환자 리턴 메시지" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeFuncDTO.prototype, "re_delivery_message", void 0);
exports.ReqOrderChangeFuncDTO = ReqOrderChangeFuncDTO;
//# sourceMappingURL=ReqOrderChangeFuncDTO.js.map