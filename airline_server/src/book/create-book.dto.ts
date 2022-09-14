import { IsString } from 'class-validator';

export class createBookDto {

    @IsString()
    flight_uuid : string;

    @IsString()
    name : string;

    @IsString()
    phone : string;
}