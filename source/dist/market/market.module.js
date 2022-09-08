"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketModule = void 0;
const common_1 = require("@nestjs/common");
const cart_module_1 = require("./cart/cart.module");
const user_order_module_1 = require("./user-order/user-order.module");
const my_page_module_1 = require("./my-page/my-page.module");
const user_customer_center_module_1 = require("./user-customer-center/user-customer-center.module");
const user_event_module_1 = require("./user-event/user-event.module");
const member_info_module_1 = require("./member-info/member-info.module");
const base_info_module_1 = require("./base-info/base-info.module");
const product_info_module_1 = require("./product-info/product-info.module");
const user_login_module_1 = require("./user-login/user-login.module");
const puppy_point_module_1 = require("../puppy-api/puppy-point/puppy-point.module");
let MarketModule = class MarketModule {
};
MarketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_login_module_1.UserLoginModule,
            base_info_module_1.BaseInfoModule,
            member_info_module_1.MemberInfoModule,
            product_info_module_1.ProductInfoModule,
            cart_module_1.CartModule,
            user_order_module_1.UserOrderModule,
            my_page_module_1.MyPageModule,
            user_customer_center_module_1.UserCustomerCenterModule,
            user_event_module_1.UserEventModule,
            puppy_point_module_1.PuppyPointModule
        ],
        controllers: [],
        providers: [],
    })
], MarketModule);
exports.MarketModule = MarketModule;
//# sourceMappingURL=market.module.js.map