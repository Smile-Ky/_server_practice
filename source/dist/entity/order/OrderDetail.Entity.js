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
exports.OrderDetailEntity = void 0;
const typeorm_1 = require("typeorm");
const OrderMain_entity_1 = require("./OrderMain.entity");
const ProductOption_entity_1 = require("../product/ProductOption.entity");
const ProductBrand_entity_1 = require("../product/ProductBrand.entity");
const ProductOptionDetail_entity_1 = require("../product/ProductOptionDetail.entity");
const OfflineCouponInstance_entity_1 = require("../offline-coupon/OfflineCouponInstance.entity");
const CouponToMember_entity_1 = require("../coupon/CouponToMember.entity");
const OrderDelivery_Entity_1 = require("./OrderDelivery.Entity");
let OrderDetailEntity = class OrderDetailEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", comment: '주문 상세 고유 ID' }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "order_detail_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderMain_entity_1.OrderMainEntity, (OrderMainEntity) => OrderMainEntity.order_id, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", OrderMain_entity_1.OrderMainEntity)
], OrderDetailEntity.prototype, "order_main", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, comment: "0-입금예정 1-입금확인 2-배송준비중 3-배송지연 4-배송중 5-배송완료 6-구매확정 7-교환상품발송예정 10-입금전취소완료 11-취소요청 12-취소완료 20-반품요청 21-반품승인 22-반품회수완료 23-반품확정 30-교환요청 31-교환승인 32-교환회수완료 33-교환확정 40-환불요청 41-환불완료 34-교환거부 35-교환불가 24-반품거부 25-반품불가" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "order_state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, comment: "상품코드" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "product_code", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => ProductOption_entity_1.ProductOptionEntity, (ProductOptionEntity) => ProductOptionEntity.product_option_id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'product_option_id' }),
    __metadata("design:type", ProductOption_entity_1.ProductOptionEntity)
], OrderDetailEntity.prototype, "ProductOption", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => ProductOptionDetail_entity_1.ProductOptionDetailEntity, (ProductOptionDetailEntity) => ProductOptionDetailEntity.product_option_detail_id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'product_option_detail_id' }),
    __metadata("design:type", ProductOptionDetail_entity_1.ProductOptionDetailEntity)
], OrderDetailEntity.prototype, "ProductOptionDetail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => ProductBrand_entity_1.ProductBrandEntity, (ProductBrandEntity) => ProductBrandEntity.brand_id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'brand_id' }),
    __metadata("design:type", ProductBrand_entity_1.ProductBrandEntity)
], OrderDetailEntity.prototype, "product_brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true, comment: "상품 판매 단가" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "product_sale_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true, comment: "구매 수량" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "order_product_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "주문자 휴대폰 번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "order_user_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "수취인 명" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "recipient_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "수취인 휴대폰 번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "recipient_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "수취인 우편번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "recipient_address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "수취인 주소" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "recipient_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "수취인 상세 주소" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "recipient_address_detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "수취인 배송 메세지" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "recipient_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "결제방법 1-가상계좌 2-계좌이채 3-삼성페이 4-카카오페이 5-페이코" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "order_payment_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "걸제형태 0-PC 1-MOBILE" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "order_payment_platform", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "배송비" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "택배 업체 ID" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_company_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, comment: "송장번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_invoice_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: "배송 준비중 일자" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_preparing_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: "배송 일자" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: "배송 완료 일자" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_end_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, length: '300', comment: "배송 요청 사항" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "delivery_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: "구매 확정 일자" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "confirm_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, length: '300', comment: "클레임 사유" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "claim_reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: "클레임 신청일자" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "claim_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "datetime", nullable: true, comment: "클레임 해결일자" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "claim_clear_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true, length: '300', comment: "교환/반품발송방법(0=지정택배방문요청, 1=직접발송)" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "claim_method", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "반품상품 수거자 이름" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 택배 번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 택배 우편번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 택배 주소" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 택배 상세 주소" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_address_detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 택배사" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_company_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 송장번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_invoice_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "회수 택배 전달사항" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "return_delivery_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 상품 수령자 이름" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 택배 번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 택배 우편번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_address_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 택배 주소" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 택배 상세 주소" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_address_detail", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 택배사" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_company_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 송장번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_invoice_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "재배송 택배 전달사항" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_delivery_message", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: '300', nullable: true, comment: "교환 시 오리지널 주문 상세 번호" }),
    __metadata("design:type", String)
], OrderDetailEntity.prototype, "re_origin_order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true, comment: "예상적립마일리지" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "estimated_mileage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "기획할인" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "planning_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "쿠폰할인" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "coupon_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "회원할인" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "member_discount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", comment: "특별할인" }),
    __metadata("design:type", Number)
], OrderDetailEntity.prototype, "special_discount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OfflineCouponInstance_entity_1.OfflineCouponInstanceEntity, (OfflineCouponInstanceEntity) => OfflineCouponInstanceEntity.offline_coupon_instance_id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'offline_coupon_instance_id' }),
    __metadata("design:type", OfflineCouponInstance_entity_1.OfflineCouponInstanceEntity)
], OrderDetailEntity.prototype, "offline_coupon_instance", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => CouponToMember_entity_1.CouponToMemberEntity, (CouponToMemberEntity) => CouponToMemberEntity.coupon_to_member_id, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'coupon_to_member_id' }),
    __metadata("design:type", CouponToMember_entity_1.CouponToMemberEntity)
], OrderDetailEntity.prototype, "coupon_to_member", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => OrderDelivery_Entity_1.OrderDeliveryEntity, (OrderDeliveryEntity) => OrderDeliveryEntity.delivery_code, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'order_delivery' }),
    __metadata("design:type", OrderDelivery_Entity_1.OrderDeliveryEntity)
], OrderDetailEntity.prototype, "order_delivery", void 0);
OrderDetailEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "order_detail" }),
    (0, typeorm_1.Unique)(["order_detail_id"])
], OrderDetailEntity);
exports.OrderDetailEntity = OrderDetailEntity;
//# sourceMappingURL=OrderDetail.Entity.js.map