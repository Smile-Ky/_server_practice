import { MemberEntity } from "../entity/member.entity";
import { MemberRepository } from "../respository/member.repository";
export declare class StartService {
    private memberRepository;
    constructor(memberRepository: MemberRepository);
    memberSave(): Promise<MemberEntity>;
    memberFind(name: string): Promise<any>;
}
