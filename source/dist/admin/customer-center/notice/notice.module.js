"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoticeModule = void 0;
const common_1 = require("@nestjs/common");
const notice_controller_1 = require("./notice.controller");
const notice_service_1 = require("./notice.service");
const typeorm_1 = require("@nestjs/typeorm");
const Notice_repository_1 = require("../../../repository/main/Notice.repository");
let NoticeModule = class NoticeModule {
};
NoticeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Notice_repository_1.NoticeRepository
            ])],
        controllers: [notice_controller_1.NoticeController],
        providers: [notice_service_1.NoticeService]
    })
], NoticeModule);
exports.NoticeModule = NoticeModule;
//# sourceMappingURL=notice.module.js.map