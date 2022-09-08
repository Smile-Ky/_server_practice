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
exports.MileageSaveFromData = exports.MileageSaveFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class MileageSaveFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MileageSaveFromDTO.prototype, "is_mileage_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '마일리지 노출 명칭', description: '마일리지 노출 명칭' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MileageSaveFromDTO.prototype, "mileage_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '마일리지 노출 단위', description: '마일리지 노출 단위' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MileageSaveFromDTO.prototype, "mileage_unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ group_id: "3", payment_rate: 3 }], description: '적립 비율 : 회원 그룹별 차등 적립' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], MileageSaveFromDTO.prototype, "mileage_setting_group_payment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '적립일 : 구매확정일 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MileageSaveFromDTO.prototype, "is_use_purchase_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1, description: '사용 단위' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MileageSaveFromDTO.prototype, "mileage_use_unit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1, description: '보유 마일리지 제한' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MileageSaveFromDTO.prototype, "mileage_limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '배송비 사용 제한' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], MileageSaveFromDTO.prototype, "is_delivery_charge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 300, description: '상품 구매금액 제한' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MileageSaveFromDTO.prototype, "purchase_amount_limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '없음=0 or 원=1 or 퍼센트=2', description: '최대 사용한도 제한 : 방식 선택' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MileageSaveFromDTO.prototype, "mileage_max_use_limit_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 10, description: '최대 사용한도 제한 텍스트 ( 원 or % )' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MileageSaveFromDTO.prototype, "mileage_max_use_limit_text", void 0);
exports.MileageSaveFromDTO = MileageSaveFromDTO;
exports.MileageSaveFromData = {
    "is_mileage_use": true,
    "mileage_name": "마일리지 노출 명칭",
    "mileage_unit": "마일리지 노출 단위",
    "mileage_payment_range": "전체상품 or 본사상품",
    "mileage_payment_standard": "판매가 or 할인가 or 최종_결제가",
    "group_mileage_payment_rate": [
        {
            "group_name": "브론즈 발자국",
            "payment_rate": 3
        },
        {
            "group_name": "골드 발자국",
            "payment_rate": 5
        }
    ],
    "is_use_purchase_date": true,
    "mileage_use_unit": 1,
    "mileage_limit": 1,
    "is_delivery_charge": true,
    "purchase_amount_limit": 300,
    "mileage_max_use_limit": "없음 or 원 or 퍼센트",
    "mileage_max_use_limit_text": 10,
    "mileage_auto_delete": true,
    "autoDeleteYear": 3,
    "autoDeleteMonth": 12
};
//# sourceMappingURL=MileageSaveFromDTO.js.map