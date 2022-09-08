import { MemberRepository } from "../../../repository/member/Member.repository";
import { ReqMemberFindDTO } from "./DTO/ReqMemberFindDTO";
import { ReqUserFromDTO } from "./DTO/ReqUserFromDTO";
import { MemberEntity } from "../../../entity/member/Member.entity";
import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { MemberAddressRepository } from "../../../repository/member/MemberAddress.repository";
import { MemberLastVisitRepository } from "../../../repository/member/MemberLastVisit.repository";
import { MemberMileageRepository } from "../../../repository/member/MemberMileage.repository";
import { MemberPetRepository } from "../../../repository/member/MemberPet.repository";
import { ReqMemberUpdateDto } from "./DTO/ReqMemberUpdate.dto";
import { ReqMemberPetUpdateDto } from "./DTO/ReqMemberPetUpdate.dto";
export declare class MemberMangerService {
    private memberRepository;
    private memberMileageRepository;
    private memberGroupRepository;
    private memberAddressRepository;
    private memberLastVisitRepository;
    private memberPetRepository;
    constructor(memberRepository: MemberRepository, memberMileageRepository: MemberMileageRepository, memberGroupRepository: MemberGroupRepository, memberAddressRepository: MemberAddressRepository, memberLastVisitRepository: MemberLastVisitRepository, memberPetRepository: MemberPetRepository);
    findAll(page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    findById(id: string): Promise<any>;
    find(data: ReqMemberFindDTO, page: number, pageSize: number): Promise<{
        data: any;
        page: {
            totalData: number;
            totalPages: number;
            requestPage: any;
            requestSize: any;
        };
    }>;
    create(data: ReqUserFromDTO): Promise<MemberEntity>;
    update(userId: string, data: ReqMemberUpdateDto): Promise<void>;
    updatePet(id: string, data: ReqMemberPetUpdateDto): Promise<void>;
    delete(id: string): Promise<void>;
}
