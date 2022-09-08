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
exports.BatchesMileageDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BatchesMileageDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["유저 고유 키 값"], description: '일괄 변경 할 유저 리스트' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], BatchesMileageDTO.prototype, "user_list", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "300", description: '마일리지 지급액/사용액' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchesMileageDTO.prototype, "mileage_price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "적립금 내용", description: '적립금 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchesMileageDTO.prototype, "mileage_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '0', description: '적립 상태(적립=1 or 차감=0)' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BatchesMileageDTO.prototype, "mileage_payment_state", void 0);
exports.BatchesMileageDTO = BatchesMileageDTO;
//# sourceMappingURL=batchesMaileageDTO.js.map