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
exports.ResProductFromData = exports.ResProductFromDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResProductFromDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 고유 ID', description: '상품 고유 ID' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '사입=0, 위탁=1', description: '제품 출처 타입' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_company_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '업체 명', description: '제품 출처 명' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_company_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 카타고리 ID', description: '대표 상품 카타고리' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_class_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["상품 카타고리 ID"], description: '중복 상품 카타고리' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "product_class_sub_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: "상품 노출 여부" }),
    __metadata("design:type", Boolean)
], ResProductFromDTO.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '일시품절=0 or 판매중=1 or 판매종료=2', description: '판매상태' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_sale_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 명', description: '상품 명' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, description: '면세 제품 [ 과세 = false / 면세 = true ]' }),
    __metadata("design:type", Boolean)
], ResProductFromDTO.prototype, "use_tax_free", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["검색 키워드"], description: '검색 키워드' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "search_keyword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 ID', description: '브랜드' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "brand_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '브랜드 명', description: '브랜드 명' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "brand_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'image ID', description: '상품 이미지' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "basie_image_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'image url', description: '상품 이미지 url' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "basie_image_url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ sequence: 0, image_id: 'image id', image_url: 'image url' }], description: '추가 이미지' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "add_image_id_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: '기본 시작 수량' }),
    __metadata("design:type", Number)
], ResProductFromDTO.prototype, "sale_basie_volume", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 0, description: 'ID 당 구매 수량' }),
    __metadata("design:type", Number)
], ResProductFromDTO.prototype, "sale_max_volume_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2, description: '옵션 수' }),
    __metadata("design:type", Number)
], ResProductFromDTO.prototype, "option_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                option_id: '옵션 고유 ID',
                option: [{ name: '색상', value: '블랙' }, { name: '사이즈', value: '스몰' }],
                wholesale_product_prices: 2000,
                product_prices: 2000,
                sale_prices: 2000,
                is_out_of_stock: false,
                stock_count: 100,
                sale_stock_count: 100
            }],
        description: '옵션 내용' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "options", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 상세 정보', description: '상품 상세 정보' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "product_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '상품정보고시 여부' }),
    __metadata("design:type", Boolean)
], ResProductFromDTO.prototype, "is_show_product_information", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ sequence: 0, image_id: 'image id', image_url: 'image url' }], description: '상품 설명 이미지' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "product_description_image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '개별 적립금 사용 유무 : 사용 여부' }),
    __metadata("design:type", Boolean)
], ResProductFromDTO.prototype, "use_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 4, description: '개별 적립금 사용 유무 : 텍스트' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "use_point_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '적립금 적용 가능 비율 : 사용 여부' }),
    __metadata("design:type", Boolean)
], ResProductFromDTO.prototype, "use_point_range", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 4, description: '적립금 적용 가능 비율 : 텍스트' }),
    __metadata("design:type", String)
], ResProductFromDTO.prototype, "use_point_range_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '뱃지 노출 : 여부' }),
    __metadata("design:type", Boolean)
], ResProductFromDTO.prototype, "is_use_icon", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["아이콘 ID"], description: '뱃지 노출 : 사용 할 뱃지 ID 값' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "icon_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: ['관련 상품 아이디'], description: '관련 상품' }),
    __metadata("design:type", Array)
], ResProductFromDTO.prototype, "related_product_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '등록일' }),
    __metadata("design:type", Date)
], ResProductFromDTO.prototype, "create_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '수정일' }),
    __metadata("design:type", Date)
], ResProductFromDTO.prototype, "update_date", void 0);
exports.ResProductFromDTO = ResProductFromDTO;
exports.ResProductFromData = {
    "product_id": "상품 고유 ID",
    "product_code": "상품 코드",
    "product_company_type": "사입=0, 위탁=1",
    "product_company_name": "업체 명",
    "product_class_id": "상품 카타고리 ID",
    "product_class_sub_id": [
        "상품 카타고리 ID"
    ],
    "is_show": true,
    "product_sale_state": "일시품절 or 판매중 or 판매종료",
    "product_name": "상품 명",
    "use_tax_free": false,
    "search_keywords": [
        "검색 키워드"
    ],
    "brand_id": "브랜드 ID",
    "brand_name": "브랜드 ID",
    "basie_image_id": "image ID",
    "basie_image_url": "image url",
    "add_image_id_list": [
        {
            "sequence": 0,
            "image_id": "image id",
            "image_url": "image url"
        }
    ],
    "product_wholesale_price": 1000,
    "product_price": 1900,
    "product_sale_price": 1900,
    "sale_basie_volume": 0,
    "sale_max_volume_id": 0,
    "option_count": 2,
    "options": [
        {
            "option_id": "옵션 고유 ID",
            "option": [
                {
                    "name": "색상",
                    "value": "블랙"
                },
                {
                    "name": "사이즈",
                    "value": "스몰"
                },
                {
                    "name": "사이즈",
                    "value": "스몰"
                }
            ],
            "wholesale_product_prices": 2000,
            "product_prices": 2000,
            "sale_prices": 2000,
            "is_out_of_stock": false,
            "stock_count": 100,
            "sale_stock_count": 100
        }
    ],
    "product_description": "상품 상세 정보",
    "is_show_product_information": true,
    "product_description_image_id": [
        {
            "sequence": 0,
            "image_id": "image id",
            "image_url": "image url"
        }
    ],
    "use_point": true,
    "use_point_text": "4",
    "use_point_range": true,
    "use_point_range_text": "4",
    "is_use_icon": true,
    "icon_id_list": [
        "아이콘 ID"
    ],
    "related_product_id_list": [
        "관련 상품 아이디"
    ],
    "create_date": "2022-05-09T07:52:57.705Z",
    "update_date": "2022-05-09T07:52:57.705Z"
};
//# sourceMappingURL=ResProductFromDTO.js.map