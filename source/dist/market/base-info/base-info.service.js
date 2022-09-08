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
exports.BaseInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Banner_repository_1 = require("../../repository/banner/Banner.repository");
const Cart_repository_1 = require("../../repository/cart/Cart.repository");
const MainDisplayToProduct_repository_1 = require("../../repository/main-display/MainDisplayToProduct.repository");
const MainDisplayToProductClass_repository_1 = require("../../repository/main-display/MainDisplayToProductClass.repository");
const AgreeInfo_repository_1 = require("../../repository/main/AgreeInfo.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const PlanEvent_repository_1 = require("../../repository/plan/PlanEvent.repository");
const PlanEventToProduct_repository_1 = require("../../repository/plan/PlanEventToProduct.repository");
const Product_repository_1 = require("../../repository/product/Product.repository");
const ProductBest_repository_1 = require("../../repository/product/ProductBest.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const TopDisplayList_repository_1 = require("../../repository/top-display/TopDisplayList.repository");
const respones_1 = require("../../common/respones");
const MainDisplayList_repository_1 = require("../../repository/main-display/MainDisplayList.repository");
let BaseInfoService = class BaseInfoService {
    constructor(productRepository, productOptionRepository, productClassRepository, memberRepository, memberPetRepository, cartRepository, planEventRepository, planEventToProductRepository, productBestRepository, agreeInfoRepository, mainDisplayToProductClassRepository, mainDisplayToProductRepository, bannerRepository, topDisplayListRepository, mainDisplayListRepository) {
        this.productRepository = productRepository;
        this.productOptionRepository = productOptionRepository;
        this.productClassRepository = productClassRepository;
        this.memberRepository = memberRepository;
        this.memberPetRepository = memberPetRepository;
        this.cartRepository = cartRepository;
        this.planEventRepository = planEventRepository;
        this.planEventToProductRepository = planEventToProductRepository;
        this.productBestRepository = productBestRepository;
        this.agreeInfoRepository = agreeInfoRepository;
        this.mainDisplayToProductClassRepository = mainDisplayToProductClassRepository;
        this.mainDisplayToProductRepository = mainDisplayToProductRepository;
        this.bannerRepository = bannerRepository;
        this.topDisplayListRepository = topDisplayListRepository;
        this.mainDisplayListRepository = mainDisplayListRepository;
    }
    async base() {
        try {
            const classList = await this.productClassRepository.getClassTree();
            return { data: {
                    result: "success",
                    info: {
                        categorys: classList,
                        device: "app"
                    }
                } };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getCartInfo(member_id) {
        try {
            const cart = await this.cartRepository.createQueryBuilder('cart')
                .select([
                `cart.product_id as pid`,
                `cart.product_option_id as option_id`
            ])
                .andWhere('member_id = :id', { id: member_id })
                .execute();
            return {
                data: {
                    result: "success",
                    info: cart || [],
                    cart_total: (cart === null || cart === void 0 ? void 0 : cart.length) || 0
                }
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getMainInfo(memberId) {
        var _a, _b, _c;
        try {
            const bannerData = await this.bannerRepository.createQueryBuilder('bn')
                .innerJoin('banner_item', 'bi', 'bi.banner_id = bn.banner_id')
                .innerJoin('banner_image', 'bim', 'bim.banner_image_id = bi.banner_image_id')
                .select([
                `bn.banner_id as banner_id`,
                `bn.banner_name as banner_name`,
                `bn.is_show as is_show`,
                `bi.banner_item_id as banner_item_id`,
                `bi.title as title`,
                `bi.sequence as sequence`,
                `bi.link_url as link_url`,
                `bim.banner_image_url as image_url`
            ])
                .andWhere('bn.banner_point = 0')
                .andWhere(`(bi.is_use_date = 0 OR (bi.start_date < NOW() AND NOW() < bi.end_date))`)
                .execute();
            const topClass = await this.topDisplayListRepository.createQueryBuilder('topDisplay')
                .select('*')
                .andWhere('topDisplay.is_show = 1')
                .andWhere('is_date = 1')
                .andWhere('NOW() BETWEEN topDisplay.start_date AND topDisplay.end_date')
                .execute();
            const is_noe_date_topClass = await this.topDisplayListRepository.createQueryBuilder('topDisplay')
                .select('*')
                .andWhere('topDisplay.is_show = 1')
                .andWhere('is_date = 0')
                .execute();
            const mainDisplay = await this.mainDisplayListRepository.createQueryBuilder('md')
                .andWhere('md.is_show = 1')
                .select('*')
                .orderBy('sequence', 'ASC')
                .execute();
            for (let item of mainDisplay) {
                common_1.Logger.log(item === null || item === void 0 ? void 0 : item.main_display_list_id);
                item.product_class_list = await this.mainDisplayListRepository.createQueryBuilder('md')
                    .innerJoin('main_display_to_product', 'mdtp', `mdtp.main_display_list_id = md.main_display_list_id`)
                    .innerJoin('product', 'p', `p.product_id = mdtp.product_id`)
                    .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1')
                    .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id')
                    .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                    .andWhere('md.is_show = 1')
                    .andWhere('md.main_display_list_id = :id', { id: item === null || item === void 0 ? void 0 : item.main_display_list_id })
                    .groupBy('pc.top_end_class')
                    .select([
                    '(select pClass.class_name from product_class as pClass Where pClass.product_class_id = pc.top_end_class) as class_name',
                    'pc.top_end_class as product_class_id',
                ]).execute();
                item.product_list = await this.mainDisplayListRepository.createQueryBuilder('md')
                    .innerJoin('main_display_to_product', 'mdtp', `mdtp.main_display_list_id = md.main_display_list_id`)
                    .innerJoin('product', 'p', `p.product_id = mdtp.product_id`)
                    .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1')
                    .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id')
                    .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                    .andWhere('md.is_show = 1')
                    .andWhere('md.main_display_list_id = :id', { id: item === null || item === void 0 ? void 0 : item.main_display_list_id })
                    .select([
                    `if(pc.top_end_class = 'NULL', pc.product_class_id, pc.top_end_class) as cid`,
                    `p.product_id as id`,
                    `po.product_price as listprice`,
                    `po.product_sale_price as dcprice`,
                    `po.create_date as regdate`,
                    `po.stock_count as stock`,
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
                    `(select count(*) as count from review as r
                    inner JOIN product_option as spo on r.product_option_id = spo.product_option_id
                    inner JOIN product as sp on sp.product_id = spo.product_id
                    where sp.product_id = p.product_id) as avgCount`,
                    `(po.product_price - po.product_sale_price) as discount_amount`,
                    `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                    `true as isDiscount`,
                    `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                    `if((SELECT count(*) from product_like where product_like.member_id = ${memberId} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                ]).execute();
                for (let g of item.product_list) {
                    g.icons = await this.productRepository.getProductIcons(g === null || g === void 0 ? void 0 : g.id);
                }
            }
            return {
                result: 'success',
                mainBanners: bannerData,
                topDisplay: [...topClass, ...is_noe_date_topClass],
                bestGoodsList: [...((_a = (await this.getBestList(memberId, '', 2))) === null || _a === void 0 ? void 0 : _a.data.goodsList)],
                specialList: (_b = (await this.getSpecialList(memberId, "ing", ""))) === null || _b === void 0 ? void 0 : _b.data.specialList,
                eventList: (_c = (await this.getSpecialList(memberId, "ing", "event"))) === null || _c === void 0 ? void 0 : _c.data.specialList,
                mainDisplay: mainDisplay
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getSpecialList(member_id, tab, code) {
        try {
            const _event = await this.planEventRepository.createQueryBuilder('pe')
                .innerJoin('plan_event_image', 'pei', 'pei.plan_event_id = pe.plan_event_id and is_OG_tag = 1');
            if (tab !== undefined && tab !== null) {
                switch (tab) {
                    case "ing":
                        _event.andWhere(':date BETWEEN start_date AND end_date', { date: new Date() });
                        break;
                    case "done":
                        _event.andWhere(':date < start_date or :date > end_date', { date: new Date() });
                }
            }
            if (code === "event") {
                _event.andWhere('pe.from_type = 1');
            }
            else {
                _event.andWhere('pe.from_type = 2');
            }
            const total = (await _event.select('count(*) as count').execute())[0]['count'];
            const event = await _event.select([
                `pe.plan_event_id as event_ix`,
                `pe.title as event_title`,
                `pe.description as event_text`,
                `pe.description as event_text2`,
                `pe.create_date as regdate`,
                `pe.start_date as startDate`,
                `pe.end_date as endDate`,
                `pei.plan_event_url as mainPath`,
            ]).execute();
            const productInfo = [];
            for (let i in event) {
                const product = await this.planEventToProductRepository.createQueryBuilder('ptp')
                    .innerJoin('product', 'p', `p.product_id = ptp.product_id`)
                    .innerJoin('product_option', 'po', 'po.product_id = p.product_id and po.is_main = 1')
                    .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                    .select([
                    `p.product_id as id`,
                    `po.product_price as listprice`,
                    `po.product_sale_price as dcprice`,
                    `po.create_date as regdate`,
                    `po.stock_count as stock`,
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
                    `(select count(*) as count from review as r
            inner JOIN product_option as spo on r.product_option_id = spo.product_option_id
            inner JOIN product as sp on sp.product_id = spo.product_id 
            where sp.product_id = p.product_id) as avgCount`,
                    `(po.product_price - po.product_sale_price) as discount_amount`,
                    `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                    `true as isDiscount`,
                    `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                    `if((SELECT count(*) from product_like where product_like.member_id = ${member_id} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                ])
                    .andWhere(`ptp.plan_event_id = :id`, { id: event[i].event_ix })
                    .execute();
                productInfo.push(Object.assign(Object.assign({}, (event[i])), { product }));
            }
            return {
                data: {
                    result: 'success',
                    specialList: {
                        total: total,
                        list: productInfo,
                        paging: {}
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getSpecialInfo(memberId, eventId) {
        try {
            const _event = await this.planEventRepository.createQueryBuilder('pe')
                .innerJoin('plan_event_image', 'pei', 'pei.plan_event_id = pe.plan_event_id and is_OG_tag = 0')
                .andWhere(`pe.plan_event_id = :id`, { id: eventId });
            const event = (await _event.select([
                `pe.plan_event_id as event_ix`,
                `pe.title as event_title`,
                `pe.description as event_text`,
                `pe.description as event_text2`,
                `pe.create_date as regdate`,
                `pe.start_date as startDate`,
                `pe.end_date as endDate`,
                `pei.plan_event_url as subPath`,
                `TIMESTAMPDIFF(DAY, NOW(), pe.end_date) as dday`,
                `if(is_use_comment, 'true', 'false') as use_comment`
            ]).execute())[0];
            const product = await this.planEventToProductRepository.createQueryBuilder('ptp')
                .innerJoin('product', 'p', `p.product_id = ptp.product_id`)
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id and po.is_main = 1')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                .select([
                `p.product_id as id`,
                `po.product_price as listprice`,
                `po.product_sale_price as dcprice`,
                `po.create_date as regdate`,
                `po.stock_count as stock`,
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
                `(select count(*) as count from review as r
            inner JOIN product_option as spo on r.product_option_id = spo.product_option_id
            inner JOIN product as sp on sp.product_id = spo.product_id 
            where sp.product_id = p.product_id) as avgCount`,
                `if((select count(*) from product_like as pl where pl.member_id = ${memberId} AND pl.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
            ])
                .andWhere(`ptp.plan_event_id = :id`, { id: eventId })
                .execute();
            return {
                data: {
                    result: 'success',
                    info: event,
                    goodsList: product
                }
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getBestList(memberId, sort, day) {
        try {
            const _best = await this.productBestRepository.createQueryBuilder('pb')
                .innerJoin('product', 'p', 'p.product_id = pb.product_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id')
                .andWhere(`pb.best_period = ${day}`)
                .select([
                `p.product_id as id`,
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
                `(select count(*) as count from review as r
            inner JOIN product_option as spo on r.product_option_id = spo.product_option_id
            inner JOIN product as sp on sp.product_id = spo.product_id 
            where sp.product_id = p.product_id) as avgCount`,
                `(po.product_price - po.product_sale_price) as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `true as isDiscount`,
                `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                `if((SELECT count(*) from product_like where product_like.member_id = ${memberId} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
            ]);
            if (sort !== undefined && sort !== null && sort !== '') {
                _best.andWhere('pb.product_class_id = :id', { id: sort });
            }
            const best = await _best.orderBy('pb.sale_count', 'ASC').limit(50).execute();
            return {
                data: {
                    result: 'success',
                    goodsList: best
                }
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getAgreeInfo() {
        try {
            const agreeInfo = await this.agreeInfoRepository.createQueryBuilder('ai')
                .select('*');
            return {
                "data": {
                    mallName: "피리마켓",
                    policyData: {
                        use: {
                            ix: "1",
                            contents: (await agreeInfo.where(`ai.agree_info_type = 'use'`).execute())[0]['contents']
                        },
                        collection: {
                            ix: "29",
                            contents: (await agreeInfo.where(`ai.agree_info_type = 'collection'`).execute())[0]['contents']
                        },
                        consign: {
                            ix: "21",
                            contents: (await agreeInfo.where(`ai.agree_info_type = 'consign'`).execute())[0]['contents']
                        },
                        third: {
                            ix: "18",
                            contents: (await agreeInfo.where(`ai.agree_info_type = 'third'`).execute())[0]['contents']
                        },
                        marketing: {
                            ix: "26",
                            contents: (await agreeInfo.where(`ai.agree_info_type = 'marketing'`).execute())[0]['contents']
                        }
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
    async getTopDisplayProduct(memberId, data) {
        try {
            const top_product = await this.topDisplayListRepository.createQueryBuilder('topDisplay')
                .innerJoin('top_display_to_product', 'tdtp', `tdtp.top_display_list_id = topDisplay.top_display_list_id`)
                .innerJoin('product', 'p', 'p.product_id = tdtp.product_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                .andWhere('topDisplay.top_display_list_id = :id', { id: data.topDisplayId })
                .andWhere('p.is_show = 1');
            switch (data.sort) {
                case "sale":
                    top_product.orderBy('psp.average_star_point', 'DESC');
                    break;
                case "low":
                    top_product.orderBy('po.product_sale_price', 'ASC');
                    break;
                case "high":
                    top_product.orderBy('po.product_sale_price', 'DESC');
                    break;
                case "regdate":
                    top_product.orderBy('p.create_date', 'DESC');
                    break;
            }
            const totalData = (await top_product.select('count(*) as count').execute())[0]['count'];
            top_product.select([
                `p.product_id as id`,
                `po.product_price as listprice`,
                `po.product_sale_price as dcprice`,
                `po.create_date as regdate`,
                `po.stock_count as stock`,
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
                `(select count(*) as count from review as r
                inner JOIN product_option as spo on r.product_option_id = spo.product_option_id
                inner JOIN product as sp on sp.product_id = spo.product_id 
                where sp.product_id = p.product_id) as avgCount`,
                `(po.product_price - po.product_sale_price) as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `true as isDiscount`,
                `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                `if((SELECT count(*) from product_like where product_like.member_id = ${memberId} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
            ]);
            return {
                data: {
                    total: totalData,
                    list: await top_product
                        .limit(Number(data.max))
                        .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                        .execute(),
                    paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                        page: data.page,
                    }),
                }
            };
        }
        catch (error) {
            common_1.Logger.error('/api/setting : ', error);
            return error;
        }
    }
};
BaseInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(Cart_repository_1.CartRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(PlanEvent_repository_1.PlanEventRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(PlanEventToProduct_repository_1.PlanEventToProductRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductBest_repository_1.ProductBestRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(AgreeInfo_repository_1.AgreeInfoRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(MainDisplayToProductClass_repository_1.MainDisplayToProductClassRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(MainDisplayToProduct_repository_1.MainDisplayToProductRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(Banner_repository_1.BannerRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(TopDisplayList_repository_1.TopDisplayListRepository)),
    __param(14, (0, typeorm_1.InjectRepository)(MainDisplayList_repository_1.MainDisplayListRepository)),
    __metadata("design:paramtypes", [Product_repository_1.ProductRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductClass_repository_1.ProductClassRepository,
        Member_repository_1.MemberRepository,
        MemberPet_repository_1.MemberPetRepository,
        Cart_repository_1.CartRepository,
        PlanEvent_repository_1.PlanEventRepository,
        PlanEventToProduct_repository_1.PlanEventToProductRepository,
        ProductBest_repository_1.ProductBestRepository,
        AgreeInfo_repository_1.AgreeInfoRepository,
        MainDisplayToProductClass_repository_1.MainDisplayToProductClassRepository,
        MainDisplayToProduct_repository_1.MainDisplayToProductRepository,
        Banner_repository_1.BannerRepository,
        TopDisplayList_repository_1.TopDisplayListRepository,
        MainDisplayList_repository_1.MainDisplayListRepository])
], BaseInfoService);
exports.BaseInfoService = BaseInfoService;
//# sourceMappingURL=base-info.service.js.map