"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandManagerModule = void 0;
const common_1 = require("@nestjs/common");
const brand_manager_controller_1 = require("./brand-manager.controller");
const brand_manager_service_1 = require("./brand-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
let BrandManagerModule = class BrandManagerModule {
};
BrandManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ProductBrand_repository_1.ProductBrandRepository])],
        controllers: [brand_manager_controller_1.BrandManagerController],
        providers: [brand_manager_service_1.BrandManagerService]
    })
], BrandManagerModule);
exports.BrandManagerModule = BrandManagerModule;
//# sourceMappingURL=brand-manager.module.js.map