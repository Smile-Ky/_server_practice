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
exports.ReqOrderCancelDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderCancelDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["주문 걔별 ID(order_detail_id)"], description: "변경할 order_detail 항목" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqOrderCancelDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "0=배송준비중, 1=배송지연, 2=취소완료", description: "0=배송준비중, 1=배송지연, 2=취소완료, 3=입금확인, 4=입금전취소완료" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderCancelDTO.prototype, "order_status", void 0);
exports.ReqOrderCancelDTO = ReqOrderCancelDTO;
//# sourceMappingURL=ReqOrderCancelDTO.js.map