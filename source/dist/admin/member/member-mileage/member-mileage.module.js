"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberMileageModule = void 0;
const common_1 = require("@nestjs/common");
const member_mileage_controller_1 = require("./member-mileage.controller");
const member_mileage_service_1 = require("./member-mileage.service");
const typeorm_1 = require("@nestjs/typeorm");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const MemberMileageLog_repository_1 = require("../../../repository/member/MemberMileageLog.repository");
const MemberMileage_repository_1 = require("../../../repository/member/MemberMileage.repository");
const MileageSetting_repository_1 = require("../../../repository/mileage/MileageSetting.repository");
const MileageSettingGroupPayment_repository_1 = require("../../../repository/mileage/MileageSettingGroupPayment.repository");
let MemberMileageModule = class MemberMileageModule {
};
MemberMileageModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Member_repository_1.MemberRepository,
                MemberMileageLog_repository_1.MemberMileageLogRepository,
                MemberMileage_repository_1.MemberMileageRepository,
                MileageSetting_repository_1.MileageSettingRepository,
                MileageSettingGroupPayment_repository_1.MileageSettingGroupPaymentRepository,
                MemberGroup_repository_1.MemberGroupRepository
            ])
        ],
        controllers: [member_mileage_controller_1.MemberMileageController],
        providers: [member_mileage_service_1.MemberMileageService]
    })
], MemberMileageModule);
exports.MemberMileageModule = MemberMileageModule;
//# sourceMappingURL=member-mileage.module.js.map