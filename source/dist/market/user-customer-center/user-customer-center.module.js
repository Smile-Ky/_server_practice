"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCustomerCenterModule = void 0;
const common_1 = require("@nestjs/common");
const user_customer_center_controller_1 = require("./user-customer-center.controller");
const user_customer_center_service_1 = require("./user-customer-center.service");
const typeorm_1 = require("@nestjs/typeorm");
const Notice_repository_1 = require("../../repository/main/Notice.repository");
const QueryFaq_repository_1 = require("../../repository/query/QueryFaq.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const ReviewComment_repository_1 = require("../../repository/review/ReviewComment.repository");
const ReviewImage_repository_1 = require("../../repository/review/ReviewImage.repository");
const ReviewLike_repository_1 = require("../../repository/review/ReviewLike.repository");
const ReviewSetting_repository_1 = require("../../repository/review/ReviewSetting.repository");
const ReviewSettingToMemberGroup_repository_1 = require("../../repository/review/ReviewSettingToMemberGroup.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
let UserCustomerCenterModule = class UserCustomerCenterModule {
};
UserCustomerCenterModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                Notice_repository_1.NoticeRepository,
                QueryFaq_repository_1.QueryFaqRepository,
                Review_repository_1.ReviewRepository,
                ReviewComment_repository_1.ReviewCommentRepository,
                ReviewImage_repository_1.ReviewImageRepository,
                ReviewLike_repository_1.ReviewLikeRepository,
                ReviewSetting_repository_1.ReviewSettingRepository,
                ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository,
                Member_repository_1.MemberRepository,
                MemberPet_repository_1.MemberPetRepository
            ])],
        controllers: [user_customer_center_controller_1.UserCustomerCenterController],
        providers: [user_customer_center_service_1.UserCustomerCenterService]
    })
], UserCustomerCenterModule);
exports.UserCustomerCenterModule = UserCustomerCenterModule;
//# sourceMappingURL=user-customer-center.module.js.map