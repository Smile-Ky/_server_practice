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
exports.ResCouponSaveData = exports.ResCouponSaveDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResCouponSaveDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 ID', description: '쿠폰 ID' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "coupon_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 이름', description: '쿠폰 이름' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "coupon_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '쿠폰 설명', description: '쿠폰 설명' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "coupon_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or PC=1 or Mobile=2 or App=3', description: '쿠폰 사용 범위' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "coupon_use_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용=0 or 사용_발급불가=1 or 사용불가=2', description: '쿠폰 사용여부' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "coupon_is_use", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '배송비 쿠폰 여부 0 = 배송비 쿠폰 아님 or 1 = 배송비 쿠폰', description: '배송비 쿠폰 여부' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "delivery_coupon_yn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["쿠폰 ID"], description: "중복 사용 가능 쿠폰 ID" }),
    __metadata("design:type", Array)
], ResCouponSaveDTO.prototype, "coupon_overlap_id_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '정률할인=0 or 정액할인=1', description: '할인 타입' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "discount_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '할인 설정 텍스트' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "discount_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일자리=0 or 십자리=1 or 백자리=2', description: '정률할인 설정 : 자리 수' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "digit_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '반올림=0 or 내림=1 or 올림=2', description: '정률할인 설정 : 올림 상태' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "round", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최소 구매 금액 제한 여부' }),
    __metadata("design:type", Boolean)
], ResCouponSaveDTO.prototype, "minimum_purchase_amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최소 구매 금액 텍스트' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "minimum_purchase_amount_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최대 할인 금액 제한 여부' }),
    __metadata("design:type", Boolean)
], ResCouponSaveDTO.prototype, "maximum_discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '최대 할인 금액 텍스트' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "maximum_discount_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체=0 or 카테고리=1 or 상품=2', description: '할인 적용 가능 상품' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "discountable_products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["카테고리 ID"], description: '할인 적용을 할 카테고리 Id' }),
    __metadata("design:type", Array)
], ResCouponSaveDTO.prototype, "product_class_id_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["상품 ID"], description: '할인 적용을 할 상품 Id' }),
    __metadata("design:type", Array)
], ResCouponSaveDTO.prototype, "product_id_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '관리자_수동_발급=0 or 특정_조건_자동_발급=1 or 시리얼_넘버_등록=2', description: '발급 방식' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "issued_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원가입_완료시=0 or 회원그룹_변경_시=1 or 생일=2 or APP_푸시_수신여부_동의=3', description: '특정 조건 자동 발급 설정' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "automatic_issuance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '전체회원=0 or 회원그룹=1', description: '발급 대상' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "issued_user_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["회원 그룹 ID"], description: '발급 회원 그룹 ID' }),
    __metadata("design:type", Array)
], ResCouponSaveDTO.prototype, "issued_user_class_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사용기간_지정=0 or 발행일_기준=1 or 발급일_기준=2 or 제한없음=3', description: '사용 기간' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "coupon_date_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 기간 지정 선택 시, 사용기간 설정 시작일' }),
    __metadata("design:type", Date)
], ResCouponSaveDTO.prototype, "use_range_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '사용 기간 지정 선택 시, 사용기간 설정 종료일' }),
    __metadata("design:type", Date)
], ResCouponSaveDTO.prototype, "use_range_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '발행일/발급일 기준 설정 텍스트' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "use_range_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일=0 or 개월=1 or 년=2', description: '발행일/발급일 기준 설정 Enum 값' }),
    __metadata("design:type", String)
], ResCouponSaveDTO.prototype, "use_range_enum", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '발급 기간 시작일' }),
    __metadata("design:type", Date)
], ResCouponSaveDTO.prototype, "issued_range_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '발급 기간 종료일' }),
    __metadata("design:type", Date)
], ResCouponSaveDTO.prototype, "issued_range_end", void 0);
exports.ResCouponSaveDTO = ResCouponSaveDTO;
exports.ResCouponSaveData = {
    "coupon_id": "쿠폰 아아디",
    "coupon_name": "쿠폰 이름",
    "coupon_description": "쿠폰 설명",
    "coupon_use_range": "전체",
    "coupon_is_use": "사용",
    "coupon_is_overlap": "중복_사용_불가",
    "coupon_overlap_id_list": [
        "쿠폰 ID"
    ],
    "discount_type": "정률할인",
    "discount_text": "300",
    "digit_number": "일자리",
    "round": "반올림",
    "minimum_purchase_amount": true,
    "minimum_purchase_amount_text": "3000",
    "maximum_discount": true,
    "maximum_discount_text": "3000",
    "discountable_products": "카테고리",
    "product_class_id_list": [
        "카테고리 ID"
    ],
    "product_id_list": [],
    "issued_method": "특정_조건_자동_발급",
    "automatic_issuance": "회원가입_완료시",
    "issued_user_class": "회원그룹",
    "issued_user_class_id": ["회원 그룹 ID"],
    "coupon_date_range": "사용기간_지정",
    "use_range_start": "2022-04-28T13:40:23.069Z",
    "use_range_end": "2022-04-28T13:40:23.069Z",
    "use_range_text": "4",
    "use_range_enum": "일 or 개월 or 년",
    "issued_range_start": "2022-04-28T13:40:23.069Z",
    "issued_range_end": "2022-04-28T13:40:23.069Z"
};
//# sourceMappingURL=ResCouponSaveDTO.js.map