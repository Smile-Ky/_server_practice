"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerManagerModule = void 0;
const common_1 = require("@nestjs/common");
const banner_manager_controller_1 = require("./banner-manager.controller");
const banner_manager_service_1 = require("./banner-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const Banner_repository_1 = require("../../../repository/banner/Banner.repository");
const BannerImage_repository_1 = require("../../../repository/banner/BannerImage.repository");
const BannerItem_repository_1 = require("../../../repository/banner/BannerItem.repository");
let BannerManagerModule = class BannerManagerModule {
};
BannerManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Banner_repository_1.BannerRepository,
                BannerImage_repository_1.BannerImageRepository,
                BannerItem_repository_1.BannerItemRepository
            ])],
        controllers: [banner_manager_controller_1.BannerManagerController],
        providers: [banner_manager_service_1.BannerManagerService]
    })
], BannerManagerModule);
exports.BannerManagerModule = BannerManagerModule;
//# sourceMappingURL=banner-manager.module.js.map