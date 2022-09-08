import { MemberRepository } from 'src/repository/member/Member.repository';
export declare class MemberInfoService {
    private memberRepository;
    constructor(memberRepository: MemberRepository);
    getApiMemberInfo(memberId: string, memberCode: string): Promise<{
        data: {
            result: string;
            info: {
                userInfo: any;
            };
        };
    }>;
}
