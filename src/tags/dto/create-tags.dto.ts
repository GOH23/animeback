import { IsNotEmpty } from "class-validator";

export class CreateTagsDto{
    @IsNotEmpty()
    NameTags: string[]
}