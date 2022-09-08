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
exports.GroupFromSimpleData = exports.GroupFromSimpleDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class GroupFromSimpleDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: '고유 키 값', description: '회원 그룹 고유 키 값' }),
    __metadata("design:type", String)
], GroupFromSimpleDTO.prototype, "group_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '회원 그룹 이름', description: '회원 그룹 이름' }),
    __metadata("design:type", String)
], GroupFromSimpleDTO.prototype, "group_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 2, description: '그룹 등급' }),
    __metadata("design:type", Number)
], GroupFromSimpleDTO.prototype, "group_level", void 0);
exports.GroupFromSimpleDTO = GroupFromSimpleDTO;
exports.GroupFromSimpleData = [
    {
        "group_idx": "0",
        "group_name": "다이아 발자국",
        "group_level": 6,
    },
    {
        "group_idx": "1",
        "group_name": "골드 발자국",
        "group_level": 5,
    },
    {
        "group_idx": "2",
        "group_name": "실버 발자국",
        "group_level": 4,
    },
    {
        "group_idx": "3",
        "group_name": "브론즈 발자국",
        "group_level": 3,
    },
    {
        "group_idx": "4",
        "group_name": "깜찍한 발자국",
        "group_level": 2,
    },
    {
        "group_idx": "5",
        "group_name": "신규 회원",
        "group_level": 1,
    }
];
//# sourceMappingURL=GroupFromSimpleDTO.js.map