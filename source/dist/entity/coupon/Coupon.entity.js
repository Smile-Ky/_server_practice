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
exports.CouponEntity = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const CouponToMemberGroup_entity_1 = require("./CouponToMemberGroup.entity");
const CouponToProductClass_entity_1 = require("./CouponToProductClass.entity");
const CouponToProduct_entity_1 = require("./CouponToProduct.entity");
const OfflineCouponToCoupon_entity_1 = require("../offline-coupon/OfflineCouponToCoupon.entity");
let CouponEntity = class CouponEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', comment: '쿠폰 ID' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "coupon_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, comment: '쿠폰 이름' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "coupon_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: false, comment: '쿠폰 설명' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "coupon_description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '쿠폰 사용 범위 (전체=0 or PC=1 or Mobile=2 or App=3)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "coupon_use_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '쿠폰 사용여부 (사용=0 or 사용_발급불가=1 or 사용불가=2)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "coupon_is_use", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '배송비 쿠폰 여부(배송비 쿠폰 아님=0 or 배송비 쿠폰=1)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "delivery_coupon_yn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '할인 타입 (정률할인=0 or 정액할인=1)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "discount_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, default: "0", comment: '할인 설정 텍스트' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "discount_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '정률할인 설정 : 자리 수 (일자리=0 or 십자리=1 or 백자리=2)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "digit_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '정률할인 설정 : 올림 상태 (반올림=0 or 내림=1 or 올림=2)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "round", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '최소 구매 금액 제한 여부' }),
    __metadata("design:type", Boolean)
], CouponEntity.prototype, "minimum_purchase_amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '최소 구매 금액 텍스트' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "minimum_purchase_amount_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false, default: false, comment: '최대 할인 금액 제한 여부' }),
    __metadata("design:type", Boolean)
], CouponEntity.prototype, "maximum_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true, comment: '최대 할인 금액 텍스트' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "maximum_discount_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '할인 적용 가능 상품 (전체=0 or 카테고리=1 or 상품=2)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "discountable_products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToProductClass_entity_1.CouponToProductClassEntity, coupon_to_product_class => coupon_to_product_class.coupon),
    __metadata("design:type", Array)
], CouponEntity.prototype, "coupon_to_product_class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToProduct_entity_1.CouponToProductEntity, coupon_to_product => coupon_to_product.coupon),
    __metadata("design:type", Array)
], CouponEntity.prototype, "coupon_to_product", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, comment: '발급 방식 (관리자_수동_발급=0 or 특정_조건_자동_발급=1 or 시리얼_넘버_등록=2)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "issued_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, comment: '특정 조건 자동 발급 설정 (회원가입_완료시=0 or 회원그룹_변경_시=1 or 생일=2 or APP_푸시_수신여부_동의=3)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "automatic_issuance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '발급 대상 (전체회원=0 or 회원그룹=1)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "issued_user_class", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => CouponToMemberGroup_entity_1.CouponToMemberGroupEntity, coupon_to_member_group => coupon_to_member_group.coupon_id),
    __metadata("design:type", Array)
], CouponEntity.prototype, "coupon_to_member_group", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, comment: '사용 기간 (사용기간_지정=0 or 발행일_기준=1 or 발급일_기준=2 or 제한없음=3)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "coupon_date_range", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: '사용 기간 지정 선택 시, 사용기간 설정 시작일' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "use_range_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: '사용 기간 지정 선택 시, 사용기간 설정 종료일' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "use_range_end", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '발행일/발급일 기준 설정 텍스트' }),
    (0, typeorm_1.Column)({ type: "text", nullable: true, comment: '발행일/발급일 기준 설정 텍스트' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "use_range_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true, comment: '발행일/발급일 기준 설정 ( 일=0 or 개월=1 or 년=2 )' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "use_range_enum", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: '발급 기간 시작일' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "issued_range_start", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: '발급 기간 종료일' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "issued_range_end", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '생성일' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", default: () => 'NOW()', nullable: false, comment: '수정일' }),
    __metadata("design:type", Date)
], CouponEntity.prototype, "update_date", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => OfflineCouponToCoupon_entity_1.OfflineCouponToCouponEntity, offline_coupon_to_coupon => offline_coupon_to_coupon.coupon),
    __metadata("design:type", Array)
], CouponEntity.prototype, "offline_coupon_to_coupon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, comment: '쿠폰번호' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "coupon_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, comment: '오프라인 쿠폰 발급가능 여부(0=발급가능, 1=수량제한 발급불가, 2=오프라인 쿠폰 미발급(조회X), 9=온라인 쿠폰(해당사항 X)' }),
    __metadata("design:type", String)
], CouponEntity.prototype, "offline_coupon_enable_yn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false, default: 0, comment: '삭제 여부(전체회원=0 or 삭제=1)' }),
    __metadata("design:type", Number)
], CouponEntity.prototype, "delete_yn", void 0);
CouponEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'coupon' }),
    (0, typeorm_1.Unique)(['coupon_id'])
], CouponEntity);
exports.CouponEntity = CouponEntity;
//# sourceMappingURL=Coupon.entity.js.map