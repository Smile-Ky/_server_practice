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
exports.CouponSettingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const CouponSetting_repository_1 = require("../../../repository/coupon/CouponSetting.repository");
let CouponSettingService = class CouponSettingService {
    constructor(couponSettingRepository) {
        this.couponSettingRepository = couponSettingRepository;
    }
    async findCouponSetting() {
        try {
            return (await this.couponSettingRepository.find())[0];
        }
        catch (error) {
            common_1.Logger.log(`findCouponSetting Error ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async saveCouponSetting(couponSettingDTO) {
        try {
            const key = (await this.couponSettingRepository.find())[0];
            await this.couponSettingRepository.update({ coupon_setting_id: key.coupon_setting_id }, Object.assign(Object.assign({}, couponSettingDTO), { update_date: new Date() }));
            return "설정이 저장되었습니다.";
        }
        catch (error) {
            common_1.Logger.log(`findCouponSetting Error ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
CouponSettingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(CouponSetting_repository_1.CouponSettingRepository)),
    __metadata("design:paramtypes", [CouponSetting_repository_1.CouponSettingRepository])
], CouponSettingService);
exports.CouponSettingService = CouponSettingService;
//# sourceMappingURL=coupon-setting.service.js.map