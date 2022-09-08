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
exports.UserOrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Product_repository_1 = require("../../repository/product/Product.repository");
const Cart_repository_1 = require("../../repository/cart/Cart.repository");
const ProductClass_repository_1 = require("../../repository/product/ProductClass.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
const OrderMain_repository_1 = require("../../repository/order/OrderMain.repository");
const Member_repository_1 = require("../../repository/member/Member.repository");
const MemberAddress_repository_1 = require("../../repository/member/MemberAddress.repository");
const MemberMileage_repository_1 = require("../../repository/member/MemberMileage.repository");
const CouponToMember_repository_1 = require("../../repository/coupon/CouponToMember.repository");
const OfflineCouponInstance_repository_1 = require("../../repository/offline-coupon/OfflineCouponInstance.repository");
let UserOrderService = class UserOrderService {
    constructor(productRepository, productClassRepository, productLikeRepository, cartRepository, orderMainRepository, memberRepository, memberAddressRepository, memberMileageRepository, couponToMemberRepository, offlineCouponInstanceRepository) {
        this.productRepository = productRepository;
        this.productClassRepository = productClassRepository;
        this.productLikeRepository = productLikeRepository;
        this.cartRepository = cartRepository;
        this.orderMainRepository = orderMainRepository;
        this.memberRepository = memberRepository;
        this.memberAddressRepository = memberAddressRepository;
        this.memberMileageRepository = memberMileageRepository;
        this.couponToMemberRepository = couponToMemberRepository;
        this.offlineCouponInstanceRepository = offlineCouponInstanceRepository;
    }
    async getShppingAddress(memberId, oid) {
        try {
            if (!(oid === null || oid === undefined || oid === "")) {
                const member_address = await this.orderMainRepository.createQueryBuilder('om')
                    .innerJoin('member_address', 'ma', 'ma.address_id = om.address_id')
                    .andWhere('ma.member_id = :memberId', { memberId })
                    .select([
                    `ma.address_id as ix`,
                    `ma.delivery_name as shipping_name`,
                    `if(ma.default_delivery = 1, 'Y', 'N') as default_yn`,
                    `ma.address_user_name as recipient`,
                    `ma.home_tel as tel`,
                    `ma.phone as mobile`,
                    `ma.address_number as zipcode`,
                    `ma.address as address1`,
                    `ma.address_detail as address2`,
                ])
                    .andWhere('om.order_id = :oid', { oid })
                    .execute();
                return {
                    data: {
                        result: "success",
                        data: {
                            list: member_address,
                            paging: {}
                        }
                    }
                };
            }
            const member_address = await this.memberAddressRepository.createQueryBuilder('ma')
                .andWhere('ma.member_id = :memberId', { memberId })
                .select([
                `ma.address_id as ix`,
                `ma.delivery_name as shipping_name`,
                `if(ma.default_delivery = 1, 'Y', 'N') as default_yn`,
                `ma.address_user_name as recipient`,
                `ma.home_tel as tel`,
                `ma.phone as mobile`,
                `ma.address_number as zipcode`,
                `ma.address as address1`,
                `ma.address_detail as address2`,
            ]).execute();
            return {
                data: {
                    result: "success",
                    data: {
                        list: member_address,
                        paging: {}
                    }
                }
            };
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
    async updateAddressBook(member_id, data) {
        try {
            const address = await this.memberAddressRepository.createQueryBuilder('ma')
                .insert()
                .values({
                default_delivery: 0,
                delivery_name: data.shipping_name,
                address_user_name: data.recipient,
                phone: data.pcs,
                home_tel: "null",
                address_number: data.zipcode,
                address: data.address1,
                address_detail: data.address2,
                member: await this.memberRepository.findOne({ member_id })
            })
                .execute();
            return {
                data: {
                    result: "success",
                    data: (await this.memberAddressRepository.createQueryBuilder('ma')
                        .andWhere('ma.address_id = :id', { id: address.identifiers[0].address_id })
                        .select([
                        `ma.address_id as ix`,
                        `ma.delivery_name as shipping_name`,
                        `if(ma.default_delivery = 1, 'Y', 'N') as default_yn`,
                        `ma.address_user_name as recipient`,
                        `ma.home_tel as tel`,
                        `ma.phone as mobile`,
                        `ma.address_number as zipcode`,
                        `ma.address as address1`,
                        `ma.address_detail as address2`,
                    ]).execute())[0]
                }
            };
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
    async updateAddressDefault(member_id, data) {
        try {
            if (!(data.oid === null || data.oid === undefined || data.oid === "")) {
                await this.orderMainRepository.update({ order_id: Number(data.oid) }, { member_address_id: await this.memberAddressRepository.findOne({ address_id: data.ix }) });
                return { data: 'success' };
            }
            await this.memberAddressRepository.update({ address_id: data.ix }, { default_delivery: 1 });
            return { data: 'success' };
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
    async getOrderInput(member_id, data) {
        try {
            const shipping_info = (await this.memberAddressRepository.createQueryBuilder('ma')
                .andWhere('ma.member_id = :member_id', { member_id })
                .andWhere('ma.default_delivery = 1')
                .select([
                `ma.address_id as ix`,
                `ma.delivery_name as shipping_name`,
                `if(ma.default_delivery = 1, 'Y', 'N') as default_yn`,
                `ma.address_user_name as recipient`,
                `ma.home_tel as tel`,
                `ma.phone as mobile`,
                `ma.address_number as zipcode`,
                `ma.address as address1`,
                `ma.address_detail as address2`,
            ]).execute())[0];
            const member_mileage = (await this.memberRepository.createQueryBuilder('m')
                .innerJoin('member_group', 'mg', 'mg.group_id = m.member_group_id')
                .innerJoin('mileage_setting_group_payment', 'msgp', 'msgp.member_group_id = mg.group_id')
                .andWhere('m.member_id = :mid', { mid: member_id })
                .select([
                `msgp.payment_rate as payment_rate`,
            ])
                .execute())[0]['payment_rate'];
            const productList = await this.cartRepository.getCartList(member_id, data.cartIx);
            const product_id_list = [];
            const class_id_list = [];
            let product_listprice = 0;
            let product_dcprice = 0;
            let product_discount_amount = 0;
            let product_mileage = 0;
            let maxUseMileage = 0;
            for (let item of productList) {
                product_listprice = product_listprice + Number(item["total_listprice"]);
                product_dcprice = product_dcprice + Number(item["total_dcprice"]);
                product_discount_amount = product_discount_amount + Number(item["total_discount_amount"]);
                if ((item === null || item === void 0 ? void 0 : item.is_mileage) === 1) {
                    product_mileage = product_mileage + Number(item['mileage']);
                }
                else {
                    product_mileage = product_mileage + ((item.total_dcprice * member_mileage) / 100);
                }
                if ((item === null || item === void 0 ? void 0 : item.is_use_point) === 1) {
                    maxUseMileage = maxUseMileage + Number(item['use_mileage']);
                }
                else {
                    maxUseMileage = maxUseMileage + ((item.total_dcprice * 10) / 100);
                }
                item.icons = await this.productRepository.getProductIcons(item === null || item === void 0 ? void 0 : item.id);
                item.categoryPathName = await this.productClassRepository.getClassNameList(item["product_class_id"]);
                product_id_list.push(item['id']);
                class_id_list.push(...item.categoryPathName.cid);
            }
            const class_list = [...new Set(class_id_list)];
            const product_list = [...new Set(product_id_list)];
            const total_delivery_price = await this.cartRepository.getDeliveryPrice(product_listprice, 30000);
            const myCartCouponList = await this.couponToMemberRepository.useCouponList(member_id, class_list, product_list);
            return {
                result: 'success',
                data: {
                    shipping_info,
                    cart: [{
                            deliveryTemplateList: [{
                                    productList,
                                    delivery_text: "30,000원 이상 구매 시 무료배송",
                                    region_text: "제주 추가 배송비 4,000원",
                                    except_text: "제주 외 도서산간 추가 배송비 7,000원"
                                }],
                            product_listprice,
                            product_dcprice,
                            product_discount_amount,
                            total_delivery_price: total_delivery_price,
                            payment_price: product_dcprice + total_delivery_price
                        }],
                    cartSummary: {
                        product_listprice,
                        product_dcprice,
                        product_discount_amount,
                        total_delivery_price,
                        payment_price: product_dcprice + total_delivery_price,
                        mileage: product_mileage,
                        productDiscountList: [
                            {
                                type: "IN",
                                title: "즉시할인",
                                discount_amount: product_discount_amount
                            }
                        ],
                        pids: product_list
                    },
                    mileageConditionUseLimitType: "rate",
                    mileageConditionUseLimitValue: 10,
                    userMileage: (await this.memberMileageRepository.createQueryBuilder('mm')
                        .andWhere('mm.member_id = :mid', { mid: member_id })
                        .select(['mm.mileage as my_mileage'])
                        .execute())[0]["my_mileage"],
                    mileageConditionMinMileage: 1,
                    mileageConditionUseUnit: 1,
                    mileageConditionMinBuyAmt: 0,
                    maxUseMileage,
                    myCartCouponList,
                    userCouponCnt: myCartCouponList.length,
                    coupon_use_yn: "Y"
                }
            };
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
    async updateOrderInput() {
        try {
            return {};
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
    async paymentAction() {
        try {
            return {};
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
    async getOrderComplete() {
        try {
            return {};
        }
        catch (error) {
            common_1.Logger.error('user-order : ', error);
            throw error;
        }
    }
};
UserOrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ProductLike_repository_1.ProductLikeRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Cart_repository_1.CartRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(OrderMain_repository_1.OrderMainRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(MemberAddress_repository_1.MemberAddressRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(MemberMileage_repository_1.MemberMileageRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(CouponToMember_repository_1.CouponToMemberRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository)),
    __metadata("design:paramtypes", [Product_repository_1.ProductRepository,
        ProductClass_repository_1.ProductClassRepository,
        ProductLike_repository_1.ProductLikeRepository,
        Cart_repository_1.CartRepository,
        OrderMain_repository_1.OrderMainRepository,
        Member_repository_1.MemberRepository,
        MemberAddress_repository_1.MemberAddressRepository,
        MemberMileage_repository_1.MemberMileageRepository,
        CouponToMember_repository_1.CouponToMemberRepository,
        OfflineCouponInstance_repository_1.OfflineCouponInstanceRepository])
], UserOrderService);
exports.UserOrderService = UserOrderService;
//# sourceMappingURL=user-order.service.js.map