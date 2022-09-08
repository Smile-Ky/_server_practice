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
exports.MonthlySalesEntity = void 0;
const typeorm_1 = require("typeorm");
let MonthlySalesEntity = class MonthlySalesEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: '매출액 그래프 매출' }),
    __metadata("design:type", String)
], MonthlySalesEntity.prototype, "monthly_sales_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date', nullable: false, comment: '매출 산정 날짜' }),
    __metadata("design:type", Date)
], MonthlySalesEntity.prototype, "log_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false, comment: '당일 매출액' }),
    __metadata("design:type", Number)
], MonthlySalesEntity.prototype, "total_sales", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '생성 날짜' }),
    __metadata("design:type", Date)
], MonthlySalesEntity.prototype, "create_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', default: () => 'NOW()', nullable: false, comment: '수정 날짜' }),
    __metadata("design:type", Date)
], MonthlySalesEntity.prototype, "update_date", void 0);
MonthlySalesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'monthly_sales' }),
    (0, typeorm_1.Unique)(['monthly_sales_id'])
], MonthlySalesEntity);
exports.MonthlySalesEntity = MonthlySalesEntity;
//# sourceMappingURL=MonthlySales.entity.js.map