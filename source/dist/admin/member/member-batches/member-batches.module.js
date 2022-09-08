"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberBatchesModule = void 0;
const common_1 = require("@nestjs/common");
const member_batches_controller_1 = require("./member-batches.controller");
const member_batches_service_1 = require("./member-batches.service");
const typeorm_1 = require("@nestjs/typeorm");
const Member_repository_1 = require("../../../repository/member/Member.repository");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const MemberMileage_repository_1 = require("../../../repository/member/MemberMileage.repository");
const MemberMileageLog_repository_1 = require("../../../repository/member/MemberMileageLog.repository");
let MemberBatchesModule = class MemberBatchesModule {
};
MemberBatchesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Member_repository_1.MemberRepository,
                MemberGroup_repository_1.MemberGroupRepository,
                MemberMileage_repository_1.MemberMileageRepository,
                MemberMileageLog_repository_1.MemberMileageLogRepository
            ])],
        controllers: [member_batches_controller_1.MemberBatchesController],
        providers: [member_batches_service_1.MemberBatchesService]
    })
], MemberBatchesModule);
exports.MemberBatchesModule = MemberBatchesModule;
//# sourceMappingURL=member-batches.module.js.map