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
exports.ReqMemoSearchDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReqMemoSearchDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "메모 분류" }),
    __metadata("design:type", Array)
], ReqMemoSearchDTO.prototype, "order_memo_class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "메모 내용", description: "메모 내용" }),
    __metadata("design:type", String)
], ReqMemoSearchDTO.prototype, "order_memo_context", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "처리 상태" }),
    __metadata("design:type", Array)
], ReqMemoSearchDTO.prototype, "order_memo_state", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "검색 조건" }),
    __metadata("design:type", String)
], ReqMemoSearchDTO.prototype, "search_option", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "시작 시간" }),
    __metadata("design:type", String)
], ReqMemoSearchDTO.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "", description: "종료 시간" }),
    __metadata("design:type", String)
], ReqMemoSearchDTO.prototype, "end_date", void 0);
exports.ReqMemoSearchDTO = ReqMemoSearchDTO;
//# sourceMappingURL=ReqMemoSearchDTO.js.map