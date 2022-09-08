import { Repository } from "typeorm";
import { MemberEntity } from "../entity/member.entity";
export declare class MemberRepository extends Repository<MemberEntity> {
    g_findByName(name: string): Promise<any>;
}
