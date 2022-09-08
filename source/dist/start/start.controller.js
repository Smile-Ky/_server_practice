"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartController = void 0;
const common_1 = require("@nestjs/common");
const start_service_1 = require("./start.service");
let StartController = class StartController {
    constructor(startService) {
        this.startService = startService;
    }
    async memberSave() {
        try {
            await this.startService.memberSave();
            return await this.startService.memberFind("홍");
        }
        catch (error) {
            common_1.Logger.log(error);
            return error;
        }
    }
};
__decorate([
    (0, common_1.Get)('/save'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StartController.prototype, "memberSave", null);
StartController = __decorate([
    (0, common_1.Controller)('member'),
    __metadata("design:paramtypes", [start_service_1.StartService])
], StartController);
exports.StartController = StartController;
//# sourceMappingURL=start.controller.js.map