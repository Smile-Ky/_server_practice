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
exports.BannerManagerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Banner_repository_1 = require("../../../repository/banner/Banner.repository");
const BannerImage_repository_1 = require("../../../repository/banner/BannerImage.repository");
const BannerItem_repository_1 = require("../../../repository/banner/BannerItem.repository");
const respones_1 = require("../../../common/respones");
const Banner_entity_1 = require("../../../entity/banner/Banner.entity");
const BannerItem_entity_1 = require("../../../entity/banner/BannerItem.entity");
const BannerImage_entity_1 = require("../../../entity/banner/BannerImage.entity");
let BannerManagerService = class BannerManagerService {
    constructor(bannerRepository, bannerImageRepository, bannerItemRepository) {
        this.bannerRepository = bannerRepository;
        this.bannerImageRepository = bannerImageRepository;
        this.bannerItemRepository = bannerItemRepository;
    }
    async findAll(page, pageSize) {
        try {
            const banner = await this.bannerRepository
                .createQueryBuilder('banner')
                .innerJoin('banner_item', 'bi', 'bi.banner_id = banner.banner_id')
                .innerJoin('banner_image', 'bImage', 'bImage.banner_image_id = bi.banner_image_id')
                .groupBy('banner.banner_id');
            const totalData = (await banner.select('COUNT(*) AS `cnt`').execute()).length;
            banner.select([
                `banner.banner_id as banner_id`,
                `CASE
          WHEN (banner_point = 0) THEN '메인베너'
          WHEN (banner_point = 1) THEN '기획전상단'
          WHEN (banner_point = 2) THEN '쿠폰함배너'
          WHEN (banner_point = 3) THEN '서브배너'
          END as banner_point`,
                `banner_name`,
                `banner_image_url`,
                `is_show`,
                `banner.create_date as create_date`
            ]);
            return {
                data: await banner
                    .orderBy('banner.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(Number(totalData), page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
    async find(data, page, pageSize) {
        try {
            const banner = await this.bannerRepository
                .createQueryBuilder('banner')
                .innerJoin('banner_item', 'bi', 'bi.banner_id = banner.banner_id')
                .leftJoin('banner_image', 'bImage', 'bImage.banner_image_id = bi.banner_image_id')
                .groupBy('banner.banner_id');
            if (data.find_text !== "") {
                banner.andWhere('banner_name like :text', { text: `%${data.find_text}%` });
            }
            switch (data.is_display) {
                case "1":
                    banner.andWhere('is_show = 1');
                    break;
                case "2":
                    banner.andWhere('is_show = 0');
                    break;
            }
            if (data.find_start_date !== "" && data.find_end_date !== "") {
                banner.andWhere('banner.create_date BETWEEN :start AND :end', {
                    start: new Date(data.find_start_date),
                    end: new Date(data.find_end_date)
                });
            }
            const totalData = (await banner.select('COUNT(*) AS `cnt`').execute()).length;
            banner.select([
                `banner.banner_id as banner_id`,
                `CASE
          WHEN (banner_point = 0) THEN '메인베너'
          WHEN (banner_point = 1) THEN '기획전상단'
          WHEN (banner_point = 2) THEN '쿠폰함배너'
          WHEN (banner_point = 3) THEN '서브배너'
          END as banner_point`,
                `banner_name`,
                `banner_image_url`,
                `is_show`,
                `banner.create_date as create_date`
            ]);
            return {
                data: await banner
                    .orderBy('banner.create_date', 'DESC')
                    .limit(pageSize)
                    .offset(respones_1.Paging.getOffset(Number(totalData), page, pageSize))
                    .execute(),
                page: respones_1.Paging.getPagingResult(totalData, page, pageSize)
            };
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
    async findId(id) {
        try {
            const banner = await this.bannerRepository.findOne({ banner_id: id });
            const _banner_item = await this.bannerItemRepository
                .createQueryBuilder('bannerItem')
                .innerJoin('banner_image', 'bImage', `bImage.banner_image_id = bannerItem.banner_image_id AND bannerItem.banner_id = ${id}`)
                .select([
                'bannerItem.banner_item_id as banner_item_id',
                'title',
                'link_url',
                'sequence',
                'is_use_date',
                'start_date',
                'end_date',
                'bannerItem.banner_image_id',
                'banner_image_url'
            ]);
            const banner_item = await _banner_item.orderBy('sequence', 'ASC').execute();
            return {
                data: Object.assign(Object.assign({}, banner), { banner_item })
            };
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
    async create(data) {
        try {
            const bannerSave = new Banner_entity_1.BannerEntity();
            bannerSave.banner_point = Number(data.banner_point);
            bannerSave.banner_name = data.banner_name;
            bannerSave.is_show = data.is_show;
            bannerSave.create_date = new Date();
            bannerSave.update_date = new Date();
            const banner = await this.bannerRepository.save(bannerSave);
            for (let i in data.banner_item) {
                const bannerItem = new BannerItem_entity_1.BannerItemEntity();
                bannerItem.title = data.banner_item[i].title;
                bannerItem.link_url = data.banner_item[i].link_url;
                bannerItem.sequence = data.banner_item[i].sequence;
                bannerItem.is_use_date = data.banner_item[i].is_use_date;
                if (data.banner_item[i].is_use_date) {
                    bannerItem.start_date = new Date(data.banner_item[i].start_date);
                    bannerItem.end_date = new Date(data.banner_item[i].end_date);
                }
                bannerItem.banner_id = banner;
                bannerItem.banner_image_id = await this.bannerImageRepository.findOne({ banner_image_id: data.banner_item[i].banner_image_id });
                const item = await this.bannerItemRepository.save(bannerItem);
            }
            return banner;
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
    async update(id, data) {
        try {
            await this.bannerItemRepository
                .query(`DELETE FROM banner_item WHERE banner_id = ${id}`);
            const banner = await this.bannerRepository.update({ banner_id: id }, {
                banner_point: Number(data.banner_point),
                banner_name: data.banner_name,
                is_show: data.is_show,
                update_date: new Date()
            });
            for (let i in data.banner_item) {
                const bannerItem = new BannerItem_entity_1.BannerItemEntity();
                bannerItem.title = data.banner_item[i].title;
                bannerItem.link_url = data.banner_item[i].link_url;
                bannerItem.sequence = data.banner_item[i].sequence;
                bannerItem.is_use_date = data.banner_item[i].is_use_date;
                if (data.banner_item[i].is_use_date) {
                    bannerItem.start_date = new Date(data.banner_item[i].start_date);
                    bannerItem.end_date = new Date(data.banner_item[i].end_date);
                }
                bannerItem.banner_id = await this.bannerRepository.findOne({ banner_id: id });
                bannerItem.banner_image_id = await this.bannerImageRepository.findOne({ banner_image_id: data.banner_item[i].banner_image_id });
                const item = await this.bannerItemRepository.save(bannerItem);
            }
            return;
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.bannerItemRepository
                .query(`DELETE FROM banner_item WHERE banner_id = ${id}`);
            await this.bannerRepository
                .query(`DELETE FROM banner WHERE banner_id = ${id}`);
            return;
        }
        catch (error) {
            common_1.Logger.error('admin/banner/manager : ' + error);
            throw error;
        }
    }
    async imageUpload(images) {
        try {
            if (images.length === 1) {
                const data = new BannerImage_entity_1.BannerImageEntity();
                data.banner_image_url = images[0].location;
                return {
                    image_id: (await this.bannerImageRepository.save(data)).banner_image_id,
                    image_url: images[0].location
                };
            }
            const image_list = [];
            for (let i in images) {
                const image = new BannerImage_entity_1.BannerImageEntity();
                image.banner_image_url = images[i].location;
                image_list.push({
                    image_id: (await this.bannerImageRepository.save(image)).banner_image_id,
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
BannerManagerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Banner_repository_1.BannerRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(BannerImage_repository_1.BannerImageRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(BannerItem_repository_1.BannerItemRepository)),
    __metadata("design:paramtypes", [Banner_repository_1.BannerRepository,
        BannerImage_repository_1.BannerImageRepository,
        BannerItem_repository_1.BannerItemRepository])
], BannerManagerService);
exports.BannerManagerService = BannerManagerService;
//# sourceMappingURL=banner-manager.service.js.map