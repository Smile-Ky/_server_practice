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
exports.ResMemberMileageListData = exports.ResMemberMileageListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResMemberMileageListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '지급 마일리지 데이터 고유 키', description: '지급 마일리지 데이터 고유 키' }),
    __metadata("design:type", String)
], ResMemberMileageListDTO.prototype, "member_mileage_log_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '처리일자' }),
    __metadata("design:type", Date)
], ResMemberMileageListDTO.prototype, "mileage_payment_create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립 내용', description: '적립 내용' }),
    __metadata("design:type", String)
], ResMemberMileageListDTO.prototype, "mileage_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 300, description: '마일리지' }),
    __metadata("design:type", Number)
], ResMemberMileageListDTO.prototype, "mileage_payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '적립완료(+)', description: '적립 상태' }),
    __metadata("design:type", String)
], ResMemberMileageListDTO.prototype, "mileage_payment_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2344234-34234234', description: '주문 번호' }),
    __metadata("design:type", String)
], ResMemberMileageListDTO.prototype, "order_idx", void 0);
exports.ResMemberMileageListDTO = ResMemberMileageListDTO;
exports.ResMemberMileageListData = {
    "mileage_payment_idx": "지급 마일리지 데이터 고유 키",
    "mileage_payment_create_date": "2022-05-02T01:18:15.361Z",
    "mileage_description": "적립 내용",
    "mileage_payment": 300,
    "mileage_payment_state": "적립완료(+)",
    "order_idx": "2344234-34234234"
};
//# sourceMappingURL=ResMemberMileageListDTO.js.map