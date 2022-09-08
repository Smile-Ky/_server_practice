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
exports.ReqUpdateCancelStatusDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqUpdateCancelStatusDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문번호 id키 값', description: '주문번호 id키 값' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "oid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문상태(0=입금예정, 1=입금예정, 2=배송준비중, 4=배송중, 5=배송완료, 6=구매확정)', description: '주문상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '11', description: '환불 요청 상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "claimStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 상세 번호', description: '주문 상세 번호' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "odIxs", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '취소 사유(option에서 선택)', description: '취소 사유(option에서 선택)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "ccReason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '취소 상세 사유', description: '취소 상세 사유' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "ccReasonMsg", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지', description: '이미지' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "img", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '이미지 개수', description: '이미지 개수' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqUpdateCancelStatusDto.prototype, "imgTotal", void 0);
exports.ReqUpdateCancelStatusDto = ReqUpdateCancelStatusDto;
//# sourceMappingURL=ReqUpdateCancelStatus.dto.js.map