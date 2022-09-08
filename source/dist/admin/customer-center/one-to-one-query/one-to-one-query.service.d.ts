import { QueryOneToOneRepository } from "../../../repository/query/QueryOneToOne.repository";
import { MemberRepository } from "../../../repository/member/Member.repository";
import { ReqQueryFromDto } from "./DTO/ReqQueryFrom.dto";
import { ReqAnswerFromDto } from "./DTO/ReqAnswerFrom.dto";
import { QueryOneToOneEntity } from "../../../entity/query/QueryOneToOne.entity";
export declare class OneToOneQueryService {
    private queryOneToOneRepository;
    private memberRepository;
    constructor(queryOneToOneRepository: QueryOneToOneRepository, memberRepository: MemberRepository);
    find(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findId(id: string): Promise<any>;
    query(memberId: string, data: ReqQueryFromDto): Promise<QueryOneToOneEntity>;
    answer(id: string, data: ReqAnswerFromDto): Promise<import("typeorm").UpdateResult>;
    queryUpdate(id: string, data: ReqQueryFromDto): Promise<void>;
    delete(id: string): Promise<void>;
}
