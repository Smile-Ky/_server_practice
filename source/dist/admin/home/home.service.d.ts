import { MonthlySalesRepository } from "../../repository/main/MonthlySales.repository";
import { QueryProductRepository } from "../../repository/query/QueryProduct.repository";
import { ProductRepository } from "../../repository/product/Product.repository";
import { OrderDetailRepository } from "../../repository/order/OrderDetail.repository";
import { QueryOneToOneRepository } from "../../repository/query/QueryOneToOne.repository";
import { ReviewRepository } from "../../repository/review/Review.repository";
export declare class HomeService {
    private monthlySalesRepository;
    private queryProductRepository;
    private queryOneToOneRepository;
    private reviewRepository;
    private productRepository;
    private orderDetailRepository;
    constructor(monthlySalesRepository: MonthlySalesRepository, queryProductRepository: QueryProductRepository, queryOneToOneRepository: QueryOneToOneRepository, reviewRepository: ReviewRepository, productRepository: ProductRepository, orderDetailRepository: OrderDetailRepository);
    findHome(): Promise<{
        data: {
            order: {
                order_payment_confirm: number;
                order_delivery_preparing: number;
                order_delivery_complete: number;
                order_delivery_delay: number;
            };
            claim_inquiry: {
                claim_cancel: number;
                claim_product_return: number;
                claim_exchange: number;
                inquiry_product: number;
                inquiry_individual: number;
                inquiry_product_review: number;
            };
            product: {
                product_selling: number;
                product_sold_out: number;
                product_lacks: number;
                product_end: number;
            };
            selling_graph: {
                selling_graph_month: number;
                selling_graph_sale_price: any[];
            };
        };
    }>;
    order(): Promise<{
        data: {
            order_payment_confirm: number;
            order_delivery_preparing: number;
            order_delivery_complete: number;
            order_delivery_delay: number;
        };
    }>;
    claim(): Promise<{
        data: {
            claim_cancel: number;
            claim_product_return: number;
            claim_exchange: number;
            inquiry_product: number;
            inquiry_individual: number;
            inquiry_product_review: number;
        };
    }>;
    getProduct(): Promise<{
        data: {
            product_selling: number;
            product_sold_out: number;
            product_lacks: number;
            product_end: number;
        };
    }>;
    salesGraph(): Promise<{
        data: {
            selling_graph_month: number;
            selling_graph_sale_price: any[];
        };
    }>;
}
