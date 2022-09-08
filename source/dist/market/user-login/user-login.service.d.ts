import 'dotenv/config';
import { MemberRepository } from "../../repository/member/Member.repository";
import { MemberGroupRepository } from "../../repository/member/MemberGroup.repository";
import { MemberAddressRepository } from "../../repository/member/MemberAddress.repository";
import { MemberPetRepository } from "../../repository/member/MemberPet.repository";
import { MemberLastVisitRepository } from "../../repository/member/MemberLastVisit.repository";
import { MemberMileageRepository } from "../../repository/member/MemberMileage.repository";
export declare class UserLoginService {
    private memberRepository;
    private memberGroupRepository;
    private memberAddressRepository;
    private memberPetRepository;
    private memberLastVisitRepository;
    private memberMileageRepository;
    constructor(memberRepository: MemberRepository, memberGroupRepository: MemberGroupRepository, memberAddressRepository: MemberAddressRepository, memberPetRepository: MemberPetRepository, memberLastVisitRepository: MemberLastVisitRepository, memberMileageRepository: MemberMileageRepository);
    singUp(id: string): Promise<import("typeorm").UpdateResult | {
        result: boolean;
        name: string;
    }>;
    userCodeLogin(userCode: string): Promise<{
        result: boolean;
        id: any;
        name: any;
    }>;
    login(id: string): Promise<{
        result: boolean;
        name: any;
    }>;
}
