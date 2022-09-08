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
exports.PuppyLoginController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const puppy_login_service_1 = require("./puppy-login.service");
let PuppyLoginController = class PuppyLoginController {
    constructor(puppyLoginService) {
        this.puppyLoginService = puppyLoginService;
    }
};
PuppyLoginController = __decorate([
    (0, common_1.Controller)('puppy-login'),
    (0, swagger_1.ApiTags)('피리부는 강아지 - 회원 관리'),
    __metadata("design:paramtypes", [puppy_login_service_1.PuppyLoginService])
], PuppyLoginController);
exports.PuppyLoginController = PuppyLoginController;
//# sourceMappingURL=puppy-login.controller.js.map