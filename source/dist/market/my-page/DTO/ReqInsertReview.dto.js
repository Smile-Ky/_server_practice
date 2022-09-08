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
exports.ReqInsertReviewDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqInsertReviewDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "petName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "petBirthdate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "petWeight", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "petId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "pid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "oid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "od_ix", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "option_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "valuation_goods", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "bbs_contents", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', description: '' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqInsertReviewDto.prototype, "bbs_ix", void 0);
exports.ReqInsertReviewDto = ReqInsertReviewDto;
//# sourceMappingURL=ReqInsertReview.dto.js.map