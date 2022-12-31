import { IsNumber, IsString, IsDateString} from "class-validator";

export class CreatePlantDto {

    @IsString()
    uuid : string;

    @IsNumber()
    temperature : number;

    @IsNumber() 
    humidity : number;

    @IsDateString()
    startTime: Date;

    @IsDateString()
    finalTime: Date;

}
