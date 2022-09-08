export declare class ReqUserFromDTO {
    name: string;
    password: string;
    group_id: string;
    birth: string;
    gender: string;
    phone: string;
    email: string;
    is_sms: boolean;
    is_information: boolean;
    profile_image_url: string;
    member_address: Array<{
        address_id: string;
        address_number: string;
        address: string;
        address_detail: string;
    }>;
    member_pet: {
        name: string;
        breed: string;
        gender: string;
        birth_date: string;
        is_neutralized: boolean;
        weight: string;
        character: string;
        image_url: string;
    };
}
