"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqQueryModule = void 0;
const common_1 = require("@nestjs/common");
const faq_query_controller_1 = require("./faq-query.controller");
const faq_query_service_1 = require("./faq-query.service");
const typeorm_1 = require("@nestjs/typeorm");
const QueryFaq_repository_1 = require("../../../repository/query/QueryFaq.repository");
let FaqQueryModule = class FaqQueryModule {
};
FaqQueryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                QueryFaq_repository_1.QueryFaqRepository
            ])],
        controllers: [faq_query_controller_1.FaqQueryController],
        providers: [faq_query_service_1.FaqQueryService]
    })
], FaqQueryModule);
exports.FaqQueryModule = FaqQueryModule;
//# sourceMappingURL=faq-query.module.js.map