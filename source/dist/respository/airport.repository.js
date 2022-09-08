"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirportRepository = void 0;
const common_1 = require("@nestjs/common");
const airport_entity_1 = require("../entity/airport.entity");
const typeorm_1 = require("typeorm");
let AirportRepository = class AirportRepository extends typeorm_1.Repository {
    async findByChar(query) {
        try {
            return await this.createQueryBuilder()
                .select([
                `name`,
                `code`
            ])
                .andWhere(`code like '%${query.toUpperCase()}%'`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
AirportRepository = __decorate([
    (0, typeorm_1.EntityRepository)(airport_entity_1.AirportEntity)
], AirportRepository);
exports.AirportRepository = AirportRepository;
//# sourceMappingURL=airport.repository.js.map