import { ReqUpdateCancelStatusDto } from "./DTO/ReqUpdateCancelStatus.dto";
import { OrderDetailRepository } from "../../repository/order/OrderDetail.repository";
import { OrderMainRepository } from "../../repository/order/OrderMain.repository";
import { OrderPaymentRepository } from "../../repository/order/OrderPayment.repository";
import { MemberRepository } from "../../repository/member/Member.repository";
import { OrderRefundRepository } from "../../repository/order/OrderRefund.repository";
import { MemberAddressRepository } from "../../repository/member/MemberAddress.repository";
import { ProductOptionRepository } from "../../repository/product/ProductOption.repository";
import { ProductOptionDetailRepository } from "../../repository/product/ProductOptionDetail.repository";
import { ProductBrandRepository } from "../../repository/product/ProductBrand.repository";
import { DeliveryCompanyRepository } from "../../repository/delivery/DeliveryCompany.repository";
import { OrderHistoryRepository } from "../../repository/order/OrderHistory.repository";
import { ReqGetCancelInfoDto } from "./DTO/ReqGetCancelInfo.dto";
import { ReqUpdateOrderClaimDto } from "./DTO/ReqUpdateOrderClaim.dto";
import { ReqGetReturnInfoDto } from "./DTO/ReqGetReturnInfo.dto";
import { ReqGetDeleveryTrackingDto } from "./DTO/ReqGetDeleveryTracking.dto";
import 'dotenv/config';
import { MemberPetRepository } from "../../repository/member/MemberPet.repository";
import { ReqPostUpdatePetInfoDto } from "./DTO/ReqPostUpdatePetInfo.dto";
import { ReqUpdateMyInfoDto } from "./DTO/ReqUpdateMyInfo.dto";
import { ReqDeleteWishDto } from "./DTO/ReqDeleteWish.dto";
import { ProductLikeRepository } from "../../repository/product/ProductLike.repository";
import { ReqMyWishListDto } from "./DTO/ReqMyWishList.dto";
import { ProductRepository } from "../../repository/product/Product.repository";
export declare class MyPageInfoService {
    private orderDetailRepository;
    private orderMainRepository;
    private orderPaymentRepository;
    private memberRepository;
    private orderRefundRepository;
    private memberAddressRepository;
    private productOptionRepository;
    private productOptionDetailRepository;
    private productBrandRepository;
    private deliveryCompanyRepository;
    private orderHistoryRepository;
    private memberPetRepository;
    private productLikeRepository;
    private productRepository;
    constructor(orderDetailRepository: OrderDetailRepository, orderMainRepository: OrderMainRepository, orderPaymentRepository: OrderPaymentRepository, memberRepository: MemberRepository, orderRefundRepository: OrderRefundRepository, memberAddressRepository: MemberAddressRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productBrandRepository: ProductBrandRepository, deliveryCompanyRepository: DeliveryCompanyRepository, orderHistoryRepository: OrderHistoryRepository, memberPetRepository: MemberPetRepository, productLikeRepository: ProductLikeRepository, productRepository: ProductRepository);
    getCancelInfo(data: ReqGetCancelInfoDto): Promise<{
        data: {
            result: string;
            bankList?: undefined;
            claimstatus?: undefined;
            orderData?: undefined;
            paymentInfo?: undefined;
            delivery_info?: undefined;
            cancelReason?: undefined;
        };
        result?: undefined;
    } | {
        result: string;
        data: {
            bankList: {
                hsbc: string;
                yh: string;
                sc: string;
                kn: string;
                kj: string;
                km: string;
                ku: string;
                nh: string;
                nh2: string;
                dk: string;
                bs: string;
                sl: string;
                su: string;
                sk: string;
                ss: string;
                sh: string;
                sn: string;
                wr: string;
                po: string;
                sj: string;
                jb: string;
                jj: string;
                kko: string;
                kbk: string;
                hn: string;
                hc: string;
            };
            claimstatus: import("../../entity/order/OrderMain.entity").OrderMainEntity;
            orderData: {
                order: {
                    order_detail_id: number;
                    order_main: import("../../entity/order/OrderMain.entity").OrderMainEntity;
                    order_state: string;
                    product_code: string;
                    ProductOption: import("../../entity/product/ProductOption.entity").ProductOptionEntity;
                    ProductOptionDetail: import("../../entity/product/ProductOptionDetail.entity").ProductOptionDetailEntity;
                    product_brand: import("../../entity/product/ProductBrand.entity").ProductBrandEntity;
                    product_sale_price: number;
                    order_product_count: number;
                    order_user_phone: string;
                    recipient_name: string;
                    recipient_phone: string;
                    recipient_address_number: string;
                    recipient_address: string;
                    recipient_address_detail: string;
                    recipient_message: string;
                    order_payment_method: string;
                    order_payment_platform: string;
                    delivery_price: string;
                    delivery_company_id: string;
                    delivery_invoice_code: string;
                    delivery_preparing_date: string;
                    delivery_start_date: string;
                    delivery_end_date: string;
                    delivery_message: string;
                    confirm_date: string;
                    claim_reason: string;
                    claim_date: string;
                    claim_clear_date: string;
                    claim_method: string;
                    return_delivery_name: string;
                    return_delivery_phone: string;
                    return_delivery_address_number: string;
                    return_delivery_address: string;
                    return_delivery_address_detail: string;
                    return_delivery_company_code: string;
                    return_delivery_invoice_code: string;
                    return_delivery_message: string;
                    re_delivery_name: string;
                    re_delivery_phone: string;
                    re_delivery_address_number: string;
                    re_delivery_address: string;
                    re_delivery_address_detail: string;
                    re_delivery_company_name: string;
                    re_delivery_invoice_code: string;
                    re_delivery_message: string;
                    re_origin_order: string;
                    estimated_mileage: number;
                    planning_discount: number;
                    coupon_discount: number;
                    member_discount: number;
                    special_discount: number;
                    offline_coupon_instance: import("../../entity/offline-coupon/OfflineCouponInstance.entity").OfflineCouponInstanceEntity;
                    coupon_to_member: import("../../entity/coupon/CouponToMember.entity").CouponToMemberEntity;
                    order_delivery: import("../../entity/order/OrderDelivery.Entity").OrderDeliveryEntity;
                };
            };
            paymentInfo: {
                use_reserve: number;
                total_dc: number;
                pt_dcprice: number;
                payment: import("typeorm").SelectQueryBuilder<import("../../entity/order/OrderPayment.Entity").OrderPaymentEntity>;
            };
            delivery_info: boolean;
            cancelReason: string;
            result?: undefined;
        };
    }>;
    updateCancelStatus(data: ReqUpdateCancelStatusDto): Promise<void>;
    updateOrderClaim(data: ReqUpdateOrderClaimDto): Promise<void>;
    getReturnInfo(data: ReqGetReturnInfoDto): Promise<void>;
    updateMyinfo(member_id: string, data: ReqUpdateMyInfoDto): Promise<{
        data: string;
    }>;
    myWishList(member_id: string, data: ReqMyWishListDto): Promise<{
        data: {
            result: string;
            data: {
                list: any;
                paging: {
                    totalData: number;
                    first_page: number;
                    prev_jump: number;
                    prev_page: any;
                    cur_page: any;
                    next_page: any;
                    next_jump: number;
                    last_page: number;
                    per_page: number;
                    page_list: number[];
                    qry_str: object;
                };
                total: any;
            };
        };
    }>;
    deleteWish(member_id: string, data: ReqDeleteWishDto): Promise<{
        data: {
            result: string;
        };
    }>;
    getDeleveryTracking(member_id: string, data: ReqGetDeleveryTrackingDto): Promise<"배송 정보가 없습니다" | {
        result: string;
        data: {
            itemName: any;
            invoiceNo: any;
            level: any;
            estimate: any;
            complete: boolean;
            trackingDetails: any;
            compnayInfo: {
                invoice_no: any;
                name: any;
            };
        };
    }>;
    getMyInfo(member_id: string): Promise<{
        result: string;
        data: {
            info: {
                list: any;
            };
            totalCount: number;
        };
    }>;
    updatePetInfo(member_id: string, data: ReqPostUpdatePetInfoDto): Promise<{
        result: string;
        data: any;
    }>;
    updateMypassword(): Promise<void>;
    checkAuthnum(): Promise<void>;
}
