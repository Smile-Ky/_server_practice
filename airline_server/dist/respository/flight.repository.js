"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightRepository = void 0;
const common_1 = require("@nestjs/common");
const flight_entity_1 = require("../entity/flight.entity");
const EntityRepository_1 = require("typeorm/decorator/EntityRepository");
const Repository_1 = require("typeorm/repository/Repository");
let FlightRepository = class FlightRepository extends Repository_1.Repository {
    async getAllData(departure, destination, dep_times, arr_times) {
        try {
            return await this.createQueryBuilder()
                .select([
                `uuid`,
                `departure`,
                `destination`,
                `departure_times`,
                `arrival_times`
            ])
                .andWhere(`destination like '%${destination}%'`)
                .andWhere(`departure like '%${departure}%'`)
                .andWhere(`departure_times like '%${dep_times}%'`)
                .andWhere(`arrival_times like '%${arr_times}%'`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async findById(uuid) {
        try {
            return await this.createQueryBuilder()
                .select([
                `uuid`,
                `departure`,
                `destination`,
                `departure_times`,
                `arrival_times`
            ])
                .andWhere(`uuid = '${uuid}'`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async updateFlight(uuid, flightBody) {
        try {
            return await this.createQueryBuilder()
                .update('flightList')
                .set({
                uuid: `${flightBody.uuid}`,
                departure: `${flightBody.departure}`,
                destination: `${flightBody.destination}`,
                departure_times: `${flightBody.departure_times}`,
                arrival_times: `${flightBody.arrival_times}`
            })
                .where(`uuid = '${uuid}'`)
                .execute();
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
};
FlightRepository = __decorate([
    (0, EntityRepository_1.EntityRepository)(flight_entity_1.FlightEntity)
], FlightRepository);
exports.FlightRepository = FlightRepository;
//# sourceMappingURL=flight.repository.js.map