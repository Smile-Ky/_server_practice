"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneToOneQueryModule = void 0;
const common_1 = require("@nestjs/common");
const one_to_one_query_controller_1 = require("./one-to-one-query.controller");
const one_to_one_query_service_1 = require("./one-to-one-query.service");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const QueryOneToOne_repository_1 = require("../../../repository/query/QueryOneToOne.repository");
let OneToOneQueryModule = class OneToOneQueryModule {
};
OneToOneQueryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Member_repository_1.MemberRepository,
                QueryOneToOne_repository_1.QueryOneToOneRepository
            ])],
        controllers: [one_to_one_query_controller_1.OneToOneQueryController],
        providers: [one_to_one_query_service_1.OneToOneQueryService]
    })
], OneToOneQueryModule);
exports.OneToOneQueryModule = OneToOneQueryModule;
//# sourceMappingURL=one-to-one-query.module.js.map