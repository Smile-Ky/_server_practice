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
exports.ProductInfoController = void 0;
const common_1 = require("@nestjs/common");
const product_info_service_1 = require("./product-info.service");
const swagger_1 = require("@nestjs/swagger");
const ReqGetGoodsList_dto_1 = require("./DTO/ReqGetGoodsList.dto");
const ReqInsertQna_dto_1 = require("./DTO/ReqInsertQna.dto");
const ReqGetQnaList_dto_1 = require("./DTO/ReqGetQnaList.dto");
const ReqWish_dto_1 = require("./DTO/ReqWish.dto");
const ReqDoGoodsSearch_dto_1 = require("./DTO/ReqDoGoodsSearch.dto");
const ReqGetView_dto_1 = require("./DTO/ReqGetView.dto");
let ProductInfoController = class ProductInfoController {
    constructor(productInfoService) {
        this.productInfoService = productInfoService;
    }
    async getGoodsList(data, req, res) {
        try {
            res.status(200).json(await this.productInfoService.getGoodsList(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getView(data, req, res) {
        try {
            res.status(200).json(await this.productInfoService.getView(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async qnaRegist(pid, res) {
        try {
            res.status(200).json({
                data: {
                    qnaDivs: [
                        {
                            ix: 0,
                            div_name: "상품문의",
                        },
                        {
                            ix: 1,
                            div_name: "배송문의",
                        },
                        {
                            ix: 2,
                            div_name: "기타",
                        }
                    ]
                }
            });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async insertQna(data, req, res) {
        try {
            await this.productInfoService.insertQna(req.cookies['user_id'], data);
            res.status(200).json({ data: "success" });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getQnaList(data, req, res) {
        try {
            res.status(200).json(await this.productInfoService.getQnaList(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async wish(body, req, res) {
        try {
            res.status(200).json(await this.productInfoService.wish(req.cookies['user_id'], body));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async getSearch(req, res) {
        try {
            res.status(200).json(await this.productInfoService.getSearch());
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
    async doGoodsSearch(data, req, res) {
        try {
            res.status(200).json(await this.productInfoService.doGoodsSearch(req.cookies['user_id'], data));
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }
};
__decorate([
    (0, common_1.Post)('/getGoodsList'),
    (0, swagger_1.ApiOperation)({ summary: '카테고리 상품 목록 조회 (depth : 하위 카테고리 깊이("1": 2차 분류, "0" : 1차 분류))' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetGoodsList_dto_1.ReqGetGoodsListDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "getGoodsList", null);
__decorate([
    (0, common_1.Post)('/getView'),
    (0, swagger_1.ApiOperation)({ summary: '상품 상세보기 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetView_dto_1.ReqGetViewDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "getView", null);
__decorate([
    (0, common_1.Get)('/qnaRegist/:pid'),
    (0, swagger_1.ApiOperation)({ summary: 'QnA 문의 유형 조회' }),
    __param(0, (0, common_1.Param)('pid')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "qnaRegist", null);
__decorate([
    (0, common_1.Post)('/insertQna'),
    (0, swagger_1.ApiOperation)({ summary: 'QnA 문의글 등록' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqInsertQna_dto_1.ReqInsertQnaDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "insertQna", null);
__decorate([
    (0, common_1.Post)('/getQnaList'),
    (0, swagger_1.ApiOperation)({ summary: 'QnA 목록 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqGetQnaList_dto_1.ReqGetQnaList, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "getQnaList", null);
__decorate([
    (0, common_1.Post)('/wish'),
    (0, swagger_1.ApiOperation)({ summary: '상품 위시리스트 추가' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqWish_dto_1.ReqWishDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "wish", null);
__decorate([
    (0, common_1.Get)('/getSearch'),
    (0, swagger_1.ApiOperation)({ summary: '검색 화면 데이터 조회' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "getSearch", null);
__decorate([
    (0, common_1.Post)('/doGoodsSearch'),
    (0, swagger_1.ApiOperation)({ summary: '검색 결과 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqDoGoodsSearch_dto_1.ReqDoGoodsSearchDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductInfoController.prototype, "doGoodsSearch", null);
ProductInfoController = __decorate([
    (0, common_1.Controller)('api/product'),
    (0, swagger_1.ApiTags)('마켓 - 상품 정보'),
    __metadata("design:paramtypes", [product_info_service_1.ProductInfoService])
], ProductInfoController);
exports.ProductInfoController = ProductInfoController;
//# sourceMappingURL=product-info.controller.js.map