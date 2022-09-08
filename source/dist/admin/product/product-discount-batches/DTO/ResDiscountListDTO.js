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
exports.ResDiscountListData = exports.ResDiscountListDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResDiscountListDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄 할인 고유 ID', description: '일괄 할인 고유 ID' }),
    __metadata("design:type", String)
], ResDiscountListDTO.prototype, "batch_discount_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일괄 할인명', description: '일괄 할인명' }),
    __metadata("design:type", String)
], ResDiscountListDTO.prototype, "batch_discount_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체 or 회원_그룹별', description: '회원 조건' }),
    __metadata("design:type", String)
], ResDiscountListDTO.prototype, "use_member_group_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '시작일' }),
    __metadata("design:type", Date)
], ResDiscountListDTO.prototype, "batch_discount_start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '종료일' }),
    __metadata("design:type", Date)
], ResDiscountListDTO.prototype, "batch_discount_end_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체 or 사용 or 미사용', description: '사용 여부' }),
    __metadata("design:type", String)
], ResDiscountListDTO.prototype, "is_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '진행 전 or 진행 중 or 진행 완료', description: '진행 여부' }),
    __metadata("design:type", String)
], ResDiscountListDTO.prototype, "is_progress", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 30, description: '상품 수량' }),
    __metadata("design:type", Number)
], ResDiscountListDTO.prototype, "product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '일괄 할인 생성일' }),
    __metadata("design:type", Date)
], ResDiscountListDTO.prototype, "create_date", void 0);
exports.ResDiscountListDTO = ResDiscountListDTO;
exports.ResDiscountListData = {
    "batch_discount_id": "일괄 할인 고유 ID",
    "batch_discount_name": "일괄 할인명",
    "use_member_group_type": "전체 or 회원_그룹별",
    "batch_discount_start_date": "2022-05-04T07:55:17.349Z",
    "batch_discount_end_date": "2022-05-04T07:55:17.349Z",
    "is_use": "전체 or 사용 or 미사용",
    "is_progress": "전체 or 진행중 or 진행완료",
    "product_count": 30,
    "create_date": "2022-05-04T07:55:17.349Z"
};
//# sourceMappingURL=ResDiscountListDTO.js.map