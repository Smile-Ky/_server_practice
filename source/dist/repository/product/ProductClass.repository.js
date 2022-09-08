"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductClassRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const ProductClass_entity_1 = require("../../entity/product/ProductClass.entity");
let ProductClassRepository = class ProductClassRepository extends typeorm_1.Repository {
    async getClassTree() {
        try {
            const depth = 3;
            const result = await this.createQueryBuilder('pc')
                .select([
                'pc.product_class_id as cid',
                `pc.product_class_id as 'key'`,
                'pc.class_name as class_name',
                `pc.class_name as 'title'`,
                'pc.use_classification as use_classification',
                'pc.top_class as top_class',
                'pc.sequence as sequence',
                'pc.depth as depth',
                `pc.image_url as image`
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
                        if (item.cid === value.top_class) {
                            item.children.push(Object.assign(Object.assign({}, value), { children: [] }));
                        }
                    });
                    item.children.sort(function (a, b) { return a.sequence - b.sequence; });
                    await tree(item.children, data);
                });
                if (count === depth) {
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
    async getClassFullText(id) {
        var _a, _b, _c;
        let text = [];
        let count = 0;
        let _index;
        while (!(_index === "NULL")) {
            if (count === 0) {
                _index = id;
            }
            const classBuffer = await this.createQueryBuilder('class')
                .select([
                'product_class_id',
                'top_class',
                'class_name'
            ])
                .andWhere('product_class_id = :id', { id: _index });
            const _classBuffer = await classBuffer.execute();
            count = 1;
            text.push((_a = _classBuffer[0]) === null || _a === void 0 ? void 0 : _a.class_name);
            _index = (_b = _classBuffer[0]) === null || _b === void 0 ? void 0 : _b.top_class;
            if (((_c = _classBuffer[0]) === null || _c === void 0 ? void 0 : _c.top_class) === "NULL") {
                text.reverse();
                return text.join('>');
            }
        }
    }
    async getTopClass(id) {
        var _a, _b, _c;
        try {
            let count = 0;
            let _index;
            while (!(_index === "NULL")) {
                if (count === 0) {
                    _index = id;
                }
                const classBuffer = await this.createQueryBuilder('class')
                    .select([
                    'product_class_id',
                    'top_class',
                    'class_name'
                ])
                    .andWhere('product_class_id = :id', { id: _index })
                    .execute();
                count += 1;
                _index = (_a = classBuffer[0]) === null || _a === void 0 ? void 0 : _a.top_class;
                if (((_b = classBuffer[0]) === null || _b === void 0 ? void 0 : _b.top_class) === "NULL") {
                    return {
                        depth: count,
                        top_end_class: (_c = classBuffer[0]) === null || _c === void 0 ? void 0 : _c.product_class_id
                    };
                }
            }
        }
        catch (error) {
            common_1.Logger.error('product class : ', error);
            throw error;
        }
    }
    async getClassNameList(id) {
        var _a, _b, _c, _d;
        let cid = [];
        let text = [];
        let count = 0;
        let _index;
        const check_class = (await this.createQueryBuilder('c')
            .innerJoin('product_to_class', 'ptc', 'ptc.product_class_id = c.product_class_id')
            .andWhere('c.product_class_id = :cid', { cid: id })
            .select(['count(*) as count'])
            .execute())[0]['count'];
        if (!check_class) {
            throw "맴핑 된 상품 카테고리가 없습니다.";
        }
        while (!(_index === "NULL")) {
            if (count === 0) {
                _index = id;
            }
            const classBuffer = await this.createQueryBuilder('class')
                .select([
                'product_class_id',
                'top_class',
                'class_name'
            ])
                .andWhere('product_class_id = :id', { id: _index });
            const _classBuffer = await classBuffer.execute();
            count = 1;
            text.push((_a = _classBuffer[0]) === null || _a === void 0 ? void 0 : _a.class_name);
            cid.push((_b = _classBuffer[0]) === null || _b === void 0 ? void 0 : _b.product_class_id);
            _index = (_c = _classBuffer[0]) === null || _c === void 0 ? void 0 : _c.top_class;
            if (((_d = _classBuffer[0]) === null || _d === void 0 ? void 0 : _d.top_class) === "NULL") {
                text.reverse();
                cid.reverse();
                return {
                    cid: cid,
                    result: text,
                    data: text.join('>')
                };
            }
        }
    }
    async getSubClassAll(cid) {
        const topEndClass = (await this.createQueryBuilder('c')
            .andWhere('c.product_class_id = :cid', { cid: cid })
            .select('*')
            .execute())[0];
        common_1.Logger.log(topEndClass);
        if (topEndClass.top_class === null || topEndClass.top_class === "NULL") {
            const topList = await this.createQueryBuilder('c')
                .select([
                `c.class_name as cname`,
                `c.product_class_id as cid`,
                `c.depth as depth`,
                `c.top_class as top_class`,
                `c.top_end_class as top_end_class`
            ])
                .orWhere('c.top_end_class = :cid', { cid: topEndClass === null || topEndClass === void 0 ? void 0 : topEndClass.product_class_id })
                .orWhere('c.product_class_id = :topId', { topId: topEndClass === null || topEndClass === void 0 ? void 0 : topEndClass.product_class_id })
                .execute();
            const classList = [];
            for (let item of topList) {
                classList.push(item === null || item === void 0 ? void 0 : item.cid);
            }
            return {
                data: topList,
                list: classList
            };
        }
        const bufferList = [topEndClass === null || topEndClass === void 0 ? void 0 : topEndClass.product_class_id];
        const bufferData = await this.createQueryBuilder('sub')
            .select([
            `sub.class_name as cname`,
            `sub.product_class_id as cid`,
            `sub.depth as depth`,
            `sub.top_class as top_class`,
            `sub.top_end_class as top_end_class`
        ])
            .andWhere('sub.product_class_id in (:topId)', { topId: [topEndClass === null || topEndClass === void 0 ? void 0 : topEndClass.product_class_id] })
            .execute();
        const subClassList = [];
        const subClassData = await this.createQueryBuilder('sub')
            .select([
            `sub.class_name as cname`,
            `sub.product_class_id as cid`,
            `sub.depth as depth`,
            `sub.top_class as top_class`,
            `sub.top_end_class as top_end_class`
        ])
            .andWhere('sub.top_class in (:topId)', { topId: [topEndClass === null || topEndClass === void 0 ? void 0 : topEndClass.product_class_id] })
            .execute();
        for (let g of subClassData) {
            subClassList.push(g.cid);
        }
        bufferList.push(...subClassList);
        bufferData.push(...subClassData);
        if (subClassList.length === 0) {
            return {
                data: bufferData,
                list: bufferList
            };
        }
        const subClassList_1 = [];
        const subClassData_1 = await this.createQueryBuilder('sub')
            .select([
            `sub.class_name as cname`,
            `sub.product_class_id as cid`,
            `sub.depth as depth`,
            `sub.top_class as top_class`,
            `sub.top_end_class as top_end_class`
        ])
            .andWhere('sub.top_class in (:topId)', { topId: subClassList })
            .execute();
        for (let g of subClassData_1) {
            subClassList_1.push(g.cid);
        }
        bufferList.push(...subClassList_1);
        bufferData.push(...subClassData_1);
        if (subClassList_1.length === 0) {
            return {
                data: bufferData,
                list: bufferList
            };
        }
        const subClassList_2 = [];
        const subClassData_2 = await this.createQueryBuilder('sub')
            .select([
            `sub.class_name as cname`,
            `sub.product_class_id as cid`,
            `sub.depth as depth`,
            `sub.top_class as top_class`,
            `sub.top_end_class as top_end_class`
        ])
            .andWhere('sub.top_class in (:topId)', { topId: subClassList_1 })
            .execute();
        for (let g of subClassData_2) {
            subClassList_2.push(g.cid);
        }
        bufferList.push(...subClassList_2);
        bufferData.push(...subClassData_2);
        return {
            data: bufferData,
            list: bufferList
        };
    }
};
ProductClassRepository = __decorate([
    (0, typeorm_1.EntityRepository)(ProductClass_entity_1.ProductClassEntity)
], ProductClassRepository);
exports.ProductClassRepository = ProductClassRepository;
//# sourceMappingURL=ProductClass.repository.js.map