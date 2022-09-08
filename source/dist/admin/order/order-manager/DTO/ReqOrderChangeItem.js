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
exports.ReqOrderChangeItem = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOrderChangeItem {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '주문 수량', description: '주문 수량' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeItem.prototype, "order_product_count", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '상품 코드', description: '상품 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeItem.prototype, "product_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션 id', description: '상품 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeItem.prototype, "product_option_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '옵션 디테일', description: '상품 코드' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeItem.prototype, "product_option_detail_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '교환 전 오더 detail_id', description: '교환 전 오더 detail_id' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ReqOrderChangeItem.prototype, "origin_order_detail_id", void 0);
exports.ReqOrderChangeItem = ReqOrderChangeItem;
//# sourceMappingURL=ReqOrderChangeItem.js.map