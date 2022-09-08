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
exports.ResSellingGraphData = exports.ResSellingGraphDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class ResSellingGraphDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '3', description: '매출 그래프 : 표시 되는 월' }),
    __metadata("design:type", Number)
], ResSellingGraphDTO.prototype, "selling_graph_month", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: [{ day: 1, price: 13000 }, { day: 2, price: 1400 }], description: '매출 그래프 : 일 별 매출' }),
    __metadata("design:type", Array)
], ResSellingGraphDTO.prototype, "selling_graph_sale_price", void 0);
exports.ResSellingGraphDTO = ResSellingGraphDTO;
exports.ResSellingGraphData = {
    "selling_graph_month": 3,
    "selling_graph_sale_price": [
        {
            "day": 1,
            "price": 13000
        },
        {
            "day": 2,
            "price": 1400
        }
    ]
};
//# sourceMappingURL=ResSellingGraphDTO.js.map