"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartModule = void 0;
const common_1 = require("@nestjs/common");
const start_controller_1 = require("./start.controller");
const start_service_1 = require("./start.service");
const typeorm_1 = require("@nestjs/typeorm");
const member_repository_1 = require("../respository/member.repository");
let StartModule = class StartModule {
};
StartModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                member_repository_1.MemberRepository
            ])],
        controllers: [start_controller_1.StartController],
        providers: [start_service_1.StartService]
    })
], StartModule);
exports.StartModule = StartModule;
//# sourceMappingURL=start.module.js.map