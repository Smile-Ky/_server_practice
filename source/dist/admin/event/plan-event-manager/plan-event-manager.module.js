"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanEventManagerModule = void 0;
const common_1 = require("@nestjs/common");
const plan_event_manager_controller_1 = require("./plan-event-manager.controller");
const plan_event_manager_service_1 = require("./plan-event-manager.service");
const typeorm_1 = require("@nestjs/typeorm");
const PlanEvent_repository_1 = require("../../../repository/plan/PlanEvent.repository");
const PlanEventImage_repository_1 = require("../../../repository/plan/PlanEventImage.repository");
const PlanEventComment_repository_1 = require("../../../repository/plan/PlanEventComment.repository");
const PlanEventToProduct_repository_1 = require("../../../repository/plan/PlanEventToProduct.repository");
const Product_repository_1 = require("../../../repository/product/Product.repository");
let PlanEventManagerModule = class PlanEventManagerModule {
};
PlanEventManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                PlanEvent_repository_1.PlanEventRepository,
                PlanEventImage_repository_1.PlanEventImageRepository,
                PlanEventComment_repository_1.PlanEventCommentRepository,
                PlanEventToProduct_repository_1.PlanEventToProductRepository,
                Product_repository_1.ProductRepository
            ])],
        controllers: [plan_event_manager_controller_1.PlanEventManagerController],
        providers: [plan_event_manager_service_1.PlanEventManagerService]
    })
], PlanEventManagerModule);
exports.PlanEventManagerModule = PlanEventManagerModule;
//# sourceMappingURL=plan-event-manager.module.js.map