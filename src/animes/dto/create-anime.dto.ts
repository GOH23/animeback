import { IsEmpty, IsNotEmpty, IsOptional, IsString, Max } from "class-validator";

export class AnimeDto {
    @IsNotEmpty()
    Name: string;
    @IsNotEmpty()
    @IsString()
    @Max(1000)
    Description: string;
    @IsOptional()
    ImageAnime: string;
    @IsOptional()
    PreviewImages: string[];
}
