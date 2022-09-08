import { MemberRepository } from "../../repository/member/Member.repository";
import { MemberMileageRepository } from "../../repository/member/MemberMileage.repository";
import { MemberMileageLogRepository } from "../../repository/member/MemberMileageLog.repository";
import { CouponRepository } from "../../repository/coupon/Coupon.repository";
import { CouponToMemberGroupRepository } from "../../repository/coupon/CouponToMemberGroup.repository";
import { CouponToMemberRepository } from "../../repository/coupon/CouponToMember.repository";
import { CouponToProductClassRepository } from "../../repository/coupon/CouponToProductClass.repository";
import { ProductClassRepository } from "../../repository/product/ProductClass.repository";
import { CouponToProductRepository } from "../../repository/coupon/CouponToProduct.repository";
import { ReqPostMakePointDto } from "./DTO/ReqPostMakePoint.dto";
import { ReqPostMakeCouponDto } from "./DTO/ReqPostMakeCoupon.dto";
import { ReqPostGetUserCouponCountDto } from "./DTO/ReqPostGetUserCouponCount.dto";
import { ReqPostGetUserPointDto } from "./DTO/ReqPostGetUserPoint.dto";
export declare class PuppyPointService {
    private memberRepository;
    private memberMileageRepository;
    private memberMileageLogRepository;
    private couponRepository;
    private couponToMemberGroupRepository;
    private couponToMemberRepository;
    private couponToProductClassRepository;
    private productClassRepository;
    private couponToProductRepository;
    constructor(memberRepository: MemberRepository, memberMileageRepository: MemberMileageRepository, memberMileageLogRepository: MemberMileageLogRepository, couponRepository: CouponRepository, couponToMemberGroupRepository: CouponToMemberGroupRepository, couponToMemberRepository: CouponToMemberRepository, couponToProductClassRepository: CouponToProductClassRepository, productClassRepository: ProductClassRepository, couponToProductRepository: CouponToProductRepository);
    postMakePoint(data: ReqPostMakePointDto): Promise<{
        code: string;
        result: string;
        total: string;
    }>;
    postGetUserPoint(data: ReqPostGetUserPointDto): Promise<{
        code: string;
        result: string;
        total: string;
    }>;
    getCouponList(): Promise<{
        code: string;
        result: string;
        couponData: any;
    }>;
    postMakeCoupon(data: ReqPostMakeCouponDto): Promise<{
        code: string;
        result: string;
    }>;
    postGetUserCouponCount(data: ReqPostGetUserCouponCountDto): Promise<{
        code: string;
        result: string;
        total: string;
    }>;
}
