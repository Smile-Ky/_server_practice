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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSearchTabController = void 0;
const common_1 = require("@nestjs/common");
const product_search_tab_service_1 = require("./product-search-tab.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const ReqProductFindDTO_1 = require("./DTO/ReqProductFindDTO");
const product_search_tab_response_1 = require("./Response/product-search-tab.response");
let ProductSearchTabController = class ProductSearchTabController {
    constructor(productSearchTabService) {
        this.productSearchTabService = productSearchTabService;
    }
    async findProductAll(page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productSearchTabService.findAll(page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async findProduct(productFind, page, pageSize, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productSearchTabService.find(productFind, page, pageSize)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async selectProduct(productList, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productSearchTabService.productFind(productList)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async selectProductOption(productList, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)(await this.productSearchTabService.productOption(productList)));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)('/find/all'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 검색 : 상품 전체 리스트 조회',
        description: '일괄 할인 등록에 상품 검색 클릭 시, 전체 상품 리스트를 조회  </br>  카테고리 검색 : 상품 분류 설정 API를 참고해주세요.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: product_search_tab_response_1.findProduct } }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductSearchTabController.prototype, "findProductAll", null);
__decorate([
    (0, common_1.Post)('/find'),
    (0, swagger_1.ApiOperation)({
        summary: '상품 검색 : 조건 검색 조회',
        description: '상품 검색 탭에 검색 버튼 클릭 시, 조건에 맞는 상품 리스트를 조회  </br>  카테고리 검색 : 상품 분류 설정 API를 참고해주세요.'
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', description: '조회 하려는 페이지' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', description: "페이지 당 게시글 수" }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: product_search_tab_response_1.findProduct } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqProductFindDTO_1.ReqProductFindDTO, Number, Number, Object]),
    __metadata("design:returntype", Promise)
], ProductSearchTabController.prototype, "findProduct", null);
__decorate([
    (0, common_1.Post)('/select/product'),
    (0, swagger_1.ApiOperation)({ summary: '저장 버튼 클릭 시 : 옵션 포함하여 전체 데이터 조회' }),
    (0, swagger_1.ApiBody)({ type: Array, description: '선택한 상품 고유 ID 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: product_search_tab_response_1.findProduct } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductSearchTabController.prototype, "selectProduct", null);
__decorate([
    (0, common_1.Post)('/select/product/option'),
    (0, swagger_1.ApiOperation)({ summary: '저장 버튼 클릭 시 : 옵션 포함하여 전체 데이터 조회' }),
    (0, swagger_1.ApiBody)({ type: Array, description: '선택한 상품 고유 ID 리스트' }),
    (0, swagger_1.ApiResponse)({ status: 200, schema: { example: product_search_tab_response_1.findProduct } }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProductSearchTabController.prototype, "selectProductOption", null);
ProductSearchTabController = __decorate([
    (0, common_1.Controller)('product/search/tab'),
    (0, swagger_1.ApiTags)('어드민 - 상품 관리 : 상품 검색 탭 '),
    __metadata("design:paramtypes", [product_search_tab_service_1.ProductSearchTabService])
], ProductSearchTabController);
exports.ProductSearchTabController = ProductSearchTabController;
//# sourceMappingURL=product-search-tab.controller.js.map