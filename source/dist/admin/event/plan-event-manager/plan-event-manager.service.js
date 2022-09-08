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
exports.PlanEventManagerService = void 0;
const common_1 = require("@nestjs/common");
const respones_1 = require("../../../common/respones");
const typeorm_1 = require("@nestjs/typeorm");
const PlanEvent_repository_1 = require("../../../repository/plan/PlanEvent.repository");
const PlanEvent_entity_1 = require("../../../entity/plan/PlanEvent.entity");
const PlanEventImage_repository_1 = require("../../../repository/plan/PlanEventImage.repository");
const PlanEventComment_repository_1 = require("../../../repository/plan/PlanEventComment.repository");
const PlanEventToProduct_repository_1 = require("../../../repository/plan/PlanEventToProduct.repository");
const Product_repository_1 = require("../../../repository/product/Product.repository");
const PlanEventToProduct_entity_1 = require("../../../entity/plan/PlanEventToProduct.entity");
const PlanEventImage_entity_1 = require("../../../entity/plan/PlanEventImage.entity");
let PlanEventManagerService = class PlanEventManagerService {
    constructor(planEventRepository, planEventImageRepository, planEventCommentRepository, planEventToProductRepository, productRepository) {
        this.planEventRepository = planEventRepository;
        this.planEventImageRepository = planEventImageRepository;
        this.planEventCommentRepository = planEventCommentRepository;
        this.planEventToProductRepository = planEventToProductRepository;
        this.productRepository = productRepository;
    }
    async findAll(page, pageSize) {
        try {
            const result = await this.planEventRepository
                .createQueryBuilder('plan_event');
            const totalData = (await result.select('COUNT(1) AS `cnt`').execute())[0]['cnt'];
            result.select([
                `plan_event_id`,
                `CASE
        WHEN from_type = 1 THEN '이벤트'
        WHEN from_type = 2 THEN '기획전'
        END as from_type`,
                `title`,
                `CASE
        WHEN is_display = 1 THEN '사용'
        WHEN is_display = 0 THEN '미사용'
        END as is_display`,
                `end_date`,
                `create_date`,
                `CASE
        WHEN is_use_comment = 1 THEN '사용'
        WHEN is_use_comment = 0 THEN '미사용'
        END as is_use_comment`,
                `(SELECT count(1) FROM plan_event_comment as pec 
        WHERE pec.plan_event_id = plan_event.plan_event_id) as comment_count`
            ]);
            return {
                data: await result
                    .orderBy('plan_event.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async find(find, page, pageSize) {
        try {
            const result = await this.planEventRepository
                .createQueryBuilder('plan_event');
            if (find.find_title !== "") {
                result.andWhere('plan_event.title like :text', { text: `%${find.find_title}%` });
            }
            switch (find.is_display) {
                case "1":
                    result.andWhere('is_display = 1');
                    break;
                case "2":
                    result.andWhere('is_display = 0');
                    break;
            }
            switch (find.is_plan_event_type) {
                case "1":
                    result.andWhere('from_type = 1');
                    break;
                case "2":
                    result.andWhere('from_type = 2');
                    break;
            }
            switch (find.is_use_comment) {
                case "1":
                    result.andWhere('is_use_comment = 1');
                    break;
                case "2":
                    result.andWhere('is_use_comment = 0');
                    break;
            }
            if (find.start_date.start !== "" && find.end_date.end !== "") {
                result.andWhere('start_date BETWEEN :start AND :end', {
                    start: find.start_date.start,
                    end: find.end_date.end
                });
            }
            if (find.end_date.start !== "" && find.end_date.end !== "") {
                result.andWhere('end_date BETWEEN :start AND :end', {
                    start: find.end_date.start,
                    end: find.end_date.end
                });
            }
            const totalData = (await result.select('COUNT(1) AS `cnt`').execute())[0]['cnt'];
            result.select([
                `plan_event_id`,
                `CASE
        WHEN from_type = 1 THEN '이벤트'
        WHEN from_type = 2 THEN '기획전'
        END as from_type`,
                `title`,
                `CASE
        WHEN is_display = 1 THEN '사용'
        WHEN is_display = 0 THEN '미사용'
        END as is_display`,
                `end_date`,
                `create_date`,
                `CASE
        WHEN is_use_comment = 1 THEN '사용'
        WHEN is_use_comment = 0 THEN '미사용'
        END as is_use_comment`,
                `(SELECT count(1) FROM plan_event_comment as pec 
        WHERE pec.plan_event_id = plan_event.plan_event_id) as comment_count`
            ]);
            return {
                data: await result
                    .orderBy('plan_event.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(totalData, page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async findId(id) {
        try {
            const planEvent = await this.planEventRepository
                .createQueryBuilder('plan_event')
                .andWhere('plan_event_id = :id', { id })
                .select('*');
            const planEventData = await planEvent.execute();
            const OGImage = await this.planEventImageRepository
                .createQueryBuilder('og_image')
                .andWhere('plan_event_id = :id', { id })
                .andWhere('is_OG_tag = :data', { data: true })
                .select(['plan_event_image_id', 'plan_event_url']);
            const OGImageData = await OGImage.execute();
            const imageList = await this.planEventImageRepository
                .createQueryBuilder('image_list')
                .andWhere('plan_event_id = :id', { id })
                .andWhere('is_OG_tag = :data', { data: false })
                .select(['plan_event_image_id', 'plan_event_url']);
            const imageListData = await imageList.execute();
            const product = await this.planEventToProductRepository
                .createQueryBuilder('plan_to_product')
                .andWhere('plan_event_id = :id', { id })
                .select(['sequence', 'product_id']);
            const product_data = await product.execute();
            return Object.assign(Object.assign({}, planEventData), { OG_tag_image_id: [...OGImageData][0], list_image_id: [...imageListData][0], product_group: [...product_data] });
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async create(data) {
        try {
            const planEventFrom = new PlanEvent_entity_1.PlanEventEntity();
            planEventFrom.from_type = data.from_type;
            planEventFrom.is_display = data.is_display;
            planEventFrom.title = data.title;
            planEventFrom.is_use_comment = data.is_use_comment;
            planEventFrom.start_date = data.start_date;
            planEventFrom.end_date = data.end_date;
            planEventFrom.is_show_date = data.is_show_date;
            planEventFrom.description = data.description;
            const planEventData = await this.planEventRepository.save(planEventFrom);
            await this.planEventImageRepository.update({ plan_event_image_id: data.OG_tag_image_id }, {
                is_OG_tag: true,
                plan_event_id: planEventData
            });
            await this.planEventImageRepository.update({ plan_event_image_id: data.list_image_id }, {
                is_OG_tag: false,
                plan_event_id: planEventData
            });
            for (let i in data.product_group) {
                const planEventProduct = new PlanEventToProduct_entity_1.PlanEventToProductEntity();
                planEventProduct.sequence = Number(data.product_group[i].sequence);
                planEventProduct.plan_event_id = planEventData;
                planEventProduct.product_id = await this.productRepository.findOne({ product_id: data.product_group[i].product_id });
                await this.planEventToProductRepository.save(planEventProduct);
            }
            return planEventData;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            await this.planEventRepository.update({ plan_event_id: id }, {
                from_type: data.from_type,
                is_display: data.is_display,
                title: data.title,
                is_use_comment: data.is_use_comment,
                start_date: data.start_date,
                end_date: data.end_date,
                is_show_date: data.is_show_date,
                description: data.description,
                update_date: (() => 'NOW()')
            });
            const planEvent = await this.planEventRepository.findOne({ plan_event_id: id });
            await this.planEventImageRepository.update({ plan_event_id: planEvent }, {
                is_OG_tag: null,
                plan_event_id: null
            });
            await this.planEventImageRepository.update({ plan_event_image_id: data.OG_tag_image_id }, {
                is_OG_tag: true,
                plan_event_id: planEvent
            });
            await this.planEventImageRepository.update({ plan_event_image_id: data.list_image_id }, {
                is_OG_tag: false,
                plan_event_id: planEvent
            });
            await this.planEventToProductRepository
                .query(`DELETE FROM plan_event_to_product WHERE plan_event_id = ${id}`);
            for (let i in data.product_group) {
                const planEventProduct = new PlanEventToProduct_entity_1.PlanEventToProductEntity();
                planEventProduct.sequence = Number(data.product_group[i].sequence);
                planEventProduct.plan_event_id = planEvent;
                planEventProduct.product_id = await this.productRepository.findOne({ product_id: data.product_group[i].product_id });
                await this.planEventToProductRepository.save(planEventProduct);
            }
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.planEventCommentRepository
                .query(`UPDATE plan_event_comment SET plan_event_id = 'NULL' WHERE  plan_event_id = ${id}`);
            await this.planEventImageRepository
                .query(`DELETE FROM plan_event_image WHERE plan_event_id = ${id}`);
            await this.planEventToProductRepository
                .query(`DELETE FROM plan_event_to_product WHERE plan_event_id = ${id}`);
            await this.planEventRepository
                .query(`DELETE FROM plan_event WHERE plan_event_id = ${id}`);
            return;
        }
        catch (error) {
            common_1.Logger.error(error);
            throw error;
        }
    }
    async imageUpload(images) {
        try {
            if (images.length === 1) {
                const data = new PlanEventImage_entity_1.PlanEventImageEntity();
                data.plan_event_url = images[0].location;
                return {
                    image_id: (await this.planEventImageRepository.save(data)).plan_event_image_id,
                    image_url: images[0].location
                };
            }
            const image_list = [];
            for (let i in images) {
                const image = new PlanEventImage_entity_1.PlanEventImageEntity();
                image.plan_event_url = images[i].location;
                image_list.push({
                    image_id: (await this.planEventImageRepository.save(image)).plan_event_image_id,
                    image_url: images[i].location
                });
            }
            return image_list;
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
};
PlanEventManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PlanEvent_repository_1.PlanEventRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(PlanEventImage_repository_1.PlanEventImageRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(PlanEventComment_repository_1.PlanEventCommentRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(PlanEventToProduct_repository_1.PlanEventToProductRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [PlanEvent_repository_1.PlanEventRepository,
        PlanEventImage_repository_1.PlanEventImageRepository,
        PlanEventComment_repository_1.PlanEventCommentRepository,
        PlanEventToProduct_repository_1.PlanEventToProductRepository,
        Product_repository_1.ProductRepository])
], PlanEventManagerService);
exports.PlanEventManagerService = PlanEventManagerService;
//# sourceMappingURL=plan-event-manager.service.js.map