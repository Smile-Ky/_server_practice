import { CouponRepository } from "../../../repository/coupon/Coupon.repository";
import { ReqCouponSaveDTO } from "./DTO/ReqCouponSaveDTO";
import { CouponToMemberGroupRepository } from "../../../repository/coupon/CouponToMemberGroup.repository";
import { CouponToMemberRepository } from "../../../repository/coupon/CouponToMember.repository";
import { CouponToProductClassRepository } from "../../../repository/coupon/CouponToProductClass.repository";
import { ProductClassRepository } from "../../../repository/product/ProductClass.repository";
import { CouponToProductRepository } from "../../../repository/coupon/CouponToProduct.repository";
import { ProductRepository } from "../../../repository/product/Product.repository";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { ReqCouponFindDTO } from "./DTO/ReqCouponFindDTO";
import { ReqCouponFindUserDTO } from "./DTO/ReqCouponFindUserDTO";
import { ReqCouponIdFindDTO } from "./DTO/ReqCouponIdFindDTO";
import { ReqUserFindDTO } from "./DTO/ReqUserFindDTO";
import { MemberRepository } from "../../../repository/member/Member.repository";
export declare class CouponManagerService {
    private couponRepository;
    private couponToMemberGroupRepository;
    private couponToMemberRepository;
    private couponToProductClassRepository;
    private productClassRepository;
    private couponToProductRepository;
    private productRepository;
    private memberGroupRepository;
    private memberRepository;
    constructor(couponRepository: CouponRepository, couponToMemberGroupRepository: CouponToMemberGroupRepository, couponToMemberRepository: CouponToMemberRepository, couponToProductClassRepository: CouponToProductClassRepository, productClassRepository: ProductClassRepository, couponToProductRepository: CouponToProductRepository, productRepository: ProductRepository, memberGroupRepository: MemberGroupRepository, memberRepository: MemberRepository);
    findSimple(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(req: ReqCouponFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(couponId: String): Promise<any>;
    save(data: ReqCouponSaveDTO): Promise<string>;
    updateFindId(couponId: String): Promise<{
        data: any;
        issued_user_class_id: any;
        product_id_list: any;
        product_class_id_list: any;
    }>;
    update(couponId: string, data: ReqCouponSaveDTO): Promise<void>;
    delete(couponId: string): Promise<string>;
    findIssuanceCouponUserAll(couponId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findIssuanceCouponUser(reqCouponFindUserDTO: ReqCouponFindUserDTO, couponId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    cancelIssuanceCoupon(couponId: string, data: ReqCouponIdFindDTO): Promise<string>;
    preIssuanceCoupIssuanceCouponAllonAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    preIssuanceCoupon(reqCouponFindUserDTO: ReqCouponFindUserDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    IssuanceCoupIssuanceCouponAllonAll(couponId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    IssuanceCoupon(reqCouponFindUserDTO: ReqCouponFindUserDTO, couponId: string, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findIssuanceCoupon(reqUserFindDTO: ReqUserFindDTO, couponId: string): Promise<string>;
}
