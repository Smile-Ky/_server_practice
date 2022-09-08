"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberGroupModule = void 0;
const common_1 = require("@nestjs/common");
const member_group_controller_1 = require("./member-group.controller");
const member_group_service_1 = require("./member-group.service");
const typeorm_1 = require("@nestjs/typeorm");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
let MemberGroupModule = class MemberGroupModule {
};
MemberGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([MemberGroup_repository_1.MemberGroupRepository])],
        controllers: [member_group_controller_1.MemberGroupController],
        providers: [member_group_service_1.MemberGroupService]
    })
], MemberGroupModule);
exports.MemberGroupModule = MemberGroupModule;
//# sourceMappingURL=member-group.module.js.map