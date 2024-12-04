import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("PaymentCustomDtoObject")
class PaymentCustomDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    customField1!: string;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    customField2?: number;
}

export { PaymentCustomDto as PaymentCustomDto };