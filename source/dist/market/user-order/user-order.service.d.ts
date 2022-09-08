import { ProductRepository } from "../../repository/product/Product.repository";
import { CartRepository } from "../../repository/cart/Cart.repository";
import { ProductClassRepository } from "../../repository/product/ProductClass.repository";
import { ProductLikeRepository } from "../../repository/product/ProductLike.repository";
import { OrderMainRepository } from "../../repository/order/OrderMain.repository";
import { MemberRepository } from "../../repository/member/Member.repository";
import { MemberAddressRepository } from "../../repository/member/MemberAddress.repository";
import { ReqUpdateAddressBookDto } from "./DTO/ReqUpdateAddressBook.dto";
import { ReqUpdateAddressDefaultDto } from "./DTO/ReqUpdateAddressDefault.dto";
import { ReqGetOrderInputDto } from "./DTO/ReqGetOrderInput.dto";
import { MemberMileageRepository } from "../../repository/member/MemberMileage.repository";
import { CouponToMemberRepository } from "../../repository/coupon/CouponToMember.repository";
import { OfflineCouponInstanceRepository } from "../../repository/offline-coupon/OfflineCouponInstance.repository";
export declare class UserOrderService {
    private productRepository;
    private productClassRepository;
    private productLikeRepository;
    private cartRepository;
    private orderMainRepository;
    private memberRepository;
    private memberAddressRepository;
    private memberMileageRepository;
    private couponToMemberRepository;
    private offlineCouponInstanceRepository;
    constructor(productRepository: ProductRepository, productClassRepository: ProductClassRepository, productLikeRepository: ProductLikeRepository, cartRepository: CartRepository, orderMainRepository: OrderMainRepository, memberRepository: MemberRepository, memberAddressRepository: MemberAddressRepository, memberMileageRepository: MemberMileageRepository, couponToMemberRepository: CouponToMemberRepository, offlineCouponInstanceRepository: OfflineCouponInstanceRepository);
    getShppingAddress(memberId: string, oid: string): Promise<{
        data: {
            result: string;
            data: {
                list: any;
                paging: {};
            };
        };
    }>;
    updateAddressBook(member_id: string, data: ReqUpdateAddressBookDto): Promise<{
        data: {
            result: string;
            data: any;
        };
    }>;
    updateAddressDefault(member_id: string, data: ReqUpdateAddressDefaultDto): Promise<{
        data: string;
    }>;
    getOrderInput(member_id: string, data: ReqGetOrderInputDto): Promise<{
        result: string;
        data: {
            shipping_info: any;
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
                payment_price: number;
            }[];
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
            mileageConditionUseLimitType: string;
            mileageConditionUseLimitValue: number;
            userMileage: any;
            mileageConditionMinMileage: number;
            mileageConditionUseUnit: number;
            mileageConditionMinBuyAmt: number;
            maxUseMileage: number;
            myCartCouponList: any[];
            userCouponCnt: number;
            coupon_use_yn: string;
        };
    }>;
    updateOrderInput(): Promise<{}>;
    paymentAction(): Promise<{}>;
    getOrderComplete(): Promise<{}>;
}
