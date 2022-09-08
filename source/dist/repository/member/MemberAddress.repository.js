"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberAddressRepository = void 0;
const MemberAddress_entity_1 = require("../../entity/member/MemberAddress.entity");
const typeorm_1 = require("typeorm");
let MemberAddressRepository = class MemberAddressRepository extends typeorm_1.Repository {
};
MemberAddressRepository = __decorate([
    (0, typeorm_1.EntityRepository)(MemberAddress_entity_1.MemberAddressEntity)
], MemberAddressRepository);
exports.MemberAddressRepository = MemberAddressRepository;
//# sourceMappingURL=MemberAddress.repository.js.map