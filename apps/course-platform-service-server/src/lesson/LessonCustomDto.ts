import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("LessonCustomDtoObject")
class LessonCustomDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    customField1!: string;

    @Field(() => Date, {
        nullable: true
    })
    @Type(() => Date)
    customField2?: Date;
}

export { LessonCustomDto as LessonCustomDto };