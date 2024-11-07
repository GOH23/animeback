import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsUUID, Max, Min } from "class-validator";

export class CreateStarratingDto {
    @IsNotEmpty()
    @IsUUID()
    AnimeId: string;
    @IsInt()
    @Min(1)
    @Max(5)
    StarRate: number
}
