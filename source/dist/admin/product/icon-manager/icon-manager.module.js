"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconManagerModule = void 0;
const common_1 = require("@nestjs/common");
const icon_manager_controller_1 = require("./icon-manager.controller");
const icon_manager_service_1 = require("./icon-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const ProductIcon_repository_1 = require("../../../repository/product/ProductIcon.repository");
const ProductIconToProduct_repository_1 = require("../../../repository/product/ProductIconToProduct.repository");
let IconManagerModule = class IconManagerModule {
};
IconManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                ProductIcon_repository_1.ProductIconRepository,
                ProductIconToProduct_repository_1.ProductIconToProductRepository
            ])],
        controllers: [icon_manager_controller_1.IconManagerController],
        providers: [icon_manager_service_1.IconManagerService]
    })
], IconManagerModule);
exports.IconManagerModule = IconManagerModule;
//# sourceMappingURL=icon-manager.module.js.map