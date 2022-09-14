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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightController = void 0;
const common_1 = require("@nestjs/common");
const flight_service_1 = require("./flight.service");
const update_flight_dto_1 = require("./update-flight.dto");
let FlightController = class FlightController {
    constructor(flightService) {
        this.flightService = flightService;
    }
    async getAllData(departure, destination, dep_times, arr_times, res) {
        try {
            if (departure === undefined)
                departure = "";
            if (destination === undefined)
                destination = "";
            if (dep_times === undefined)
                dep_times = "";
            if (arr_times === undefined)
                arr_times = "";
            return res.status(200).json(await this.flightService.getAllData(departure, destination, dep_times, arr_times));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
    async findById(uuid, res) {
        try {
            return res.status(200).json(await this.flightService.findById(uuid));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
    async updateFlight(uuid, flightBody, res) {
        try {
            await this.flightService.updateFlight(uuid, flightBody);
            return res.status(200).json(await this.flightService.getAllData(flightBody.departure, flightBody.destination, flightBody.departure_times, flightBody.arrival_times));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('departure')),
    __param(1, (0, common_1.Query)('destination')),
    __param(2, (0, common_1.Query)('departure_times')),
    __param(3, (0, common_1.Query)('arrival_times')),
    __param(4, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "getAllData", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_flight_dto_1.updateFlightDto, Object]),
    __metadata("design:returntype", Promise)
], FlightController.prototype, "updateFlight", null);
FlightController = __decorate([
    (0, common_1.Controller)('flight'),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightController);
exports.FlightController = FlightController;
//# sourceMappingURL=flight.controller.js.map