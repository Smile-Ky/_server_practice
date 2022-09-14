import { IsString } from 'class-validator';

export class updateFlightDto {

    @IsString()
    uuid : string;

    @IsString()
    departure : string;

    @IsString()
    destination : string;

    @IsString()
    departure_times : string;

    @IsString()
    arrival_times : string;
}