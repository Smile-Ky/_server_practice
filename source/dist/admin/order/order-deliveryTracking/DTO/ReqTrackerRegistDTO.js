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
exports.ReqTrackerRegistDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ReqTrackerRegistDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "운송장 번호" }),
    __metadata("design:type", String)
], ReqTrackerRegistDTO.prototype, "num", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "배송사 코드" }),
    __metadata("design:type", String)
], ReqTrackerRegistDTO.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "해당 건의 결과 전송에 쓰이는 식별 값 ( 유니크한 값 )" }),
    __metadata("design:type", String)
], ReqTrackerRegistDTO.prototype, "fid", void 0);
exports.ReqTrackerRegistDTO = ReqTrackerRegistDTO;
//# sourceMappingURL=ReqTrackerRegistDTO.js.map