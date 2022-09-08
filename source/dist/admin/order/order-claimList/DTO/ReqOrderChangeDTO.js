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
exports.ReqOrderChangeDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderChangeDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: ["주문 걔별 ID(order_detail_id)"], description: "변경할 order_detail 항목" }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqOrderChangeDTO.prototype, "order_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: "31=교환승인, 34=교환거부, 32=교환회수완료, 33=교환확정 35=교환불가  ", description: "0=배송준비중, 1=배송지연, 2=취소완료, 3=입금확인, 4=입금전취소완료" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeDTO.prototype, "order_status", void 0);
exports.ReqOrderChangeDTO = ReqOrderChangeDTO;
//# sourceMappingURL=ReqOrderChangeDTO.js.map