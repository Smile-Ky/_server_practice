"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeModule = void 0;
const common_1 = require("@nestjs/common");
const home_controller_1 = require("./home.controller");
const home_service_1 = require("./home.service");
const typeorm_1 = require("@nestjs/typeorm");
const MonthlySales_repository_1 = require("../../repository/main/MonthlySales.repository");
const QueryProduct_repository_1 = require("../../repository/query/QueryProduct.repository");
const QueryOneToOne_repository_1 = require("../../repository/query/QueryOneToOne.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const Product_repository_1 = require("../../repository/product/Product.repository");
const OrderDetail_repository_1 = require("../../repository/order/OrderDetail.repository");
let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                MonthlySales_repository_1.MonthlySalesRepository,
                QueryProduct_repository_1.QueryProductRepository,
                QueryOneToOne_repository_1.QueryOneToOneRepository,
                Review_repository_1.ReviewRepository,
                Product_repository_1.ProductRepository,
                OrderDetail_repository_1.OrderDetailRepository,
            ])],
        controllers: [home_controller_1.HomeController],
        providers: [home_service_1.HomeService]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map