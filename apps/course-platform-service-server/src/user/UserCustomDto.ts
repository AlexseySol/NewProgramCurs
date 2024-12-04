import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ArgsType()
@ObjectType("UserCustomDtoObject")
class UserCustomDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    customField1!: string;

    @Field(() => GraphQLJSON, {
        nullable: true
    })
    customField2?: InputJsonValue;
}

export { UserCustomDto as UserCustomDto };