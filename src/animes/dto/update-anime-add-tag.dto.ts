import { IsNotEmpty, IsUUID } from "class-validator";

export class UpdateAnimesAddtTagDto{
    @IsNotEmpty()
    TagName: string
    @IsNotEmpty()
    @IsUUID()
    AnimeID: string
}
