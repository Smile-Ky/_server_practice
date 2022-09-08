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
exports.FlightEntity = void 0;
const typeorm_1 = require("typeorm");
let FlightEntity = class FlightEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], FlightEntity.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 45, nullable: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "departure", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 45, nullable: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "destination", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 45, nullable: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "departure_times", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 45, nullable: true }),
    __metadata("design:type", String)
], FlightEntity.prototype, "arrival_times", void 0);
FlightEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "flightList" })
], FlightEntity);
exports.FlightEntity = FlightEntity;
//# sourceMappingURL=flight.entity.js.map