"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppyApiModule = void 0;
const common_1 = require("@nestjs/common");
const puppy_point_module_1 = require("./puppy-point/puppy-point.module");
const puppy_walk_module_1 = require("./puppy-walk/puppy-walk.module");
let PuppyApiModule = class PuppyApiModule {
};
PuppyApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            puppy_point_module_1.PuppyPointModule,
            puppy_walk_module_1.PuppyWalkModule
        ],
        controllers: [],
        providers: [],
    })
], PuppyApiModule);
exports.PuppyApiModule = PuppyApiModule;
//# sourceMappingURL=puppy-api.module.js.map