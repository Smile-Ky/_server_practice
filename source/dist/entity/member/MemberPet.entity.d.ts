import { BaseEntity } from "typeorm";
import { MemberEntity } from "./Member.entity";
export declare class MemberPetEntity extends BaseEntity {
    member_pet_id: string;
    member_id: MemberEntity;
    name: string;
    breed: string;
    gender: string;
    birth_date: string;
    is_neutralized: boolean;
    weight: string;
    pet_character: string;
    image_url: string;
    create_date: Date;
    update_date: Date;
}
