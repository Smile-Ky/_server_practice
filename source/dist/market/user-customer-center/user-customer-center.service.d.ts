import { NoticeRepository } from "../../repository/main/Notice.repository";
import { QueryFaqRepository } from "../../repository/query/QueryFaq.repository";
import { ReqGetBoardListDto } from "./DTO/ReqGetBoardList.dto";
import { ReviewRepository } from "../../repository/review/Review.repository";
import { ReviewCommentRepository } from "../../repository/review/ReviewComment.repository";
import { ReviewImageRepository } from "../../repository/review/ReviewImage.repository";
import { ReviewLikeRepository } from "../../repository/review/ReviewLike.repository";
import { ReviewSettingRepository } from "../../repository/review/ReviewSetting.repository";
import { ReviewSettingToMemberGroupRepository } from "../../repository/review/ReviewSettingToMemberGroup.repository";
import { ReqGetReviewListDto } from "./DTO/ReqGetReviewList.dto";
import { ReqGetReviewInfoDto } from "./DTO/ReqGetReviewInfo.dto";
import { ReqInsertReviewCommentDto } from "./DTO/ReqInsertReviewComment.dto";
import { ReqUpdateReviewLikeDto } from "./DTO/ReqUpdateReviewLike.dto";
import { MemberPetRepository } from "src/repository/member/MemberPet.repository";
import { MemberRepository } from "src/repository/member/Member.repository";
import { ReqGetAllReviewList } from "./DTO/ReqGetAllReviewList";
export declare class UserCustomerCenterService {
    private noticeRepository;
    private queryFaqRepository;
    private reviewRepository;
    private reviewCommentRepository;
    private reviewImageRepository;
    private memberRepository;
    private memberPetRepository;
    private reviewLikeRepository;
    private reviewSettingRepository;
    private reviewSettingToMemberGroupRepository;
    constructor(noticeRepository: NoticeRepository, queryFaqRepository: QueryFaqRepository, reviewRepository: ReviewRepository, reviewCommentRepository: ReviewCommentRepository, reviewImageRepository: ReviewImageRepository, memberRepository: MemberRepository, memberPetRepository: MemberPetRepository, reviewLikeRepository: ReviewLikeRepository, reviewSettingRepository: ReviewSettingRepository, reviewSettingToMemberGroupRepository: ReviewSettingToMemberGroupRepository);
    getBoardList(data: ReqGetBoardListDto): Promise<{
        result: string;
        data: {
            total: number;
            list: any;
        };
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
    }>;
    getAllReviewList(member_id: string, data: ReqGetAllReviewList): Promise<{
        result: string;
        data: {
            total: number;
            list: any[];
        };
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
    }>;
    getReviewList(member_id: string, data: ReqGetReviewListDto): Promise<{
        result: string;
        data: {
            total: number;
            list: any[];
        };
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
    }>;
    getReviewInfo(data: ReqGetReviewInfoDto): Promise<{
        result: string;
        info: {
            review: any;
            cmt: any[];
            cmtCount: number;
        };
    }>;
    insertReviewComment(memberId: string, data: ReqInsertReviewCommentDto): Promise<{
        data: {
            result: string;
            info: any[];
        };
    }>;
    updateReviewLike(memberId: string, data: ReqUpdateReviewLikeDto): Promise<{
        data: {
            result: string;
            likeCheck: string;
        };
    }>;
}
