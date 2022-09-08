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
exports.CartService = void 0;
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
const Cart_repository_1 = require("../../repository/cart/Cart.repository");
const ProductLike_repository_1 = require("../../repository/product/ProductLike.repository");
let CartService = class CartService {
    constructor(productRepository, productToClassRepository, productOptionRepository, productOptionDetailRepository, productIconToProductRepository, productIconRepository, productRelatedRepository, productImageRepository, productBrandRepository, productSearchKeywordRepository, productClassRepository, memberRepository, cartRepository, productLikeRepository) {
        this.productRepository = productRepository;
        this.productToClassRepository = productToClassRepository;
        this.productOptionRepository = productOptionRepository;
        this.productOptionDetailRepository = productOptionDetailRepository;
        this.productIconToProductRepository = productIconToProductRepository;
        this.productIconRepository = productIconRepository;
        this.productRelatedRepository = productRelatedRepository;
        this.productImageRepository = productImageRepository;
        this.productBrandRepository = productBrandRepository;
        this.productSearchKeywordRepository = productSearchKeywordRepository;
        this.productClassRepository = productClassRepository;
        this.memberRepository = memberRepository;
        this.cartRepository = cartRepository;
        this.productLikeRepository = productLikeRepository;
    }
    async cartAdd(member_id, req) {
        try {
            for (let i of req.optionData) {
                await this.cartRepository.createQueryBuilder()
                    .insert()
                    .values({
                    product: await this.productRepository.findOne({ product_id: req.pid }),
                    count: Number(i.amt),
                    product_option: await this.productOptionRepository.findOne({ product_option_id: i.option_id }),
                    member: await this.memberRepository.findOne({ member_id: member_id }),
                    wish_list_yn: Boolean((await this.productLikeRepository.createQueryBuilder('pl')
                        .andWhere('pl.product_id = :pid', { pid: req === null || req === void 0 ? void 0 : req.pid })
                        .andWhere('pl.member_id = :mid', { mid: member_id })
                        .select(['count(*) as count'])
                        .execute())[0]['count']),
                }).execute();
            }
            const cartList = await this.cartRepository.getCartList(member_id, []);
            const productList = [];
            let product_listprice = 0;
            let product_dcprice = 0;
            let product_discount_amount = 0;
            for (let item of cartList) {
                product_listprice = product_listprice + Number(item["total_listprice"]);
                product_dcprice = product_dcprice + Number(item["total_dcprice"]);
                product_discount_amount = product_discount_amount + Number(item["total_discount_amount"]);
                item.icons = await this.productRepository.getProductIcons(item === null || item === void 0 ? void 0 : item.id);
                item.categoryPathName = await this.productClassRepository.getClassNameList(item["product_class_id"]);
            }
            const total_delivery_price = await this.cartRepository.getDeliveryPrice(product_listprice, 30000);
            return {
                result: "success",
                data: [
                    {
                        deliveryTemplateList: [
                            {
                                productList,
                                delivery_text: '30,000원 이상 구매 시 무료배송',
                                region_text: '제주 추가 배송비 4,000원',
                                except_text: '제주 외 도서산간 추가 배송비 7,000원'
                            }
                        ],
                        product_listprice,
                        product_dcprice,
                        product_discount_amount,
                        total_delivery_price: total_delivery_price,
                        delivery_price: total_delivery_price,
                        payment_price: product_dcprice + 3000
                    }
                ],
                cartIxs: await this.cartRepository.getCartIdList(member_id)
            };
        }
        catch (error) {
            common_1.Logger.log(`cartAdd : ${error}`);
            throw error.driverError;
        }
    }
    async getCart(member_id) {
        try {
            const cartList = await this.cartRepository.getCartList(member_id, []);
            const product_id_list = [];
            let product_listprice = 0;
            let product_dcprice = 0;
            let product_discount_amount = 0;
            let product_mileage = 0;
            const member_mileage = (await this.memberRepository.createQueryBuilder('m')
                .innerJoin('member_group', 'mg', 'mg.group_id = m.member_group_id')
                .innerJoin('mileage_setting_group_payment', 'msgp', 'msgp.member_group_id = mg.group_id')
                .andWhere('m.member_id = :mid', { mid: member_id })
                .select([
                `msgp.payment_rate as payment_rate`,
            ])
                .execute())[0]['payment_rate'];
            for (let item of cartList) {
                product_listprice = product_listprice + Number(item["total_listprice"]);
                product_dcprice = product_dcprice + Number(item["total_dcprice"]);
                product_discount_amount = product_discount_amount + Number(item["total_discount_amount"]);
                if ((item === null || item === void 0 ? void 0 : item.is_mileage) === 1) {
                    product_mileage = product_mileage + Number(item['mileage']);
                }
                else {
                    product_mileage = product_mileage + ((item.total_dcprice * member_mileage) / 100);
                }
                item.icons = await this.productRepository.getProductIcons(item === null || item === void 0 ? void 0 : item.id);
                item.categoryPathName = await this.productClassRepository.getClassNameList(item["product_class_id"]);
                product_id_list.push(item['id']);
            }
            const product_list = [...new Set(product_id_list)];
            let relationGoodsList = [];
            if (product_list.length !== 0) {
                relationGoodsList = await this.productRepository.relationGoodsList(member_id, product_list);
                for (let item of relationGoodsList) {
                    item.icons = await this.productRepository.getProductIcons(item === null || item === void 0 ? void 0 : item.id);
                }
            }
            const total_delivery_price = await this.cartRepository.getDeliveryPrice(product_listprice, 30000);
            return {
                result: "success",
                data: {
                    cartDeleteDay: "100",
                    cart: [{
                            deliveryTemplateList: [
                                {
                                    productList: cartList,
                                    delivery_text: '30,000원 이상 구매 시 무료배송',
                                    region_text: '제주 추가 배송비 4,000원',
                                    except_text: '제주 외 도서산간 추가 배송비 7,000원',
                                }
                            ],
                            product_listprice,
                            product_dcprice,
                            product_discount_amount,
                            total_delivery_price: total_delivery_price,
                            delivery_price: total_delivery_price,
                            payment_price: product_dcprice + total_delivery_price
                        }],
                    relationGoodsList,
                    cartSummary: {
                        product_listprice,
                        product_dcprice,
                        product_discount_amount,
                        total_delivery_price,
                        payment_price: product_dcprice + total_delivery_price,
                        mileage: product_mileage + ((product_dcprice * member_mileage) / 100),
                        productDiscountList: [
                            {
                                type: "IN",
                                title: "즉시할인",
                                discount_amount: product_discount_amount
                            },
                        ],
                        pids: product_list
                    },
                }
            };
        }
        catch (error) {
            common_1.Logger.log(`getCart : ${error}`);
            throw error.driverError;
        }
    }
    async updateCount(member_id, req) {
        try {
            await this.cartRepository.update({ cart_id: req.cartIx }, { count: Number(req.count) });
            const member_mileage = (await this.memberRepository.createQueryBuilder('m')
                .innerJoin('member_group', 'mg', 'mg.group_id = m.member_group_id')
                .innerJoin('mileage_setting_group_payment', 'msgp', 'msgp.member_group_id = mg.group_id')
                .andWhere('m.member_id = :mid', { mid: member_id })
                .select([
                `msgp.payment_rate as payment_rate`,
            ])
                .execute())[0]['payment_rate'];
            const cartList = await this.cartRepository.getCartList(member_id, []);
            const product_id_list = [];
            let product_listprice = 0;
            let product_dcprice = 0;
            let product_discount_amount = 0;
            let product_mileage = 0;
            for (let item of cartList) {
                product_listprice = product_listprice + Number(item["total_listprice"]);
                product_dcprice = product_dcprice + Number(item["total_dcprice"]);
                product_discount_amount = product_discount_amount + Number(item["total_discount_amount"]);
                if ((item === null || item === void 0 ? void 0 : item.is_mileage) === 1) {
                    product_mileage = product_mileage + Number(item['mileage']);
                }
                else {
                    product_mileage = product_mileage + ((item.total_dcprice * member_mileage) / 100);
                }
                product_id_list.push(item['id']);
            }
            const product_list = [...new Set(product_id_list)];
            const total_delivery_price = await this.cartRepository.getDeliveryPrice(product_listprice, 30000);
            return {
                result: "success",
                summary: {
                    product_listprice,
                    product_dcprice,
                    product_discount_amount,
                    total_delivery_price,
                    payment_price: product_dcprice + total_delivery_price,
                    mileage: product_mileage + ((product_dcprice * member_mileage) / 100),
                    productDiscountList: [
                        {
                            type: "IN",
                            title: "즉시할인",
                            discount_amount: product_discount_amount
                        },
                    ],
                    pids: product_list
                },
            };
        }
        catch (error) {
            common_1.Logger.log(`updateCount : ${error}`);
            throw error.driverError;
        }
    }
    async deleteCart(member_id, req) {
        try {
            await this.cartRepository
                .query(`delete from cart where cart.cart_id in (${req.cartIx})`);
            const member_mileage = (await this.memberRepository.createQueryBuilder('m')
                .innerJoin('member_group', 'mg', 'mg.group_id = m.member_group_id')
                .innerJoin('mileage_setting_group_payment', 'msgp', 'msgp.member_group_id = mg.group_id')
                .andWhere('m.member_id = :mid', { mid: member_id })
                .select([
                `msgp.payment_rate as payment_rate`,
            ])
                .execute())[0]['payment_rate'];
            const cartList = await this.cartRepository.getCartList(member_id, []);
            const product_id_list = [];
            let product_listprice = 0;
            let product_dcprice = 0;
            let product_discount_amount = 0;
            let product_mileage = 0;
            for (let item of cartList) {
                product_listprice = product_listprice + Number(item["total_listprice"]);
                product_dcprice = product_dcprice + Number(item["total_dcprice"]);
                product_discount_amount = product_discount_amount + Number(item["total_discount_amount"]);
                if ((item === null || item === void 0 ? void 0 : item.is_mileage) === 1) {
                    product_mileage = product_mileage + Number(item['mileage']);
                }
                else {
                    product_mileage = product_mileage + ((item.total_dcprice * member_mileage) / 100);
                }
                product_id_list.push(item['id']);
            }
            const product_list = [...new Set(product_id_list)];
            const total_delivery_price = await this.cartRepository.getDeliveryPrice(product_listprice, 30000);
            return {
                data: {
                    result: "success",
                    summary: {
                        product_listprice,
                        product_dcprice,
                        product_discount_amount,
                        total_delivery_price,
                        payment_price: product_dcprice + total_delivery_price,
                        mileage: product_mileage + ((product_dcprice * member_mileage) / 100),
                        productDiscountList: [
                            {
                                type: "IN",
                                title: "즉시할인",
                                discount_amount: product_discount_amount
                            },
                        ],
                        pids: product_list
                    },
                    data: [
                        {
                            deliveryTemplateList: [
                                {
                                    productList: cartList,
                                    delivery_text: '30,000원 이상 구매 시 무료배송',
                                    region_text: '제주 추가 배송비 4,000원',
                                    except_text: '제주 외 도서산간 추가 배송비 7,000원',
                                }
                            ],
                            product_listprice,
                            product_dcprice,
                            product_discount_amount,
                            total_delivery_price: total_delivery_price,
                            delivery_price: total_delivery_price,
                            payment_price: product_dcprice + total_delivery_price
                        }
                    ]
                }
            };
        }
        catch (error) {
            common_1.Logger.log(`updateCount : ${error}`);
            throw error.driverError;
        }
    }
    async getCartSummary(member_id, req) {
        try {
            const member_mileage = (await this.memberRepository.createQueryBuilder('m')
                .innerJoin('member_group', 'mg', 'mg.group_id = m.member_group_id')
                .innerJoin('mileage_setting_group_payment', 'msgp', 'msgp.member_group_id = mg.group_id')
                .andWhere('m.member_id = :mid', { mid: member_id })
                .select([
                `msgp.payment_rate as payment_rate`,
            ])
                .execute())[0]['payment_rate'];
            const cartList = await this.cartRepository.getCartList(member_id, req.cartIx);
            const product_id_list = [];
            let product_listprice = 0;
            let product_dcprice = 0;
            let product_discount_amount = 0;
            let product_mileage = 0;
            for (let item of cartList) {
                product_listprice = product_listprice + Number(item["total_listprice"]);
                product_dcprice = product_dcprice + Number(item["total_dcprice"]);
                product_discount_amount = product_discount_amount + Number(item["total_discount_amount"]);
                if ((item === null || item === void 0 ? void 0 : item.is_mileage) === 1) {
                    product_mileage = product_mileage + Number(item['mileage']);
                }
                else {
                    product_mileage = product_mileage + ((item.total_dcprice * member_mileage) / 100);
                }
                product_id_list.push(item['id']);
            }
            const product_list = [...new Set(product_id_list)];
            const total_delivery_price = await this.cartRepository.getDeliveryPrice(product_listprice, 30000);
            return {
                result: "success",
                summary: {
                    product_listprice,
                    product_dcprice,
                    product_discount_amount,
                    total_delivery_price,
                    payment_price: product_dcprice + total_delivery_price,
                    mileage: product_mileage + ((product_dcprice * member_mileage) / 100),
                    productDiscountList: [
                        {
                            type: "IN",
                            title: "즉시할인",
                            discount_amount: product_discount_amount
                        },
                    ],
                    pids: product_list
                },
            };
        }
        catch (error) {
            common_1.Logger.log(`updateCount : ${error}`);
            throw error.driverError;
        }
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(ProductToClass_repository_1.ProductToClassRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(ProductOption_repository_1.ProductOptionRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(ProductOptionDetail_repository_1.ProductOptionDetailRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(ProductIconToProduct_repository_1.ProductIconToProductRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(ProductIcon_repository_1.ProductIconRepository)),
    __param(6, (0, typeorm_1.InjectRepository)(ProductRelated_repository_1.ProductRelatedRepository)),
    __param(7, (0, typeorm_1.InjectRepository)(ProductImage_repository_1.ProductImageRepository)),
    __param(8, (0, typeorm_1.InjectRepository)(ProductBrand_repository_1.ProductBrandRepository)),
    __param(9, (0, typeorm_1.InjectRepository)(ProductSearchKeyword_repository_1.ProductSearchKeywordRepository)),
    __param(10, (0, typeorm_1.InjectRepository)(ProductClass_repository_1.ProductClassRepository)),
    __param(11, (0, typeorm_1.InjectRepository)(Member_repository_1.MemberRepository)),
    __param(12, (0, typeorm_1.InjectRepository)(Cart_repository_1.CartRepository)),
    __param(13, (0, typeorm_1.InjectRepository)(ProductLike_repository_1.ProductLikeRepository)),
    __metadata("design:paramtypes", [Product_repository_1.ProductRepository,
        ProductToClass_repository_1.ProductToClassRepository,
        ProductOption_repository_1.ProductOptionRepository,
        ProductOptionDetail_repository_1.ProductOptionDetailRepository,
        ProductIconToProduct_repository_1.ProductIconToProductRepository,
        ProductIcon_repository_1.ProductIconRepository,
        ProductRelated_repository_1.ProductRelatedRepository,
        ProductImage_repository_1.ProductImageRepository,
        ProductBrand_repository_1.ProductBrandRepository,
        ProductSearchKeyword_repository_1.ProductSearchKeywordRepository,
        ProductClass_repository_1.ProductClassRepository,
        Member_repository_1.MemberRepository,
        Cart_repository_1.CartRepository,
        ProductLike_repository_1.ProductLikeRepository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map