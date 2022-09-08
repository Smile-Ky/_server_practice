import { ProductRepository } from "../../repository/product/Product.repository";
import { ProductToClassRepository } from "../../repository/product/ProductToClass.repository";
import { ProductOptionRepository } from "../../repository/product/ProductOption.repository";
import { ProductOptionDetailRepository } from "../../repository/product/ProductOptionDetail.repository";
import { ProductIconToProductRepository } from "../../repository/product/ProductIconToProduct.repository";
import { ProductIconRepository } from "../../repository/product/ProductIcon.repository";
import { ProductRelatedRepository } from "../../repository/product/ProductRelated.repository";
import { ProductImageRepository } from "../../repository/product/ProductImage.repository";
import { ProductBrandRepository } from "../../repository/product/ProductBrand.repository";
import { ProductSearchKeywordRepository } from "../../repository/product/ProductSearchKeyword.repository";
import { ProductClassRepository } from "../../repository/product/ProductClass.repository";
import { MemberRepository } from "../../repository/member/Member.repository";
import { ReqCartAddDTO } from "./DTO/ReqCartAddDTO";
import { ReqCartIdxDTO } from "./DTO/ReqCartIdxDTO";
import { ReqCartCountDTO } from "./DTO/ReqCartCountDTO";
import { CartRepository } from "../../repository/cart/Cart.repository";
import { ProductLikeRepository } from "../../repository/product/ProductLike.repository";
export declare class CartService {
    private productRepository;
    private productToClassRepository;
    private productOptionRepository;
    private productOptionDetailRepository;
    private productIconToProductRepository;
    private productIconRepository;
    private productRelatedRepository;
    private productImageRepository;
    private productBrandRepository;
    private productSearchKeywordRepository;
    private productClassRepository;
    private memberRepository;
    private cartRepository;
    private productLikeRepository;
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, memberRepository: MemberRepository, cartRepository: CartRepository, productLikeRepository: ProductLikeRepository);
    cartAdd(member_id: string, req: ReqCartAddDTO): Promise<{
        result: string;
        data: {
            deliveryTemplateList: {
                productList: any[];
                delivery_text: string;
                region_text: string;
                except_text: string;
            }[];
            product_listprice: number;
            product_dcprice: number;
            product_discount_amount: number;
            total_delivery_price: number;
            delivery_price: number;
            payment_price: number;
        }[];
        cartIxs: any;
    }>;
    getCart(member_id: string): Promise<{
        result: string;
        data: {
            cartDeleteDay: string;
            cart: {
                deliveryTemplateList: {
                    productList: any;
                    delivery_text: string;
                    region_text: string;
                    except_text: string;
                }[];
                product_listprice: number;
                product_dcprice: number;
                product_discount_amount: number;
                total_delivery_price: number;
                delivery_price: number;
                payment_price: number;
            }[];
            relationGoodsList: any[];
            cartSummary: {
                product_listprice: number;
                product_dcprice: number;
                product_discount_amount: number;
                total_delivery_price: number;
                payment_price: number;
                mileage: number;
                productDiscountList: {
                    type: string;
                    title: string;
                    discount_amount: number;
                }[];
                pids: any[];
            };
        };
    }>;
    updateCount(member_id: string, req: ReqCartCountDTO): Promise<{
        result: string;
        summary: {
            product_listprice: number;
            product_dcprice: number;
            product_discount_amount: number;
            total_delivery_price: number;
            payment_price: number;
            mileage: number;
            productDiscountList: {
                type: string;
                title: string;
                discount_amount: number;
            }[];
            pids: any[];
        };
    }>;
    deleteCart(member_id: string, req: ReqCartIdxDTO): Promise<{
        data: {
            result: string;
            summary: {
                product_listprice: number;
                product_dcprice: number;
                product_discount_amount: number;
                total_delivery_price: number;
                payment_price: number;
                mileage: number;
                productDiscountList: {
                    type: string;
                    title: string;
                    discount_amount: number;
                }[];
                pids: any[];
            };
            data: {
                deliveryTemplateList: {
                    productList: any;
                    delivery_text: string;
                    region_text: string;
                    except_text: string;
                }[];
                product_listprice: number;
                product_dcprice: number;
                product_discount_amount: number;
                total_delivery_price: number;
                delivery_price: number;
                payment_price: number;
            }[];
        };
    }>;
    getCartSummary(member_id: string, req: ReqCartIdxDTO): Promise<{
        result: string;
        summary: {
            product_listprice: number;
            product_dcprice: number;
            product_discount_amount: number;
            total_delivery_price: number;
            payment_price: number;
            mileage: number;
            productDiscountList: {
                type: string;
                title: string;
                discount_amount: number;
            }[];
            pids: any[];
        };
    }>;
}
