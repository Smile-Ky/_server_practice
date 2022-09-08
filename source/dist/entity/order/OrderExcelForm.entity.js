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
exports.OrderExcelFormEntity = void 0;
const typeorm_1 = require("typeorm");
let OrderExcelFormEntity = class OrderExcelFormEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], OrderExcelFormEntity.prototype, "order_excel_form_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '255', nullable: false, comment: '양식명' }),
    __metadata("design:type", String)
], OrderExcelFormEntity.prototype, "form_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '300', nullable: false, comment: '양식 타입' }),
    __metadata("design:type", String)
], OrderExcelFormEntity.prototype, "form_type", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false, comment: '개인 사용 여부' }),
    __metadata("design:type", Boolean)
], OrderExcelFormEntity.prototype, "personal_use_yn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: false, comment: '데이터 시작행' }),
    __metadata("design:type", Number)
], OrderExcelFormEntity.prototype, "data_start_row", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: '3000', comment: '폼의 목록' }),
    __metadata("design:type", String)
], OrderExcelFormEntity.prototype, "form_selected", void 0);
OrderExcelFormEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'order_excel_form' }),
    (0, typeorm_1.Unique)(['order_excel_form_id'])
], OrderExcelFormEntity);
exports.OrderExcelFormEntity = OrderExcelFormEntity;
//# sourceMappingURL=OrderExcelForm.entity.js.map