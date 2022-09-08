"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewSettingToMemberGroupRepository = void 0;
const typeorm_1 = require("typeorm");
const ReviewSettingToMemberGroup_entity_1 = require("../../entity/review/ReviewSettingToMemberGroup.entity");
let ReviewSettingToMemberGroupRepository = class ReviewSettingToMemberGroupRepository extends typeorm_1.Repository {
};
ReviewSettingToMemberGroupRepository = __decorate([
    (0, typeorm_1.EntityRepository)(ReviewSettingToMemberGroup_entity_1.ReviewSettingToMemberGroupEntity)
], ReviewSettingToMemberGroupRepository);
exports.ReviewSettingToMemberGroupRepository = ReviewSettingToMemberGroupRepository;
//# sourceMappingURL=ReviewSettingToMemberGroup.repository.js.map