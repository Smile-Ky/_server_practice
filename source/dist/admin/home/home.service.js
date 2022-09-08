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
exports.HomeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const MonthlySales_repository_1 = require("../../repository/main/MonthlySales.repository");
const QueryProduct_repository_1 = require("../../repository/query/QueryProduct.repository");
const Product_repository_1 = require("../../repository/product/Product.repository");
const OrderDetail_repository_1 = require("../../repository/order/OrderDetail.repository");
const QueryOneToOne_repository_1 = require("../../repository/query/QueryOneToOne.repository");
const Review_repository_1 = require("../../repository/review/Review.repository");
let HomeService = class HomeService {
    constructor(monthlySalesRepository, queryProductRepository, queryOneToOneRepository, reviewRepository, productRepository, orderDetailRepository) {
        this.monthlySalesRepository = monthlySalesRepository;
        this.queryProductRepository = queryProductRepository;
        this.queryOneToOneRepository = queryOneToOneRepository;
        this.reviewRepository = reviewRepository;
        this.productRepository = productRepository;
        this.orderDetailRepository = orderDetailRepository;
    }
    async findHome() {
        try {
            return {
                data: {
                    order: (await this.order())['data'],
                    claim_inquiry: (await this.claim())['data'],
                    product: (await this.getProduct())['data'],
                    selling_graph: (await this.salesGraph())['data']
                }
            };
        }
        catch (error) {
            common_1.Logger.error(`/admin/home : ${error}`);
            throw error;
        }
    }
    async order() {
        try {
            const order_payment_confirm = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 1');
            const _order_payment_confirm = (await order_payment_confirm.execute())[0]['cut'];
            const order_delivery_preparing = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 2');
            const _order_delivery_preparing = (await order_delivery_preparing.execute())[0]['cut'];
            const order_delivery_complete = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 5');
            const _order_delivery_complete = (await order_delivery_complete.execute())[0]['cut'];
            const order_delivery_delay = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 3');
            const _order_delivery_delay = (await order_delivery_delay.execute())[0]['cut'];
            return {
                data: {
                    order_payment_confirm: Number(_order_payment_confirm),
                    order_delivery_preparing: Number(_order_delivery_preparing),
                    order_delivery_complete: Number(_order_delivery_complete),
                    order_delivery_delay: Number(_order_delivery_delay)
                }
            };
        }
        catch (error) {
            common_1.Logger.error(`/admin/home : ${error}`);
            throw error;
        }
    }
    async claim() {
        try {
            const claim_cancel = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 11');
            const _claim_cancel = (await claim_cancel.execute())[0]['cut'];
            const claim_product_return = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 20');
            const _claim_product_return = (await claim_product_return.execute())[0]['cut'];
            const claim_exchange = await this.orderDetailRepository.createQueryBuilder('od')
                .select('count(*) as cut')
                .andWhere('order_state = 30');
            const _claim_exchange = (await claim_exchange.execute())[0]['cut'];
            const inquiry_product = await this.queryProductRepository.createQueryBuilder('qp')
                .select('count(*) as cut');
            const _inquiry_product = (await inquiry_product.execute())[0]['cut'];
            const inquiry_individual = await this.queryOneToOneRepository.createQueryBuilder('qo')
                .select('count(*) as cut');
            const _inquiry_individual = (await inquiry_individual.execute())[0]['cut'];
            const inquiry_product_review = await this.reviewRepository.createQueryBuilder('r')
                .select('count(*) as cut');
            const _inquiry_product_review = (await inquiry_product_review.execute())[0]['cut'];
            return {
                data: {
                    claim_cancel: Number(_claim_cancel),
                    claim_product_return: Number(_claim_product_return),
                    claim_exchange: Number(_claim_exchange),
                    inquiry_product: Number(_inquiry_product),
                    inquiry_individual: Number(_inquiry_individual),
                    inquiry_product_review: Number(_inquiry_product_review),
                }
            };
        }
        catch (error) {
            common_1.Logger.error(`/admin/home : ${error}`);
            throw error;
        }
    }
    async getProduct() {
        try {
            const product_selling = await this.productRepository.createQueryBuilder('p')
                .select('count(1) as cut')
                .andWhere('p.product_sale_state = 1');
            const _product_selling = (await product_selling.execute())[0]['cut'];
            const product_sold_out = await this.productRepository.createQueryBuilder('p')
                .select('count(*) as cut')
                .andWhere('p.product_sale_state = 0');
            const _product_sold_out = (await product_sold_out.execute())[0]['cut'];
            const product_end = await this.productRepository.createQueryBuilder('p')
                .select('count(*) as cut')
                .andWhere('p.product_sale_state = 2');
            const _product_end = (await product_end.execute())[0]['cut'];
            return {
                data: {
                    product_selling: Number(_product_selling),
                    product_sold_out: Number(_product_sold_out),
                    product_lacks: 0,
                    product_end: Number(_product_end),
                }
            };
        }
        catch (error) {
            common_1.Logger.error(`/admin/home : ${error}`);
            throw error;
        }
    }
    async salesGraph() {
        try {
            const year = new Date().getFullYear();
            const month = (new Date().getMonth()) + 1;
            const value = new Date(year, month, 0).getDate();
            const monthly_sales = await this.monthlySalesRepository
                .createQueryBuilder('ms')
                .select([
                `log_date as log_date`,
                `total_sales as total_sales`
            ])
                .andWhere('log_date BETWEEN :start AND :end', {
                start: `${year}-${month}-01`,
                end: `${year}-${month}-${value}`
            });
            const data = await monthly_sales.orderBy('log_date', 'ASC').execute();
            console.log(data[0]['log_date']);
            const dayList = [];
            for (let i = 0; i < value; i++) {
                dayList.push({
                    day: i,
                    price: 0
                });
            }
            for (let j = 0; j < data.length; j++) {
                for (let k = 0; k < dayList.length; k++) {
                    let nowDate = new Date(`${year}-${month}-${dayList[k].day}`);
                    let newDate = new Date(data[j].log_date);
                    if (nowDate.getFullYear() === newDate.getFullYear()
                        && nowDate.getMonth() === newDate.getMonth()
                        && nowDate.getDate() === newDate.getDate() - 1) {
                        dayList[k].price = data[j].total_sales;
                    }
                }
            }
            return {
                data: {
                    selling_graph_month: month,
                    selling_graph_sale_price: dayList
                }
            };
        }
        catch (error) {
            common_1.Logger.error(`/admin/home : ${error}`);
            throw error;
        }
    }
};
HomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(MonthlySales_repository_1.MonthlySalesRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(QueryProduct_repository_1.QueryProductRepository)),
    __param(2, (0, typeorm_1.InjectRepository)(QueryOneToOne_repository_1.QueryOneToOneRepository)),
    __param(3, (0, typeorm_1.InjectRepository)(Review_repository_1.ReviewRepository)),
    __param(4, (0, typeorm_1.InjectRepository)(Product_repository_1.ProductRepository)),
    __param(5, (0, typeorm_1.InjectRepository)(OrderDetail_repository_1.OrderDetailRepository)),
    __metadata("design:paramtypes", [MonthlySales_repository_1.MonthlySalesRepository,
        QueryProduct_repository_1.QueryProductRepository,
        QueryOneToOne_repository_1.QueryOneToOneRepository,
        Review_repository_1.ReviewRepository,
        Product_repository_1.ProductRepository,
        OrderDetail_repository_1.OrderDetailRepository])
], HomeService);
exports.HomeService = HomeService;
//# sourceMappingURL=home.service.js.map