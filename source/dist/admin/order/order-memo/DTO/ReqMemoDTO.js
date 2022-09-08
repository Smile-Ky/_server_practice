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
exports.ReqMemoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReqMemoDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "메모 분류" }),
    __metadata("design:type", String)
], ReqMemoDTO.prototype, "order_memo_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "메모 내용" }),
    __metadata("design:type", String)
], ReqMemoDTO.prototype, "order_memo_context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "처리 상태" }),
    __metadata("design:type", String)
], ReqMemoDTO.prototype, "order_memo_state", void 0);
exports.ReqMemoDTO = ReqMemoDTO;
//# sourceMappingURL=ReqMemoDTO.js.map