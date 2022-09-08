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
exports.ReqCancelListFindDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqCancelListFindDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: "0(주문자-수취인명), 1(주문자&수취인-핸드폰번호), 2(주문번호), 3(송장번호), 4(상품명), 5(옵션명), 6(주문자ID), 7(품목코드)", description: "검색 타입" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCancelListFindDTO.prototype, "order_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "검색 키워드", description: "검색 키워드" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCancelListFindDTO.prototype, "order_find_text", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "0(취소요청일자), 1(취소완료일자)", description: "기간 검색 타입" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCancelListFindDTO.prototype, "date_find_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2022-06-07", description: "기간 검색 : 시작일" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCancelListFindDTO.prototype, "date_find_start", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "2022-06-31", description: "기간 검색 : 종료일" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqCancelListFindDTO.prototype, "date_find_end", void 0);
exports.ReqCancelListFindDTO = ReqCancelListFindDTO;
//# sourceMappingURL=ReqCancelListFindDTO.js.map