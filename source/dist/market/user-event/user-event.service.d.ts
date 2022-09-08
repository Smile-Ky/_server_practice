import { PlanEventRepository } from "../../repository/plan/PlanEvent.repository";
import { PlanEventCommentRepository } from "../../repository/plan/PlanEventComment.repository";
import { MemberRepository } from "../../repository/member/Member.repository";
import { MemberPetRepository } from "../../repository/member/MemberPet.repository";
import { ReqFindCommentDto } from "./DTO/ReqFindComment.dto";
import { ReqAddCommentByUserDto } from "./DTO/ReqAddCommentByUser.dto";
import { ReqCommentModifyDto } from "./DTO/ReqCommentModify.dto";
export declare class UserEventService {
    private planEventRepository;
    private planEventCommentRepository;
    private memberRepository;
    private memberPetRepository;
    constructor(planEventRepository: PlanEventRepository, planEventCommentRepository: PlanEventCommentRepository, memberRepository: MemberRepository, memberPetRepository: MemberPetRepository);
    getCommentList(member_id: string, data: ReqFindCommentDto): Promise<{
        code: string;
        msg: string;
        data: any[];
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
    addCommentByUser(userId: string, data: ReqAddCommentByUserDto): Promise<{
        data: {
            result: string;
        };
    }>;
    commentModify(userId: string, data: ReqCommentModifyDto): Promise<{
        data: {
            result: string;
        };
    }>;
    delComment(userId: string, data: any): Promise<{
        data: {
            result: string;
        };
    }>;
}
