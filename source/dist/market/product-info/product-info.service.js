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
exports.ProductInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../repository/product/Product.repository");
const ProductToClass_repository_1 = require("../../repository/product/ProductToClass.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../repository/product/ProductOptionDetail.repository");
const ProductIconToProduct_repository_1 = require("../../repository/product/ProductIconToProduct.repository");
const ProductIcon_repository_1 = require("../../repository/product/ProductIcon.repository");
const ProductRelated_repository_1 = require("../../repository/product/ProductRelated.repository");
const ProductImage_repository_1 = require("../../repository/product/ProductImage.repository");
const ProductBrand_repository_1 = require("../../repository/product/ProductBrand.repository");
const ProductSearchKeyword_repository_1 = require("../../repository/product/ProductSearchKeyword.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberGroup_repository_1 = require("../../repository/member/MemberGroup.repository");
const respones_1 = require("../../common/respones");
const QueryProduct_entity_1 = require("../../entity/query/QueryProduct.entity");
const QueryProduct_repository_1 = require("../../repository/query/QueryProduct.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
const ProductLike_entity_1 = require("../../entity/product/ProductLike.entity");
const Keyword_repository_1 = require("../../repository/keyword/Keyword.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
const Banner_repository_1 = require("../../repository/banner/Banner.repository");
let ProductInfoService = class ProductInfoService {
    constructor(productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository, memberRepository, memberGroupRepository, queryProductRepository, productLikeRepository, keywordRepository, reviewRepository, productRelatedRepository, bannerRepository) {
        this.productRepository = productRepository;
        this.productToClassRepository = productToClassRepository;
        this.productOptionRepository = productOptionRepository;
        this.productOptionDetailRepository = productOptionDetailRepository;
        this.productIconToProductRepository = productIconToProductRepository;
        this.productIconRepository = productIconRepository;
        this.productImageRepository = productImageRepository;
        this.productBrandRepository = productBrandRepository;
        this.productSearchKeywordRepository = productSearchKeywordRepository;
        this.productClassRepository = productClassRepository;
        this.memberRepository = memberRepository;
        this.memberGroupRepository = memberGroupRepository;
        this.queryProductRepository = queryProductRepository;
        this.productLikeRepository = productLikeRepository;
        this.keywordRepository = keywordRepository;
        this.reviewRepository = reviewRepository;
        this.productRelatedRepository = productRelatedRepository;
        this.bannerRepository = bannerRepository;
    }
    async getGoodsList(memberId, data) {
        try {
            let _cid = data.cid;
            let topEndClass = {
                data: [],
                list: []
            };
            const product = await this.productRepository.createQueryBuilder('p')
                .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1 AND po.is_delete = 0')
                .leftJoin('product_image', 'pim', 'pim.product_id = p.product_id AND pim.image_mode = 0')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id');
            if (data.cid === "new" || data.cid === "NEW") {
                product.orderBy('p.create_date', 'DESC')
                    .andWhere('p.is_show = 1');
                _cid = "new";
            }
            else {
                topEndClass = await this.productClassRepository.getSubClassAll(data.cid);
                product
                    .andWhere('pc.product_class_id in (:cList)', { cList: topEndClass.list })
                    .andWhere('p.is_show = 1');
                switch (data.sort) {
                    case "sale":
                        product.orderBy('psp.average_star_point', 'DESC');
                        break;
                    case "low":
                        product.orderBy('po.product_sale_price', 'ASC');
                        break;
                    case "high":
                        product.orderBy('po.product_sale_price', 'DESC');
                        break;
                    case "regdate":
                        product.orderBy('p.create_date', 'DESC');
                        break;
                }
            }
            const totalData = (await product.select('count(*) as count').execute())[0]['count'];
            product.select([
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
                `if((SELECT count(*) from product_like where product_like.member_id = ${memberId} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                `(po.product_price - po.product_sale_price) as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `true as isDiscount`,
                `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                `if(p.product_company_type = 1, '위탁', '사입') as product_company_type`,
            ]);
            return {
                data: {
                    data: {
                        total: totalData,
                        list: await product
                            .limit(Number(data.max))
                            .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                            .execute(),
                        paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                            page: data.page,
                        }),
                        cid: _cid,
                    },
                    subCategorys: topEndClass.data
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async getView(memberId, data) {
        var _a;
        try {
            const product_info = (await this.productRepository.createQueryBuilder('p')
                .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1 AND po.is_delete = 0')
                .leftJoin('product_image', 'pim', 'pim.product_id = p.product_id AND pim.image_mode = 0')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                .andWhere('p.product_id = :pid', { pid: data.id })
                .select([
                `po.product_price as listprice`,
                `po.product_sale_price as dcprice`,
                `p.create_date as regdate`,
                `po.sale_stock_count as stock`,
                `p.product_id as id`,
                `p.product_name as pname`,
                `if(p.product_description = "", null, p.product_description) as basicinfo`,
                `pc.product_class_id as cid`,
                `pim.image_url as image_src`,
                `CASE 
             WHEN p.product_sale_state = 0 THEN '일시품절'
             WHEN p.product_sale_state = 1 THEN '판매중' 
             WHEN p.product_sale_state = 2 THEN '판매종료' 
             END as status`,
                `true as isDiscount`,
                `if((SELECT count(*) from product_like where product_like.member_id = ${memberId} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                `(SELECT count(*) as count from product_like where product_id = ${data.id}) as wishCount`,
                `po.product_sale_price as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `if((select count(*) as cut from coupon_to_product where coupon_to_product.product_id = ${data.id}), true, false) as isCoupon`,
                `if(p.product_company_type = 1, '위탁', '사입') as product_company_type`,
                `psp.average_star_point as goodsAvg`,
                `ptc.product_class_id as cid`
            ])
                .execute())[0];
            const banner_img = await this.bannerRepository.createQueryBuilder('b')
                .innerJoin('banner_item', 'bItem', 'bItem.banner_id = b.banner_id AND b.banner_point = 3')
                .innerJoin('banner_image', 'bImage', 'bImage.banner_image_id = bItem.banner_image_id')
                .andWhere('b.is_show = 1')
                .orWhere(`NOW() BETWEEN bItem.start_date AND bItem.end_date`)
                .orWhere('bItem.is_use_date = 0')
                .select([
                `b.banner_id as banner_id`,
                'bItem.banner_item_id as item_id',
                'bItem.link_url as url',
                'bImage.banner_image_url as path',
                'bItem.start_date as start_date',
                'bItem.end_date as end_date'
            ]).execute();
            let product_dis_image = [];
            if ((product_info === null || product_info === void 0 ? void 0 : product_info.basicinfo) === null) {
                product_dis_image = await this.productRepository.createQueryBuilder('p')
                    .innerJoin('product_image', 'pi', 'pi.product_id = p.product_id AND image_mode = 2')
                    .andWhere('p.product_id = :id', { id: data.id })
                    .select([
                    `pi.image_id as image_id`,
                    `pi.image_url as product_image`
                ])
                    .execute();
            }
            const add_image_src = await this.productImageRepository.createQueryBuilder('pImage')
                .andWhere('pImage.image_mode = 2')
                .andWhere('pImage.product_id = :id', { id: data.id })
                .select([
                `image_url as bigImg`,
                `image_url as smallImg`
            ])
                .execute();
            const product_class = await this.productClassRepository.getClassNameList(product_info === null || product_info === void 0 ? void 0 : product_info.cid);
            const info = Object.assign(Object.assign({}, product_info), { banner_img,
                product_dis_image,
                add_image_src, cnameList: product_class.result, product_category: product_class === null || product_class === void 0 ? void 0 : product_class.data });
            const related_id = (_a = ((await this.productRepository.createQueryBuilder('p')
                .innerJoin('product_related', 'pr', 'p.product_id = pr.product_id')
                .select([
                `group_concat(pr.related_product) as related_product`
            ])
                .andWhere('p.product_id = :id', { id: data.id })
                .execute())[0]['related_product'])) === null || _a === void 0 ? void 0 : _a.split(',');
            const related_product = await this.productRepository.createQueryBuilder('p')
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
                `po.is_out_of_stock as status_soldout`,
                `p.product_company_type as product_company_type`,
            ])
                .andWhere('p.product_id IN (:list)', { list: related_id })
                .execute();
            const review = await this.reviewRepository.createQueryBuilder('r')
                .innerJoin('product_option', 'po', 'po.product_option_id = r.product_option_id')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .leftJoin('review_image', 'ri', 'ri.review_id = r.review_id AND ri.is_main = 1')
                .select(['count(*) as count']);
            const qna = await this.queryProductRepository.createQueryBuilder('qna')
                .innerJoin('product_option', 'po', 'po.product_option_id = qna.product_option_id')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .select(['count(*) as count']);
            const setting = {
                delivery: {
                    deliveryClaimText: "<br />\\r\\n\\t배송 방법 : 택배<br />\\r\\n\\t배송 지역 : 전국지역<br />" +
                        "\\r\\n\\t배송 비용 : 3,000원<br />\\r\\n\\t배송 기간 : 3일 ~ 7일<br />" +
                        "\\r\\n\\t배송 안내 : 도서산간 지역은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.<br />" +
                        "\\r\\n\\t고객님께서 주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다." +
                        "<br />\\r\\n<br />\\r\\n<br />\\r\\n<br />\\r\\n\\t반품주소<br />" +
                        "\\r\\n\\t경기도 용인시 처인구 양지면 남평로 111-73 아레나스 지하 2층, 품고<br />" +
                        "\\r\\n\\t지정택배사 :&nbsp;CJ대한통운(1588-1255)<br />\\r\\n\\t교환/반품시에도 해당 택배를 이용하여 처리해주시기 바랍니다.<br />" +
                        "\\r\\n<br />\\r\\n"
                },
                relationInfos: related_product,
                premiumReviewTotal: (await review.andWhere('p.product_id = :pid', { pid: data.id })
                    .andWhere('ri.image_url != null')
                    .execute())[0]['count'],
                reviewTotal: (await review.andWhere('p.product_id = :pid', { pid: data.id })
                    .andWhere('ri.image_url = null')
                    .execute())[0]['count'],
                allReviewTotal: (await review.andWhere('p.product_id = :pid', { pid: data.id })
                    .execute())[0]['count'],
                qnaTotal: (await qna.andWhere('p.product_id = :pid', { pid: data.id })
                    .execute())[0]['count'],
                myQnaTotal: (await qna.andWhere('p.product_id = :pid', { pid: data.id })
                    .andWhere('qna.member_id = :mid', { mid: memberId })
                    .execute())[0]['count'],
                qnaDivs: [
                    {
                        ix: 0,
                        div_name: "상품문의",
                    },
                    {
                        ix: 1,
                        div_name: "배송문의",
                    },
                    {
                        ix: 2,
                        div_name: "기타",
                    }
                ]
            };
            const _options = await this.productOptionRepository.createQueryBuilder('po')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .select([
                `po.product_option_id as option_id`,
                `(select group_concat( pod.value separator '|' ) as product_name 
                from product_option_detail as pod where pod.option_id = po.product_option_id) as option_div`,
                `po.product_price as option_listprice`,
                `po.product_sale_price as option_dcprice`,
                `(po.product_price - po.product_sale_price) as option_discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `po.sale_stock_count as option_stock`,
            ])
                .andWhere('p.product_id = :pid', { pid: data.id })
                .andWhere('po.is_out_of_stock != 1')
                .execute();
            const options = [];
            for (let i in _options) {
                options.push(Object.assign(Object.assign({}, _options[i]), { optionDiscountList: [
                        {
                            type: "IN",
                            title: "즉시할인",
                            discount_amount: _options[i].option_discount_amount
                        }
                    ], division: [_options[i].option_id] }));
            }
            const optionDetailList = await this.productOptionRepository.createQueryBuilder('po')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .select([
                `po.product_option_id as division`,
                `(select group_concat( pod.value separator '|' ) as product_name 
                from product_option_detail as pod where pod.option_id = po.product_option_id) as option_div`,
                `po.product_price as option_listprice`,
                `po.sale_stock_count as option_stock`,
            ])
                .andWhere('p.product_id = :pid', { pid: data.id })
                .execute();
            const devOptionData = {
                options,
                viewOptions: [
                    {
                        option_name: "상품",
                        optionDetailList
                    }
                ]
            };
            return { data: {
                    info,
                    setting,
                    devOptionData,
                    result: 'success'
                } };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async insertQna(member_id, data) {
        try {
            const product_option = (await this.productOptionRepository.createQueryBuilder('po')
                .innerJoin('product', 'p', 'p.product_id = po.product_id AND po.is_main = 1')
                .select(['po.product_option_id as product_option_id'])
                .where('p.product_id = :id', { id: data.pid })
                .execute())[0]['product_option_id'];
            const qna = new QueryProduct_entity_1.QueryProductEntity();
            qna.query_type = Number(data === null || data === void 0 ? void 0 : data.div);
            qna.is_open = !(Boolean(data === null || data === void 0 ? void 0 : data.isHidden));
            qna.is_answer = false;
            qna.title = data.subject;
            qna.query_content = data.contents;
            qna.member_id = await this.memberRepository.findOne({ member_id });
            qna.product_option_id = await this.productOptionRepository.findOne({ product_option_id: product_option });
            return await this.queryProductRepository.save(qna);
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async getQnaList(memberId, data) {
        try {
            const query_product = await this.queryProductRepository.createQueryBuilder('qp')
                .innerJoin('member', 'm', 'm.member_id = qp.member_id')
                .innerJoin('product_option', 'po', 'po.product_option_id = qp.product_option_id')
                .innerJoin('product', 'p', 'p.product_id = po.product_id')
                .andWhere('p.product_id = :id', { id: data.id });
            if (data.qnaType === "mine") {
                query_product.andWhere('m.member_id = :memberId', { memberId });
            }
            const totalData = (await query_product.select(['count(*) as count']).execute())[0]['count'];
            const result = await query_product
                .select([
                `qp.query_product_id as bbs_ix`,
                `qp.query_type as bbs_div`,
                `p.product_id as pid`,
                `p.product_name as pname`,
                `qp.title as bbs_subject`,
                `m.name as bbs_name`,
                `qp.query_content as bbs_contents`,
                `qp.create_date as regdate`,
                `CASE 
                 WHEN qp.query_type = 0 THEN '상품문의'
                 WHEN qp.query_type = 1 THEN '배송문의'
                 WHEN qp.query_type = 2 THEN '기타'
               END as div_name`,
                `qp.answer_writer as cmt_name`,
                `qp.update_date as cmt_regdate`,
                `qp.answer_content as cmt_contents`,
                `qp.is_answer as cmt_bool`,
                `qp.is_open as isHidden`,
            ])
                .limit(Number(data.max))
                .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                .execute();
            return {
                data: {
                    result: 'success',
                    data: {
                        total: totalData,
                        list: result,
                        paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                            page: data.page,
                        })
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async wish(memberId, data) {
        var _a;
        try {
            const like = await this.productLikeRepository.createQueryBuilder('pl')
                .andWhere('member_id = :mid', { mid: memberId })
                .andWhere('product_id = :pid', { pid: data.pid })
                .select('*')
                .execute();
            if (like.length === 0) {
                const createLike = new ProductLike_entity_1.ProductLikeEntity();
                createLike.product_id = await this.productRepository.findOne({ product_id: data.pid });
                createLike.member_id = await this.memberRepository.findOne({ member_id: memberId });
                await this.productLikeRepository.save(createLike);
                return { data: 'insert' };
            }
            await this.productLikeRepository.delete({ product_like_id: (_a = like[0]) === null || _a === void 0 ? void 0 : _a.product_like_id });
            return { data: 'delete' };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async getSearch() {
        try {
            const keyword = await this.keywordRepository.createQueryBuilder('k')
                .select([
                `k.keyword_id as keyword_id`,
                `k.keyword_name as keyword`,
            ])
                .orderBy('sequence', 'ASC')
                .execute();
            return {
                data: {
                    popularKeyword: keyword,
                    newGoodsList: [],
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
    async doGoodsSearch(memberId, data) {
        try {
            const product = await this.productRepository.createQueryBuilder('p')
                .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1 AND po.is_delete = 0')
                .leftJoin('product_image', 'pim', 'pim.product_id = p.product_id AND pim.image_mode = 0')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                .andWhere('p.product_name like :keyword', { keyword: `%${data.keyword}%` });
            if (data.keyword === "") {
                product.orderBy('psp.average_star_point', 'DESC');
            }
            else {
                switch (data.sort) {
                    case "sale":
                        product.orderBy('psp.average_star_point', 'DESC');
                        break;
                    case "low":
                        product.orderBy('po.product_sale_price', 'ASC');
                        break;
                    case "high":
                        product.orderBy('po.product_sale_price', 'DESC');
                        break;
                    case "regdate":
                        product.orderBy('p.create_date', 'DESC');
                        break;
                }
            }
            let _product = [];
            let totalData = 0;
            if (data.keyword !== "") {
                totalData = (await product.select('count(*) as count').execute())[0]['count'];
                _product = await product.select([
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
                    `(if
          ((select count(*) from product_like as pl 
          where pl.member_id = ${memberId}), true, false)
          ) as alreadyWish`,
                    `po.product_sale_price as discount_amount`,
                    `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                    `true as isDiscount`,
                    `po.is_out_of_stock as status_soldout`,
                    `p.product_company_type as product_company_type`
                ]).execute();
            }
            return {
                data: {
                    total: totalData,
                    list: _product,
                    paging: {}
                }
            };
        }
        catch (error) {
            common_1.Logger.error('api/product : ' + error);
            throw error;
        }
    }
};
ProductInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductToClass_repository_1.ProductToClassRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ProductIconToProduct_repository_1.ProductIconToProductRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(ProductIcon_repository_1.ProductIconRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(ProductImage_repository_1.ProductImageRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductSearchKeyword_repository_1.ProductSearchKeywordRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(MemberGroup_repository_1.MemberGroupRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(QueryProduct_repository_1.QueryProductRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(ProductLike_repository_1.ProductLikeRepository)),
    __param(14, (0, typeorm_1.InjectRepository)(Keyword_repository_1.KeywordRepository)),
    __param(15, (0, typeorm_1.InjectRepository)(Review_repository_1.ReviewRepository)),
    __param(16, (0, typeorm_1.InjectRepository)(ProductRelated_repository_1.ProductRelatedRepository)),
    __param(17, (0, typeorm_1.InjectRepository)(Banner_repository_1.BannerRepository)),
    __metadata("design:paramtypes", [Product_repository_1.ProductRepository,
        ProductToClass_repository_1.ProductToClassRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductOptionDetail_repository_1.ProductOptionDetailRepository,
        ProductIconToProduct_repository_1.ProductIconToProductRepository,
        ProductIcon_repository_1.ProductIconRepository,
        ProductImage_repository_1.ProductImageRepository,
        ProductBrand_repository_1.ProductBrandRepository,
        ProductSearchKeyword_repository_1.ProductSearchKeywordRepository,
        ProductClass_repository_1.ProductClassRepository,
        Member_repository_1.MemberRepository,
        MemberGroup_repository_1.MemberGroupRepository,
        QueryProduct_repository_1.QueryProductRepository,
        ProductLike_repository_1.ProductLikeRepository,
        Keyword_repository_1.KeywordRepository,
        Review_repository_1.ReviewRepository,
        ProductRelated_repository_1.ProductRelatedRepository,
        Banner_repository_1.BannerRepository])
], ProductInfoService);
exports.ProductInfoService = ProductInfoService;
//# sourceMappingURL=product-info.service.js.map