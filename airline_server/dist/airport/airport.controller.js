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
exports.AirportController = void 0;
const common_1 = require("@nestjs/common");
const airport_service_1 = require("./airport.service");
let AirportController = class AirportController {
    constructor(airportService) {
        this.airportService = airportService;
    }
    async findAll(query, res) {
        try {
            if (query === undefined)
                query = "";
            return res.status(200).json(await this.airportService.findByChar(query));
        }
        catch (error) {
            common_1.Logger.error(error);
            return res.status(500).json(error);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AirportController.prototype, "findAll", null);
AirportController = __decorate([
    (0, common_1.Controller)('airport'),
    __metadata("design:paramtypes", [airport_service_1.AirportService])
], AirportController);
exports.AirportController = AirportController;
//# sourceMappingURL=airport.controller.js.map