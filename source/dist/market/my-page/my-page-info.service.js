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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPageInfoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const OrderDetail_repository_1 = require("../../repository/order/OrderDetail.repository");
const OrderMain_repository_1 = require("../../repository/order/OrderMain.repository");
const OrderPayment_repository_1 = require("../../repository/order/OrderPayment.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const OrderRefund_repository_1 = require("../../repository/order/OrderRefund.repository");
const MemberAddress_repository_1 = require("../../repository/member/MemberAddress.repository");
const ProductOption_repository_1 = require("../../repository/product/ProductOption.repository");
const ProductOptionDetail_repository_1 = require("../../repository/product/ProductOptionDetail.repository");
const ProductBrand_repository_1 = require("../../repository/product/ProductBrand.repository");
const DeliveryCompany_repository_1 = require("../../repository/delivery/DeliveryCompany.repository");
const OrderHistory_repository_1 = require("../../repository/order/OrderHistory.repository");
require("dotenv/config");
const axios_1 = __importDefault(require("axios"));
const MemberPet_repository_1 = require("../../repository/member/MemberPet.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
const ProductLike_entity_1 = require("../../entity/product/ProductLike.entity");
const Product_repository_1 = require("../../repository/product/Product.repository");
const respones_1 = require("../../common/respones");
let MyPageInfoService = class MyPageInfoService {
    constructor(orderDetailRepository, orderMainRepository, orderPaymentRepository, memberRepository, orderRefundRepository, memberAddressRepository, productOptionRepository, productOptionDetailRepository, productBrandRepository, deliveryCompanyRepository, orderHistoryRepository, memberPetRepository, productLikeRepository, productRepository) {
        this.orderDetailRepository = orderDetailRepository;
        this.orderMainRepository = orderMainRepository;
        this.orderPaymentRepository = orderPaymentRepository;
        this.memberRepository = memberRepository;
        this.orderRefundRepository = orderRefundRepository;
        this.memberAddressRepository = memberAddressRepository;
        this.productOptionRepository = productOptionRepository;
        this.productOptionDetailRepository = productOptionDetailRepository;
        this.productBrandRepository = productBrandRepository;
        this.deliveryCompanyRepository = deliveryCompanyRepository;
        this.orderHistoryRepository = orderHistoryRepository;
        this.memberPetRepository = memberPetRepository;
        this.productLikeRepository = productLikeRepository;
        this.productRepository = productRepository;
    }
    async getCancelInfo(data) {
        try {
            const orderData = await this.orderDetailRepository.findOne({ order_detail_id: Number(data.oid) });
            if (orderData.order_state == "40") {
                return {
                    data: {
                        result: "isReturn"
                    }
                };
            }
            const order_info = await this.orderMainRepository.findOne({ order_id: Number(data.oid) });
            const order_detail = await this
                .orderDetailRepository
                .createQueryBuilder('od')
                .select([
                `od.order_detail_id as od_ix`,
                `od.order_detail_id as oid`,
                `od.order_detail_id as pid`,
                `od.order_detail_id as pname`,
                `od.order_detail_id as reserve`,
                `od.order_detail_id as option_text`,
                `od.order_detail_id as option_id`,
                `od.order_detail_id as pcnt`,
                `od.order_detail_id as dcprice`,
                `od.order_detail_id as listprice`,
                `od.order_detail_id as status`,
                `od.order_detail_id as status_text`,
                `od.order_detail_id as refund_status`,
                `od.order_detail_id as pimg`,
            ]);
            const payment_info = await this
                .orderPaymentRepository
                .createQueryBuilder('op').
                select([`op.payment_method as method`,
                `op.payment_info as bank`,
                `op.payment_memo as bank_`
            ])
                .andWhere(`op.order_id = :orderId`, { orderId: data.oid });
            return {
                result: "success",
                data: {
                    "bankList": {
                        "hsbc": "HSBC",
                        "yh": "KEB하나은행",
                        "sc": "SC제일은행",
                        "kn": "경남은행",
                        "kj": "광주은행",
                        "km": "국민은행",
                        "ku": "기업은행",
                        "nh": "농협중앙회",
                        "nh2": "단위농협",
                        "dk": "대구은행",
                        "bs": "부산은행",
                        "sl": "산림조합중앙회",
                        "su": "산업은행",
                        "sk": "새마을금고중앙회",
                        "ss": "수협중앙회",
                        "sh": "신한은행",
                        "sn": "신협",
                        "wr": "우리은행",
                        "po": "우체국",
                        "sj": "저축은행",
                        "jb": "전북은행",
                        "jj": "제주은행",
                        "kko": "카카오뱅크",
                        "kbk": "케이뱅크",
                        "hn": "하나은행",
                        "hc": "한국씨티은행"
                    },
                    claimstatus: order_info,
                    orderData: {
                        order: Object.assign({}, orderData)
                    },
                    paymentInfo: {
                        use_reserve: 0,
                        total_dc: order_info.coupon_discount,
                        pt_dcprice: order_info.order_price,
                        payment: payment_info
                    },
                    delivery_info: false,
                    cancelReason: ""
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async updateCancelStatus(data) {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async updateOrderClaim(data) {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async getReturnInfo(data) {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async updateMyinfo(member_id, data) {
        try {
            await this.memberRepository.createQueryBuilder().update({ member_id: member_id }).set({
                name: data.name,
                phone: data.pcs,
                email: data.email
            })
                .andWhere('member_id = :mid', { mid: member_id })
                .execute();
            return {
                data: "success"
            };
        }
        catch (error) {
            common_1.Logger.error('updateMyinfo : ', error);
            throw error;
        }
    }
    async myWishList(member_id, data) {
        try {
            const product = await this.productRepository.createQueryBuilder('p')
                .innerJoin('product_to_class', 'ptc', 'ptc.product_id = p.product_id AND ptc.is_main = 1')
                .innerJoin('product_class', 'pc', 'pc.product_class_id = ptc.product_class_id')
                .innerJoin('product_option', 'po', 'po.product_id = p.product_id AND po.is_main = 1 AND po.is_delete = 0')
                .leftJoin('product_image', 'pim', 'pim.product_id = p.product_id AND pim.image_mode = 0')
                .leftJoin('product_star_point', 'psp', 'psp.product_id = p.product_id')
                .leftJoin('product_like', 'pl', 'pl.product_id = p.product_id')
                .where('pl.member_id = :mid', { mid: member_id });
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
                `if((SELECT count(*) from product_like where product_like.member_id = ${member_id} AND product_like.product_id = p.product_id), 'true', 'false') as alreadyWish`,
                `(po.product_price - po.product_sale_price) as discount_amount`,
                `if(po.product_sale_price < po.product_price,TRUNCATE((((po.product_price - po.product_sale_price) / po.product_price)*100), 0), 0) as discount_rate`,
                `true as isDiscount`,
                `if(po.is_out_of_stock, 'true', 'false') as status_soldout`,
                `if(p.product_company_type = 1, '위탁', '사입') as product_company_type`,
            ]);
            return {
                data: {
                    result: "success",
                    data: {
                        list: await product
                            .limit(Number(data.max))
                            .offset(respones_1.Paging.getOffset(totalData, Number(data.page), Number(data.max)))
                            .execute(),
                        paging: respones_1.Paging.getMarketPaging(totalData, Number(data.page), Number(data.max), {
                            page: data.page,
                        }),
                        total: totalData
                    },
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async deleteWish(member_id, data) {
        try {
            const delete_like_set = data.pids.split(',');
            for (let i of delete_like_set) {
                await this.productLikeRepository
                    .createQueryBuilder()
                    .delete()
                    .from(ProductLike_entity_1.ProductLikeEntity)
                    .where('member_id = :mid', { mid: member_id })
                    .andWhere('product_id = :pid', { pid: i })
                    .execute();
            }
            return {
                data: {
                    result: "success"
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async getDeleveryTracking(member_id, data) {
        try {
            const orderDelivery = (await this.orderDetailRepository.createQueryBuilder('od')
                .leftJoin("product_option", "po", "po.product_option_id = od.product_option_id")
                .leftJoin("product", "p", "p.product_id = po.product_id")
                .select([
                `p.product_name as itemName`,
                `od.delivery_invoice_code as invoiceNo`,
                `(select delivery_company_code from delivery_company dc 
                      where dc.delivery_company_id  = od.delivery_company_id) as delivery_company_code`,
                `(select delivery_company_name from delivery_company dc 
                      where dc.delivery_company_id  = od.delivery_company_id) as delivery_company_name`
            ])
                .andWhere('od.order_id = :oid', { oid: data.oid })
                .execute())[0];
            if ((orderDelivery === null || orderDelivery === void 0 ? void 0 : orderDelivery.delivery_company_code) === null || (orderDelivery === null || orderDelivery === void 0 ? void 0 : orderDelivery.delivery_company_code) === "") {
                return "배송 정보가 없습니다";
            }
            const sweet_result = (await axios_1.default
                .get(`${process.env.SWEET_TRACKER_HOST_OPR_INFO}/api/v1/trackingInfo?t_key=${process.env.SWEET_TRACKER_KEY}&t_code=${orderDelivery.delivery_company_code}&t_invoice=${orderDelivery.invoiceNo}`)).data;
            return {
                result: "success",
                data: {
                    itemName: orderDelivery.itemName,
                    invoiceNo: sweet_result.invoiceNo,
                    level: sweet_result.level,
                    estimate: sweet_result.estimate,
                    complete: sweet_result.complete === "Y",
                    trackingDetails: sweet_result.trackingDetails,
                    compnayInfo: {
                        invoice_no: sweet_result.invoiceNo,
                        name: orderDelivery.delivery_company_name
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async getMyInfo(member_id) {
        try {
            const pet_data = await this
                .memberPetRepository
                .createQueryBuilder('mp')
                .select([
                `mp.member_pet_id as petId`,
                `mp.name as name`,
                `mp.breed as breed`,
                `mp.gender as gender`,
                `mp.birth_date as birthDate`,
                `mp.is_neutralized as isNeutralized`,
                `mp.weight as weight`,
                `mp.pet_character as "character"`,
                `mp.member_id as ownerId`,
                `mp.image_url as image`
            ])
                .andWhere('mp.member_id = :mid', { mid: member_id });
            return {
                result: "success",
                data: {
                    info: {
                        list: await pet_data.execute()
                    },
                    totalCount: await pet_data.getCount()
                }
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async updatePetInfo(member_id, data) {
        try {
            const pet_save_data = await this.memberPetRepository.save({
                member_id: await this.memberRepository.findOne({ member_id: member_id }),
                name: data.petName,
                breed: data.petType,
                birth_date: data.petBirth,
                weight: data.petWeight
            });
            const pet_data = await this
                .memberPetRepository
                .createQueryBuilder('mp')
                .select([
                `mp.member_pet_id as petId`,
                `mp.name as name`,
                `mp.breed as breed`,
                `mp.gender as gender`,
                `mp.birth_date as birthDate`,
                `mp.is_neutralized as isNeutralized`,
                `mp.weight as weight`,
                `mp.pet_character as "character"`,
                `mp.member_id as ownerId`,
                `mp.image_url as image`
            ])
                .andWhere('mp.member_pet_id = :pet_id', { pet_id: pet_save_data.member_pet_id })
                .execute();
            return {
                result: "succ",
                data: pet_data[0]
            };
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async updateMypassword() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
    async checkAuthnum() {
        try {
        }
        catch (error) {
            common_1.Logger.error('my_page_info : ', error);
            throw error;
        }
    }
};
MyPageInfoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(OrderPayment_repository_1.OrderPaymentRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(OrderRefund_repository_1.OrderRefundRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(MemberAddress_repository_1.MemberAddressRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(DeliveryCompany_repository_1.DeliveryCompanyRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(OrderHistory_repository_1.OrderHistoryRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(MemberPet_repository_1.MemberPetRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(ProductLike_repository_1.ProductLikeRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [OrderDetail_repository_1.OrderDetailRepository,
        OrderMain_repository_1.OrderMainRepository,
        OrderPayment_repository_1.OrderPaymentRepository,
        Member_repository_1.MemberRepository,
        OrderRefund_repository_1.OrderRefundRepository,
        MemberAddress_repository_1.MemberAddressRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductOptionDetail_repository_1.ProductOptionDetailRepository,
        ProductBrand_repository_1.ProductBrandRepository,
        DeliveryCompany_repository_1.DeliveryCompanyRepository,
        OrderHistory_repository_1.OrderHistoryRepository,
        MemberPet_repository_1.MemberPetRepository,
        ProductLike_repository_1.ProductLikeRepository,
        Product_repository_1.ProductRepository])
], MyPageInfoService);
exports.MyPageInfoService = MyPageInfoService;
//# sourceMappingURL=my-page-info.service.js.map