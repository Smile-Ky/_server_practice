import { ProductRepository } from "../../../repository/product/Product.repository";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { CouponRepository } from "../../../repository/coupon/Coupon.repository";
import { OfflineCouponToCouponRepository } from "../../../repository/offline-coupon/OfflineCouponToCoupon.repository";
import { OfflineCouponInstanceRepository } from "../../../repository/offline-coupon/OfflineCouponInstance.repository";
import { OfflineCouponRepository } from "../../../repository/offline-coupon/OfflineCoupon.repository";
import { ReqFindOfflineCouponDTO } from "./DTO/ReqFindOfflineCouponDTO";
import { ReqOfflineCouponDTO } from "./DTO/ReqOfflineCouponDTO";
import { ReqIssuanceFindDTO } from "../coupon-manager/DTO/ReqIssuanceFindDTO";
import { ReqCouponIdFindDTO } from "../coupon-manager/DTO/ReqCouponIdFindDTO";
export declare class OfflineCouponManagerService {
    private productRepository;
    private memberGroupRepository;
    private memberRepository;
    private couponRepository;
    private offlineCouponToCouponRepository;
    private offlineCouponInstanceRepository;
    private offlineCouponRepository;
    constructor(productRepository: ProductRepository, memberGroupRepository: MemberGroupRepository, memberRepository: MemberRepository, couponRepository: CouponRepository, offlineCouponToCouponRepository: OfflineCouponToCouponRepository, offlineCouponInstanceRepository: OfflineCouponInstanceRepository, offlineCouponRepository: OfflineCouponRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(req: ReqFindOfflineCouponDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findSimpleId(offlineCouponId: string): Promise<{
        data: any;
    }>;
    findFullId(offlineCouponId: string): Promise<{
        data: any;
        random_coupon_list: any;
        same_coupon_list: any;
    }>;
    findPaymentCouponList(): Promise<{
        data: any;
    }>;
    save(req: ReqOfflineCouponDTO): Promise<string>;
    update(req: ReqOfflineCouponDTO, offlineCouponId: string): Promise<string>;
    delete(offlineCouponId: string): Promise<string>;
    findIssuanceAll(offlineCouponId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findIssuance(req: ReqIssuanceFindDTO, offlineCouponId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    cancelIssuance(req: ReqCouponIdFindDTO, offlineCouponId: string): Promise<string>;
}
