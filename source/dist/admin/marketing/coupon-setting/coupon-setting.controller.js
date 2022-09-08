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
exports.CouponSettingController = void 0;
const common_1 = require("@nestjs/common");
const coupon_setting_service_1 = require("./coupon-setting.service");
const swagger_1 = require("@nestjs/swagger");
const respones_1 = require("../../../common/respones");
const CouponSettingResponseDTO_1 = require("./DTO/CouponSettingResponseDTO");
let CouponSettingController = class CouponSettingController {
    constructor(couponSettingService) {
        this.couponSettingService = couponSettingService;
    }
    async find(res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponSettingService.findCouponSetting() }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
    async update(couponSettingDTO, res) {
        try {
            return res.status(200).json((0, respones_1.SUCCESS)({ data: await this.couponSettingService.saveCouponSetting(couponSettingDTO) }));
        }
        catch (error) {
            common_1.Logger.error({ error });
            return res.status(500).json((0, respones_1.FAILURE)(error));
        }
    }
};
__decorate([
    (0, common_1.Get)("/find"),
    (0, swagger_1.ApiOperation)({
        summary: "쿠폰 설정 조회",
        description: "현재 저장 된 쿠폰 설정을 조회합니다."
    }),
    (0, swagger_1.ApiCreatedResponse)({ type: CouponSettingResponseDTO_1.CouponSettingDTO }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CouponSettingController.prototype, "find", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, swagger_1.ApiOperation)({
        summary: "쿠폰 설정 변경",
        description: "새로운 쿠폰 설정을 저장합니다."
    }),
    (0, swagger_1.ApiBody)({ type: CouponSettingResponseDTO_1.CouponSettingDTO }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CouponSettingResponseDTO_1.CouponSettingDTO, Object]),
    __metadata("design:returntype", Promise)
], CouponSettingController.prototype, "update", null);
CouponSettingController = __decorate([
    (0, common_1.Controller)("admin/coupon/login/setting"),
    (0, swagger_1.ApiTags)("어드민 - 마케팅 : 쿠폰 설정 [ 143 페이지 ]"),
    __metadata("design:paramtypes", [coupon_setting_service_1.CouponSettingService])
], CouponSettingController);
exports.CouponSettingController = CouponSettingController;
//# sourceMappingURL=coupon-setting.controller.js.map