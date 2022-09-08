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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryCompanyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const DeliveryCompany_repository_1 = require("../../repository/delivery/DeliveryCompany.repository");
let DeliveryCompanyService = class DeliveryCompanyService {
    constructor(deliveryCompanyRepository) {
        this.deliveryCompanyRepository = deliveryCompanyRepository;
    }
    async findAll() {
        try {
            return await this.deliveryCompanyRepository.find();
        }
        catch (error) {
            common_1.Logger.error(`delivery/company ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findId(id) {
        try {
            return await this.deliveryCompanyRepository.query(`
            select * from delivery_company where delivery_company_id = "${id}"
            `);
        }
        catch (error) {
            common_1.Logger.error(`delivery/company ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findName(name) {
        try {
            return await this.deliveryCompanyRepository.query(`
            select * from delivery_company where delivery_company_name LIKE '%${name}%'
            `);
        }
        catch (error) {
            common_1.Logger.error(`delivery/company ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async save(name) {
        try {
            if (name === "" || name[0] === " " || name === "null" || name === undefined) {
                return { error: '파라미터 값이 잘못되었습니다.' };
            }
            const data = await this.deliveryCompanyRepository.createQueryBuilder()
                .insert()
                .values({
                delivery_company_name: name,
                create_date: new Date(),
                update_date: new Date()
            })
                .execute();
            return await this.deliveryCompanyRepository.query(`
            select * from delivery_company where delivery_company_id = "${data.identifiers[0].delivery_company_id}"
            `);
        }
        catch (error) {
            common_1.Logger.error(`delivery/company ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(id, name) {
        try {
            if (name === "" || name[0] === " " || name === "null" || name === undefined) {
                return { error: '파라미터 값이 잘못되었습니다.' };
            }
            await this.deliveryCompanyRepository.update({ delivery_company_id: id }, {
                delivery_company_name: name,
                update_date: new Date()
            });
            return await this.deliveryCompanyRepository.query(`
            select * from delivery_company where delivery_company_id = "${id}"
            `);
        }
        catch (error) {
            common_1.Logger.error(`delivery/company ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            console.log(id);
            return await this.deliveryCompanyRepository.delete({ delivery_company_id: id });
        }
        catch (error) {
            common_1.Logger.error(`delivery/company ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
DeliveryCompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(DeliveryCompany_repository_1.DeliveryCompanyRepository)),
    __metadata("design:paramtypes", [DeliveryCompany_repository_1.DeliveryCompanyRepository])
], DeliveryCompanyService);
exports.DeliveryCompanyService = DeliveryCompanyService;
//# sourceMappingURL=delivery-company.service.js.map