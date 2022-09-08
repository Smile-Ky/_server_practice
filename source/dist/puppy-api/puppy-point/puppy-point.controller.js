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
exports.PuppyPointController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const puppy_point_service_1 = require("./puppy-point.service");
const ReqPostMakePoint_dto_1 = require("./DTO/ReqPostMakePoint.dto");
const ReqPostMakeCoupon_dto_1 = require("./DTO/ReqPostMakeCoupon.dto");
const ReqPostGetUserCouponCount_dto_1 = require("./DTO/ReqPostGetUserCouponCount.dto");
const ReqPostGetUserPoint_dto_1 = require("./DTO/ReqPostGetUserPoint.dto");
require("dotenv/config");
let PuppyPointController = class PuppyPointController {
    constructor(puppyPointService) {
        this.puppyPointService = puppyPointService;
    }
    async postMakePoint(data, req, res) {
        try {
            if (req.header('Authorization') === "") {
                throw { code: "102", result: "Authorization 값 없음" };
            }
            if (req.header('Authorization') !== process.env.PUPPY_QA_AUTH &&
                req.header('Authorization') !== process.env.PUPPY_LIVE_AUTH) {
                throw { code: "101", result: "잘못된 Authorization" };
            }
            res.status(200).json(await this.puppyPointService.postMakePoint(data));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async postGetUserPoint(data, req, res) {
        try {
            if (req.header('Authorization') === "") {
                throw { code: "102", result: "Authorization 값 없음" };
            }
            if (req.header('Authorization') !== process.env.PUPPY_QA_AUTH &&
                req.header('Authorization') !== process.env.PUPPY_LIVE_AUTH) {
                throw { code: "101", result: "잘못된 Authorization" };
            }
            res.status(200).json(await this.puppyPointService.postGetUserPoint(data));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async getCouponList(req, res) {
        try {
            console.log(req.header('Authorization'));
            if (req.header('Authorization') === "") {
                throw { code: "102", result: "Authorization 값 없음" };
            }
            if (req.header('Authorization') !== process.env.PUPPY_QA_AUTH &&
                req.header('Authorization') !== process.env.PUPPY_LIVE_AUTH) {
                throw { code: "101", result: "잘못된 Authorization" };
            }
            res.status(200).json(await this.puppyPointService.getCouponList());
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async postMakeCoupon(data, req, res) {
        try {
            if (req.header('Authorization') === "") {
                throw { code: "102", result: "Authorization 값 없음" };
            }
            if (req.header('Authorization') !== process.env.PUPPY_QA_AUTH &&
                req.header('Authorization') !== process.env.PUPPY_LIVE_AUTH) {
                throw { code: "101", result: "잘못된 Authorization" };
            }
            res.status(200).json(await this.puppyPointService.postMakeCoupon(data));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
    async postGetUserCouponCount(data, req, res) {
        try {
            if (req.header('Authorization') === "") {
                throw { code: "102", result: "Authorization 값 없음" };
            }
            if (req.header('Authorization') !== process.env.PUPPY_QA_AUTH &&
                req.header('Authorization') !== process.env.PUPPY_LIVE_AUTH) {
                throw { code: "101", result: "잘못된 Authorization" };
            }
            res.status(200).json(await this.puppyPointService.postGetUserCouponCount(data));
        }
        catch (error) {
            res.status(500).json({ error });
        }
    }
};
__decorate([
    (0, common_1.Post)('/makePoint'),
    (0, swagger_1.ApiOperation)({ summary: '포인트 발급' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPostMakePoint_dto_1.ReqPostMakePointDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PuppyPointController.prototype, "postMakePoint", null);
__decorate([
    (0, common_1.Post)('/getUserPoint'),
    (0, swagger_1.ApiOperation)({ summary: '포인트 조회' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPostGetUserPoint_dto_1.ReqPostGetUserPointDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PuppyPointController.prototype, "postGetUserPoint", null);
__decorate([
    (0, common_1.Get)('/getCouponList'),
    (0, swagger_1.ApiOperation)({ summary: '쿠폰 조회(사용가능한 전체 쿠폰 목록)' }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PuppyPointController.prototype, "getCouponList", null);
__decorate([
    (0, common_1.Post)('/makeCoupon'),
    (0, swagger_1.ApiOperation)({ summary: '쿠폰 지급' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPostMakeCoupon_dto_1.ReqPostMakeCouponDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PuppyPointController.prototype, "postMakeCoupon", null);
__decorate([
    (0, common_1.Post)('/getUserCouponCount'),
    (0, swagger_1.ApiOperation)({ summary: '유저 별 쿠폰 갯수' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ReqPostGetUserCouponCount_dto_1.ReqPostGetUserCouponCountDto, Object, Object]),
    __metadata("design:returntype", Promise)
], PuppyPointController.prototype, "postGetUserCouponCount", null);
PuppyPointController = __decorate([
    (0, common_1.Controller)('api/berry'),
    (0, swagger_1.ApiTags)('피리부는 강아지 - 포인트/쿠폰'),
    __metadata("design:paramtypes", [puppy_point_service_1.PuppyPointService])
], PuppyPointController);
exports.PuppyPointController = PuppyPointController;
//# sourceMappingURL=puppy-point.controller.js.map