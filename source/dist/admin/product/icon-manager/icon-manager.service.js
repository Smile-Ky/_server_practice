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
exports.IconManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ProductIcon_repository_1 = require("../../../repository/product/ProductIcon.repository");
const respones_1 = require("../../../common/respones");
const ProductIcon_entity_1 = require("../../../entity/product/ProductIcon.entity");
const ProductIconToProduct_repository_1 = require("../../../repository/product/ProductIconToProduct.repository");
let IconManagerService = class IconManagerService {
    constructor(productIconRepository, productIconToProductRepository) {
        this.productIconRepository = productIconRepository;
        this.productIconToProductRepository = productIconToProductRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.productIconRepository
                .createQueryBuilder('product_icon')
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
            common_1.Logger.log(`admin/icon : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findId(id) {
        try {
            return await this.productIconRepository.findOne({ icon_id: id });
        }
        catch (error) {
            common_1.Logger.log(`admin/icon : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async create(data) {
        try {
            const result = new ProductIcon_entity_1.ProductIconEntity();
            result.icon_name = data.icon_name;
            result.icon_text = data.icon_text;
            result.font_color = data.font_color;
            result.background_color = data.background_color;
            result.is_use_icon = data.is_use_icon;
            result.create_date = new Date();
            result.update_date = new Date();
            return await this.productIconRepository.save(result);
        }
        catch (error) {
            common_1.Logger.log(`admin/icon : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(id, data) {
        try {
            return await this.productIconRepository.update({ icon_id: id }, Object.assign(Object.assign({}, data), { update_date: new Date() }));
        }
        catch (error) {
            common_1.Logger.log(`admin/icon : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            await this.productIconRepository.delete({ icon_id: id });
        }
        catch (error) {
            common_1.Logger.log(`admin/icon : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
IconManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ProductIcon_repository_1.ProductIconRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductIconToProduct_repository_1.ProductIconToProductRepository)),
    __metadata("design:paramtypes", [ProductIcon_repository_1.ProductIconRepository,
        ProductIconToProduct_repository_1.ProductIconToProductRepository])
], IconManagerService);
exports.IconManagerService = IconManagerService;
//# sourceMappingURL=icon-manager.service.js.map