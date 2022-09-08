"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const typeorm_1 = require("typeorm");
const Product_entity_1 = require("../../entity/product/Product.entity");
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async relationGoodsList(memberId, product_list) {
        try {
            return await this.createQueryBuilder('p')
                .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1 AND po.is_delete = 0')
                .leftJoin('product_image', 'pim', 'pim.product_id = p.product_id AND pim.image_mode = 0')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                .select([
                `po.product_price as listprice`,
                `po.product_sale_price as dcprice`,
                `p.create_date as regdate`,
                `po.sale_stock_count as stock`,
                `p.product_id as id`,
                `p.product_name as pname`,
                `pim.image_url as image_src`,
                `p.product_sale_state as status`,
                `psp.average_star_point as goodsAvg`,
                `(select count(*) as count from review as r
                      inner JOIN product_option as spo on r.product_option_id = spo.product_option_id
                      inner JOIN product as sp on sp.product_id = spo.product_id
                      where sp.product_id = p.product_id) as avgCount`,
                `if((select count(*) from product_like as pl where pl.member_id = ${memberId} AND pl.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                `po.product_sale_price as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `true as isDiscount`,
                `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                `p.product_company_type as product_company_type`,
            ])
                .andWhere('p.product_id IN (:list)', { list: product_list })
                .execute();
        }
        catch (error) {
            common_1.Logger.log('product repository : ', error);
            throw error;
        }
    }
    async getProductIcons(productId) {
        try {
            return await this.createQueryBuilder('p')
                .innerJoin('product_icon_to_product', 'pitp', 'pitp.product_id = p.product_id')
                .innerJoin('product_icon', 'pi', 'pi.icon_id = pitp.product_icon_id')
                .andWhere('p.product_id = :pid', { pid: productId })
                .andWhere('pi.is_use_icon = 1')
                .select([
                `pi.icon_id as icon_id`,
                `pi.icon_text as icon_text`,
                `pi.font_color as font_color`,
                `pi.background_color as background_color`,
            ])
                .execute();
        }
        catch (error) {
            common_1.Logger.error('Product Repository : ', error);
            throw error;
        }
    }
};
ProductRepository = __decorate([
    (0, typeorm_1.EntityRepository)(Product_entity_1.ProductEntity)
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=Product.repository.js.map