/// <reference types="multer-s3" />
import { ProductRepository } from "../../../repository/product/Product.repository";
import { ProductToClassRepository } from "../../../repository/product/ProductToClass.repository";
import { ProductOptionRepository } from "../../../repository/product/ProductOption.repository";
import { ProductOptionDetailRepository } from "../../../repository/product/ProductOptionDetail.repository";
import { ProductIconToProductRepository } from "../../../repository/product/ProductIconToProduct.repository";
import { ProductIconRepository } from "../../../repository/product/ProductIcon.repository";
import { ProductRelatedRepository } from "../../../repository/product/ProductRelated.repository";
import { ProductImageRepository } from "../../../repository/product/ProductImage.repository";
import { ProductBrandRepository } from "../../../repository/product/ProductBrand.repository";
import { ProductSearchKeywordRepository } from "../../../repository/product/ProductSearchKeyword.repository";
import { ProductClassRepository } from "../../../repository/product/ProductClass.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { ReviewRepository } from "../../../repository/review/Review.repository";
import { ReviewSettingRepository } from "../../../repository/review/ReviewSetting.repository";
import { ReviewSettingToMemberGroupRepository } from "../../../repository/review/ReviewSettingToMemberGroup.repository";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { ReviewCommentRepository } from "../../../repository/review/ReviewComment.repository";
import { ReviewLikeRepository } from "../../../repository/review/ReviewLike.repository";
import { ReviewImageRepository } from "../../../repository/review/ReviewImage.repository";
import { ReqReviewCreateMemberDto } from "./DTO/ReqReviewCreateMember.dto";
import { ReqReviewCreateAdminDto } from "./DTO/ReqReviewCreateAdmin.dto";
import { ReviewEntity } from "../../../entity/review/Review.entity";
import { ReqReviewCommentDto } from "./DTO/ReqReviewComment.dto";
import { ReviewCommentEntity } from "../../../entity/review/ReviewComment.entity";
import { ReqReviewUpdateDto } from "./DTO/ReqReviewUpdate.dto";
import { ReqReviewFindDto } from "./DTO/ReqReviewFind.dto";
export declare class ProductReviewListService {
    private reviewRepository;
    private reviewCommentRepository;
    private reviewLikeRepository;
    private reviewImageRepository;
    private reviewSettingRepository;
    private reviewSettingToMemberGroupRepository;
    private memberRepository;
    private memberGroupRepository;
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
    constructor(reviewRepository: ReviewRepository, reviewCommentRepository: ReviewCommentRepository, reviewLikeRepository: ReviewLikeRepository, reviewImageRepository: ReviewImageRepository, reviewSettingRepository: ReviewSettingRepository, reviewSettingToMemberGroupRepository: ReviewSettingToMemberGroupRepository, memberRepository: MemberRepository, memberGroupRepository: MemberGroupRepository, productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productRelatedRepository: ProductRelatedRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(find: ReqReviewFindDto, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<any>;
    createUser(data: ReqReviewCreateMemberDto): Promise<ReviewEntity>;
    createAdmin(data: ReqReviewCreateAdminDto): Promise<ReviewEntity>;
    createComment(id: string, data: ReqReviewCommentDto): Promise<ReviewCommentEntity>;
    updateOpen(id: string, data: boolean): Promise<import("typeorm").UpdateResult>;
    updateReview(id: string, data: ReqReviewUpdateDto): Promise<void>;
    updateComment(id: string, data: ReqReviewCommentDto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<void>;
    deleteComment(id: string): Promise<import("typeorm").DeleteResult>;
    imageUpload(images: Array<Express.MulterS3.File>): Promise<any[] | {
        image_id: string;
        image_url: string;
    }>;
}
