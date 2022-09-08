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
exports.ReqBannerFromDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqBannerFromDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '메인베너=0 or 기획전상단=1 or 쿠폰함배너=2 or 서브배너=3',
        description: '배너 위치(메인베너=0 or 기획전상단=1 or 쿠폰함배너=2 or 서브배너=3)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBannerFromDto.prototype, "banner_point", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "배너 이름", description: '배너 이름' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqBannerFromDto.prototype, "banner_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true, description: '노출 여부' }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ReqBannerFromDto.prototype, "is_show", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{
                title: "배너 타이틀",
                link_url: '배너 이미지 링크 (배너 클릭시 이동 해야하는 링크)',
                sequence: 1,
                is_use_date: true,
                start_date: "2022-01-15",
                end_date: "2022-12-15",
                banner_image_id: "이미지 고유 ID",
            }], description: '배너 이미지 그룹' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqBannerFromDto.prototype, "banner_item", void 0);
exports.ReqBannerFromDto = ReqBannerFromDto;
//# sourceMappingURL=ReqBannerFrom.dto.js.map