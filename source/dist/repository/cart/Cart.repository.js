"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
const typeorm_1 = require("typeorm");
const Cart_entity_1 = require("../../entity/cart/Cart.entity");
const common_1 = require("@nestjs/common");
let CartRepository = class CartRepository extends typeorm_1.Repository {
    async getCartIdList(member_id) {
        try {
            return ((await this.createQueryBuilder('c')
                .andWhere('c.member_id = :mid', { mid: member_id })
                .select(['GROUP_CONCAT(c.cart_id) as cList'])
                .execute())[0]['cList']).split(',');
        }
        catch (error) {
            common_1.Logger.error('cartRepository : ', error);
        }
    }
    async getCartList(member_id, idList) {
        try {
            const cart = await this.createQueryBuilder('c')
                .innerJoin("member", "m", `m.member_id = c.member_id`)
                .innerJoin("product_option", "po", "po.product_option_id = c.product_option_id")
                .innerJoin("product", "p", "p.product_id = c.product_id")
                .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id')
                .leftJoin("review", "re", "re.product_option_id = c.product_option_id")
                .andWhere('c.member_id = :mid', { mid: member_id });
            if (idList.length > 0) {
                common_1.Logger.log(idList.length);
                cart.andWhere('c.cart_id in (:list)', { list: idList });
            }
            return await cart.select([
                `c.cart_id as cart_ix`,
                `p.product_id as id`,
                `po.product_option_id as select_option_id`,
                `c.count as pcount`,
                `po.product_option_code as options_text`,
                `po.product_price as listprice`,
                `po.product_sale_price as dcprice`,
                `po.create_date as regdate`,
                `po.sale_stock_count as stock`,
                `p.product_name as pname`,
                `(select image_url from product_image as pi 
                     where pi.product_id = p.product_id and image_mode = 0) as image_src`,
                `CASE 
                      WHEN p.product_sale_state = 0 THEN '일시품절'
                      WHEN p.product_sale_state = 1 THEN '판매중'
                      WHEN p.product_sale_state = 2 THEN '판매종료'
                     END as status`,
                `(select average_star_point from product_star_point as psp 
                      where psp.product_id = p.product_id ) as goodsAvg`,
                `(select count(review_star_point) from review rev where rev.review_id = re.review_id) as avgCount`,
                `if((SELECT count(*) from product_like where product_like.member_id = ${member_id} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                `(po.product_price - po.product_sale_price) as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `(c.count * po.product_price) as total_listprice`,
                `(c.count * po.product_sale_price) as total_dcprice`,
                `(c.count * (po.product_price - po.product_sale_price)) as total_discount_amount`,
                `use_point_range as is_mileage`,
                `if(use_point_range, (po.product_sale_price * p.use_point_range_text) / 100, 0) as mileage`,
                `use_point as is_use_point`,
                `if(use_point, (po.product_sale_price * p.use_point_range_text) / 100, 0) as use_mileage`,
                `ptc.product_class_id as product_class_id`
            ])
                .execute();
        }
        catch (error) {
            common_1.Logger.error('cart_repository [getCartList] : ', error);
            throw error;
        }
    }
    async getCartSummary() {
        try {
        }
        catch (error) {
            common_1.Logger.log('cart_repository [getCartSummary] : ', error);
            throw error;
        }
    }
    async getDeliveryPrice(total_price, delivery_price) {
        try {
            if (total_price >= delivery_price) {
                return 0;
            }
            return 3000;
        }
        catch (error) {
            common_1.Logger.log('cart_repository [getCartSummary] : ', error);
            throw error;
        }
    }
};
CartRepository = __decorate([
    (0, typeorm_1.EntityRepository)(Cart_entity_1.CartEntity)
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=Cart.repository.js.map