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
import { MemberGroupRepository } from "../../repository/member/MemberGroup.repository";
import { ReqGetGoodsListDto } from "./DTO/ReqGetGoodsList.dto";
import { QueryProductEntity } from "src/entity/query/QueryProduct.entity";
import { QueryProductRepository } from "src/repository/query/QueryProduct.repository";
import { ReqInsertQnaDto } from "./DTO/ReqInsertQna.dto";
import { ReqGetQnaList } from "./DTO/ReqGetQnaList.dto";
import { ReqWishDto } from "./DTO/ReqWish.dto";
import { ProductLikeRepository } from "../../repository/product/ProductLike.repository";
import { ReqDoGoodsSearchDto } from "./DTO/ReqDoGoodsSearch.dto";
import { KeywordRepository } from "../../repository/keyword/Keyword.repository";
import { ReqGetViewDto } from "./DTO/ReqGetView.dto";
import { ReviewRepository } from "../../repository/review/Review.repository";
import { BannerRepository } from "../../repository/banner/Banner.repository";
export declare class ProductInfoService {
    private productRepository;
    private productToClassRepository;
    private productOptionRepository;
    private productOptionDetailRepository;
    private productIconToProductRepository;
    private productIconRepository;
    private productImageRepository;
    private productBrandRepository;
    private productSearchKeywordRepository;
    private productClassRepository;
    private memberRepository;
    private memberGroupRepository;
    private queryProductRepository;
    private productLikeRepository;
    private keywordRepository;
    private reviewRepository;
    private productRelatedRepository;
    private bannerRepository;
    constructor(productRepository: ProductRepository, productToClassRepository: ProductToClassRepository, productOptionRepository: ProductOptionRepository, productOptionDetailRepository: ProductOptionDetailRepository, productIconToProductRepository: ProductIconToProductRepository, productIconRepository: ProductIconRepository, productImageRepository: ProductImageRepository, productBrandRepository: ProductBrandRepository, productSearchKeywordRepository: ProductSearchKeywordRepository, productClassRepository: ProductClassRepository, memberRepository: MemberRepository, memberGroupRepository: MemberGroupRepository, queryProductRepository: QueryProductRepository, productLikeRepository: ProductLikeRepository, keywordRepository: KeywordRepository, reviewRepository: ReviewRepository, productRelatedRepository: ProductRelatedRepository, bannerRepository: BannerRepository);
    getGoodsList(memberId: string, data: ReqGetGoodsListDto): Promise<{
        data: {
            data: {
                total: any;
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
                cid: string;
            };
            subCategorys: any[];
        };
    }>;
    getView(memberId: string, data: ReqGetViewDto): Promise<{
        data: {
            info: any;
            setting: {
                delivery: {
                    deliveryClaimText: string;
                };
                relationInfos: any;
                premiumReviewTotal: any;
                reviewTotal: any;
                allReviewTotal: any;
                qnaTotal: any;
                myQnaTotal: any;
                qnaDivs: {
                    ix: number;
                    div_name: string;
                }[];
            };
            devOptionData: {
                options: any[];
                viewOptions: {
                    option_name: string;
                    optionDetailList: any;
                }[];
            };
            result: string;
        };
    }>;
    insertQna(member_id: string, data: ReqInsertQnaDto): Promise<QueryProductEntity>;
    getQnaList(memberId: string, data: ReqGetQnaList): Promise<{
        data: {
            result: string;
            data: {
                total: any;
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
            };
        };
    }>;
    wish(memberId: string, data: ReqWishDto): Promise<{
        data: string;
    }>;
    getSearch(): Promise<{
        data: {
            popularKeyword: any;
            newGoodsList: any[];
        };
    }>;
    doGoodsSearch(memberId: string, data: ReqDoGoodsSearchDto): Promise<{
        data: {
            total: number;
            list: any[];
            paging: {};
        };
    }>;
}
