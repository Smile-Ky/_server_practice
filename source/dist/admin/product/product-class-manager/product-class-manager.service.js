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
exports.ProductClassMangerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ProductClass_entity_1 = require("../../../entity/product/ProductClass.entity");
const ProductClass_repository_1 = require("../../../repository/product/ProductClass.repository");
let ProductClassMangerService = class ProductClassMangerService {
    constructor(productClassRepository) {
        this.productClassRepository = productClassRepository;
    }
    async findAll() {
        try {
            const result = await this.productClassRepository
                .createQueryBuilder('pc')
                .select([
                'product_class_id',
                `product_class_id as 'key'`,
                'class_name',
                `class_name as 'title'`,
                'use_classification',
                'top_class',
                'sequence',
                'image_url'
            ]).execute();
            const buffer = [];
            result.map(async (item) => {
                if (item.top_class === 'NULL') {
                    buffer.push(Object.assign(Object.assign({}, item), { children: [] }));
                    buffer.sort(function (a, b) { return a.sequence - b.sequence; });
                }
            });
            let count = 0;
            const tree = async (bufferList, data) => {
                bufferList.map(async (item) => {
                    data.map((value) => {
                        if (item.product_class_id === value.top_class) {
                            item.children.push(Object.assign(Object.assign({}, value), { children: [] }));
                        }
                    });
                    item.children.sort(function (a, b) { return a.sequence - b.sequence; });
                    await tree(item.children, data);
                });
                if (count === 5) {
                    return;
                }
            };
            await tree(buffer, result);
            return buffer;
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findClass(topClass) {
        try {
            return await this.productClassRepository
                .createQueryBuilder('product_class')
                .select([
                'product_class_id',
                `product_class_id as 'key'`,
                'class_name',
                `class_name as 'title'`,
                'use_classification',
                'top_class',
                'sequence',
                'image_url'
            ])
                .where("top_class = :topClass", { topClass })
                .orderBy('sequence', 'ASC')
                .execute();
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async findOneData(id) {
        try {
            return await this.productClassRepository
                .createQueryBuilder('product_class')
                .select([
                'product_class_id',
                `product_class_id as 'key'`,
                'class_name',
                `class_name as 'title'`,
                'use_classification',
                'top_class',
                'sequence',
                'image_url'
            ])
                .where('product_class_id = :id', { id })
                .execute();
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async save(data) {
        try {
            const classCount = await this.productClassRepository.createQueryBuilder('pc');
            if (!(data.top_class === undefined || data.top_class === "")) {
                classCount.andWhere('pc.top_class = :class', { class: data.top_class });
            }
            else {
                classCount.andWhere('pc.top_class = :id', { id: "NULL" });
            }
            let count = (await classCount.select('COUNT(1) AS `cnt`').execute())[0]['cnt'];
            const nowDate = new Date();
            const productClass = new ProductClass_entity_1.ProductClassEntity();
            productClass.class_name = data.class_name;
            productClass.use_classification = Number(data.use_classification);
            if (!(data.top_class === undefined || data.top_class === ""
                || data.top_class === "NULL" || data.top_class === "null" || data.top_class === null)) {
                const getClass = await this.productClassRepository.getTopClass(data.top_class);
                productClass.top_class = data.top_class;
                productClass.top_end_class = getClass.top_end_class;
                productClass.depth = getClass.depth;
            }
            productClass.sequence = Number(count) + 1;
            productClass.image_url = (data === null || data === void 0 ? void 0 : data.image_url) || null;
            productClass.create_date = nowDate;
            productClass.update_date = nowDate;
            if (!(data.top_class === undefined || data.top_class === "")) {
                data.top_class = "NULL";
            }
            const classData = await this.productClassRepository.save(productClass);
            if (data.top_class === undefined || data.top_class === ""
                || data.top_class === "NULL" || data.top_class === "null" || data.top_class === null) {
                return await this.productClassRepository.update({ product_class_id: classData.product_class_id }, { top_end_class: classData.product_class_id });
            }
            else {
                return classData;
            }
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error.driverError}`);
            throw error.driverError.sqlMessage;
        }
    }
    async update(id, update_data) {
        try {
            if (!(!(update_data.top_class === undefined || update_data.top_class === ""
                || update_data.top_class === "NULL" || update_data.top_class === "null" || update_data.top_class === null))) {
                update_data.top_class = "NULL";
            }
            await this.productClassRepository
                .update({ product_class_id: id }, {
                class_name: update_data.class_name,
                use_classification: update_data.use_classification,
                top_class: update_data.top_class,
                sequence: update_data.sequence,
                image_url: (update_data === null || update_data === void 0 ? void 0 : update_data.image_url) || null,
                update_date: () => 'now()'
            });
            return await this.productClassRepository.findOne({ product_class_id: id });
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async updateSequence(update_data) {
        try {
            update_data.map(async (item) => {
                await this.productClassRepository.update({
                    product_class_id: item.product_class_id
                }, {
                    top_class: item.top_class,
                    sequence: item.sequence,
                    update_date: new Date()
                });
            });
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async delete(id) {
        try {
            const buffer = [];
            const classData = await this.productClassRepository.find();
            const one = classData.filter(item => item.product_class_id === id);
            const list = classData.filter(item => item.top_class === id);
            list.map((item) => {
                buffer.push(...(classData.filter(a => a.top_class === item.product_class_id)));
            });
            buffer.map((item) => {
                buffer.push(...(classData.filter(a => a.top_class === item.product_class_id)));
            });
            const delete_list = [...one, ...list, ...buffer];
            await this.productClassRepository.delete(delete_list);
        }
        catch (error) {
            common_1.Logger.log(`product/class/manger : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
    async imageUpload(images) {
        try {
            if (images.length === 1) {
                return {
                    image_url: images[0].location
                };
            }
            const image_list = [];
            for (let i in images) {
                image_list.push({
                    image_url: images[i].location
                });
            }
            return image_list;
        }
        catch (error) {
            common_1.Logger.log(`admin/product : ${error}`);
            throw error.driverError.sqlMessage;
        }
    }
};
ProductClassMangerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __metadata("design:paramtypes", [ProductClass_repository_1.ProductClassRepository])
], ProductClassMangerService);
exports.ProductClassMangerService = ProductClassMangerService;
//# sourceMappingURL=product-class-manager.service.js.map