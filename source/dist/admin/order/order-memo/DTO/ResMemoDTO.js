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
exports.ResMemoData = exports.ResMemoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ResMemoDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '메모 ID', description: '메모 ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResMemoDTO.prototype, "order_memo_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 ID', description: '주문 ID' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResMemoDTO.prototype, "order_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '메모 분류', description: '메모 분류' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResMemoDTO.prototype, "order_memo_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '메모 내용', description: '메모 내용' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResMemoDTO.prototype, "order_memo_context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '처리 상태', description: '처리 상태' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ResMemoDTO.prototype, "order_memo_state", void 0);
exports.ResMemoDTO = ResMemoDTO;
exports.ResMemoData = {
    "order_memo_id": "메모 ID",
    "order_id": "주문 ID",
    "order_memo_class": "메모 분류",
    "order_memo_context": "메모 내용",
    "order_memo_state": "처리 상태"
};
//# sourceMappingURL=ResMemoDTO.js.map