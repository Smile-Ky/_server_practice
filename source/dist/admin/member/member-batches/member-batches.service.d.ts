import { MemberRepository } from "../../../repository/member/Member.repository";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { MemberMileageRepository } from "../../../repository/member/MemberMileage.repository";
import { MemberMileageLogRepository } from "../../../repository/member/MemberMileageLog.repository";
import { ReqMemberBatchFindDTO } from "./DTO/ReqMemberBatchFindDTO";
import { BatchesGroupDTO } from "./DTO/batchesGroupDTO";
import { BatchesMileageDTO } from "./DTO/batchesMaileageDTO";
export declare class MemberBatchesService {
    private memberRepository;
    private memberGroupRepository;
    private memberMileageRepository;
    private memberMileageLogRepository;
    constructor(memberRepository: MemberRepository, memberGroupRepository: MemberGroupRepository, memberMileageRepository: MemberMileageRepository, memberMileageLogRepository: MemberMileageLogRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    find(find: ReqMemberBatchFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    groupChange(data: BatchesGroupDTO): Promise<void>;
    MileageChange(data: BatchesMileageDTO): Promise<void>;
}
