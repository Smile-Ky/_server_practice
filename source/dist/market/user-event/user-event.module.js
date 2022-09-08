"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEventModule = void 0;
const common_1 = require("@nestjs/common");
const user_event_controller_1 = require("./user-event.controller");
const user_event_service_1 = require("./user-event.service");
const typeorm_1 = require("@nestjs/typeorm");
const PlanEvent_repository_1 = require("../../repository/plan/PlanEvent.repository");
const PlanEventComment_repository_1 = require("../../repository/plan/PlanEventComment.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
let UserEventModule = class UserEventModule {
};
UserEventModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                PlanEvent_repository_1.PlanEventRepository,
                PlanEventComment_repository_1.PlanEventCommentRepository,
                Member_repository_1.MemberRepository,
                MemberPet_repository_1.MemberPetRepository,
            ])],
        controllers: [user_event_controller_1.UserEventController],
        providers: [user_event_service_1.UserEventService]
    })
], UserEventModule);
exports.UserEventModule = UserEventModule;
//# sourceMappingURL=user-event.module.js.map