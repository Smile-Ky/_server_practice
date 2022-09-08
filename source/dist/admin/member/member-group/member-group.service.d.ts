import { MemberGroupRepository } from "../../../repository/member/MemberGroup.repository";
import { ReqGroupFromDTO } from "./DTO/ReqGroupFromDTO";
import { MemberGroupEntity } from "../../../entity/member/MemberGroup.entity";
export declare class MemberGroupService {
    private memberGroupRepository;
    constructor(memberGroupRepository: MemberGroupRepository);
    findAll(): Promise<any>;
    findSimple(): Promise<any>;
    findId(id: string): Promise<MemberGroupEntity>;
    save(data: ReqGroupFromDTO): Promise<MemberGroupEntity>;
    update(id: string, data: ReqGroupFromDTO): Promise<void>;
    delete(id: string): Promise<void>;
}
