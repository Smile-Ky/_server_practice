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
exports.ReqProductFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqProductFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 ID', description: '브랜드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사입=0, 위탁=1', description: '제품 출처 타입' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_company_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '업체 명', description: '제품 출처 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: "상품 노출 여부" }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqProductFromDTO.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일시품절=0 or 판매중=1 or 판매종료=2', description: '판매상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_sale_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, description: '면세 제품 [ 과세 = false / 면세 = true ]' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqProductFromDTO.prototype, "use_tax_free", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '기본 시작 수량' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqProductFromDTO.prototype, "sale_basie_volume", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: 'ID 당 구매 수량' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqProductFromDTO.prototype, "sale_max_volume_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2, description: '옵션 수' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], ReqProductFromDTO.prototype, "option_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 상세 정보', description: '상품 상세 정보' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '상품정보고시 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqProductFromDTO.prototype, "is_show_product_information", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '개별 적립금 사용 유무 : 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqProductFromDTO.prototype, "use_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 4, description: '개별 적립금 사용 유무 : 텍스트' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "use_point_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '적립금 적용 가능 비율 : 사용 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqProductFromDTO.prototype, "use_point_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 4, description: '적립금 적용 가능 비율 : 텍스트' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "use_point_range_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["아이콘 ID"], description: '뱃지 노출 : 사용 할 뱃지 ID 값' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "icon_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['관련 상품 아이디'], description: '관련 상품' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "related_product_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 카타고리 ID', description: '대표 상품 카타고리' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "product_class_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["상품 카타고리 ID"], description: '중복 상품 카타고리' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "product_class_sub_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["검색 키워드"], description: '검색 키워드' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "search_keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'image ID', description: '대표 상품 이미지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqProductFromDTO.prototype, "basie_image_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ sequence: 0, image_id: 'image id' }], description: '추가 이미지' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "add_image_id_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ sequence: 0, image_id: 'image id' }], description: '상품 설명 이미지' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "product_description_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                option: [{ name: '색상', value: '블랙' }, { name: '사이즈', value: '스몰' }, { name: '무게', value: '스몰' }],
                product_wholesale_price: 2000,
                product_prices: 2000,
                product_sale_price: 2000,
                is_out_of_stock: "품절 여부(품절 = 0 or 제고 있음 = 1)",
                stock_count: 100,
                sale_stock_count: 100,
                product_option_code: '옵션 고유 코드'
            }],
        description: '옵션 내용' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqProductFromDTO.prototype, "options", void 0);
exports.ReqProductFromDTO = ReqProductFromDTO;
//# sourceMappingURL=ReqProductFromDTO.js.map