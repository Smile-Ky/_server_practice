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
exports.ReqOptionSettingDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class ReqOptionSettingDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ default: [
            { option_name: '색상', option_value: ['레드', '블루'] },
            { option_name: '무게', option_value: ['1kg', '2kg', '3kg'] }
        ], description: '옵션 내용' }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], ReqOptionSettingDTO.prototype, "option", void 0);
exports.ReqOptionSettingDTO = ReqOptionSettingDTO;
//# sourceMappingURL=ReqOptionSettingDTO.js.map