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
exports.BrandManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const respones_1 = require("../../../common/respones");
const ProductBrand_entity_1 = require("../../../entity/product/ProductBrand.entity");
const ProductBrand_repository_1 = require("../../../repository/product/ProductBrand.repository");
let BrandManagerService = class BrandManagerService {
    constructor(brandManagerRepository) {
        this.brandManagerRepository = brandManagerRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.brandManagerRepository
                .createQueryBuilder('product_brand')
                .select('*');
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy('create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/brand : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findId(id) {
        try {
            return await this.brandManagerRepository.findOne({ brand_id: id });
        }
        catch (error) {
            common_1.Logger.log(`admin/brand : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async find(find, page, pageSize) {
        try {
            const result = await this.brandManagerRepository
                .createQueryBuilder()
                .select("*");
            switch (find.find_type) {
                case "0":
                    result.andWhere('brand_name like :text', { text: `%${find.find_text}%` });
                    break;
                case "1":
                    result.andWhere('brand_code like :text', { text: `%${find.find_text}%` });
                    break;
            }
            if (find.is_use_brand === "1" || find.is_use_brand === "2") {
                result.andWhere('is_use_brand = :use', { use: find.is_use_brand });
            }
            if (find.create_date_start && find.create_date_end) {
                result.andWhere(':start <= create_date <= :end', {
                    start: find.create_date_start,
                    end: find.create_date_end
                });
            }
            const totalData = await result.getCount();
            return {
                data: await result
                    .orderBy('create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.log(`admin/brand : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async save(data) {
        try {
            const result = new ProductBrand_entity_1.ProductBrandEntity();
            result.brand_name = data.brand_name;
            result.brand_code = data.brand_code;
            result.is_use_brand = data.is_use_brand;
            result.refund_address_number = data.refund_address_number;
            result.refund_address = data.refund_address;
            result.create_date = new Date();
            result.update_date = new Date();
            return await this.brandManagerRepository.save(result);
        }
        catch (error) {
            common_1.Logger.log(`admin/brand : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(id, data) {
        try {
            return await this.brandManagerRepository.update({ brand_id: id }, Object.assign(Object.assign({}, data), { update_date: new Date() }));
        }
        catch (error) {
            common_1.Logger.log(`admin/brand : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            return await this.brandManagerRepository.delete({ brand_id: id });
        }
        catch (error) {
            common_1.Logger.log(`admin/brand : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
BrandManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __metadata("design:paramtypes", [ProductBrand_repository_1.ProductBrandRepository])
], BrandManagerService);
exports.BrandManagerService = BrandManagerService;
//# sourceMappingURL=brand-manager.service.js.map