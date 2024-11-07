import { IsNotEmpty } from "class-validator";

export class CreateTagsDto{
    @IsNotEmpty()
    TagName: string[]
}
export class CreateOneTagDto{
    @IsNotEmpty()
    TagName: string
}