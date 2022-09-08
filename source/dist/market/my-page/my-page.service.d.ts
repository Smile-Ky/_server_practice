/// <reference types="multer-s3" />
import { ReviewImageRepository } from 'src/repository/review/ReviewImage.repository';
import { CouponRepository } from "../../repository/coupon/Coupon.repository";
import { CouponToProductRepository } from "../../repository/coupon/CouponToProduct.repository";
import { ReqInsertCouponDto } from "./DTO/ReqInsertCoupon.dto";
import { OfflineCouponInstanceRepository } from "../../repository/offline-coupon/OfflineCouponInstance.repository";
import { MemberRepository } from "../../repository/member/Member.repository";
import { ReqGetMyReviewInfoDto } from "./DTO/ReqGetMyReviewInfo.dto";
import { OrderMainRepository } from "../../repository/order/OrderMain.repository";
import { OrderDetailRepository } from "../../repository/order/OrderDetail.repository";
import { ReviewRepository } from "../../repository/review/Review.repository";
import { ReviewSettingRepository } from "../../repository/review/ReviewSetting.repository";
import { MemberPetRepository } from "../../repository/member/MemberPet.repository";
import { ReqPostInsertReviewDto } from "./DTO/ReqPostInsertReview.dto";
import { ProductOptionRepository } from "../../repository/product/ProductOption.repository";
import { MemberMileageRepository } from "../../repository/member/MemberMileage.repository";
import { MemberMileageLogRepository } from "../../repository/member/MemberMileageLog.repository";
import { ReqMyPointsDto } from "./DTO/ReqMyPoints.dto";
import { BannerRepository } from "../../repository/banner/Banner.repository";
export declare class MyPageService {
    private reviewImageRepository;
    private couponRepository;
    private couponToProductRepository;
    private offlineCouponInstanceRepository;
    private memberRepository;
    private orderMainRepository;
    private orderDetailRepository;
    private reviewRepository;
    private reviewSettingRepository;
    private memberPetRepository;
    private productOptionRepository;
    private memberMileageRepository;
    private memberMileageLogRepository;
    private bannerRepository;
    constructor(reviewImageRepository: ReviewImageRepository, couponRepository: CouponRepository, couponToProductRepository: CouponToProductRepository, offlineCouponInstanceRepository: OfflineCouponInstanceRepository, memberRepository: MemberRepository, orderMainRepository: OrderMainRepository, orderDetailRepository: OrderDetailRepository, reviewRepository: ReviewRepository, reviewSettingRepository: ReviewSettingRepository, memberPetRepository: MemberPetRepository, productOptionRepository: ProductOptionRepository, memberMileageRepository: MemberMileageRepository, memberMileageLogRepository: MemberMileageLogRepository, bannerRepository: BannerRepository);
    getMain(): Promise<void>;
    getOrderList(): Promise<void>;
    getReturnList(): Promise<void>;
    getOrderDetail(): Promise<void>;
    getMyReviewInfo(member_id: string, data: ReqGetMyReviewInfoDto): Promise<{
        result: string;
        data: {
            ordInfo: any;
            modify: boolean;
            bbsInfo: {};
            config: any;
            petInfo: {
                list: any;
                totalCount: number;
                page: number;
                pageSize: number;
            };
        };
    }>;
    getMyReviewList(member_id: string): Promise<{
        result: string;
        data: {
            reviewList: {
                total: any;
                list: any;
                paging: {
                    first_page: number;
                    prev_jump: number;
                    prev_page: number;
                    cur_page: number;
                    next_page: number;
                    next_jump: number;
                    last_page: number;
                    page_list: number[];
                };
                per_page: number;
            };
            goodsList: any;
            config: any;
        };
    }>;
    insertReview(member_id: string, data: ReqPostInsertReviewDto): Promise<{
        data: {
            result: string;
            data: string;
        };
    }>;
    updateOrderStatus(): Promise<void>;
    myPoints(member_id: string, data: ReqMyPointsDto): Promise<{
        data: {
            result: string;
            data: {
                myPointInfo: {
                    myMileAmount: string;
                    myMileageWaitAmount: string;
                    availMileAmount: string;
                    usedMileAmount: string;
                };
                myPointList: {
                    list: any;
                };
            };
        };
    }>;
    myCoupons(memberId: string): Promise<{
        data: {
            result: string;
            data: {
                coupons: any;
                banner: any;
            };
        };
    }>;
    insertCoupon(member_id: string, data: ReqInsertCouponDto): Promise<{
        data: {
            result: string;
            data?: undefined;
        };
    } | {
        data: {
            result: string;
            data: string;
        };
    }>;
    imageUpload(images: Array<Express.MulterS3.File>): Promise<any[] | {
        image_id: string;
        image_url: string;
    }>;
}
