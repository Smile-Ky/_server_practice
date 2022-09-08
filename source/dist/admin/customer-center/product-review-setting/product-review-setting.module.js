"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReviewSettingModule = void 0;
const common_1 = require("@nestjs/common");
const product_review_setting_controller_1 = require("./product-review-setting.controller");
const product_review_setting_service_1 = require("./product-review-setting.service");
const typeorm_1 = require("@nestjs/typeorm");
const MemberGroup_repository_1 = require("../../../repository/member/MemberGroup.repository");
const ReviewSetting_repository_1 = require("../../../repository/review/ReviewSetting.repository");
const ReviewSettingToMemberGroup_repository_1 = require("../../../repository/review/ReviewSettingToMemberGroup.repository");
const ReviewCommentAutoSetting_repository_1 = require("../../../repository/review/ReviewCommentAutoSetting.repository");
let ProductReviewSettingModule = class ProductReviewSettingModule {
};
ProductReviewSettingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([
                MemberGroup_repository_1.MemberGroupRepository,
                ReviewSetting_repository_1.ReviewSettingRepository,
                ReviewSettingToMemberGroup_repository_1.ReviewSettingToMemberGroupRepository,
                ReviewCommentAutoSetting_repository_1.ReviewCommentAutoSettingRepository
            ])],
        controllers: [product_review_setting_controller_1.ProductReviewSettingController],
        providers: [product_review_setting_service_1.ProductReviewSettingService]
    })
], ProductReviewSettingModule);
exports.ProductReviewSettingModule = ProductReviewSettingModule;
//# sourceMappingURL=product-review-setting.module.js.map