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
exports.ResMileageListData = exports.ResMileageListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResMileageListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '지급 마일리지 데이터 고유 키', description: '지급 마일리지 데이터 고유 키' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "member_mileage_log_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2344234-34234234', description: '주문 번호' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 명', description: '회원 명' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "member_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '45344', description: '회원 아이디' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "member_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '깜찍한 발자국', description: '회원 그룹' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "member_group", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립 내용', description: '적립 내용' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "mileage_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 300, description: '마일리지' }),
    __metadata("design:type", Number)
], ResMileageListDTO.prototype, "mileage_payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립완료(+)', description: '적립 상태' }),
    __metadata("design:type", String)
], ResMileageListDTO.prototype, "mileage_payment_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '처리일자' }),
    __metadata("design:type", Date)
], ResMileageListDTO.prototype, "mileage_payment_create_date", void 0);
exports.ResMileageListDTO = ResMileageListDTO;
exports.ResMileageListData = {
    "mileage_payment_idx": "지급 마일리지 데이터 고유 키",
    "order_idx": "2344234-34234234",
    "member_name": "회원 명",
    "member_id": "45344",
    "member_group": "깜찍한 발자국",
    "mileage_description": "적립 내용",
    "mileage_payment": 300,
    "mileage_payment_state": "적립완료(+)",
    "mileage_payment_create_date": "2022-05-02T01:18:15.361Z"
};
//# sourceMappingURL=ResMileageListDTO.js.map