"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginModule = void 0;
const common_1 = require("@nestjs/common");
const user_login_controller_1 = require("./user-login.controller");
const user_login_service_1 = require("./user-login.service");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberGroup_repository_1 = require("../../repository/member/MemberGroup.repository");
const MemberAddress_repository_1 = require("../../repository/member/MemberAddress.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const MemberLastVisit_repository_1 = require("../../repository/member/MemberLastVisit.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
let UserLoginModule = class UserLoginModule {
};
UserLoginModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Member_repository_1.MemberRepository,
                MemberGroup_repository_1.MemberGroupRepository,
                MemberAddress_repository_1.MemberAddressRepository,
                MemberPet_repository_1.MemberPetRepository,
                MemberLastVisit_repository_1.MemberLastVisitRepository,
                MemberMileage_repository_1.MemberMileageRepository
            ])],
        controllers: [user_login_controller_1.UserLoginController],
        providers: [user_login_service_1.UserLoginService]
    })
], UserLoginModule);
exports.UserLoginModule = UserLoginModule;
//# sourceMappingURL=user-login.module.js.map