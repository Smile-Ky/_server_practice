"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopDisplayToProductRepository = void 0;
const typeorm_1 = require("typeorm");
const TopDisplayToProduct_entity_1 = require("../../entity/top-display/TopDisplayToProduct.entity");
let TopDisplayToProductRepository = class TopDisplayToProductRepository extends typeorm_1.Repository {
};
TopDisplayToProductRepository = __decorate([
    (0, typeorm_1.EntityRepository)(TopDisplayToProduct_entity_1.TopDisplayToProductEntity)
], TopDisplayToProductRepository);
exports.TopDisplayToProductRepository = TopDisplayToProductRepository;
//# sourceMappingURL=TopDisplayToProduct.repository.js.map