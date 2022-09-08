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
exports.ResTrackerResultDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResTrackerResultDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "인증키(현재 미사용)" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "식별값" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "fid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "운송장 번호" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "invoice_no", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "배송단계(1~6단계), -99 배송 스캔 오류" }),
    __metadata("design:type", Number)
], ResTrackerResultDTO.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "택배사 처리시간" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "time_trans", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "스윗트래커 등록시간" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "time_sweet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "택배 위치" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "where", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "사업소 기반 전화번호" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "telno_office", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "배송기사 전화번호" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "telno_man", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "배송상세 정보" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "details", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "수취인 주소" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "recv_addr", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "수취인 이름" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "recv_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "발신인 이름" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "send_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "배송기사 이름" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "man", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "배송예정 시간" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "estmate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "택배사 코드" }),
    __metadata("design:type", String)
], ResTrackerResultDTO.prototype, "comcode", void 0);
exports.ResTrackerResultDTO = ResTrackerResultDTO;
//# sourceMappingURL=ResTrackerResultDTO.js.map